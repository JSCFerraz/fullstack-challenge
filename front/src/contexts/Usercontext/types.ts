export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserLoginInformation {
  email: string;
  password: string;
}

export interface iUserInformation {
  name: string;
  email: string;
  phone: string;
  id: number;
}

export interface iUserRegisterInformation extends iUserLoginInformation {
  password: string;
  phone: string;
}

export interface iUserProviderProps {
  user: iUserInformation;
  setUser: React.Dispatch<React.SetStateAction<iUserInformation>>;
  signInUserFunction: (formData: iUserLoginInformation) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingDashboard: boolean;
  registerUser: (formData: iUserRegisterInformation, reset: () => void) => void;
  logoutUser: () => void;
  fetchClientInformation: () => void;
}

export interface iDefaultErrorResponse {
  message: string;
}
