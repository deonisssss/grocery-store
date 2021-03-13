import React, { Suspense } from 'react';
import { Meta } from '../shared/meta';
import { BRAND } from '../utils/constants';
import { Loading } from '../shared/loading';
const MainPageComponent = React.lazy(() => import('../features/main'));

export const MainPage = () => {
  return (
    <>
      <Meta title={`${BRAND} | Buy fruits`} />
      <Suspense fallback={<Loading />}>
        <MainPageComponent />
      </Suspense>
    </>
  );
};
