import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .required("O email é obrigatório")
    .email("É necessário fornecer um email válido."),
  password: yup.string().required("A senha obrigatória"),
});
