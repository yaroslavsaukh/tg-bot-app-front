import { ReactComponent as PlaceholderIcon } from 'assets/svg/placeholder.svg';

interface Props {
  position: number;
}

export const LeaderboardCard = ({ position }: Props) => {
  return (
    <div className="flex justify-between p-2 rounded-md border items-center">
      <div className="flex gap-4 items-center">
        <span>{position}</span>
        <PlaceholderIcon className="w-8 h-8" />
        <span>USERNAME</span>
      </div>
      <span>18537 GWTC</span>
    </div>
  );
};
