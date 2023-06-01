import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { DashMain } from "./../../components/DashMain";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { ContactProvider } from "../../contexts/ContactContext/ContactContext";

export const UserDash = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <>
      <NavBar page="dashboard" />
      <Header page="dashboard" />
      <ContactProvider>
        <DashMain page="dashboard" />
      </ContactProvider>
    </>
  ) : (
    <Navigate to="/" />
  );
};
