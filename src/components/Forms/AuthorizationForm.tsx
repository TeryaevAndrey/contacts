import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { InputStyle } from "../../pages/Authorization/Authorization";
import InputMask from "react-input-mask";
import { Button } from "../../pages/Authorization/Authorization";
import { SubmitHandler, useForm } from "react-hook-form";
import { DataUsers, IsRegFields } from "../../app.interface";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { successAuthForm } from "../../store/store";

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
  const isAuth = useAppSelector(state => state.isAuthForm.isAuth);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
  } = useForm<IsRegFields>();

  const dataUsers = useAppSelector(state => state.dataUsers.dataUsers);

  const onSubmit: SubmitHandler<IsRegFields> = (data) => {
    dataUsers.forEach((element: any) => {
      if(data.tel === element.tel && data.password === element.password) {
        dispatch(successAuthForm());
        
      }
    })
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
