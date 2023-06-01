import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { iChildren } from "../../interfaces/global";
import {
  iContactInformation,
  iContactItem,
  iDefaultContactErrorResponse,
} from "./types";
import { AxiosError } from "axios";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }: iChildren) => {
  const [contacts, setContacts] = useState<[] | iContactItem[]>([]);
  const [actionOverContact, setActionOverContact] = useState<string>("");
  const [contactLoading, setContactLoading] = useState<boolean>(false);
  const [deleteContactLoading, setDeleteContactLoading] =
    useState<boolean>(false);
  const { setUser } = useContext(UserContext);
  const [filteredContacts, setFilteredContacts] = useState(
    [] as iContactItem[]
  );

  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@Kenziehub:token");
    const getContacts = async () => {
      try {
        setContactLoading(true);
        const response = await api.get(`/contacts`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
        setFilteredContacts(response.data);
      } catch (error) {
        console.error(error);
        const currentError = error as AxiosError<iDefaultContactErrorResponse>;
        toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
      } finally {
        setContactLoading(false);
      }
    };
    getContacts();
  }, []);

  const filterSearchedContacts = (data: string) => {
    const searchedContacts: iContactItem[] = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(data.toLowerCase())
    );
    setFilteredContacts(searchedContacts);
  };

  const reloadUser = async () => {
    const token = localStorage.getItem("@MyContacts:token");
    const userId = localStorage.getItem("@MyContacts:userid");
    try {
      const { data } = await api.get(`/clients/${userId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
    } catch (error) {
      console.error(error);
      toast.error(`Ops! Algo deu errado: falha na comunicação!`);
    }
  };

  const addContact = async (formData: iContactInformation) => {
    try {
      setContactLoading(true);
      const token = localStorage.getItem("@MyContacts:token");
      await api.post("/contacts", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato cadastrado com sucesso!");
      setActionOverContact("");
      await reloadUser();
    } catch (error) {
      const currentError = error as AxiosError<iDefaultContactErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
    } finally {
      setContactLoading(false);
    }
  };

  const updateContact = async (
    data: iContactInformation,
    contactId: string
  ) => {
    try {
      setContactLoading(true);
      const token = localStorage.getItem("@Kenziehub:token");
      await api.patch(`/contacts/${contactId}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato atualizado com sucesso!");
      setActionOverContact("");
      await reloadUser();
    } catch (error) {
      const currentError = error as AxiosError<iDefaultContactErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
    } finally {
      setContactLoading(false);
    }
  };

  const removeContact = async (contactId: string) => {
    try {
      setDeleteContactLoading(true);
      const token = localStorage.getItem("@Kenziehub:token");
      await api.delete(`/contacts/${contactId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato excluido com sucesso!");
      setActionOverContact("");
      await reloadUser();
    } catch (error) {
      const currentError = error as AxiosError<iDefaultContactErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
    } finally {
      setDeleteContactLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        addContact,
        updateContact,
        removeContact,
        actionOverContact,
        setActionOverContact,
        contactLoading,
        deleteContactLoading,
        showSearchInput,
        setShowSearchInput,
        filterSearchedContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
