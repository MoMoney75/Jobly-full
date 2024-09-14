import React, {useContext} from "react"
import { Link,} from "react-router-dom";
import UserContext from "../Context/UserContext";
import './NavBar.css'

function Navbar({logout}){
const { currentUser } = useContext(UserContext);

function loggedInNav(){
  return(
<div className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Jobly</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul>
      <li className="nav-link" aria-current="page">
        <Link className="Link" to="/">Home</Link>
      </li>
      <li className="nav-link" aria-current="page">
        <Link className="Link" to="/companies">Companies</Link>
      </li>
      <li className="nav-link" aria-current="page">
        <Link className="Link" to="/jobs">Jobs</Link>
      </li>

      <li className="nav-link" aria-current="page">
        <Link className="Link" to="/settings">Profile</Link>
      </li>

    <li className="nav-link" aria-current="page">
      <Link className="Link" to="/" onClick={logout}>Logout {currentUser.username}</Link>
    </li>
    </ul>
      </div>
    </div>
  </div>
  )}

  function loggedOutNav(){
    return(
      <div className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">Jobly</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-link active" aria-current="page">
            <Link className="nav-link" to='/'>Login</Link>
          </li>

          <li className="nav-link">
            <Link className="nav-link" aria-current="page"to='/register'>Sign up</Link>
          </li>
        </ul>
      </div>
      </div>
      </div>
    )
  }

  return (
    <div>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </div>
);
}
export default Navbar;