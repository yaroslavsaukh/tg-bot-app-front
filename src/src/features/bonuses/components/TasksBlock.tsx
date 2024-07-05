import { TitleWithSubtitle } from 'shared';

import { TasksList } from './TasksList';

export const TasksBlock = () => {
  return (
    <div className="flex flex-col gap-6">
      <TitleWithSubtitle title="Tasks" subtitle="Play and earn 🥰" tooltipContent="⠀" />
      <TasksList title="Subscribe" isTitleUnstyled />
      <TasksList title="Special campaigns" isTitleUnstyled />
    </div>
  );
};
