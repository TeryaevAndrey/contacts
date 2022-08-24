import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { v1 as uuid } from "uuid";
import {
  FormWrapper,
  Form,
  Title,
  Inputs,
  ButtonRegistration,
} from "./AuthorizationForm";
import { IsRegFields } from "../../app.interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { successRegForm } from "../../store/store";
import { InputStyle } from "../../pages/Authorization/Authorization";
import InputMask from 'react-input-mask';
import { Button } from "../../pages/Authorization/Authorization";
import { DataUsers } from "../../app.interface";

const RegistrationForm = () => {
  const stateRegForm = useAppSelector(state => state.isRegForm.isReg);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IsRegFields>();

  const onSubmit: SubmitHandler<IsRegFields> = (data) => {
    let dataUsers: DataUsers = {
      id: uuid(),
      name: data.name,
      tel: data.tel,
      password: data.password,
    }

    axios.post("http://localhost:3001/users", dataUsers);
    dispatch(successRegForm());
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Регистрация</Title>
        <Inputs>
          {errors?.tel && <div style={{ color: "red" }}>Введите телефон</div>}
          <InputMask
            className="InputMask"
            {...register("tel", {required: true})}
            type="tel"
            placeholder="Номер телефона"
            autoComplete="off"
            mask="+7 (999) 999-99-99"
          />
          {errors?.name && <div style={{ color: "red" }}>Введите имя!</div>}
          <InputStyle
            {...register("name", { required: true })}
            type="text"
            placeholder="Имя"
            autoComplete="off"
          />
          {errors?.password && (
            <div style={{ color: "red" }}>'Мин.значение - 10 симв'</div>
          )}
          <InputStyle
            {...register("password", { required: true, min: 10 })}
            type="password"
            placeholder="Придумайте пароль"
            autoComplete="off"
          />
        </Inputs>
        <Button type="submit" style={{ color: stateRegForm ? 'green' : '#fff' }}>{stateRegForm ? 'Успешно!' : 'Зарегистрироваться'}</Button>
        <ButtonRegistration as={Link} to="/">
          Вернуться к входу
        </ButtonRegistration>
      </Form>
    </FormWrapper>
  );
};

export default RegistrationForm;


