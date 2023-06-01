import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./registerFormSchema";
import { SingleInput } from "../../Input";
import {
  StyledRegForm,
  HelperTextDiv,
  StyledRegisterTitle,
  StyledForm,
} from "./style";
import { Container } from "../../../styles/containers";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { UserContext } from "../../../contexts/Usercontext/UserContext";
import { StyledText } from "../../../styles/typography";
import { iRegisterFormValues } from "./types";

export const RegisterForm = () => {
  const { registerUser, loading, setLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    watch,
  } = useForm<iRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      phone: "",
    },
  });

  const submit: SubmitHandler<iRegisterFormValues> = (formData) => {
    const { name, email, password, phone } = formData;
    const data = { name, email, password, phone };
    setLoading(true);
    registerUser(data, reset);
  };

  return (
    <Container>
      <StyledRegForm>
        <StyledRegisterTitle>
          <StyledText tag="h3" textStyle="title1">
            Cadastro
          </StyledText>
          <Link to="/">
            <StyledText tag="span" textColor="grey" textStyle="headline">
              Retornar para o login
            </StyledText>
          </Link>
        </StyledRegisterTitle>
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
            label="Senha"
            id="registerPwd"
            type="password"
            placeholder=""
            register={register("password")}
            error={errors.password}
            watch={watch("password")}
          />

          <SingleInput
            label="Confirmar Senha "
            id="registerConfirmPwd"
            type="password"
            placeholder=""
            register={register("passwordConfirmation")}
            error={errors.passwordConfirmation}
            watch={watch("passwordConfirmation")}
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

          <Button
            type="submit"
            buttonStyle="submit"
            disabled={!isDirty || !isValid || loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </StyledForm>
      </StyledRegForm>
    </Container>
  );
};
