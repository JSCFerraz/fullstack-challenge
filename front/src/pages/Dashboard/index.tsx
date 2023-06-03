import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { DashMain } from "../../components/DashMain";
import { ContactContext } from "../../contexts/ContactContext/ContactContext";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  // const { fetchClientContacts } = useContext(ContactContext);

  // useEffect(() => {
  //   console.log("%%%%%%%%%%%%%%%%%%%%%%%%");
  //   const callFunctions = async () => {
  //     fetchClientInformation();
  //     fetchClientContacts();
  //   };
  //   callFunctions();
  // }, []);

  // return (
  //   <>
  //     <Header />
  //     <DashMain />
  //   </>
  // );

  return user.id ? (
    <>
      <Header />
      <DashMain />
    </>
  ) : (
    <Navigate to="/" />
  );
};
