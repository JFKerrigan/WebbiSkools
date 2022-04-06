import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const logOutHandler = async () => {
    await axios.get('/logout');
  };

const Nav = () => {
    return (
        <nav>
            <h2>WebbiSkools</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to='/logout' onClick={logOutHandler}>
                        Logout
                    </Link>
                </li>
            </ul> 
        </nav>
    )
}

export default Nav
