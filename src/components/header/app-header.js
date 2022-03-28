import React from 'react';
import './app-header.css';
import { Link } from 'react-router-dom';

const AppHeader = ({ children }) => (
  <Link to={{ pathname: '/' }}>
    <div className="header-bkgd">
      <div className="header-container">
        <div className="logo">ReadNook</div>
      </div>
    </div>
    {children}
  </Link>
);

export default AppHeader;
