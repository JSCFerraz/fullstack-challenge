import { LoginForm } from "../../components/Forms/LoginForm";
import {
  StyledBoxIcon,
  StyledEllipsesGroupImg,
  StyledLoginDiv,
  StyledLoginFormDiv,
  StyledMessageDiv,
  StyledPageSideInfo,
} from "./style";
import contacts from "../../assets/img/imagemForms.png";
import { StyledText } from "../../styles/typography";

export const Login = () => {
  return (
    <main>
      <StyledLoginDiv>
        <StyledPageSideInfo>
          <StyledMessageDiv>
            <StyledText tag="h1">My Contacts</StyledText>
          </StyledMessageDiv>
          <StyledMessageDiv>
            <img src={contacts} alt="Imagem do logo" />
          </StyledMessageDiv>
        </StyledPageSideInfo>
        <StyledLoginFormDiv>
          <LoginForm />
        </StyledLoginFormDiv>
      </StyledLoginDiv>
    </main>
  );
};
