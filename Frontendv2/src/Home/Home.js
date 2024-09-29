import {React, useEffect,useState} from "react"
import './Home.css'
import LoginForm from '../Forms/LoginForm';
import { useNavigate } from "react-router-dom";
function Home({login}){
    const navigate = useNavigate();
    const [user,setUser] = useState(localStorage.getItem('jobly-token'));

    useEffect(()=>{
        if(user){
            navigate('/companies')
        }},[user,navigate]);


        return(
            <div>
                <div id="header">
                    <h1 className="h2">
                        Welcome to Jobly
                        <p>Begin your job search today!</p>
                    </h1>
                </div>
                { !user && <LoginForm login={login}/> }
            </div>)

    }

export default Home;