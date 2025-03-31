import React from 'react';
import dpsLogo from '../assets/DPS.svg';

export const Header: React.FC = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src={dpsLogo} className="logo" alt="DPS logo" width={100} height={32} />
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Features</a></li>

          <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
