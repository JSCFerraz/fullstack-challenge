import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa ter pelo menos 3 caracteres.")
    .max(200, "O nome pode ter no máximo 200 caracteres."),
  email: yup
    .string()
    .lowercase()
    .required("O email é obrigatório")
    .email("É necessário fornecer um email válido."),
  password: yup
    .string()
    .required("A senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  passwordConfirmation: yup
    .string()
    .required("A confirmação da senha obrigatória")
    .min(6, "Mínimo de 6 caracteres")
    .oneOf([yup.ref("password"), ""], "Senhas não coincidem"),
  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .min(8, "Telefone com 8 caracteres no mínimo ")
    .max(15, "Telefone com 15 caracteres no máximo "),
});
