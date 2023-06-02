import { useContext, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormDetailsSchema } from "./contactFormDetailsSchema.ts";
import { SingleInput } from "../../Input";
import { StyledText } from "../../../styles/typography";
import {
  HelperTextDiv,
  StyledDetailsButtons,
  StyledContactForm,
} from "./style";
import { Container } from "../../../styles/containers";
import { Button } from "../../Button";
import { ContactContext } from "../../../contexts/ContactContext/ContactContext";
import { iContactId } from "./types.ts";
import { UserContext } from "../../../contexts/UserContext/UserContext.tsx";
import { iContactInformation } from "../../../contexts/ContactContext/types.ts";
import { StyledForm } from "../RegisterForm/style.ts";

export const ContactFormDetails = ({ contactId }: iContactId) => {
  const { updateContact, removeContact } = useContext(ContactContext);
  const { contactLoading, deleteContactLoading, contacts } =
    useContext(ContactContext);
  // const { user } = useContext(UserContext);

  const userContacts = contacts.filter((item) => item.id === contactId);
  console.log("$$$$", userContacts);
  console.log("contactLoading", contactLoading);
  console.log("deleteContactLoading", deleteContactLoading);

  const {
    register,
    handleSubmit,
    // formState: { errors, isDirty, isValid },
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(contactFormDetailsSchema),
  });

  useEffect(() => {
    const resetData = () => {
      reset({
        name: userContacts[0].name,
        email: userContacts[0].email,
        phone: userContacts[0].phone,
      });
    };

    resetData();
  }, []);

  const submit: SubmitHandler<FieldValues> = async (formData) => {
    if (userContacts[0].email === formData.email) {
      formData.email = "";
    }
    const data: iContactInformation = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };
    updateContact(data, contactId);
  };

  return (
    <Container>
      <StyledContactForm>
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>
          <SingleInput
            label="Nome"
            id="registerName"
            type="text"
            placeholder="Digite o nome"
            register={register("name")}
            // error={errors.name}
            watch={watch("name")}
            disabled={false}
          />
          {/* <HelperTextDiv>
            {errors.name?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.name.message}
              </StyledText>
            )}
          </HelperTextDiv> */}

          <SingleInput
            label="Email"
            id="registerEmail"
            type="text"
            placeholder="Digite o email"
            register={register("email")}
            disabled={false}
            // error={errors.email}
            watch={watch("email")}
          />
          {/* <HelperTextDiv>
            {errors.email?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.email.message}
              </StyledText>
            )}
          </HelperTextDiv> */}

          <SingleInput
            label="Telefone"
            id="registerPhone"
            type="text"
            placeholder="Digite o telefone"
            register={register("phone")}
            disabled={false}
            // error={errors.phone}
            watch={watch("phone")}
          />
          {/* <HelperTextDiv>
            {errors.phone?.message && (
              <StyledText tag="span" textStyle="headline" textColor="primary">
                {errors.phone.message}
              </StyledText>
            )}
          </HelperTextDiv> */}

          <StyledText tag="span" textStyle="title3" textColor="grey">
            * Todos são campos obrigatórios
          </StyledText>
          <StyledDetailsButtons>
            <Button
              type="submit"
              buttonStyle="delete"
              disabled={false}
              // disabled={!isDirty || !isValid || !contactLoading}
            >
              {contactLoading ? "Salvando..." : "Salvar Alterações"}
            </Button>
            <Button
              type="delete"
              buttonStyle="delete"
              onclick={() => removeContact(contactId)}
            >
              {deleteContactLoading ? "Excluindo..." : "Excluir"}
            </Button>
          </StyledDetailsButtons>
        </StyledForm>
      </StyledContactForm>
    </Container>
  );
};
