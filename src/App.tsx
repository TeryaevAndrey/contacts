import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Authorization, { BaseInputStyle } from './pages/Authorization/Authorization';
import { getDataUsers } from "./store/store";
import { useAppDispatch } from './store/hooks';

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
  min-height: 100vh;
`;

const AppWrapper = styled.div`
  max-width: 390px;
  padding: 0 10px;
  margin: 0 auto;
`;

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getDataUsers());
  }, []);

  return (
    <AppWrapper>
      <GlobalStyle />
      <AppStyle>
        <Authorization />
      </AppStyle>
    </AppWrapper>
  );
}

export default App;