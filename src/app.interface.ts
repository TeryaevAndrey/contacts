export interface IsRegFields {
  tel: string;
  name: string;
  password: string;
}

export interface InitialState {
  isReg: boolean;
  dataUsers: any;
  name: string;
  isOpenAdd: boolean;
  currentUser: string;
}

export interface DataUsers {
  id: string;
  name: string;
  tel: string;
  password: string;
  contacts: any;
};

export interface ContactInfo {
  name: string;
  tel: string;
};