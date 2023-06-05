import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SingleInput } from "../../Input";
import { StyledText } from "../../../styles/typography";
import { StyledProfileForm } from "./style";
import { Container } from "../../../styles/containers";
import { Button } from "../../Button";
import { StyledForm } from "../RegisterForm/style";
import { profileFormSchema } from "./ProfileFormSchema";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { iProfileFormValues } from "./types";

export const ProfileForm = () => {
  const { user, updateUserProfile, profileLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(profileFormSchema),
    defaultValues: { name: user.name, email: user.email, phone: user.phone },
  });

  const submit: SubmitHandler<iProfileFormValues> = (formData) => {
    const data: iProfileFormValues = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    updateUserProfile(data);
    reset();
  };

  return (
    <Container>
      <StyledProfileForm>
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
          <Button type="submit" buttonStyle="submit" disabled={profileLoading}>
            {profileLoading ? "Alterando profile..." : "Alterar profile"}
          </Button>
        </StyledForm>
      </StyledProfileForm>
    </Container>
  );
};
