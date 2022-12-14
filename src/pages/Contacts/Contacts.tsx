import styled from "styled-components";
import ExitImg from "../../img/exit.svg";
import AddImg from "../../img/add-contact.svg";
import SearchImg from "../../img/search.svg";
import Contact from "../../components/Contact/Contact";
import NewContact from "../../components/NewContact/NewContact";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { onChangeSearch, openAdd } from "../../store/store";
import { ContactInfo } from "../../app.interface";

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
  gap: 20px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 30px;
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

const Contacts = ({ name }: Contacts) => {
  const navigate = useNavigate();
  const isOpen = useAppSelector((state) => state.root.isOpenAdd);
  const dataContacts = useAppSelector((state) => state.root.dataContacts);
  const currentId = useAppSelector((state) => state.root.currentUser);
  const searchValue = useAppSelector((state) => state.root.searchValue);
  const dispatch = useAppDispatch();

  const filterContacts = dataContacts.filter((dataContact: ContactInfo) => {
    if (!searchValue) {
      return dataContact.userId === currentId;
    } else {
      return (
        dataContact.userId === currentId &&
        dataContact.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  });

  return (
    <ContactsStyle>
      <Header>
        <Title>????????????????????????, {name}!</Title>
        <Exit onClick={() => navigate("/")} src={ExitImg} alt="Exit" />
      </Header>

      <SearchWrapper>
        <SearchImgStyle src={SearchImg} alt="search" />
        <SearchInput
          onChange={(event) => dispatch(onChangeSearch(event.target.value))}
          value={searchValue}
          placeholder="??????????..."
        />
      </SearchWrapper>

      <ContactsList>
        {filterContacts.length > 0 ? (
          filterContacts.map((dataContact: ContactInfo) => (
            <Contact
              key={dataContact.id}
              name={dataContact.name}
              tel={dataContact.tel}
              id={dataContact.id}
            />
          ))
        ) : (
          <p>???????????????? ??????????????...</p>
        )}
      </ContactsList>

      {isOpen && <NewContact />}

      <AddBtn
        onClick={() => dispatch(openAdd(true))}
        src={AddImg}
        alt="AddContact"
      />
    </ContactsStyle>
  );
};

export default Contacts;
