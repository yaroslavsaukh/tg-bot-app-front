import { ReactComponent as PlaceholderIcon } from 'assets/svg/placeholder.svg';

export const UserCard = () => {
  return (
    <div className="flex items-center gap-2 flex-1">
      <PlaceholderIcon className="w-12 h-12 rounded-md" />
      <div className="flex flex-col">
        <span>Nickname</span>
        <span className="text-xs">Rank: soon</span>
      </div>
    </div>
  );
};
