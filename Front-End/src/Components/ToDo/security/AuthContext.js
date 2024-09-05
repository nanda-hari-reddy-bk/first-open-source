import {createContext, useContext, useState } from "react"
import { authenticateJWTApi } from "../api/AuthenticationApi"
import { apiClient } from "../api/BaseUrl"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children })
{
    // const [number,setNumber] = useState(10)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)
    

    // async function logIn(username, password)
    // {
    //     const baToken = 'Basic ' +  window.btoa(username + ':' + password)
    //     try
    //     {
    //         const response = await authenticateApi(baToken)
    //         if(response.status==200)
    //         {
    //             setIsAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)
    //             apiClient.interceptors.request.use( (config) => 
    //                                                             {
    //                                                                 config.headers.Authorization=baToken
    //                                                                 return config
    //                                                             }
    //                                               )
    //             return true
    //         }
    //         else
    //         {
    //             logOut()       // just to remove duplicate code
    //             return false
    //         }
    //     }
    //     catch
    //     {
    //         logOut()
    //         return false
    //     }

    // }

    async function logIn(username, password)
    {
        try
        {
            const response = await authenticateJWTApi(username, password)
            if(response.status==200)
            {
                const jwtToken = 'Bearer ' +  response.data.token
                setIsAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)
                console.log(jwtToken)
                apiClient.interceptors.request.use( (config) => 
                                                                {
                                                                    config.headers.Authorization=jwtToken
                                                                    return config
                                                                }
                                                  )
                return true
            }
            else
            {
                logOut()    // just to remove duplicate code
                return false
            }
        }
        catch
        {
            logOut()
            return false
        }

    }

    function logOut()
    {
        setIsAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, setIsAuthenticated, logIn, logOut, username, token}}>
            { children }
        </AuthContext.Provider>
    )
}