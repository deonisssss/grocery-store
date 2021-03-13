import React, { Suspense } from 'react';
import { Meta } from '../shared/meta';
import { BRAND } from '../utils/constants';
import { Loading } from '../shared/loading';
const BasketPageComponent = React.lazy(() => import('../features/basket'));

export const BasketPage = () => {
  return (
    <>
      <Meta title={`${BRAND} | Basket`} />
      <Suspense fallback={<Loading />}>
        <BasketPageComponent />
      </Suspense>
    </>
  );
};
