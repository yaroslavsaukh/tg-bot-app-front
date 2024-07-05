import { FC } from 'react';

import { Outlet, Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute: FC<{
  isAuth: boolean | null;
  to: string;
}> = ({ isAuth, to }) => {
  const location = useLocation();

  const navigateState = !isAuth ? { from: location.pathname, search: location.search } : {};

  return isAuth ? <Outlet /> : <Navigate to={to} state={navigateState} replace />;
};
