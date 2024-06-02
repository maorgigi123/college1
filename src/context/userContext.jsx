import { createContext, useState } from "react";

export const UserContext = createContext({
    user : {},
    updateUsesr : () => {},


    acitveParking: {},
    setActiveParking : () => {},


    users:[],
    updateUsers : () => {},


    history: [],
    setHistory: () => {}
})
export const UserProvider = ({ children }) => {
    const [user,setUser] = useState({})
    const [users,setUsers] = useState([])

    const [acitveParking,setActiveParking] = useState({});

    const [history, setHistory] = useState([])
    const updateUsesr = (_user) => {
        setUser(_user)
    }
    const updateUsers =(_user) =>{
        setUsers(_user)
        console.log(users)
    }
    const setActiveParkingValue = (_active) => {
        setActiveParking(_active)
    }
    const setHistoryHandlder = (_history) =>{
    
        setHistory(_history)
    }
    const value = {user,updateUsesr,updateUsers,users,setActiveParkingValue,acitveParking,history,setHistoryHandlder}
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}