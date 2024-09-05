import { useState } from "react"
import { useParams, Link} from "react-router-dom"

import { helloWorldReq, helloWorlBeandReq, helloWorldPathVariableReq } from "./api/HelloWorldApiService"
function Welcome()
{
    const param = useParams()
    function successfullRespnse(response)
    {
        console.log(response)
    }

    function failureResponse(error)
    {
        console.log(error)
    }

    return(
        <div className="welcomeComponent">
            <h1>Welcome {param.username}</h1>
            <div>
                <h3>How are you Today</h3>
                <div className=" m-5">Manage Your ToDos- <Link to="/todolist" className="btn btn-outline-primary btn-sm">click here </Link></div>
                {/* <div><button className="btn btn-outline-success m-5" onClick={callHelloWorldResyApi}>call Hello World</button></div> */}
                {/* <div className="text-info">{message}</div> */} 
            </div>
        </div>
    )
}
export default Welcome