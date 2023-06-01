import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa ter pelo menos 3 caracteres.")
    .max(50, "O nome pode ter no máximo 50 caracteres."),
  email: yup
    .string()
    .lowercase()
    .required("O email é obrigatório")
    .email("É necessário fornecer um email válido."),
  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .min(10, "Telefone precisa ter mais de 10 caracteres ")
    .max(11, "Telefone precisa ter menos de 12 caracteres "),
});
