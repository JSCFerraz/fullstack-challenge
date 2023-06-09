import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SingleInput } from "../../Input";
import { StyledText } from "../../../styles/typography";
import { StyledContactForm } from "./style";
import { Container } from "../../../styles/containers";
import { Button } from "../../Button";
import { ContactContext } from "../../../contexts/ContactContext/ContactContext";
import { StyledForm } from "../RegisterForm/style";
import { contactFormSchema } from "./contactFormSchema";
import { iContectCreateItem } from "../../../contexts/ContactContext/types";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  const { addContact, contactLoading } = useContext(ContactContext);

  const submit: SubmitHandler<iContectCreateItem> = (data) => {
    addContact(data);
    reset();
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
            * Campos obrigatórios
          </StyledText>
          <Button
            type="submit"
            buttonStyle="submit"
            disabled={!isDirty || !isValid || contactLoading}
          >
            {contactLoading ? "Cadastrando contato..." : "Cadastrar contato"}
          </Button>
        </StyledForm>
      </StyledContactForm>
    </Container>
  );
};
