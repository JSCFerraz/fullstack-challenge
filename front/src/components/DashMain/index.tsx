import { useContext } from "react";
import { Container } from "../../styles/containers";
import { StyledText } from "../../styles/typography";
import { Button } from "../Button";
import {
  StyledUserDashMain,
  StyledContactHeader,
  StyledProfile,
} from "./style";
import { ContactModal } from "../../ContactModal";
import { ContactList } from "../../ContactList";
import { ContactContext } from "../../contexts/ContactContext/ContactContext";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ProfileModal } from "../ProfileModal";

export const DashMain = () => {
  const page = "dashboard";
  const { actionOverContact } = useContext(ContactContext);
  const { user, actionOverProfile } = useContext(UserContext);

  // useEffect(() => {
  //   const callFunctions = async () => {
  //     fetchClientContacts();
  //   };
  //   callFunctions();
  // }, [filteredContacts]);

  return (
    <Container page={page}>
      <StyledUserDashMain>
        <StyledContactHeader>
          <StyledProfile>
            <StyledText tag="h2" textStyle="title1-white">
              {`Contatos de ${user.name}`}
            </StyledText>
            <Button type="modify" buttonStyle="icon">
              Alterar Profile
            </Button>
          </StyledProfile>
          <Button type="addContactButton" buttonStyle="icon">
            Adicionar Contato
          </Button>
        </StyledContactHeader>
        <ContactList />

        {actionOverContact !== "" && actionOverContact !== "change profile" && (
          <ContactModal />
        )}

        {actionOverProfile === true && <ProfileModal />}
      </StyledUserDashMain>
    </Container>
  );
};
