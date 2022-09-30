import React from 'react';
import DropDownItem from './dd_item/DropDownItem';
import '../drop_down_menu/dropdown.css';

export default function DropDownMenu() {
  return (
    <div className="drop-down-menu">
      <DropDownItem>Nustatymai</DropDownItem>
      <DropDownItem>Uzsakymai</DropDownItem>
      <DropDownItem>Atsijungti</DropDownItem>
      <DropDownItem>Prisijungti</DropDownItem>
    </div>
  );
}
