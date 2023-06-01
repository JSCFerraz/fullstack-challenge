import { useContext } from "react";
import { EmptyContactList, StyledContactList } from "./style";
import { ContactCard } from "../ContactCard";
import { UserContext } from "../contexts/UserContext/UserContext";
import { StyledText } from "../styles/typography";

export const ContactList = () => {
  const { user } = useContext(UserContext);
  // const isEmpty = user.techs.length;
  const isEmpty = false;

  return (
    <>
      {isEmpty ? (
        <>
          <StyledContactList>
            {/* {user.contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                id={contact.id}
                name={contact.title}
                status={contact.status}
              ></ContactCard>
            ))} */}
          </StyledContactList>
        </>
      ) : (
        <EmptyContactList>
          <StyledText tag="span" textStyle="title2-white">
            Não há tecnologias cadastradas. Clique no botão + para adicionar uma
            tecnologia.
          </StyledText>
        </EmptyContactList>
      )}
    </>
  );
};
