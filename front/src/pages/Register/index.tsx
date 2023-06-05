import {
  StyledLoginDiv,
  StyledLoginFormDiv,
  StyledMessageDiv,
  StyledPageSideInfo,
} from "./style";
import contacts from "./../../assets/img/imagemForms.png";
import { StyledText } from "../../styles/typography";
import { RegisterForm } from "../../components/Forms/RegisterForm";

export const Register = () => {
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
          <RegisterForm />
        </StyledLoginFormDiv>
      </StyledLoginDiv>
    </main>
  );
};
