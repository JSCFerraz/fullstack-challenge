import { UseFormRegisterReturn, FieldError } from "react-hook-form";

export interface iSingleInput {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  disabled?: boolean;
  error?: FieldError;
  watch?: string;
}

export interface iIsActive {
  isActive: boolean;
  error?: FieldError;
}
