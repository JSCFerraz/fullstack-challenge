import { StyledContactCard } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ContactContext } from "../contexts/ContactContext/ContactContext";
import { iContact } from "./types";
import { StyledText } from "../styles/typography";

export const ContactCard = ({ id, name, email, phone }: iContact) => {
  const { setActionOverContact } = useContext(ContactContext);
  console.log(`${id}`, typeof id);

  return (
    <StyledContactCard
      id={`${id}`}
      onClick={() => setActionOverContact(`${id}`)}
    >
      <StyledText tag="h3" textStyle="title2-white">
        {name}
      </StyledText>
      <StyledText tag="h3" textStyle="title2-white">
        {email}
      </StyledText>
      <StyledText tag="h3" textStyle="title2-white">
        {phone}
      </StyledText>
    </StyledContactCard>
  );
};
