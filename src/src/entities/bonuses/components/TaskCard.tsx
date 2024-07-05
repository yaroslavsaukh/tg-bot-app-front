import { ReactComponent as CheckedIcon } from 'assets/svg/checked.svg';
import { ReactComponent as PlaceholderIcon } from 'assets/svg/placeholder.svg';
import { ReactComponent as ArrowIcon } from 'assets/svg/right_arrow.svg';
import { Button, ButtonVariants } from 'shared';

interface Props {
  isDone?: boolean;
}

export const TaskCard = ({ isDone }: Props) => {
  return (
    <div className="border rounded-md p-2 flex gap-2 items-center">
      <PlaceholderIcon className="w-10 h-10" />
      <div className="flex flex-col flex-1">
        <span>Name of channel or bot</span>
        <span className="text-sm">@link_tag</span>
      </div>
      <Button variant={ButtonVariants.TRANSPARENT}>
        {isDone ? <CheckedIcon className="w-8 h-8" /> : <ArrowIcon className="w-8 h-8" />}
      </Button>
    </div>
  );
};
