import { createContext, useContext, useState } from "react"
const AuthContext = createContext({})
const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const token = localStorage.getItem("JWT_TOKEN")
    const [jwtToken, setJwtToken] = useState(() => {if(token){
        return token;
    }
    return ""}
    )
    return (
        <AuthContext.Provider value = {{jwtToken, setJwtToken}} >
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider, useAuthContext}