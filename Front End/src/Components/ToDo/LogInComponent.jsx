import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
import { authenticateWithGoogle } from "./api/AuthenticationApi"
function LogIn()
{
    const [username, setusername] = useState('Nanda')
    const [password, setPassword] = useState('')
    const [showFailure, setShowFsilure] = useState(false)
    const navigate = useNavigate()

    const authContext = useAuth()
    function handleUsernameChange(event)
    {
        setusername(event.target.value)
    }

    function handlePasswordChange(event)
    {
        setPassword(event.target.value)
    }

    async function LogInValidation()
    {
        if(await authContext.logIn(username, password))
        {
            setShowFsilure(false)
            navigate(`/welcome/${username}`)
        }
        else
        {
            setShowFsilure(true)
        }
    }
    function LoginWithGoogle()
    {
        console.log("called")
        authenticateWithGoogle()

    }
    return(
        <div className="LogIn">
            <div className="LogInform">
                <h1>LogIn Here</h1>
                <div>
                    {showFailure && <div className="m-4"><span className = "alert alert-warning">LogIn Failed, please check credentias</span></div>}
                    <label>UserName</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/> 
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="passeord" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                <button name="LogIn" className="btn btn-primary m-3" onClick={LogInValidation}>LogIn</button>
                </div>
                <div>
                <button><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" style={{height:"50px"}} alt="Google Sign In" onClick={LoginWithGoogle} /></button>
                </div>
            </div>
        </div>
    )
}
export default LogIn