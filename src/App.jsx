import styled from "styled-components"
import { Route,Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import { UserContext } from "./context/userContext";
import { useContext } from "react";
import Parking from "./parking";
import ActiveParking from "./ActiveParking";
import History from "./History";
function App() {
  const {user} = useContext(UserContext)
  return (
    <Routes>
      {user.username ? <Route index  element={<Parking/>}/>:<Route index  element={<Login/>}/>}
      <Route path="signin"  element={<Login/>}/>
      <Route path="signup"  element={<Register/>}/>
      <Route path="choose-parking"  element={<Parking/>}/>
      <Route path="active-parking"  element={<ActiveParking/>}/>
      <Route path="history"  element={<History/>}/>
    </Routes>
  )
}

export default App
