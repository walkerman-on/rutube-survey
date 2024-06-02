import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/pageLoader';

import { AppRoutesProps } from '../routeConfig/types';

function AppRouter(config: Record<any, AppRoutesProps>) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(config).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
