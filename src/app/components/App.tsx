import { useEffect } from 'react';

import eruda from 'eruda';
import { Route, Routes } from 'react-router-dom';

import { asyncGetUser, useAppDispatch } from 'shared';

import { PagesCommonLayout } from './PagesCommonLayout';
import { ROUTES } from '../constants/routes';

export const App = () => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const tg = window?.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
    tg.expand();
    eruda.init();
    dispatch(asyncGetUser({ id: 12341234, ...tg?.initDataUnsafe?.user }));
  }, [tg, dispatch]);

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
