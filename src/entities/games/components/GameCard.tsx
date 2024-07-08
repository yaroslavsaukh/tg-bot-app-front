import { ReactComponent as PlaceholderIcon } from 'assets/svg/placeholder.svg';
import { ReactComponent as ArrowIcon } from 'assets/svg/right_arrow.svg';
import { Button, ButtonVariants, Game } from 'shared';

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <div className="border rounded-md p-2 flex gap-2 items-center">
      {game.icon ? (
        <PlaceholderIcon className="w-10 h-10" />
      ) : (
        <PlaceholderIcon className="w-10 h-10" />
      )}
      <div className="flex flex-col flex-1">
        <span>{game.title}</span>
        <span className="text-sm">
          up to {game?.max_reward ?? 0} GWTC <span className="underline">Economic TBD</span>
        </span>
      </div>
      <Button variant={ButtonVariants.TRANSPARENT}>
        <ArrowIcon className="w-8 h-8" />
      </Button>
    </div>
  );
};
