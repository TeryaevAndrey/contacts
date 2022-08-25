import { InitialState } from "./../app.interface";
import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState: InitialState = {
  isReg: false,
  dataUsers: [],
  dataContacts: [],
  name: localStorage.getItem("nameUser") || "",
  isOpenAdd: false,
  currentUser: localStorage.getItem("currentId") || "",
  searchValue: "",
  isOpenEdit: {
    stateEdit: false,
    contactId: "",
    contactName: "",
    contactTel: "",
  },
};

export const getDataUsers = createAsyncThunk(
  "dataUsers/getDataUsers",
  async (_, { dispatch }) => {
    const res = await axios.get("http://localhost:3001/users");
    dispatch(setDataUsers(res.data));
  }
);

export const getDataContacts = createAsyncThunk(
  "dataContacts/getDataContacts",
  async (_, { dispatch }) => {
    const res = await axios.get("http://localhost:3001/contacts");
    dispatch(setDataContacts(res.data));
  }
);

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    successRegForm(state) {
      state.isReg = true;
    },
    setDataUser: (state, action) => {
      state.name = action.payload;
    },
    setDataUsers: (state, action) => {
      state.dataUsers = action.payload;
    },
    setCurrentId: (state, action) => {
      state.currentUser = action.payload;
    },
    openAdd: (state, action) => {
      state.isOpenAdd = action.payload;
    },
    setDataContacts: (state, action) => {
      state.dataContacts = action.payload;
    },
    onChangeSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    openEdit: (state, action) => {
      state.isOpenEdit = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    root: rootSlice.reducer,
  },
});

export const {
  successRegForm,
  setDataUsers,
  setDataUser,
  setCurrentId,
  openAdd,
  setDataContacts,
  onChangeSearch,
  openEdit,
} = rootSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
