export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserLoginInformation {
  email: string;
  password: string;
}

export interface iUserItem {
  name: string;
  email: string;
  phone: string;
}

export interface iUserInformation {
  name: string;
  email: string;
  phone: string;
  id: number;
}

export interface iUserUpdate {
  name: string;
  email?: string;
  phone: string;
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
  // fetchClientInformation: () => void;
  updateUserProfile: (data: iUserItem) => void;
  profileLoading: boolean;
  actionOverProfile: boolean;
  setActionOverProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iDefaultErrorResponse {
  message: string;
}
