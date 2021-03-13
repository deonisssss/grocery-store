import React, { Suspense } from 'react';
import { Meta } from '../shared/meta';
import { BRAND } from '../utils/constants';
import { Loading } from '../shared/loading';
const ShopPageComponent = React.lazy(() => import('../features/shop'));

export const ShopPage = () => {
  return (
    <>
      <Meta title={`${BRAND} | Shop`} />
      <Suspense fallback={<Loading />}>
        <ShopPageComponent />
      </Suspense>
    </>
  );
};
