import { useContext } from "react";
import { EmptyContactList, StyledContactList } from "./style";
import { ContactCard } from "../ContactCard";
import { StyledText } from "../styles/typography";
import { ContactContext } from "../contexts/ContactContext/ContactContext";

export const ContactList = () => {
  const { filteredContacts } = useContext(ContactContext);

  const isNotEmpty = filteredContacts.length;

  return (
    <>
      {isNotEmpty ? (
        <>
          <StyledContactList>
            {filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                id={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
              ></ContactCard>
            ))}
          </StyledContactList>
        </>
      ) : (
        <EmptyContactList>
          <StyledText tag="span" textStyle="title2-white">
            Não há contatos cadastradas. Clique no botão Adicionar Contato para
            adicionar um Contato.
          </StyledText>
        </EmptyContactList>
      )}
    </>
  );
};
