export interface IsRegFields {
  tel: string;
  name: string;
  password: string;
}

export interface InitialState {
  isReg: boolean;
  isAuth: boolean;
  dataUsers: any;
}

export interface DataUsers {
  id: string;
  name: string;
  tel: string;
  password: string;
};