import logo from "./../../assets/img/LogoContacts.png";
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
      <Container page="dashboard">
        <StyledHeaderContents>
          <img src={logo} alt="Imagem do logo" />
          <StyledRightColumn>
            {window.screen.width > 500 ? <InputSearch /> : <></>}
            <Button type="logout" buttonStyle="icon">
              <FiLogOut />
            </Button>
          </StyledRightColumn>
        </StyledHeaderContents>
      </Container>
    </StyledHeader>
  );
};
