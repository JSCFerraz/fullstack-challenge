import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SingleInput } from "../../Input";
import { HelperTextDiv, StyledForm } from "../RegisterForm/style";
import { Button } from "../../Button";
import { useContext } from "react";
import { UserContext } from "../../../contexts/Usercontext/UserContext";
import { loginFormSchema } from "./loginFormSchema";
import {
  StyledDivToRegister,
  StyledLoginForm,
  StyledLoginTitle,
  StyledMessage,
} from "./style";
import { StyledText } from "../../../styles/typography";
import { iLoginFormValues } from "./types";

export const LoginForm = () => {
  const { signInUserFunction, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    watch,
  } = useForm<iLoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const submit: SubmitHandler<iLoginFormValues> = (formData) => {
    console.log(formData);
    signInUserFunction(formData);
    console.log("PASSOU");
  };

  return (
    <>
      <StyledLoginForm>
        <StyledLoginTitle>
          <StyledText tag="h3" textStyle="title1">
            Login
          </StyledText>
        </StyledLoginTitle>
        <StyledForm onSubmit={handleSubmit(submit)} noValidate>
          <SingleInput
            label="E-mail"
            id="loginEmail"
            type="email"
            placeholder=""
            register={register("email")}
            error={errors.email}
            watch={watch("email")}
          />
          {/* <HelperTextDiv>
            {errors.email?.message && (
              <StyledText tag="span" textStyle="headline" textColor="error">
                {errors.email.message}
              </StyledText>
            )}
          </HelperTextDiv> */}

          <SingleInput
            label="Senha"
            id="registerPassword"
            type="password"
            placeholder=""
            register={register("password")}
            error={errors.password}
            watch={watch("password")}
          />
          {/* <HelperTextDiv>
            {errors.password?.message && (
              <StyledText tag="span" textStyle="headline" textColor="error">
                {errors.password.message}
              </StyledText>
            )}
          </HelperTextDiv> */}

          <Button
            type="submit"
            buttonStyle="submit"
            disabled={!isDirty || !isValid || loading}
          >
            {loading ? "Logando..." : "Logar"}
          </Button>
        </StyledForm>
        <StyledDivToRegister>
          <StyledMessage>
            <StyledText tag="span" textStyle="title2">
              Crie sua conta de cliente para cadastrar seus contatos
            </StyledText>
          </StyledMessage>
          <Button type="toRegister">Cadastrar</Button>
        </StyledDivToRegister>
      </StyledLoginForm>
    </>
  );
};
