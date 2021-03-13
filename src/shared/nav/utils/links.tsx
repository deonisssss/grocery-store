import React from 'react';
import { NavLink } from '../ts';
import AppleIcon from '@material-ui/icons/Apple';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HomeIcon from '@material-ui/icons/Home';
import { ROUTES } from '../../../router/constants';

export const links: Array<NavLink> = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    to: ROUTES.main,
  },
  {
    title: 'Shop',
    icon: <AppleIcon />,
    to: ROUTES.shop,
  },
  {
    title: 'Basket',
    icon: <ShoppingBasketIcon />,
    to: ROUTES.basket,
  },
];
