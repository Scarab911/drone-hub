import React from 'react';
import LtLangImage from '../../../assets/icons/ltu.png';
import './languageSelector.css';

export default function LanguageSelector() {
  return (
    <div className="lang-select-container">
      <img src={LtLangImage} alt="Select Lithuanian language" />
      <span>&or;</span>
    </div>
  );
}
