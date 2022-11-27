import React from 'react';
import './styles.css';
import phrases from '../../dictionary';

const Header: () => JSX.Element = () => {
  return (
    <div className="header">
      <h1>{phrases.headerTitle}</h1>
    </div>
  );
};

export default Header;
