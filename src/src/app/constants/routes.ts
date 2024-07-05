import { Home, Games, Bonuses, Activities, Leaderboard } from 'pages';
import { AppRoutes } from 'shared';

export const ROUTES = [
  {
    path: AppRoutes.HOME,
    element: Home
  },
  {
    path: AppRoutes.GAMES,
    element: Games
  },
  {
    path: AppRoutes.BONUS,
    element: Bonuses
  },
  {
    path: AppRoutes.ACTIVITY,
    element: Activities
  },
  {
    path: AppRoutes.COMMUNITY,
    element: Leaderboard
  }
];
