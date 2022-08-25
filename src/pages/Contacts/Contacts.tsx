import styled from 'styled-components';
import ExitImg from '../../img/exit.svg';
import AddImg from '../../img/add-contact.svg';
import SearchImg from '../../img/search.svg'
import Contact from './Contact/Contact';
import NewContact from './NewContact/NewContact';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { openAdd } from '../../store/store';

const ContactsStyle = styled.div`
    min-height: 100vh;
`;

const Header = styled.div`
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
`;

const Exit = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

const AddBtn = styled.img`
    position: fixed;
    bottom: 30px;
    right: 20px;
    cursor: pointer;
    width: 50px;
    height: 50px;
`;

const ContactsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;    min-height: 30px;
    border-radius: 20px;
    background-color: #fff;
    padding: 0 20px;
    width: 100%;
`;

const SearchInput = styled.input`
    padding: 10px 15px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
`;

const SearchImgStyle = styled.img`
    width: 20px;
    height: 20px;
`;

interface Contacts {
    name: string;
}

const Contacts = ({name}: Contacts) => {
    const navigate = useNavigate();
    const isOpen = useAppSelector(state => state.root.isOpenAdd);
    const dispatch = useAppDispatch();

    return(
        <ContactsStyle>
            <Header>
                 <Title>Здравствуйте, {name}!</Title>
                 <Exit onClick={() => navigate('/')} src={ExitImg} alt="Exit"/>
            </Header>

            <SearchWrapper>
                <SearchImgStyle src={SearchImg} alt="search"/>
                <SearchInput placeholder="Поиск..."/>
            </SearchWrapper>

            <ContactsList>

            </ContactsList>

            {isOpen && <NewContact />}

            <AddBtn onClick={() => dispatch(openAdd(true))} src={AddImg} alt="AddContact" />
        </ContactsStyle>
    );
};

export default Contacts;