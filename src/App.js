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
import ProfileCard from './components/user/profile/profile_card/ProfileCard';
import OrdersCard from './components/user/profile/orders_card/OrdersCard';
import FavoritesCard from './components/user/profile/favorites_card/FavoritesCard';
import ServicesCard from './components/user/profile/services_card/ServicesCard';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="my-profile" element={<ProfileCard />} />
          <Route path="my-orders" element={<OrdersCard />} />
          <Route path="my-favorite" element={<FavoritesCard />} />
          <Route path="my-services" element={<ServicesCard />} />
        </Route>
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
