import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AppRoutesProps } from '../routeConfig/types';
import { PageLoader } from 'widgets/pageLoader';

const AppRouter = (config: Record<any, AppRoutesProps>) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(config).map(({ element, path}) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
