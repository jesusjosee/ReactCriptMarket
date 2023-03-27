import { createContext, useEffect, useState } from "react";


const UserContext = createContext()

const UserProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

  useEffect( ()=> {
    setUsuario({
      name: "Jesus Suyon",
      registered : "15/Agosto/2022"
    })
  }, [])

    return (
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>)
}

export {UserContext, UserProvider}