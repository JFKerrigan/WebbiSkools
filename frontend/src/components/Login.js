import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [userDetails, setUserDetails] = useState({
        userName: '',
        userEmail: '',
        userPassword: '',
        message: '',
    });

    const loginValues = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    };

    const login = async (e) => {
        e.preventDefault();
        
        const body = JSON.stringify({
            userName: userDetails.userName,
            userEmail: userDetails.userEmail,
            userPassword: userDetails.userPassword,

        });

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };

        const loginSuccess = await axios.post('/api/login', body, config);
        
        setUserDetails({
            ...userDetails,
            message: loginSuccess.data.message
        })
        console.log(loginSuccess);
    }

    return (
        <div>
            <h1>Login</h1>
            <br />
            <form onSubmit={login}>
                <label>Name</label>
                <input required id="userName" name="userName" type='text' onChange={loginValues}/>
                <br />
                <label>Email</label>
                <input required id="userEmail" name="userEmail" type='email' onChange={loginValues}/>
                <br />
                <label>Password</label>
                <input required id="userPassword" name="userPassword" type="password" onChange={loginValues}/>
                <br />
                <button type="submit">Login</button>
                { userDetails.message ? `You are ${userDetails.message}, hello, ${userDetails.userName}` :  null}
            </form>
        </div>
    )
}

export default Login
