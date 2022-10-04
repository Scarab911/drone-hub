import React from 'react';
import '../drop_down_menu/dropdown.css';
import DropDownItem from './dd_item/DropDownItem';
import { Link } from 'react-router-dom';

export default function DropDownMenu() {
  return (
    <div className="drop-down-menu">
      <DropDownItem>
        <Link to="/setttings">Nustatymai</Link>
      </DropDownItem>
      <DropDownItem>
        <Link to="/orders">Užsakymai</Link>
      </DropDownItem>
      <DropDownItem>
        <Link to="/">Atsijungti</Link>
      </DropDownItem>
      <DropDownItem>
        <Link to="/login">Prisijungti</Link>
      </DropDownItem>
    </div>
  );
}
