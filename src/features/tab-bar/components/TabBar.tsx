import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import { Link, LinkVariants } from 'shared';

import { MENU_ITEMS } from '../constants/menu-items';

export const TabBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="grid grid-cols-5 gap-1 border-t-2 pt-2">
      {MENU_ITEMS.map(({ id, icon: Icon, header, route }) => (
        <Link
          variant={LinkVariants.TRANSPARENT}
          to={route}
          key={id}
          className={cn('w-full flex flex-col gap-2 items-center', {
            'bg-slate-100': pathname === route
          })}
        >
          <Icon className="w-8 h-8 stroke-black" />
          <span className="text-xs sm:text-base">{header}</span>
        </Link>
      ))}
    </div>
  );
};
