import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import AccountImg from '../../../assets/icons/account.png';
import './profileSelect.css';

export default function ProfileSelect(props) {
  //adding dropdown on button click
  const [open, setOpen] = useState(false);
  if (open) console.log('paspausta:', open);

  //Adding dropdown close on mouse click away
  const btnRef = useRef(); //marking the place to compare was it clicked on it or not

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      //checking was it clicked on a reference
      if (open && btnRef.current && !btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    //listening for click to happen
    document.body.addEventListener('click', checkIfClickedOutside);
    return () =>
      document.body.removeEventListener('click', checkIfClickedOutside);
  }, [setOpen]);

  return (
    <div
      ref={btnRef}
      className="profile-select-container"
      onClick={() => setOpen(!open)}
    >
      <img src={AccountImg} alt="Select profile dropdown" />
      <span>&or;</span>
      {/* <div className="background"></div> */}
      {open && props.children}
    </div>
  );
}
