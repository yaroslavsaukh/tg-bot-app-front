import { TitleWithSubtitle } from 'shared';

import { GamesList } from './GamesList';

export const GamesTiers = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleWithSubtitle title="Games" subtitle="Play and earn 🥰" tooltipContent="⠀" />
      <GamesList title={'Tier 1'} />
      <GamesList title={'Tier 2'} />
      <GamesList title={'Tier 3'} />
    </div>
  );
};
