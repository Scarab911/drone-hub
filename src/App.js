import React from 'react';
import { Routes, Route } from 'react-router-dom';
//COMPONENTS
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Login from './components/login/Login';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
