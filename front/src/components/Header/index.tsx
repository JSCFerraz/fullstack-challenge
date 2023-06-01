import logo from "./../../assets/img/logo.svg";
import {
  StyledHeader,
  StyledHeaderContents,
  StyledIconDiv,
  StyledRightColumn,
} from "./style";
import { InputSearch } from "../Forms/InputSearch";
import { Container } from "../../styles/containers";
import { Button } from "../Button";
import { FiLogOut } from "react-icons/fi";

export const Header = () => {
  return (
    <StyledHeader>
      <Container page="homepage">
        <StyledHeaderContents>
          <h2>MyContacts</h2>
          <StyledRightColumn>
            {window.screen.width > 500 ? <InputSearch /> : <></>}
            {/* <StyledIconDiv>
              <Button type="modal" buttonStyle="icon">
                <FaShoppingCart />
              </Button>
              <span>{totalQuantityCart}</span>
            </StyledIconDiv> */}
            <Button type="logout" buttonStyle="icon">
              <FiLogOut />
            </Button>
          </StyledRightColumn>
        </StyledHeaderContents>
      </Container>
    </StyledHeader>
  );
};
