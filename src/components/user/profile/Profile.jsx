import React from 'react';
import { Outlet, Link } from 'react-router-dom';

//components
// import ProfileCard from './profile_card/ProfileCard';

//images
import home from '../../../../src/assets/icons/home.png';
import arrow from '../../../../src/assets/icons/down.png';

//style
import '../profile/profile.css';

export default function Profile(props) {
  // const [isActive, setActive] = useState(true);

  // const showProfile = () => {
  //   setActive(!isActive);
  // };
  // const [isOrdersActive, setOrdersActive] = useState(true);

  // const showOrders = () => {
  //   setOrdersActive(!isOrdersActive);
  // };

  return (
    <div className="main-container">
      <div className="location-bar">
        <Link to="/">
          <img className="home-image" src={home} alt="home"></img>
        </Link>
        <img className="arrow-image" src={arrow} alt="home"></img>
        Mano profilis
      </div>
      <div className="info">
        <Link to="my-profile">Profilis</Link>
        <Link to="my-orders">Uzsakymai</Link>
        <Link to="my-favorite">Patikusios paslaugos</Link>
        <Link to="my-services">Mano paslaugos</Link>
      </div>
      <Outlet />
      {/* <div className="info">
        <div onClick={showProfile}>Profilis</div>
        <div className="orders" onClick={showOrders}>
          Uzsakymai
        </div>
        <div className="favorite">Patikusios paslaugos</div>
        <div className="services">Mano paslaugos</div>
      </div>
      <div className={isActive ? 'hidden' : null}>Profile</div>
      <div className={isOrdersActive ? 'hidden' : null}>Orders</div> */}
      {/* <ProfileCard /> */}
    </div>
  );
}
