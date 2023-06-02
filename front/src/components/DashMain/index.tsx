import { useContext, useEffect } from "react";
import { Container } from "../../styles/containers";
import { StyledText } from "../../styles/typography";
import { Button } from "../Button";
import { StyledUserDashMain, StyledTechHeader } from "./style";
import { ContactModal } from "../../ContactModal";
import { ContactList } from "../../ContactList";
import { FaPlus } from "react-icons/fa";
import { ContactContext } from "../../contexts/ContactContext/ContactContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const DashMain = () => {
  const page = "dashboard";
  const { actionOverContact, fetchClientContacts, filteredContacts } =
    useContext(ContactContext);
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //   const callFunctions = async () => {
  //     fetchClientContacts();
  //   };
  //   callFunctions();
  // }, [filteredContacts]);

  return (
    <Container page={page}>
      <StyledUserDashMain>
        <StyledTechHeader>
          <StyledText tag="h2" textStyle="title1-white">
            {`Contatos de ${user.name}`}
          </StyledText>
          <Button type="addContactButton" buttonStyle="icon">
            <FaPlus />
          </Button>
        </StyledTechHeader>
        <ContactList />
        {actionOverContact !== "" && <ContactModal />}
      </StyledUserDashMain>
    </Container>
  );
};
