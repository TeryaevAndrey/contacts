import { useForm, SubmitHandler} from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getDataContacts, openAdd } from '../../store/store';
import { ContactInfo, DataUsers, IsRegFields } from '../../app.interface';
import {v1 as uuid} from 'uuid';
import InputMask from 'react-input-mask';
import { InputStyle } from '../../App';

export const NewContactStyle = styled.div`
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: #241F2E;
    border-radius: 20px;
`;

export const Title = styled.p`
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    margin-top: 30px;
`;

export const CloseBtn = styled.div`
    position: absolute;
    top: 8px;
    right: 15px;
    transform: rotate(-45deg);
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    gap: 30px;
`;

export const FormBtn = styled.button`
    width: 90%;
    min-height: 40px;
    background-color: green;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
`;

const NewContact = () => {
    const dataUsers = useAppSelector(state => state.root.dataUsers);
    const currentId = useAppSelector(state => state.root.currentUser);
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm<IsRegFields>();

    const onSubmit: SubmitHandler<IsRegFields> = (data) => {
        const dataContact: ContactInfo = {
            id: uuid(),
            userId: currentId,
            name: data.name,
            tel: data.tel,
        };

        dispatch(getDataContacts());

        dataUsers.forEach((dataUser: DataUsers) => {
            if(currentId === dataUser.id) {
                axios.post('http://localhost:3001/contacts', dataContact);
            }    
        });

        dispatch(getDataContacts());

        dispatch(openAdd(false));
    };

    return(
        <NewContactStyle>
            <Title>Добавление контакта</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputStyle {...register('name')} placeholder="Введите имя" autoComplete='off'/>
                <InputMask className="InputMask" mask="+7 (999) 999-99-99" {...register('tel', {required: 'true'})} placeholder="Введите номер" autoComplete='off'/>
                <FormBtn type="submit">Сохранить</FormBtn>
            </Form>
            <CloseBtn onClick={() => dispatch(openAdd(false))}>+</CloseBtn>
        </NewContactStyle>
    );
};

export default NewContact;