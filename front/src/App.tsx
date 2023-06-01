import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { UserProvider } from "./contexts/UserContext/UserContext";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
