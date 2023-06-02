import { useContext } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { StyledText } from "../../styles/typography";

export const ProtectedRoutes = () => {
  const { user, loadingDashboard } = useContext(UserContext);
  const location = useLocation();

  if (loadingDashboard) {
    return (
      <StyledText tag="h2" textStyle="title1" textColor="primary">
        Carregando...
      </StyledText>
    );
  }

  return <Outlet />;
  // return user.id ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};
