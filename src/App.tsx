import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { BaseInputStyle } from './pages/Authorization/Authorization';
import { getDataContacts, getDataUsers } from "./store/store";
import { useAppDispatch, useAppSelector } from './store/hooks';
import { Routes, Route } from 'react-router-dom';
import AuthorizationForm from './components/Forms/AuthorizationForm';
import RegistrationForm from './components/Forms/RegistrationForm';
import Contacts from './pages/Contacts/Contacts';

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

function App() {
  const nameUser = useAppSelector(state => state.root.name);
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
            <Route path="/contacts" element={<Contacts name={nameUser}/>} />
          </Routes>
      </AppStyle>
    </AppWrapper>
  );
}

export default App;