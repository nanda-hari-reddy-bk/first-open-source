import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
function HeaderComponent()
 {
    const authContext = useAuth()
    const navigate = useNavigate()
    const isAuthenticated = authContext.isAuthenticated
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="enlarge"><a className=" navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a></div>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className=" enlarge nav-link" to="/welcome/in28minutes">Home</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className=" enlarge nav-link" to="/todolist">Todos</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!isAuthenticated && <Link className="enlarge nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="enlarge nav-link" to="/logout" onClick={()=>{  authContext.logOut()
                                                                                                                    navigate(`/logout`)}}>Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
 }
 export default HeaderComponent