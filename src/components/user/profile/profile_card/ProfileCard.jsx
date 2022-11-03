import React from 'react';
import userPhoto from '../../../../../src/assets/images/profile2.png';

//style
import '../profile_card/profileCard.css';

export default function ProfileCard() {
  return (
    <div className="profile-card-grid">
      <img className="user-photo" src={userPhoto} alt="user" />
      <p className="user-name">Vardenis</p>
      <p className="user-surname">Pavardenis</p>
      <p className="user-city">Vilnius</p>
    </div>
  );
}
