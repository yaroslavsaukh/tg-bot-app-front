import { useEffect } from 'react';

import {
  asyncGetTasks,
  selectTasks,
  TitleWithSubtitle,
  useAppDispatch,
  useAppSelector
} from 'shared';

import { TasksList } from './TasksList';

export const TasksBlock = () => {
  const dispatch = useAppDispatch();

  const tasks = useAppSelector(selectTasks);

  useEffect(() => {
    dispatch(asyncGetTasks());
  }, [dispatch]);

  if (!tasks?.length) return null;

  return (
    <div className="flex flex-col gap-6">
      <TitleWithSubtitle title="Tasks" subtitle="Play and earn 🥰" tooltipContent="⠀" />
      <TasksList title="Subscribe" isTitleUnstyled />
      <TasksList title="Special campaigns" isTitleUnstyled />
    </div>
  );
};
