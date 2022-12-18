import React from 'react';
import './styles.css';
import phrases from '../../dictionary';
import { THeader } from './types';

const Header: THeader = () => {
  return (
    <div className="header">
      <h1>{phrases.headerTitle}</h1>
    </div>
  );
};

export default Header;
