import React from 'react';
import './styles.scss';
import { BRAND } from '../../utils/constants';
import { Nav } from '../nav';

export const Header = () => {
  return (
    <header>
      <Nav />

      <h1 className='brand'>{BRAND}</h1>
    </header>
  );
};
