import React from 'react';
import { Routes, Route } from 'react-router-dom';
//COMPONENTS
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/user/profile/Profile';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
