import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ContainerAll = styled.div`
    border: 1px solid white;
    width: 500px;
    height:700px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 4rem;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    width: 200px;
`;

const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const RegisterButton = styled.button`
    padding: 10px;
    color: white;
    border: none;
    cursor: pointer;
    width: 100px;
    display: flex;
    justify-content: center;
`;


const Register = () => {
    const [username,setUsername] = useState();
    const [carMember,setCarMember] = useState()
    const [carType, setCarType] = useState()
    const [password, setPassword] = useState()
    const {updateUsers,updateUsesr} = useContext(UserContext)
    const navigate = useNavigate()
    const onUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const onCarMemberChange = (event) => {
        setCarMember(event.target.value)
    }
    const onCarTypeChange = (event) => {
        setCarType(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const  onSubmitRegister = (e) => {
        e.preventDefault();
        if(username !== username.toLowerCase())
        {
            return alert('cant use upper case in username')
        }
        if(carMember.length !== 8)
        {
            return alert('car member need to 8 numbers')
        }
        if(password.length < 4 || password.length > 8)
        {
            return alert('password need to be 4-8 numbers')
        }
        if(password.search(/[a-z]/i) < 0  || password.search(/[A-Z]/) < 0 || password.search(/[!@#$%^&*]/) < 0)
            return alert('password must include uppercase letter lowercase letter number and special letter')

        const _user = {
            username,
            carMember,
            carType,
            password
        };
        
        updateUsers((prev) => [...prev, _user]);
        updateUsesr(_user)
        navigate('/choose-parking')
    }
  return (
  <Container>
    <ContainerAll>
    <Title> sv parking</Title>
    <FormContainer onSubmit={onSubmitRegister}>
        <Input type="text" required name="username" placeholder="username" onChange={onUsernameChange}/>
        <Input type="number" required name="carMember" placeholder="CAR MEMBER" onChange={onCarMemberChange}/>
        <Input type="text" required name="carType" placeholder="CAR TYPE" onChange={onCarTypeChange}/>
        <Input type="password" required name="password" placeholder="password" onChange={onPasswordChange}/>
        <RegisterContainer>
        <RegisterButton type="submit" >
            REGISTER
            </RegisterButton>
        </RegisterContainer>
      
          </FormContainer>

    </ContainerAll>
  </Container>
  )
}

export default Register