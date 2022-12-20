import React from 'react';
import './styles.css';
import phrases from '../../dictionary';
import { HeaderT } from './types';

const Header: HeaderT = () => {
  return (
    <div className="header">
      <h1>{phrases.headerTitle}</h1>
    </div>
  );
};

export default Header;
