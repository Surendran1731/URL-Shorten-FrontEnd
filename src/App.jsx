import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import EmailActivation from './Pages/EmailActivation';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Reset from './Pages/Reset';
import Dashboard from './Pages/Dashboard';
import OriginalUrl from './Pages/OriginalUrl';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

    const login = () => {
        setIsLoggedIn(true);
    };
const logout=()=>{
  setIsLoggedIn(false);
  
  
}
  return (
    <div>
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} logout={logout}/>
      <Routes>
<Route path='/register' element={<Register/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/activate/:token' element={<EmailActivation/>}/>
<Route path='/login' element={<Login login={login}/>}/>
<Route path='/forgot-password' element={<ForgotPassword/>}/>
<Route path='/reset-password/:token' element={<Reset login={login}/>}/>
<Route path='/dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}/>
<Route path='/shortingurl' element={isLoggedIn ? <OriginalUrl /> : <Navigate to="/" />}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;