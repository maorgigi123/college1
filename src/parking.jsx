import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/userContext'
import React from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
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

const InputNumberCar = styled.p`
    color: white;
    font-weight: bold;
    font-size: 2em;
`;

const StartParkingButton = styled.button`
    padding: 20px;
    cursor: pointer;
    border: none;
`;

const SelectButton = styled(Select)`
    width: 400px;
`;


const Parking = () => {
    const{user,setActiveParkingValue,acitveParking,updateUsesr} = useContext(UserContext)

    const [selectedValues, setSelectedValues] = useState([]);

    const navigate = useNavigate();

    const options = [
        { value: 'Choose City', label: 'Choose City' },
        { value: 'tel aviv', label: 'tel aviv' },
        { value: 'natania', label: 'natania' },
        { value: 'rahovot', label: 'rahovot' },
      ];

    useEffect(() =>{
        if(user.username === '')
            navigate('/')

    },[user])


    const onOptionChange = (options) => {
         setSelectedValues(options);
        // setSelectedValues(options);
      };
      const handleParking = () =>{
        if(selectedValues.label === 'Choose City') return;
        if(selectedValues.length == 0) return;
        if(acitveParking.user) return alert('cant set parking untill paid')
        setActiveParkingValue({
            user:user,
            city:selectedValues.value

        })
        navigate('/active-parking')
      }
  return (
    <ContainerPage>
        <Container>
            <Title>sv parking</Title>
            <ContainerInfo>
                <SideBarCointainer>
                        <SideBarButton onClick={() => {(acitveParking.user) && navigate('/active-parking')}}>Active Parking</SideBarButton>
                        <SideBarButton>Parking</SideBarButton>
                        <SideBarButton onClick={() => {navigate('/history')}} >History</SideBarButton>
                        <SideBarButton onClick={() => {updateUsesr({}),navigate('/')}}>Exit</SideBarButton>
                </SideBarCointainer>
                <RightSelectContainer>
                            <SelectButton 
                                className="Choose City"
                                closeMenuOnSelect={true}
                                options={options}
                                getOptionValue={(option) => option.value} // Corrected here!!!
                                onChange={onOptionChange}
                            />

                            <InputNumberCar>{user.carMember}</InputNumberCar>
                            <StartParkingButton onClick={handleParking}>START PARKING</StartParkingButton>
                    </RightSelectContainer>
            </ContainerInfo>
        </Container>
    </ContainerPage>
  )
}

export default Parking