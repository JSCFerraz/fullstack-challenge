export interface iContactInformation {
  name: string;
  email: string;
  phone: string;
}

export interface iContactItem {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface iContactProviderValue {
  addContact: (formData: iContactInformation) => void;
  updateContact: (formData: iContactInformation) => void;
  removeContact: (formData: iContactInformation) => void;
  actionOverContact: string;
  setActionOverContact: React.Dispatch<React.SetStateAction<string>>;
  contactLoading: boolean;
  setContactLoading: React.Dispatch<React.SetStateAction<boolean>>;
  deleteContactLoading: boolean;
  setDeleteContactLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showSearchInput: boolean;
  setShowSearchInput: React.Dispatch<React.SetStateAction<boolean>>;
  filteredSearchedContacts: (data: string) => void;
}

export interface iDefaultContactErrorResponse {
  error: string;
}
