import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate, useParams} from "react-router-dom"
import './ToDo.css';

import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ToDoListComponent from "./ToDoListComponent";
import ErrorComponent from "./ErrorComponent";
import Welcome from "./WelcomeComponent";
import LogIn from "./LogInComponent";
import ToDoComponent from "./ToDoComponent";

import AuthContext, { useAuth } from "./security/AuthContext";

function AuthenticatdRoute({children})
{
    const authContext = useAuth()
    if(authContext.isAuthenticated) 
        return children
    return <Navigate to='/login'/>
}

export default function ToDoApp()
{
    const {id} = useParams()
    return(
        <div className="ToDoApp">
            <AuthContext>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LogIn/>}/>
                        <Route path="/login" element={<LogIn/>}/>
                        <Route path="/welcome/:username" element={<AuthenticatdRoute><Welcome/></AuthenticatdRoute>}/>
                        <Route path="/todolist" element={<AuthenticatdRoute><ToDoListComponent/></AuthenticatdRoute>}/>
                        <Route path="/todo/:id" element={<AuthenticatdRoute><ToDoComponent param = {id}/></AuthenticatdRoute>}/>
                        <Route path="/logout" element={<LogoutComponent/>}/>
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthContext>
        </div>
    )
}