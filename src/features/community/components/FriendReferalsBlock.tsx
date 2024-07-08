import { useEffect } from 'react';

import { ReactComponent as AlertIcon } from 'assets/svg/alert.svg';
import {
  asyncGetLeaderboard,
  Button,
  ButtonVariants,
  Modal,
  selectLeaderboard,
  selectUser,
  TitleWithSubtitle,
  useAppDispatch,
  useAppSelector,
  useOpen
} from 'shared';

import { LeaderboardList } from './LeaderboardList';

export const FriendReferalsBlock = () => {
  const [isModalOpened, handleOpenModal, handleCloseModal] = useOpen();

  const dispatch = useAppDispatch();

  const leaderboardData = useAppSelector(selectLeaderboard);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!user) return;
    dispatch(asyncGetLeaderboard({ limit: 10, page: 0, user_id: user.id }));
  }, [dispatch, user]);

  if (!leaderboardData) return null;

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
      <LeaderboardList data={leaderboardData.leaderboard.users} />
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
