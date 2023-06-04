// interface iModalContactProps {
//   contactAction: string;
// }
import { useContext } from "react";
import { StyledText } from "../../styles/typography";
import { Button } from "../Button";
import { ProfileForm } from "../Forms/ProfileForm";
import { Modal, ModalBox, StyledProfileTitle } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { ContactContext } from "../../contexts/ContactContext/ContactContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const ProfileModal = () => {
  const { actionOverProfile } = useContext(UserContext);
  console.log("PROFILE MODAL", actionOverProfile);

  return (
    actionOverProfile && (
      <Modal>
        <ModalBox>
          <Button type="closeModal" buttonStyle="icon">
            <AiOutlineClose />
          </Button>
          <StyledProfileTitle>
            <StyledText tag="h3" textStyle="title1-white">
              Alterar Profile
            </StyledText>
          </StyledProfileTitle>
          <ProfileForm />
        </ModalBox>
      </Modal>
    )
  );
};