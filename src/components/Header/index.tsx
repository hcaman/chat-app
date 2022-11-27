import React from 'react';
import './styles.css';
import phrases from '../../dictionary';
import { HeaderType } from './types';

const Header: HeaderType = () => {
  return (
    <div className="header">
      <h1>{phrases.headerTitle}</h1>
    </div>
  );
};

export default Header;
