import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Nav = () => {

    const logoutUser = async () => {
        try {
            const res = await axios.get('/logout');
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav>
            <h2>WebbiSkools</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/quizpage">QuizPage</Link>
                </li>
                <li>
                   <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to='/logout' onClick={logoutUser}>
                        Logout
                    </Link>
                </li>
            </ul> 
        </nav>
    )
}

export default Nav
