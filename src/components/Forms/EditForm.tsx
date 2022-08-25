import React from "react";
import { InputStyle } from "../../App";
import {
  Form,
  CloseBtn,
  Title,
  FormBtn,
  NewContactStyle,
} from "../NewContact/NewContact";
import InputMask from "react-input-mask";
import { SubmitHandler, useForm } from "react-hook-form";
import { IsRegFields } from "../../app.interface";
import { useAppDispatch } from "../../store/hooks";
import { getDataContacts, openEdit } from "../../store/store";
import axios from "axios";

interface EditFormProps {
  id: string;
  name: string;
  tel: string;
}

const EditForm = ({ id, name, tel }: EditFormProps) => {
  const { register, handleSubmit } = useForm<IsRegFields>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IsRegFields> = (data) => {
    dispatch(getDataContacts());
    axios.patch(`http://localhost:3001/contacts/${id}`, {
      name: data.name,
      tel: data.tel,
    });
    dispatch(getDataContacts());
    dispatch(openEdit(false));
  };

  return (
    <NewContactStyle>
      <Title>Редактирование</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputStyle
          {...register("name")}
          defaultValue={name}
          placeholder="Новое имя"
        />
        <InputMask
          {...register("tel")}
          className="InputMask"
          defaultValue={tel}
          mask="+7 (999) 999-99-99"
          placeholder="Новые номер"
        />
        <FormBtn type="submit">Изменить</FormBtn>
      </Form>
      <CloseBtn onClick={() => dispatch(openEdit(false))}>+</CloseBtn>
    </NewContactStyle>
  );
};

export default EditForm;
