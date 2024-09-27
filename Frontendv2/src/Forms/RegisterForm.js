import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './register.css'

function RegisterForm({register}){
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();
    const INITIAL_STATE = {
        username : "",
        password : "",
        firstName : "",
        lastName : "",
        email : ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
  
     async function handleSubmit(evt){
        evt.preventDefault();
        const result = await register(formData);
        if(result.success === false){
            setErrors(result.err)
            setFormData(INITIAL_STATE)
            return;
        }
        setFormData(INITIAL_STATE)
        navigate('/companies')

    }

    const handleChange = (evt) => {
    const {name,value} = evt.target
    setFormData(data => ({...data, [name]: value}))
}
    


return(
<div className='container' id='reg-div'>

    <div>
        <h1 className='h5'>Join today for free!</h1>
    </div>
        <form onSubmit={handleSubmit}>

            <div id='error-div'>
             {errors && errors.map(e => <ul><li> {e} </li> </ul>)}
            </div>

    <div className='mb-3'>

<label htmlFor="username" className="form-label"></label>
<input 
className='form-control'
name='username'
type='text'
id='username'
value={formData.username}
onChange={handleChange}
placeholder='Username'>
</input>
</div>

<div className='mb-3'>
<label htmlFor="password" className="form-label"></label>
<input 
className='form-control'
name='password'
id='password'
type='password'
value={formData.password}
onChange={handleChange}
placeholder='Password'>
</input>
</div>

<div className='mb-3'>
<label htmlFor="firstName" className="form-label"></label>
<input
className='form-control'
name='firstName'
id='firstName'
type='text'
value={formData.firstName}
onChange={handleChange}
placeholder='First Name'>

</input>
</div>

<div className='mb-3'>
<label htmlFor="lastName" className="form-label"></label>
<input 
className='form-control'
name='lastName'
id='lastName'
type='text'
value={formData.lastName}
onChange={handleChange}
placeholder='Last Name'>
</input>
</div>

<div className='mb-3'>
<label htmlFor="email" className="form-label"></label>
<input 
className='form-control'
name='email'
id='email'
type='text'
value={formData.email}
onChange={handleChange}
placeholder='Email'>
</input>
</div>
<button type="submit" className='btn btn-primary'>Submit</button>
</form>

</div>


)
}

export default RegisterForm