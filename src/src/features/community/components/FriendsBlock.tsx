import { useState } from 'react';

import { ReactComponent as AlertIcon } from 'assets/svg/alert.svg';
import { ReactComponent as UsersIcon } from 'assets/svg/users.svg';
import { Button, ButtonVariants, Modal, TitleWithSubtitle, useOpen } from 'shared';

import { LeaderboardList } from './LeaderboardList';

export const FriendBlock = () => {
  const [isModalOpened, handleOpenModal, handleCloseModal] = useOpen();
  const [isUserModal, setIsUserModal] = useState(false);

  const onUserOpenModal = () => {
    setIsUserModal(true);
    handleOpenModal();
  };
  const onInfoOpenModal = () => {
    setIsUserModal(false);
    handleOpenModal();
  };

  return (
    <div className="flex flex-col gap-6">
      <TitleWithSubtitle
        title="Friends"
        subtitle="Basic - 5%  Premium - 9%"
        tooltipContent={
          <>
            <Button variant={ButtonVariants.TRANSPARENT} onClick={onUserOpenModal}>
              <UsersIcon className="w-8 h-8" />
            </Button>
            <Button variant={ButtonVariants.TRANSPARENT} onClick={onInfoOpenModal}>
              <AlertIcon className="w-8 h-8" />
            </Button>
          </>
        }
      />
      <LeaderboardList count={4} />
      <Modal isOpened={isModalOpened} handleClose={handleCloseModal}>
        {isUserModal ? (
          <div className="flex flex-col gap-2 ">
            <Button className="p-2 w-full">Send invite (in telegramm)</Button>
            <Button className="p-2 w-full">Copy link</Button>
          </div>
        ) : (
          <p>
            Friends Invite your friends and get more points! Accruals: - 5% of points for each
            friend - 9% points for each friend with Telegram Premium
          </p>
        )}
      </Modal>
    </div>
  );
};
