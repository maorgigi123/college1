import { useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "./context/userContext";
import { useNavigate } from "react-router-dom";

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
height: 80%;
align-items: center;
`;

const CarInfoContainer = styled.div`
    color:white;
    font-weight: bold;
    font-size: 1.3em;
    background-color: gray;
    border-radius: 12px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CarName = styled.p``;

const CarMember = styled.p``;

const CityParking = styled.p``;

const CostContainer = styled.div`
    background-color: gray;
    border: 2px solid white;
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
const CostItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    font-weight: bold;

`;
const Cost = styled.p``;

const PayButton = styled.button`
    padding: 5px;
    width: 100px;
    cursor: pointer;
`;

const CloseButton = styled.button`
padding: 10px;
cursor: pointer;
`;


const ActiveParking = () => {
    const {acitveParking,setHistoryHandlder,setActiveParkingValue,updateUsesr} = useContext(UserContext);
    const navigate = useNavigate()
    useEffect(() => {
        if(!acitveParking.user)
            return navigate('/choose-parking')
    },[])


    const handleCost = () =>{
        const city = acitveParking.city;
        if(city === "tel aviv"){
            return 'cost: 150'
        }
        else if(city === "natania"){
            return 'cost: 100'
        }
        else
        {
            return 'cost: 50'
        }
    }

    const handlePay = () => {
    let cost = 0
    const city = acitveParking.city;
        if(city === "tel aviv"){
            cost = 150;
        }
        else if(city === "natania"){
            cost = 100;
        }
        else
        {
            cost =  50;
        }

        const _pay = {
            user : acitveParking.user,
            cost
        }

        setHistoryHandlder((prev) => [...prev, _pay]);
        setActiveParkingValue({})
        navigate('/history')
    }
  return (
    <>
    {acitveParking.user &&
        <ContainerPage>
        <Container>
            <Title>sv parking</Title>
            <ContainerInfo>
            <SideBarCointainer>
                            <SideBarButton>Active Parking</SideBarButton>
                            <SideBarButton>Parking</SideBarButton>
                            <SideBarButton onClick={() => {navigate('/history')}}>History</SideBarButton>
                            <SideBarButton onClick={() => {updateUsesr({}),navigate('/')}}>Exit</SideBarButton>
            </SideBarCointainer>
                <RightSelectContainer>
                <CarInfoContainer>
                    <CarName>{acitveParking.user.carType}</CarName>
                    <CarMember>{acitveParking.user.carMember}</CarMember>
                    <CityParking>{acitveParking.city}</CityParking>
                </CarInfoContainer>
                <CostContainer>
                    <CostItemContainer>
                        <Cost>{handleCost()}</Cost>
                        <PayButton onClick={handlePay}>PAY</PayButton>
                    </CostItemContainer>
                    <CloseButton onClick={() =>navigate('/choose-parking')}>Close</CloseButton>
                </CostContainer>
                </RightSelectContainer>
            </ContainerInfo>
          
        </Container>
       </ContainerPage>
    }
    </>
    
   
  )
}

export default ActiveParking