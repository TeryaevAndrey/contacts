import React from 'react';
import styled from 'styled-components';
import EditImg from '../../../img/edit.svg';
import DeleteImg from '../../../img/delete.svg';
import axios from 'axios';
import { useAppDispatch } from '../../../store/hooks';
import { getDataContacts } from '../../../store/store';
import CheckImg from '../../../img/check.svg';

const ContactStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    min-height: 40px;
    width: 100%;
    background-color: #211e26;
    border-radius: 10px;
`;

const Name = styled.p`
    font-size: 14px;
    font-weight: 600;
`;

const Tel = styled.p`
    font-size: 13px;
    font-weight: 600;
    margin-left: 10px;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

interface ContactInfoProps {
    name: string;
    tel: string;
    id: string
}

const Contact = ({name, tel, id}: ContactInfoProps) => {
    const [edit, setEdit] = React.useState(false);
    const dispatch = useAppDispatch();
    const deleteContact = (id: string) => {
        axios.delete(`http://localhost:3001/contacts/${id}`);
        dispatch(getDataContacts());
    };

    const editInput = () => {
        setEdit(true);
    };

    const checkEdit = () => {
        setEdit(false);
    }

    return(
        <ContactStyle>
            <Name contentEditable={edit ? 'true' : 'false'}>{name}</Name>
            <Tel contentEditable={edit ? 'true' : 'false'}>{tel}</Tel>
            <IconWrapper>
                {edit && <Icon onClick={checkEdit} src={CheckImg} alt="check" />}
                <Icon onClick={editInput} src={EditImg} alt="edit" />
                <Icon onClick={() => deleteContact(id)} src={DeleteImg} alt="delete" />
            </IconWrapper>
        </ContactStyle>
    );
};

export default Contact;