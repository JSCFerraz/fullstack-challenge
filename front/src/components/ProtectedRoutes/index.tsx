import { useContext } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { StyledText } from "../../styles/typography";

export const ProtectedRoutes = () => {
  const { user, loadingHomePage } = useContext(UserContext);
  const location = useLocation();
  const { id, name, email } = user;

  if (loadingHomePage) {
    return (
      <StyledText tag="h2" textStyle="title1" textColor="primary">
        Carregando...
      </StyledText>
    );
  }

  return id === 0 && name === "" && email === "" ? (
    <Navigate to="/" state={{ from: location }} />
  ) : (
    <Outlet />
  );
};
