export interface IsRegFields {
  tel: string;
  name: string;
  password: string;
}

export interface InitialState {
  isReg: boolean;
  dataUsers: [];
  dataContacts: [],
  name: string;
  isOpenAdd: boolean;
  currentUser: string;
  searchValue: string;
  isOpenEdit: {
    stateEdit: boolean,
    contactId: string,
    contactName: string,
    contactTel: string,
  },
}

export interface DataUsers {
  id: string;
  name: string;
  tel: string;
  password: string;
};

export interface ContactInfo {
  id: string;
  userId: string;
  name: string;
  tel: string;
};