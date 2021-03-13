import React from 'react';
import './styles.scss';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Layout } from '../layout';
import { Router } from '../../router';

export const Root = () => {
  return (
    <div className='Root'>
      <Provider store={store}>
        <Layout>
          <Router />
        </Layout>
      </Provider>
    </div>
  );
};
