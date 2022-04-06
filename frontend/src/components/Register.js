import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [userDetails, setUserDetails] = useState({
        userName: '',
        userEmail: '',
        userPassword: '',
        message: '',
    });

    const formValues = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    };

    const register = async (e) => {
        e.preventDefault();
        
        const body = JSON.stringify({
            userName: userDetails.userName,
            userEmail: userDetails.userEmail,
            userPassword: userDetails.userPassword,

        });

        const response = await axios.post("/api/register", body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        setUserDetails({
            ...userDetails,
            message: response.data.message
        })
        console.log(response);
    }

    return (
        <div>
            <h1>Register</h1>
            <br />
            <form onSubmit={register}>
                <label>Name</label>
                <input required id="userName" name="userName" type='text' onChange={formValues}/>
                <br />
                <label>Email</label>
                <input required id="userEmail" name="userEmail" type='email' onChange={formValues}/>
                <br />
                <label>Password</label>
                <input required id="userPassword" name="userPassword" type="password" onChange={formValues}/>
                <br />
                <button type="submit">Submit</button>
                { userDetails.message ? <h1>{userDetails.message}</h1> :  null}
            </form>
        </div>
    )
}

export default Register
