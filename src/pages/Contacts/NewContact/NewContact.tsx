import styled from 'styled-components';

const NewContactStyle = styled.div`
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: #241F2E;
    border-radius: 20px;
`;

const Title = styled.p`
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    margin-top: 30px;
`;

const CloseBtn = styled.div`
    position: absolute;
    top: 8px;
    right: 15px;
    transform: rotate(-45deg);
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    gap: 30px;
`;

const Input = styled.input`
    width: 90%;
    min-height: 40px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    padding: 15px 20px;
    border-radius: 10px;
`;

const FormBtn = styled.button`
    width: 90%;
    min-height: 40px;
    background-color: green;
    border-radius: 10px;
    text-transform: uppercase;
`;

const NewContact = () => {
    return(
        <NewContactStyle>
            <Title>Добавление контакта</Title>
            <Form>
                <Input placeholder="Введите имя"/>
                <Input placeholder="Введите номер"/>
                <FormBtn type="submit">Сохранить</FormBtn>
            </Form>
            <CloseBtn>+</CloseBtn>
        </NewContactStyle>
    );
};

export default NewContact;