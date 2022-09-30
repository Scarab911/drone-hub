import React from 'react';
import './dd_item.css';

export default function DropDownItem(props) {
  return <div className="dropdown-item">{props.children}</div>;
}
