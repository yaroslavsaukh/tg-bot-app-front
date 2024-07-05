import { ReactComponent as ActivityIcon } from 'assets/svg/activity.svg';
import { ReactComponent as BonusIcon } from 'assets/svg/bonus.svg';
import { ReactComponent as CommunityIcon } from 'assets/svg/community.svg';
import { ReactComponent as GamesIcon } from 'assets/svg/games.svg';
import { ReactComponent as HomeIcon } from 'assets/svg/home.svg';
import { AppRoutes } from 'shared';

import { MenuItems } from '../types/menu-items.interfaces';

export const MENU_ITEMS: MenuItems[] = [
  {
    id: 1,
    icon: HomeIcon,
    header: 'Home',
    route: AppRoutes.HOME
  },
  {
    id: 2,
    icon: GamesIcon,
    header: 'Games',
    route: AppRoutes.GAMES
  },
  {
    id: 3,
    icon: BonusIcon,
    header: 'Bonus',
    route: AppRoutes.BONUS
  },
  {
    id: 4,
    icon: ActivityIcon,
    header: 'Activity',
    route: AppRoutes.ACTIVITY
  },
  {
    id: 5,
    icon: CommunityIcon,
    header: 'Community',
    route: AppRoutes.COMMUNITY
  }
];
