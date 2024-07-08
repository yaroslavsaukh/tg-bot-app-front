import { ReactComponent as PlaceholderIcon } from 'assets/svg/placeholder.svg';
import { User } from 'shared';

interface Props {
  position: number;
  data: User;
}

export const LeaderboardCard = ({ position, data }: Props) => {
  return (
    <div className="flex justify-between p-2 rounded-md border items-center">
      <div className="flex gap-4 items-center">
        <span>{position}</span>
        {data?.photo_url ? (
          <img src={data.photo_url} alt="avatar" className="w-8 h-8 rounded-md" />
        ) : (
          <PlaceholderIcon className="w-8 h-8" />
        )}

        <span>{data?.username ?? data.first_name}</span>
      </div>
      <span>{data?.balance} GWTC</span>
    </div>
  );
};
