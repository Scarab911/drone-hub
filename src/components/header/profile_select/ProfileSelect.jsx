import React from 'react';
import AccountImg from '../../../assets/icons/account.png';
import './profileSelect.css';

export default function ProfileSelect() {
  return (
    <div className="profile-select-container">
      <img src={AccountImg} alt="Select profile dropdown" />
      <span>&or;</span>
    </div>
  );
}
