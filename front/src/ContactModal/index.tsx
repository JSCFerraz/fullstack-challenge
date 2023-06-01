import { Modal, ModalBox, StyledTechTitle } from "./style";

import { Button } from "../components/Button";
import { StyledText } from "../styles/typography";
import { ContactForm } from "../components/Forms/ContactForm";

interface iModalContactProps {
  contactAction: string;
}

export const ContactModal = () => {
  // const { actionOverContact } = useContext(ContactContext);
  const actionOverContact = "create";

  return actionOverContact === "create" ? (
    <Modal>
      <ModalBox>
        <Button type="closeModal" buttonStyle="icon">
          X
        </Button>
        <StyledTechTitle>
          <StyledText tag="h3" textStyle="title2">
            Cadastrar contato
          </StyledText>
        </StyledTechTitle>
        <ContactForm />
      </ModalBox>
    </Modal>
  ) : (
    <Modal>
      <ModalBox>
        <Button type="closeModal" buttonStyle="icon">
          X
        </Button>
        <StyledTechTitle>
          <StyledText tag="h3" textStyle="title2">
            Detalhes do contato
          </StyledText>
        </StyledTechTitle>
        {/* <ContactFormDetails contactId={actionOverContact} /> */}
      </ModalBox>
    </Modal>
  );
};
