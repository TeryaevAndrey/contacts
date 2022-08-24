import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { InputStyle } from "../../pages/Authorization/Authorization";
import InputMask from "react-input-mask";
import { Button } from "../../pages/Authorization/Authorization";
import { appendErrors, SubmitHandler, useForm } from "react-hook-form";
import { DataUsers, IsRegFields } from "../../app.interface";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setDataUser } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { getAllByPlaceholderText } from "@testing-library/react";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 100%;
  padding: 30px 15px;
  min-height: 500px;
`;

export const Title = styled.h2`
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonRegistration = styled.a`
  display: inline-block;
  font-size: 13px;
  margin-top: 10px;
`;

const AuthorizationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
  } = useForm<IsRegFields>();
  const dataUsers = useAppSelector(state => state.root.dataUsers);

  const onSubmit: SubmitHandler<IsRegFields> = (data) => {
    let success: boolean = false;

    dataUsers.forEach((dataUser: DataUsers) => {
      if(data.tel === dataUser.tel && data.password === dataUser.password) {
        dispatch(setDataUser(dataUser.name));
        localStorage.setItem('nameUser', dataUser.name);
        navigate('/contacts');
        success = true; 
      }
    });

    if(success === false) {
      alert('Неверный номер или пароль')
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Авторизация</Title>
        <Inputs>
          <InputMask
            className="InputMask"
            {...register("tel")}
            type="tel"
            placeholder="Номер телефона"
            mask="+7 (999) 999-99-99"
          />
          <InputStyle type="password" placeholder="Пароль" {...register("password")} />
        </Inputs>
        <Button type="submit">Зайти</Button>
        <ButtonRegistration as={Link} to="/registration">
          Зарегистрироваться
        </ButtonRegistration>
      </Form>
    </FormWrapper>
  );
};

export default AuthorizationForm;
