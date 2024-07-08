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

export const LeaderboardBlock = () => {
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
        title="Leaderboard"
        subtitle={`Your position - ${leaderboardData.position}`}
        tooltipContent={
          <Button variant={ButtonVariants.TRANSPARENT} onClick={handleOpenModal}>
            <AlertIcon className="w-8 h-8" />
          </Button>
        }
      />
      <LeaderboardList data={leaderboardData.leaderboard.users} />
      <Modal isOpened={isModalOpened} handleClose={handleCloseModal}>
        <p>More information on the formation of the leaderboard will be coming soon</p>
      </Modal>
    </div>
  );
};
