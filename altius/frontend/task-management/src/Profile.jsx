import react, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the First Name change
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };

    // Handling the Last Name change
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the Username change
    const handleUserName = (e) => {
        setUserName(e.target.value);
        setSubmitted(false);
    };


    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (firstName === "" || lastName === "" || email === "" || password === "" || userName === "") {
            setError(true);
        } else {
            const url = 'http://0.0.0.0:8000/api/user/'
            const data = {
                'first_name' : firstName,
                'last_name' : lastName,
                'username' : userName,
                'email' : email,
                'password' : password,
            }
            try{
                const response = await axios.post(url, data)
                setSubmitted(true);
            }
            catch{
                setError(false);
            }
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User {userName} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">First Name</label>
                <input
                    onChange={handleFirstName}
                    className="input"
                    value={firstName}
                    type="text"
                />

                <label className="label">Last Name</label>
                <input
                    onChange={handleLastName}
                    className="input"
                    value={lastName}
                    type="text"
                />
                <label className="label">UserName</label>
                <input
                    onChange={handleUserName}
                    className="input"
                    value={userName}
                    type="text"
                />


                <label className="label">Email</label>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                />

                <label className="label">Password</label>
                <input
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                />

                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );


}

export default UserRegistration