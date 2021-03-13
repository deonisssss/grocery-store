import React, { FC, useEffect } from 'react';
import './styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../shared/header';
import { Footer } from '../../shared/footer';
import { useShopSlice } from '../shop/hooks/useShopSlice';
import { localStorageProcessor } from '../../utils/localStorageProcessor';

type Props = {
  children: JSX.Element;
};

export const Layout: FC<Props> = props => {
  const { children } = props;
  const { onSetBasketFromLocalStorage } = useShopSlice();

  useEffect(() => {
    const setBasketFromLocalStorage = () => {
      const basket = localStorageProcessor.getBasket();
      onSetBasketFromLocalStorage(basket);
    };

    setBasketFromLocalStorage();
  }, [onSetBasketFromLocalStorage]);

  return (
    <div className='Layout'>
      <BrowserRouter>
        <div className='Layout'>
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};
