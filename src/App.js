import React from 'react';
import { Route, Routes } from 'react-router-dom';
//css
import './index.css';
//COMPONENTS
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Register from './components/register/Register';
import FavoritesCard from './components/user/profile/favorites_card/FavoritesCard';
import OrdersCard from './components/user/profile/orders_card/OrdersCard';
import Profile from './components/user/profile/Profile';
import ProfileCard from './components/user/profile/profile_card/ProfileCard';
import ServicesCard from './components/user/profile/services_card/ServicesCard';
import SettingsCard from './components/user/profile/settings_card/SettingsCard';
import ServiceInfo from './components/service_info/ServiceInfo';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-settings" element={<SettingsCard />} />
        <Route path="/service" element={<ServiceInfo />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="my-profile" element={<ProfileCard />} />
          <Route path="my-orders" element={<OrdersCard />} />
          <Route path="my-favorite" element={<FavoritesCard />} />
          <Route path="my-services" element={<ServicesCard />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
