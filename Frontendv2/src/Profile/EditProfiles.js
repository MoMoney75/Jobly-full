import React, { useState, useContext } from "react";
import JoblyApi from "../API/JoblyAPI";
import UserContext from "../Context/UserContext";
import './EditProfile.css'
function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: currentUser.password,
  });
  const [formErrors, setFormErrors] = useState([]);

  // switch to use our fancy limited-time-display message hook
  const [saveConfirmed, setSaveConfirmed] = useState(false);
  // const [saveConfirmed, setSaveConfirmed] = useTimedMessage()


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

    } catch (errors) {
      setFormErrors(errors);
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
      <div className="container">
        <div>
        <h1 className="h5">Edit Profile</h1>
        </div>
            <form id="edit-form">
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
                <label htmlFor="password" className="form-label">Confirm password</label>
                <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}/>
                </div>

              {formErrors.length
                  ? <p>{formErrors}</p> : null}

              {saveConfirmed ? <p>updated successfull</p> : null}

              <button className="btn btn-primary" onClick={handleSubmit}>
                Save changes
              </button>
            </form>
            </div>

  );
}

export default ProfileForm;