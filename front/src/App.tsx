import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { UserProvider } from "./contexts/UserContext/UserContext";
import { ContactProvider } from "./contexts/ContactContext/ContactContext";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
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
