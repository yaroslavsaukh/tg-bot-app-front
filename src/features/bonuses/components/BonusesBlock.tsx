import { ReactComponent as AlertIcon } from 'assets/svg/alert.svg';
import { Button, ButtonVariants, Modal, TitleWithSubtitle, useOpen } from 'shared';

import { BonusesList } from './BonusesList';

export const BonusesBlock = () => {
  const [isModalOpened, handleOpenModal, handleCloseModal] = useOpen();

  return (
    <div className="flex flex-col gap-6">
      <TitleWithSubtitle
        title="Bonuses"
        tooltipContent={
          <Button variant={ButtonVariants.TRANSPARENT} onClick={handleOpenModal}>
            <AlertIcon className="w-8 h-8" />
          </Button>
        }
      />
      <BonusesList title="Static bonus" isTitleUnstyled />
      <BonusesList title="Float bonus" isTitleUnstyled />
      <BonusesList title="Invite bonus" isTitleUnstyled />
      <Modal isOpened={isModalOpened} handleClose={handleCloseModal}>
        <p>
          1 iteration (hmm... ) Static bonus Can get if user have TG premiunm Float bonus Based on
          daily friends activity (ex.: users enter every day to app + friends claim min 3 times per
          day + friends play 1 or 2 games evety day) Enter activity - 1% for every day enter (7%
          summary if user enter from every 24h. 7% max. if user lost 1 min, decline bonus) Invite
          bonus Invite friend and get static amount of GWTC
        </p>
      </Modal>
    </div>
  );
};
