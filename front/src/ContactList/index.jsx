import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledText } from "../../styles/typography";
import { StyledTechList, EmptyTechList } from "./style";
import { TechCard } from "../ContactCard";

export const ContactList = () => {
  const { user } = useContext(UserContext);
  const isEmpty = user.techs.length;

  return (
    <>
      {isEmpty ? (
        <>
          <StyledTechList>
            {user.techs.map((tech) => (
              <TechCard
                key={tech.id}
                id={tech.id}
                name={tech.title}
                status={tech.status}
              ></TechCard>
            ))}
          </StyledTechList>
        </>
      ) : (
        <EmptyTechList>
          <StyledText tag="span" textStyle="title2">
            Não há tecnologias cadastradas. Clique no botão + para adicionar uma
            tecnologia.
          </StyledText>
        </EmptyTechList>
      )}
    </>
  );
};
