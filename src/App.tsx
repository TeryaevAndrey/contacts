import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { getDataContacts, getDataUsers } from "./store/store";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { Routes, Route } from "react-router-dom";
import AuthorizationForm from "./components/Forms/AuthorizationForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import Contacts from "./pages/Contacts/Contacts";

export const BaseInputStyle = css`
  width: 100%;
  min-height: 30px;
  padding: 10px 20px;
  background-color: transparent;
  border-bottom: 2px solid #fff;
  font-size: 20px;
  color: #fff;
`;

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  width: 100%;
  min-height: 30px;
  padding: 10px 20px;
  border: 2px solid #fff;
  margin-top: 30px;
  text-transform: uppercase;
  background-color: transparent;
  padding: 15px 30px;
  transition: all 0.2s ease;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #fff;
  }

  body {
    font-family: OpenSans, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    background-color: #19161F;
  }

  input,
  button {
    outline: none;
    border: none;
  }

  .InputMask {
    ${BaseInputStyle}
  }
`;

const AppStyle = styled.div`
  position: relative;
  min-height: 100vh;
`;

const AppWrapper = styled.div`
  max-width: 390px;
  padding: 0 10px;
  margin: 0 auto;
`;

export const InputStyle = styled.input`
  ${BaseInputStyle}
`;

function App() {
  const nameUser = useAppSelector((state) => state.root.name);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getDataUsers());
    dispatch(getDataContacts());
  }, []);

  return (
    <AppWrapper>
      <GlobalStyle />
      <AppStyle>
        <Routes>
          <Route path="/" element={<AuthorizationForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/contacts" element={<Contacts name={nameUser} />} />
        </Routes>
      </AppStyle>
    </AppWrapper>
  );
}

export default App;
