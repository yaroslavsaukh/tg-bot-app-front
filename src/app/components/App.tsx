import { Route, Routes } from 'react-router-dom';

import { PagesCommonLayout } from './PagesCommonLayout';
import { ROUTES } from '../constants/routes';

export const App = () => {
  return (
    <Routes>
      <Route element={<PagesCommonLayout />}>
        {ROUTES.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};
