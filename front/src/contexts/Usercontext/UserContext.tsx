import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iChildren } from "../../interfaces/global";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { iDefaultContactErrorResponse } from "../ContactContext/types";
import {
  iUserProviderProps,
  iUserInformation,
  iUserLoginInformation,
  iDefaultErrorResponse,
  iUserRegisterInformation,
  iUserItem,
  iUserUpdate,
} from "./types";
import { iDefaultContactErrorResponse } from "../ContactContext/types";


export const UserContext = createContext({} as iUserProviderProps);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
  } as iUserInformation);
  const [loading, setLoading] = useState(false);
  const [loadingDashboard, setLoadingDashboard] = useState(true);
  const [profileLoading, setProfileLoading] = useState<boolean>(false);
  const [actionOverProfile, setActionOverProfile] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("@MyContacts:token");

    async function loadUser() {
      console.log(!token);
      if (!token) {
        setLoadingDashboard(false);
        return;
      } else {
        try {
          const { data } = await api.get("/clients", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          setUser(data);

          navigate("/dashboard");
        } catch (error) {
          localStorage.clear();
          navigate("/");
          console.error(error);
          const currentError =
            error as AxiosError<iDefaultContactErrorResponse>;
          toast.error(
            `Ops! Algo deu errado: ${currentError.response?.data.message}`
          );
        } finally {
          setLoadingDashboard(false);
        }
      }
    }

    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const signInUserFunction = async (formData: iUserLoginInformation) => {
    try {
      console.log(formData);
      setLoading(true);
      console.log("SIGNINUSER");
      const response = await api.post("/login", formData);
      console.log(response.data, response.data);
      toast.success("Usuário logado com sucesso");
      const { token } = response.data;
      console.log("TOKEN", token);
      window.localStorage.setItem("@MyContacts:token", token);
      navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      toast.error(
        `Ops! Algo deu errado: ${currentError.response?.data.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  async function registerUser(
    formData: iUserRegisterInformation,
    reset: () => void
  ) {
    try {
      const response = await api.post("/clients", formData);
      response.statusText === "Created" &&
        toast.success("Conta criada com sucesso");
      navigate("/");
      setLoading(false);
      reset();
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
    } finally {
      setLoading(false);
      reset();
    }
  }
  const logoutUser = () => {
    window.localStorage.clear();
    setUser({
      id: 0,
      name: "",
      email: "",
      phone: "",
    });
    navigate("/");
  };

  const reloadUser = async () => {
    try {
      const token = localStorage.getItem("@MyContacts:token");
      const { data } = await api.get(`/clients`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
      console.log("BBBBB", user);
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado: falha na comunicação!`);
    }
  };

  const updateUserProfile = async (data: iUserItem) => {
    try {
      setProfileLoading(true);
      console.log("*******", data);
      const updateData: iUserUpdate = data;
      if (data.email === user.email) {
        delete updateData.email;
      }
      const userId = user.id;
      const token = localStorage.getItem("@MyContacts:token");
      await api.patch(`/clients/${userId}`, updateData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Profile atualizado com sucesso!");
      await reloadUser();
      setActionOverProfile(false);
    } catch (error) {
      const currentError = error as AxiosError<iDefaultContactErrorResponse>;
      console.error(error);
      toast.error(
        `Ops! Algo deu errado$$$: ${currentError.response?.data.message}`
      );
    } finally {
      setProfileLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signInUserFunction,
        loading,
        setLoading,
        loadingDashboard,
        registerUser,
        logoutUser,
        updateUserProfile,
        profileLoading,
        actionOverProfile,
        setActionOverProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
