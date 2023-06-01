export interface iRegisterValues {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface iRegisterFormValues extends iRegisterValues {
  passwordConfirmation: string;
}
