import { useContext, useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
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
    height:400px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
 font-size: 3rem;
`;
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
`;
const UsernameInput = styled.input`
    padding: 10px;
    width: 200px;
`;
const PasswordInput = styled.input`
      padding: 10px;
    width: 200px;
`;
const ButtonDownContainer = styled.div`
    display: flex;
    gap: 20px;
`;
const SignInButton = styled.button`
padding: 10px;
    width: 100px;
    cursor: pointer;
`;
const SignUpButton = styled.button`
    padding: 10px;
    width: 100px;
    cursor: pointer;
`;
const Login = () => {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const {users,updateUsesr} =  useContext(UserContext)
    const navigate = useNavigate()
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        let valid = false;
        if(!username || !password)
            return alert('input password or username')
        users.map((user) => {
            if(username === user.username && password === user.password)
            {
                updateUsesr(user)
                valid = true
                return navigate('/choose-parking')
            }
        })
        if(!valid)
            alert('password or username not valid')
    }
    console.log(users)
  return (
<Container>
    <ContainerAll>
    <Title>SV parking</Title>
    <FormContainer>
        <UsernameInput required type="text" placeholder="username" onChange = {onChangeUsername}/>
        <PasswordInput required type="password" placeholder="password" onChange = {onChangePassword}/>
    </FormContainer>
    <ButtonDownContainer>
        <SignInButton onClick={handleSubmit}>Sign In</SignInButton>
        <SignUpButton onClick={() => {navigate('/signup')}}>Sign Up</SignUpButton>
    </ButtonDownContainer>
    </ContainerAll>
   
</Container>
  )
}

export default Login