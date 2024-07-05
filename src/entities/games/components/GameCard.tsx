import { ReactComponent as PlaceholderIcon } from 'assets/svg/placeholder.svg';
import { ReactComponent as ArrowIcon } from 'assets/svg/right_arrow.svg';
import { Button, ButtonVariants } from 'shared';

export const GameCard = () => {
  return (
    <div className="border rounded-md p-2 flex gap-2 items-center">
      <PlaceholderIcon className="w-10 h-10" />
      <div className="flex flex-col flex-1">
        <span>Game 1</span>
        <span className="text-sm">
          up to 1000 GWTC <span className="underline">Economic TBD</span>
        </span>
      </div>
      <Button variant={ButtonVariants.TRANSPARENT}>
        <ArrowIcon className="w-8 h-8" />
      </Button>
    </div>
  );
};
