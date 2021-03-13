import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import { MainPage } from '../pages/mainPage';
import { ShopPage } from '../pages/shopPage';
import { BasketPage } from '../pages/basketPage';

export const Router = () => {
  return (
    <Switch>
      <Route path={ROUTES.main} exact component={MainPage} />
      <Route path={ROUTES.shop} component={ShopPage} />
      <Route path={ROUTES.basket} component={BasketPage} />
    </Switch>
  );
};
