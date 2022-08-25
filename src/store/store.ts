
import React from 'react';
import { InitialState } from "./../app.interface";
import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { DataUsers, ContactInfo } from './../app.interface';
import Contact from '../pages/Contacts/Contact/Contact';


const initialState: InitialState = {
  isReg: false,
  dataUsers: [],
  name: localStorage.getItem('nameUser') || '',
  isOpenAdd: false,
  currentUser: '',
};

export const getDataUsers = createAsyncThunk(
  'dataUsers/getDataUsers',
  async (_, {dispatch}) => { 
    const res = await axios.get('http://localhost:3001/users');
    dispatch(setDataUsers(res.data));
  }
)

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
  },
});

export const store = configureStore({
  reducer: {
    root: rootSlice.reducer
  },
});

export const { successRegForm, setDataUsers, setDataUser, setCurrentId, openAdd } = rootSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;