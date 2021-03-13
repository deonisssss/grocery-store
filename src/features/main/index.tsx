import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import HomeIcon from '@material-ui/icons/Home';
import './styles.scss';

const Main = () => {
  return (
    <div className='Main'>
      <div className='page-icon'>
        <HomeIcon fontSize='large' />
      </div>

      <div className='Main-content'>
        <div>
          Hi! We glad to introduce you our little Grocery Store where you can buy some fruits. In our{' '}
          <Link to={ROUTES.shop} className='regular-link'>
            shop
          </Link>{' '}
          you can find bananas, apples and papayas. Also we offer a system of discounts for some products.
        </div>

        <div>Enjoy! :)</div>
      </div>
    </div>
  );
};

export default Main;
