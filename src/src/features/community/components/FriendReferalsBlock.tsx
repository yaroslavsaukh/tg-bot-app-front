import { ReactComponent as AlertIcon } from 'assets/svg/alert.svg';
import { Button, ButtonVariants, Modal, TitleWithSubtitle, useOpen } from 'shared';

import { LeaderboardList } from './LeaderboardList';

export const FriendReferalsBlock = () => {
  const [isModalOpened, handleOpenModal, handleCloseModal] = useOpen();

  return (
    <div className="flex flex-col gap-6">
      <TitleWithSubtitle
        title="Friends referals"
        subtitle="Basic - 1%  Premium - 3%"
        tooltipContent={
          <Button variant={ButtonVariants.TRANSPARENT} onClick={handleOpenModal}>
            <AlertIcon className="w-8 h-8" />
          </Button>
        }
      />
      <LeaderboardList count={5} />
      <Modal isOpened={isModalOpened} handleClose={handleCloseModal}>
        <p>
          Friends Referals You can see the referrals of your friends whom they invited and get
          points for them! Accruals: - 1% of points for each friend - 3% points for each friend with
          Telegram Premium
        </p>
      </Modal>
    </div>
  );
};
