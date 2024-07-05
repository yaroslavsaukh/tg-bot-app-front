import { useState } from 'react';

import cn from 'classnames';

import { GameCard } from 'entities/games';
import { Button, ButtonVariants } from 'shared';

interface Props {
  title?: string;
}

export const GamesList = ({ title }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      {title && (
        <Button
          onClick={() => setIsCollapsed((prevState) => !prevState)}
          variant={ButtonVariants.TRANSPARENT}
          className="p-4 w-full text-lg border rounded-md text-center bg-blue-100"
        >
          {title}
        </Button>
      )}

      <div
        className={cn('grid transition-all duration-500 grid-rows-0', {
          'grid-rows-auto': !isCollapsed || title === 'Tier 1'
        })}
      >
        <div className="flex flex-col gap-2 overflow-hidden">
          {Array.from({ length: 3 }, (_, i) => (
            <GameCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
