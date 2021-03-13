import React from 'react';
import './styles.scss';
import { MobileNav } from './components/mobileNav';
import { DesktopNav } from './components/desktopNav';

export const Nav = () => {
  return (
    <nav>
      <DesktopNav />

      <MobileNav />
    </nav>
  );
};
