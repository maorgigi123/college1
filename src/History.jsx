import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { UserContext } from "./context/userContext";

const ContainerPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: black;
`;

const Container = styled.div`
border: 1px solid white;
    width: 800px;
    height:600px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
color: white;
font-size:3em;
`;

const ContainerInfo = styled.div`
 width: 100%;
    height: 100%;
    display: flex;


`;

const SideBarCointainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
const SideBarButton = styled.button`
width: 200px;
height: 50px;

`;
const RightSelectContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-right: 40px;
height: 73%;
align-items: center;
overflow: hidden;
gap: 10px;
overflow: scroll;

`;

const HistoryDiv = styled.div`
  border-radius: 12px;
  width: 400px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  color: white;
  background-color: gray;
  border: 1px solid white;
  margin-bottom: 10px;


`;


const History = () => {
  const navigate = useNavigate();
  const {acitveParking,history,updateUsesr} = useContext(UserContext)
  return (
    <ContainerPage>
      <Container>
        <Title>sv parking</Title>
        <ContainerInfo>
        <SideBarCointainer>
                        <SideBarButton onClick={() => {(acitveParking.user) && navigate('/active-parking')}}>Active Parking</SideBarButton>
                        <SideBarButton onClick={() => {(!acitveParking.user) && navigate('/choose-parking')}} >Parking</SideBarButton>
                        <SideBarButton>History</SideBarButton>
                        <SideBarButton onClick={() => {updateUsesr({}) ,navigate('/')}}>Exit</SideBarButton>
                </SideBarCointainer>
              <RightSelectContainer>
                {history.length === 0 && <h1  style={{color:'white'}}> No history yet</h1>}
                {history.map((h, index) => {
                  return <HistoryDiv key={index}>
                    <p>car: {h.user.carType}</p>
                    <p>Member: {h.user.carMember}</p>
                    <p>cost: {h.cost}</p>
                  </HistoryDiv>
                })}
                </RightSelectContainer>
        </ContainerInfo>
      </Container>
    </ContainerPage>
  )
}

export default History