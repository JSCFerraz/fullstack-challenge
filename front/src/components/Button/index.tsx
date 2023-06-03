import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { iButton } from "./types";
import { ContactContext } from "../../contexts/ContactContext/ContactContext";
import { StyledButton } from "../../styles/buttons";
import { StyledLink } from "./style";

export const Button = ({
  children,
  type,
  buttonStyle,
  disabled,
  btnPosition,
  onclick,
}: iButton) => {
  const { logoutUser, setActionOverProfile } = useContext(UserContext);
  const { setActionOverContact, showSearchInput, setShowSearchInput } =
    useContext(ContactContext);

  const handleSearchBar = () => {
    showSearchInput ? setShowSearchInput(false) : setShowSearchInput(true);
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
          onClick={() => setActionOverContact("create")}
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

      {type === "delete" && (
        <StyledButton
          type="button"
          buttonSize={buttonStyle}
          disabled={disabled}
          btnPosition={btnPosition}
          onClick={onclick}
        >
          {children}
        </StyledButton>
      )}

      {type === "modify" && (
        <StyledButton
          type="button"
          buttonSize={buttonStyle}
          disabled={disabled}
          btnPosition={btnPosition}
          onClick={() => setActionOverProfile(true)}
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
          onClick={() => setActionOverContact("")}
          btnPosition="modal"
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};
