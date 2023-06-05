import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { DashMain } from "../../components/DashMain";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return user.id ? (
    <>
      <Header />
      <DashMain />
    </>
  ) : (
    <Navigate to="/" />
  );
};
