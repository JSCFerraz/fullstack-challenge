import { useContext } from "react";
import { Container } from "../../styles/containers";
import { StyledText } from "../../styles/typography";
import { Button } from "../Button";
import { StyledUserDashMain, StyledTechHeader } from "./style";
import { ContactModal } from "../../ContactModal";
import { ContactList } from "../../ContactList";
import { FaPlus } from "react-icons/fa";

export const DashMain = () => {
  const page = "dashboard";

  // const { actionOverContact } = useContext(ContactContext);
  const actionOverContact = "";

  return (
    <Container page={page}>
      <StyledUserDashMain>
        <StyledTechHeader>
          <StyledText tag="h2" textStyle="title1-white">
            Contatos
          </StyledText>
          <Button type="addContactButton" buttonStyle="icon">
            <FaPlus />
          </Button>
        </StyledTechHeader>
        <ContactList />
        {actionOverContact !== "" ? <ContactModal /> : <></>}
      </StyledUserDashMain>
    </Container>
  );
};
