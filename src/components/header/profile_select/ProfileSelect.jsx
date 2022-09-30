import React, { useState } from 'react';
import AccountImg from '../../../assets/icons/account.png';
import './profileSelect.css';

export default function ProfileSelect(props) {
  const [open, setOpen] = useState(false);
  if (open) console.log('paspausta:', open);

  return (
    <div className="profile-select-container" onClick={() => setOpen(!open)}>
      <img src={AccountImg} alt="Select profile dropdown" />
      <span>&or;</span>
      {open && props.children}
    </div>
  );
}
