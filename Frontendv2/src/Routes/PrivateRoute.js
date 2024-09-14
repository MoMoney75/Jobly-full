import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import useLocalStorage from "../Hooks/hooks";

function PrivateRoute({path='/',children}){
const {currentUser} = useContext(UserContext)
const token = localStorage.getItem('jobly-token')
console.log("Current user:", currentUser)
console.log("token:", token)

if(!token){
    return <Navigate to={path} />
}

return(
    children
)
}

export default PrivateRoute