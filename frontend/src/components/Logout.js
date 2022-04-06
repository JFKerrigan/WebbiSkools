import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {

    return (
        <div>
            <div className="title"><h4>You have logged out</h4></div>
            <div className="subtitle"><h4>To access quizzes again please log back in!</h4></div>
            <button className="button"><Link to="login">Login</Link></button>
        </div>
    )
}

export default Logout