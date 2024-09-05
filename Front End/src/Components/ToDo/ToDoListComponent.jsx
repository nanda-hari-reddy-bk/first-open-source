import { useEffect, useState } from "react"
import { retrieveAllToDosApi, deleteToDoApi } from "./api/TodoApiservice"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

function ToDoListComponent()
{
    const AuthContext = useAuth()
    const [ToDos, setToDos] = useState([])
    function refreshToDos()
    {
        retrieveAllToDosApi(AuthContext.username)
        .then( (response) => { setToDos(response.data) } )
        .catch( (error) => console.log(error))
    }
    
    const [message, setMessage] = useState(null)
    function deleteToDo(id, description)
    {
        deleteToDoApi(AuthContext.username,id)
        .then(
                (response) => {
                                setMessage(`Deleted a To Do - ${description}`)
                                refreshToDos()
                              }
            )
        .catch( error => console.log(error))
    }
    const navigate = useNavigate()
    function updateToDo(id)
    {
        console.log('called')
        navigate(`/todo/${id}`)
    }

    useEffect( () => { refreshToDos()}, [] )
    return(
        <div className="container">
            <h1>Things You need to do</h1>
            <div>
                { message && <div className="alert alert-warning">{message}</div> }
                <table className="table">
                    <thead>
                        <tr className="table">
                            <th>Description</th>
                            <th>Status</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ToDos.map(
                                todo=>
                                  <tr key={todo.id} className="table">
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-outline-danger" onClick={() => deleteToDo(todo.id, todo.description)}>Delete</button></td>
                                    <td><button className="btn btn-outline-warning" onClick={() => updateToDo(todo.id)}>Update</button></td>
                                  </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <button className="btn btn-outline-primary m-2" onClick={() => navigate('/todo/-1')}>Add todo</button>
        </div>
    )
}
export default ToDoListComponent