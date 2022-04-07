import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import QuizLandingPage from './components/QuizLandingPage'
import './App.css';

function App() {
  const [userDetails, setUserDetails] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    message: '',
  });

  const loginHandler= ( userDetails) =>{
    setUserDetails({
      ...userDetails,  
  })
  console.log('bananas', userDetails);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login loginHandler={loginHandler}/>} />
          <Route exact path= '/logout' element={<Logout />} />
          <Route exact path='/quizpage' element={<QuizLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


