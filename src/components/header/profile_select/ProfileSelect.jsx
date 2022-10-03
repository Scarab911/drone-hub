import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import AccountImg from '../../../assets/icons/account.png';
import './profileSelect.css';

export default function ProfileSelect(props) {
  //Adding dropdown close on mouse click away
  const btnRef = useRef(); //needed to make event happen on specific btn

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', closeDropdown);
    return () => document.body.removeEventListener('click', closeDropdown);
  }, []);

  //adding dropdown on button click
  const [open, setOpen] = useState(false);
  if (open) console.log('paspausta:', open);

  return (
    <div className="profile-select-container" onClick={() => setOpen(!open)}>
      <img ref={btnRef} src={AccountImg} alt="Select profile dropdown" />
      <span>&or;</span>
      {open && props.children}
    </div>
  );
}
