import cn from 'classnames';

import { LeaderboardCard } from 'entities/community';
import { User } from 'shared';

interface Props {
  title?: string;
  isTitleUnstyled?: boolean;
  data: User[];
}

export const LeaderboardList = ({ title, isTitleUnstyled, data }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <span
          className={cn({
            'p-4 text-lg border rounded-md text-center bg-blue-100': !isTitleUnstyled
          })}
        >
          {title}
        </span>
      )}
      {data.map((leaderboardItem, index) => (
        <LeaderboardCard key={leaderboardItem.id} position={index + 1} data={leaderboardItem} />
      ))}
    </div>
  );
};
