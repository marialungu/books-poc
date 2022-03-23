import React from 'react';
import './app-header.css';
const AppHeader = ({children}) => {
  return (
    <div>
      <div className="header-bkgd">
        <div className="header-container">
          <div className="logo">ReadNook</div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default AppHeader;
