import cn from 'classnames';

import { LeaderboardCard } from 'entities/community';

interface Props {
  title?: string;
  isTitleUnstyled?: boolean;
  count?: number;
}

export const LeaderboardList = ({ title, isTitleUnstyled, count = 10 }: Props) => {
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
      {Array.from({ length: count }, (_, i) => (
        <LeaderboardCard key={i} position={i + 1} />
      ))}
    </div>
  );
};
