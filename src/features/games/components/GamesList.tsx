import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { GameCard } from 'entities/games';
import { Button, ButtonVariants, Game } from 'shared';

interface Props {
  title?: string;
  games: Game[];
}

export const GamesList = ({ title, games }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(title !== 'Tier 1');
  const firstGameCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isCollapsed && firstGameCardRef.current) {
      timer = setTimeout(() => {
        firstGameCardRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [isCollapsed]);

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
          'grid-rows-auto': !isCollapsed
        })}
      >
        <div className="flex flex-col gap-2 overflow-hidden">
          {games.map((game, index) => (
            <div key={game.title} ref={index === 0 ? firstGameCardRef : null}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
