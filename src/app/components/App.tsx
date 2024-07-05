import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { PagesCommonLayout } from './PagesCommonLayout';
import { ROUTES } from '../constants/routes';

export const App = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const tg = window?.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, [tg]);

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
