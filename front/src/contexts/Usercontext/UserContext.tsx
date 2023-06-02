import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iChildren } from "../../interfaces/global";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import {
  iUserProviderProps,
  iUserInformation,
  iUserLoginInformation,
  iDefaultErrorResponse,
  iUserRegisterInformation,
} from "./types";
import jwtDecode from "jwt-decode";
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

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("@MyContacts:token");

    async function loadUser() {
      console.log(!token);
      if (!token) {
        console.log("Entrou aqui");
        setLoadingDashboard(false);
        return;
      } else {
        console.log("****************");
        try {
          console.log("TENTANDO...");
          const { data } = await api.get("/clients", {
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
  }, [location.pathname]);

  const fetchClientInformation = async (): Promise<void> => {
    try {
      const token: string | null = localStorage.getItem("@MyContacts:token");
      if (token) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const decoded: any = await jwtDecode(token);
        const { data } = await api.get("/clients", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(token, data);
        window.localStorage.setItem("@MyContacts:userid", data.id);
        setUser({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      }
    } catch (err) {
      console.log("222", err);
    }
  };

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
        fetchClientInformation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
