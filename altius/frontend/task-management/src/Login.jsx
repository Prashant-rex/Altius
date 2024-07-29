import react, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

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

        // Showing success message
        const successMessage = () => {
            return (
                <div
                    className="success"
                    style={{
                        display: submitted ? "" : "none",
                    }}
                >
                    <h1>User Logged in SuccessFully!!</h1>
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

     // Handling the form submission
     const handleSubmit = async(e) => {
        e.preventDefault();
        if (password === "" || userName === "") {
            setError(true);
        } else {
            const url = 'http://0.0.0.0:8000/api/user/login/'
            const data = {
                'username' : userName,
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

    return (
        <div className="form">
            <div>
                <h1>User Login</h1>
            </div>

            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
            <label className="label">UserName</label>
                    <input
                        onChange={handleUserName}
                        className="input"
                        value={userName}
                        type="text"
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
    )


}

export default Login