import { StyledLink } from "./style";
import { StyledButton } from "../../styles/buttons";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { iButton } from "./types";
import { ContactContext } from "../../contexts/ContactContext/ContactContext";

export const Button = ({
  children,
  type,
  buttonStyle,
  disabled,
  btnPosition,
}: iButton) => {
  const { logoutUser } = useContext(UserContext);
  // const { setOpenCartModal } = useContext(CartContext);
  // const { showSearchInput, setShowSearchInput } = useContext(ProductContext);

  const handleSearchBar = () => {
    // showSearchInput ? setShowSearchInput(false) : setShowSearchInput(true);
  };

  return (
    <>
      {type === "submit" && (
        <StyledButton
          type="submit"
          buttonSize={buttonStyle}
          disabled={disabled}
          btnPosition={btnPosition}
        >
          {children}
        </StyledButton>
      )}

      {type === "toRegister" && (
        <StyledLink to="/register">{children}</StyledLink>
      )}

      {type === "search" && (
        <StyledButton
          type="button"
          buttonSize={buttonStyle}
          btnPosition={btnPosition}
        >
          {children}
        </StyledButton>
      )}

      {type === "addContactButton" && (
        <StyledButton
          type="button"
          buttonSize={buttonStyle}
          // onClick={() => setActionOverContact("create")}
          disabled={false}
        >
          {children}
        </StyledButton>
      )}

      {type === "logout" && (
        <StyledButton
          type="button"
          buttonSize={buttonStyle}
          onClick={() => logoutUser()}
        >
          {children}
        </StyledButton>
      )}

      {type === "modal" && (
        <StyledButton
          type="button"
          buttonSize={buttonStyle}
          // onClick={() => setOpenCartModal(true)}
        >
          {children}
        </StyledButton>
      )}

      {type === "searchIcon" && (
        <StyledButton
          type="button"
          buttonSize={buttonStyle}
          onClick={() => handleSearchBar()}
        >
          {children}
        </StyledButton>
      )}

      {type === "closeModal" && (
        <StyledButton
          type="button"
          buttonSize={buttonStyle}
          // onClick={() => setOpenCartModal(false)}
          btnPosition="modal"
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};
