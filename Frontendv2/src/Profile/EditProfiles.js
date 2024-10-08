import React, { useState, useContext } from "react";
import JoblyApi from "../API/JoblyAPI";
import UserContext from "../Context/UserContext";
import './EditProfile.css'
import {useNavigate} from 'react-router-dom';
function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: currentUser.password,
  });
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);



  async function handleSubmit(evt) {
    evt.preventDefault();

    let newData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.updateProfile(username, newData);
      navigate('/companies')
    } catch(err) {
      setFormErrors(err);
      return;
    }

    setFormData(data => ({ ...data, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    // trigger reloading of user information throughout the site
    setCurrentUser(updatedUser);
  }

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({...data,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (
      <div className="container" id="edit-div">
        <div>
          <h1 className="h5">Edit Profile</h1>
        </div>
            <form>
              <div id="errors-div">
              {formErrors && formErrors.map((e) => (
                  <ul> <li>{e}</li></ul>))}
              </div>

              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                    className="form-control"
                    name="firstName"
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                />
                </div>

                <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                    className="form-control"
                    name="lastName"
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                />
                </div>

                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    className="form-control"
                    name="email"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                </div>

                <div className="mb-3">
                <label htmlFor="password" className="form-label">Change Password</label>
                <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}/>
                </div>

              

              {saveConfirmed ? <p>updated successfull</p> : null}

              <button className="btn btn-primary" onClick={handleSubmit}>
                Save changes
              </button>
            </form>
            </div>

  );
}

export default ProfileForm;