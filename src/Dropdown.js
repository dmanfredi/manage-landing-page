import React from 'react';
import './Dropdown.css';

const Dropdown = ({ toggleInMenu, inMenu }) => {
  document.addEventListener('scroll', () => toggleInMenu(false), false);

  return (
    <div className="darkening-wrapper" onClick={() => toggleInMenu(false)}>
      <div className="menu-container slide-in-top">
        <a href="https://dylanmanfredi.xyz/" className="menu-link">
          Pricing
        </a>
        <a href="https://dylanmanfredi.xyz/" className="menu-link">
          Product
        </a>
        <a href="https://dylanmanfredi.xyz/" className="menu-link">
          About Us
        </a>
        <a href="https://dylanmanfredi.xyz/" className="menu-link">
          Careers
        </a>
        <a href="https://dylanmanfredi.xyz/" className="menu-link">
          Community
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
