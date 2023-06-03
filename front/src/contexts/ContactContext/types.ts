export interface iContactInformation {
  name: string;
  email?: string;
  phone: string;
}

export interface iContactItem {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface iContectCreateItem {
  name: string;
  email: string;
  phone: string;
}

export interface iContactProviderValue {
  contacts: iContactItem[];
  setContacts: React.Dispatch<React.SetStateAction<iContactItem[] | []>>;
  actionOverContact: string;
  setActionOverContact: React.Dispatch<React.SetStateAction<string>>;
  contactLoading: boolean;
  setContactLoading: React.Dispatch<React.SetStateAction<boolean>>;
  deleteContactLoading: boolean;
  setDeleteContactLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showSearchInput: boolean;
  setShowSearchInput: React.Dispatch<React.SetStateAction<boolean>>;
  filterSearchedContacts: (data: string) => void;
  filteredContacts: iContactItem[];
  setFilteredContacts: React.Dispatch<React.SetStateAction<iContactItem[]>>;
  addContact: (formData: iContectCreateItem) => void;
  updateContact: (data: iContactInformation, contactId: string) => void;
  removeContact: (contactId: string) => void;
  fetchClientContacts: () => void;
  reloadContact: () => void;
}

export interface iDefaultContactErrorResponse {
  message: string;
}
