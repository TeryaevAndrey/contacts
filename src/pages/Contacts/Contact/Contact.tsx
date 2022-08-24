import styled from 'styled-components';
import EditImg from '../../../img/edit.svg';
import DeleteImg from '../../../img/delete.svg';
import { ContactInfo } from '../../../app.interface';

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

const Contact = ({name, tel}: ContactInfo) => {
    return(
        <ContactStyle>
            <Name>{name}</Name>
            <Tel>{tel}</Tel>
            <IconWrapper>
                <Icon src={EditImg} alt="edit" />
                <Icon src={DeleteImg} alt="delete" />
            </IconWrapper>
        </ContactStyle>
    );
};

export default Contact;