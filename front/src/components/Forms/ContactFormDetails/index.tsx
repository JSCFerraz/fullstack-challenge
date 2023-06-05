import { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormDetailsSchema } from "./contactFormDetailsSchema.ts";
import { SingleInput } from "../../Input";
import { StyledText } from "../../../styles/typography";
import { StyledDetailsButtons, StyledContactForm } from "./style";
import { Container } from "../../../styles/containers";
import { Button } from "../../Button";
import { ContactContext } from "../../../contexts/ContactContext/ContactContext";
import { iContactId } from "./types.ts";
import { iContactInformation } from "../../../contexts/ContactContext/types.ts";
import { StyledForm } from "../RegisterForm/style.ts";

export const ContactFormDetails = ({ contactId }: iContactId) => {
  const { updateContact, removeContact } = useContext(ContactContext);
  const { contactLoading, deleteContactLoading, filteredContacts } =
    useContext(ContactContext);

  const userContacts = filteredContacts.filter((item) => item.id === contactId);

  const {
    register,
    handleSubmit,
    formState: { errors },

    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(contactFormDetailsSchema),
    defaultValues: {
      name: userContacts[0].name,
      email: userContacts[0].email,
      phone: userContacts[0].phone,
    },
  });

  const submit: SubmitHandler<FieldValues> = async (formData) => {
    const data: iContactInformation = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    if (userContacts[0].email === formData.email) {
      data.email = "";
    }

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
            placeholder=""
            register={register("name")}
            error={errors.name}
            watch={watch("name")}
          />

          <SingleInput
            label="E-mail"
            id="registerEmail"
            type="email"
            placeholder=""
            register={register("email")}
            error={errors.email}
            watch={watch("email")}
          />

          <SingleInput
            label="Telefone"
            id="registerPhone"
            type="text"
            placeholder=""
            register={register("phone")}
            error={errors.phone}
            watch={watch("phone")}
          />

          <StyledText tag="span" textStyle="title3" textColor="grey">
            * Todos são campos obrigatórios
          </StyledText>
          <StyledDetailsButtons>
            <Button type="submit" buttonStyle="delete" disabled={false}>
              {contactLoading ? "Salvando..." : "Salvar Alterações"}
            </Button>
            <Button
              type="delete"
              buttonStyle="delete"
              onclick={() => removeContact(contactId)}
            >
              {deleteContactLoading ? "Excluindo..." : "Excluir Contato"}
            </Button>
          </StyledDetailsButtons>
        </StyledForm>
      </StyledContactForm>
    </Container>
  );
};
