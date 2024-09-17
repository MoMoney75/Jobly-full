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
            <div id="home-div">
                { !user && <LoginForm login={login}/> }
            </div>)

    }

export default Home;