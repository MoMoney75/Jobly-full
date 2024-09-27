import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css'

function LoginForm({login}){
    const navigate = useNavigate()
    const INITIAL_STATE = {
        username : "",
        password : ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [formErrors, setFormErrors] = useState(null)

    async function handleSubmit(evt){
        evt.preventDefault();
        let result = await login(formData)
        if(result.success === true){
        navigate('/companies')
        }
        else{
                setFormErrors(result.errors)
            }        
    }

    const handleChange = (evt) => {
        const {name,value} = evt.target
        setFormData(data => ({...data, [name]: value}))
    }

    return (

        <div className="container" id="login-div">
            <div>
                <h1 className="h5">Please login to continue</h1>
            </div>

        <form onSubmit={handleSubmit}>

        <div id='errors-div'>
            {formErrors && formErrors.map(e => <ul><li>{e}</li></ul>)}
            </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="username "></label>
            <input 
               className="form-control"
               name="username"
               id="username"
               type="text"
               onChange={handleChange}
               value={formData.username}
               placeholder="Username">
            </input>

        </div>

        <div className="mb-3">
        <label  className="form-label" htmlFor="password"></label>
        <input 
               className="form-control"
               name="password"
               id="password"
               type="password"
               onChange={handleChange}
               value={formData.password}
               placeholder="Password">
        </input>
        </div>
        

        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>

    )

}


export default LoginForm;