import styled from 'styled-components';
import EditImg from '../../img/edit.svg';
import DeleteImg from '../../img/delete.svg';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getDataContacts, openEdit } from '../../store/store';
import EditForm from '../Forms/EditForm';

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
    const isOpenEdit = useAppSelector(state => state.root.isOpenEdit);
    const dispatch = useAppDispatch();
    const deleteContact = (id: string) => {
        dispatch(getDataContacts());
        axios.delete(`http://localhost:3001/contacts/${id}`);
        dispatch(getDataContacts());
    };

    return(
        <ContactStyle>
            {isOpenEdit.stateEdit && <EditForm id={isOpenEdit.contactId} name={isOpenEdit.contactName} tel={isOpenEdit.contactTel}/>}
            <Name>{name}</Name>
            <Tel>{tel}</Tel>
            <IconWrapper>
                <Icon onClick={() => dispatch(openEdit({stateEdit: true, contactId: id, contactName: name, contactTel: tel}))} src={EditImg} alt="edit" />
                <Icon onClick={() => deleteContact(id)} src={DeleteImg} alt="delete" />
            </IconWrapper>
        </ContactStyle>
    );
};

export default Contact;
