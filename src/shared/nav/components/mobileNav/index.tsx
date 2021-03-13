import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import { Buttons } from '../../../buttons';
import './styles.scss';
import { RenderLinks } from '../renderLinks';

export const MobileNav = () => {
  const [isOpened, setIsOpened] = useState(false);

  const open = () => setIsOpened(true);

  const close = () => setIsOpened(false);

  return (
    <div className='MobileNav'>
      <Buttons.BasicButton variant='outlined' onClick={open}>
        <MenuIcon />
      </Buttons.BasicButton>

      <Drawer anchor='left' open={isOpened} onClose={close} classes={{ root: 'MobileNav-Menu-wrapper' }}>
        <div className='MobileNav-Menu'>
          <RenderLinks closeMobileNav={close} />
        </div>
      </Drawer>
    </div>
  );
};
