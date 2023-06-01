import { iChildren } from "../../interfaces/global";

export interface iButton extends iChildren {
  type?: string;
  buttonStyle?: string;
  page?: string;
  disabled?: boolean;
  btnPosition?: string;
  onclick?: () => void;
}
