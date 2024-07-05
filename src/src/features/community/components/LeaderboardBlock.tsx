import { ReactComponent as AlertIcon } from 'assets/svg/alert.svg';
import { Button, ButtonVariants, Modal, TitleWithSubtitle, useOpen } from 'shared';

import { LeaderboardList } from './LeaderboardList';

export const LeaderboardBlock = () => {
  const [isModalOpened, handleOpenModal, handleCloseModal] = useOpen();

  return (
    <div className="flex flex-col gap-6">
      <TitleWithSubtitle
        title="Leaderboard"
        subtitle="Your position - 345 place"
        tooltipContent={
          <Button variant={ButtonVariants.TRANSPARENT} onClick={handleOpenModal}>
            <AlertIcon className="w-8 h-8" />
          </Button>
        }
      />
      <LeaderboardList />
      <Modal isOpened={isModalOpened} handleClose={handleCloseModal}>
        <p>More information on the formation of the leaderboard will be coming soon</p>
      </Modal>
    </div>
  );
};
