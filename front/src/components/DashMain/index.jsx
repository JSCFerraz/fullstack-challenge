import { useContext } from "react";
import { Container } from "../../styles/containers";
import { StyledText } from "../../styles/typography";
import { Button } from "../Button";
import { TechModal } from "../TechModal";
import { StyledUserDashMain, StyledTechHeader } from "./style";
import { TechList } from "../TechList";
import { ContactContext } from "../../contexts/ContactContext/ContactContext";

export const DashMain = ({ page }) => {
  const { actionOverContact } = useContext(ContactContext);
  return (
    <Container page={page}>
      <StyledUserDashMain>
        <StyledTechHeader>
          <StyledText tag="h2" textStyle="title1">
            Contatos
          </StyledText>
          <Button type="addContactButton" buttonStyle="icon">
            +
          </Button>
        </StyledTechHeader>
        <TechList />
        {actionOverContact !== "" ? (
          <TechModal contactAction={actionOverContact} />
        ) : (
          <></>
        )}
      </StyledUserDashMain>
    </Container>
  );
};
