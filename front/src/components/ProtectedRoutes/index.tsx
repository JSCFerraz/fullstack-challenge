import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { StyledText } from "../../styles/typography";

export const ProtectedRoutes = () => {
  const { loadingDashboard } = useContext(UserContext);

  if (loadingDashboard) {
    return (
      <StyledText tag="h2" textStyle="title1" textColor="primary">
        Carregando...
      </StyledText>
    );
  }

  return <Outlet />;
};
