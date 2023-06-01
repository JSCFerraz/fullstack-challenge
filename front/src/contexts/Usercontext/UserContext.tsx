import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iUserProviderProps,
  iUserInformation,
  iUserLoginInformation,
  iUserRegisterInformation,
  iDefaultErrorResponse,
} from "./types";
import { iChildren } from "../../interfaces/global";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const UserContext = createContext({} as iUserProviderProps);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
  } as iUserInformation);
  const [loading, setLoading] = useState(false);
  const [loadingDashboard, setLoadingDashboard] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@MyContacts:token");
    const userId = localStorage.getItem("@MyContacts:userid");
    async function loadUser() {
      if (!token) {
        console.log("Entrou aqui");
        setLoadingDashboard(false);
        return;
      } else {
        try {
          setLoadingDashboard(true);
          const { data } = await api.get(`/clients/${userId}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log("DATA", data);
          setUser(data);
          navigate("/dashboard");
        } catch (error) {
          localStorage.clear();
          navigate("/");
          console.error(error);
        } finally {
          setLoadingDashboard(false);
        }
      }
    }

    loadUser();
  }, []);

  const signInUserFunction = async (formData: iUserLoginInformation) => {
    try {
      setLoading(true);
      console.log("SIGNINUSER");
      const response = await api.post("/login", formData);
      toast.success("Usuário logado com sucesso");
      const { accessToken, user: userResponse } = response.data;
      window.localStorage.clear();
      window.localStorage.setItem("@MyContacts:token", accessToken);
      window.localStorage.setItem("@MyContacts:userid", userResponse.id);
      setUser(userResponse);
      navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
