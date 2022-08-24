import AuthorizationForm from "../../components/Forms/AuthorizationForm";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import {Routes, Route} from "react-router-dom"
import styled, {css} from 'styled-components';
import Contacts from "../Contacts/Contacts";

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

export const InputStyle = styled.input`
  ${BaseInputStyle}
`;

export interface RegFormData {
    email: string;
    password: string;
    passwordRepeat: string;
};

const Authorization = () => {
    return(
        <></>
    );
};

export default Authorization;