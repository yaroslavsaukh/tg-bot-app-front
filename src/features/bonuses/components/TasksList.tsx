import cn from 'classnames';

import { TaskCard } from 'entities/bonuses';

interface Props {
  title?: string;
  isTitleUnstyled?: boolean;
}

export const TasksList = ({ title, isTitleUnstyled }: Props) => {
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
      {Array.from({ length: 3 }, (_, i) => (
        <TaskCard key={i} isDone={i % 2 === 0} />
      ))}
    </div>
  );
};
