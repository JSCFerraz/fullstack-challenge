import { StyledTechCard } from "./style";
import { StyledText } from "../../styles/typography";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export const ContactCard = ({ id, name, status }) => {
  const { setActionOverTech } = useContext(TechContext);

  return (
    <StyledTechCard id={id} onClick={() => setActionOverTech(id)}>
      <StyledText tag="h3" textStyle="title2">
        {name}
      </StyledText>
      <StyledText tag="p" textStyle="categoryCart">
        {status}
      </StyledText>
    </StyledTechCard>
  );
};
