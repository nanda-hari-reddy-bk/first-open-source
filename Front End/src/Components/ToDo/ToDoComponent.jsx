import { useEffect, useState } from 'react'
import { addToDoApi, retrieveTodoForIdApi, updateToDoApi } from './api/TodoApiservice'
import { useAuth } from './security/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

function ToDoCompoent()
 {
    const {id} = useParams()
    const AuthContext = useAuth()
    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')
    const navigate = useNavigate()
    function getToDo()
    {
        if(id!=-1)
        {
            retrieveTodoForIdApi(AuthContext.username,id)
            .then( 
                    response => 
                                { 
                                    console.log(response.data)
                                    setDescription(response.data.description)
                                    setTargetDate(response.data.targetDate)
                                }
             )
            .catch( error => console.log(error))
        }

    }
    useEffect(() => {getToDo(id)}, [id])
    function onSubmit(values)
    {
        const todo =
        {
            id : id,
            username : AuthContext.username,
            description : values.description,
            targetDate :values.targetDate,
            done : false

        }
        console.log(todo)
        if(id!=-1)
        {
            updateToDoApi(AuthContext.username, id, todo)
            .then(
                    () => navigate('/todoList')
                )
            .catch( error => console.log(error))
        }
        else
        {
            addToDoApi(AuthContext.username, todo)
            .then(
                    () => {navigate('/todoList')
                    console.log('Hii')
        })
            .catch( error => console.log(error))
        }
    }
    function validate(values)
    {
        console.log(values)
        let errors =
        {
            // description : "Enter atleast 5 characters",
            // targetDate  : "Enter Target Date"
        }
        // if(values.description.length<5) { errors.description = 'Enter atleast 5 characters' }
        if(values.targetDate==null || values.targetDate=='') { errors.targetDate = 'Enter a Target Date' }
        return errors
    }
    return(
        <div className="container">
            <h1>To Do details</h1>
            <div>
                <Formik 
                        initialValues={ { description, targetDate } }
                        enableReinitialize = {true}
                        onSubmit = {onSubmit}
                        validate = {validate}
                        validateOnChange = {false}
                        validateOnBlur = {false}
                >
                {
                    (props) => 
                    (
                        <Form>
                            {/* <ErrorMessage
                            name="description"
                            component="div"
                            className='alert alert-warning'
                            /> */}

                            <ErrorMessage
                            name="targetDate"
                            component="div"
                            className='alert alert-warning'
                            />
                            <fieldset className='form group'>
                                <label>Description</label>
                                <Field type="text" className='form-control' name = "description" />
                            </fieldset>
                            <fieldset>
                                <label>Target Date</label>
                                <Field type="Date" className='form-control' name = "targetDate" />
                            </fieldset>
                            <div>
                                <button className='btn btn-outline-success m-5' type='submit'> Save </button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>
    )
 }
 export default ToDoCompoent