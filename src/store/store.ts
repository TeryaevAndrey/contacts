
import React from 'react';
import { InitialState } from "./../app.interface";
import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState: InitialState = {
  isReg: false,
  isAuth: false,
  dataUsers: [],
};

const isRegSlice = createSlice({
  name: "isReg",
  initialState,
  reducers: {
    successRegForm(state) {
      state.isReg = true;
    },
  },
});

const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    successAuthForm(state) {
      state.isAuth = true;
    },
  },
});

export const getDataUsers = createAsyncThunk(
  'dataUsers/getDataUsers',
  async (_, {dispatch}) => { 
    const res = await axios.get('http://localhost:3001/users');
    dispatch(setDataUsers(res.data));
  }
)

const dataUsersSlice = createSlice({
  name: 'dataUsers',
  initialState,
  reducers: {
    setDataUsers: (state, action) => {
      state.dataUsers = action.payload
    }
  },
});

export const store = configureStore({
  reducer: {
    isRegForm: isRegSlice.reducer,
    isAuthForm: isAuthSlice.reducer,
    dataUsers: dataUsersSlice.reducer,
  },
});

export const { successRegForm } = isRegSlice.actions;
export const {successAuthForm} = isAuthSlice.actions;
export const {setDataUsers} = dataUsersSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;