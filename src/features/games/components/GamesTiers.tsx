import { useEffect } from 'react';

import {
  asyncGetTiers,
  selectTiers,
  TitleWithSubtitle,
  useAppDispatch,
  useAppSelector
} from 'shared';

import { GamesList } from './GamesList';

export const GamesTiers = () => {
  const dispatch = useAppDispatch();

  const tiers = useAppSelector(selectTiers);

  useEffect(() => {
    dispatch(asyncGetTiers());
  }, [dispatch]);

  if (!tiers?.length) return null;

  return (
    <div className="flex flex-col gap-4">
      <TitleWithSubtitle title="Games" subtitle="Play and earn 🥰" tooltipContent="⠀" />
      {tiers.map(({ title, games }) => (
        <GamesList key={title} title={title} games={games} />
      ))}
    </div>
  );
};
