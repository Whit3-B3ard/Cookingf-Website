import { createContext, useState } from "react"
export const UserContext = createContext()

export default function UserContextProvider({children}){
    
    const [userState, setUserState] = useState({
        name: '',
        email: '',
        password: ''
    })

    return <UserContext.Provider value={{userState, setUserState}}>
        {children}
    </UserContext.Provider>


}