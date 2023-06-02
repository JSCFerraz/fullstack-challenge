import { Modal, ModalBox, StyledContactTitle } from "./style";
import { Button } from "../components/Button";
import { StyledText } from "../styles/typography";
import { ContactForm } from "../components/Forms/ContactForm";
import { ContactContext } from "../contexts/ContactContext/ContactContext";
import { useContext } from "react";
import { ContactFormDetails } from "../components/Forms/ContactFormDetails";

interface iModalContactProps {
  contactAction: string;
}

export const ContactModal = () => {
  const { actionOverContact } = useContext(ContactContext);

  return actionOverContact === "create" ? (
    <Modal>
      <ModalBox>
        <Button type="closeModal" buttonStyle="icon">
          X
        </Button>
        <StyledContactTitle>
          <StyledText tag="h3" textStyle="title1-white">
            Cadastrar contato
          </StyledText>
        </StyledContactTitle>
        <ContactForm />
      </ModalBox>
    </Modal>
  ) : (
    <Modal>
      <ModalBox>
        <Button type="closeModal" buttonStyle="icon">
          X
        </Button>
        <StyledContactTitle>
          <StyledText tag="h3" textStyle="title1-white">
            Detalhes do contato
          </StyledText>
        </StyledContactTitle>
        <ContactFormDetails contactId={actionOverContact} />
      </ModalBox>
    </Modal>
  );
};
