import { ReactComponent as CastIcon } from 'assets/svg/cast.svg';
import { ReactComponent as CompassIcon } from 'assets/svg/compass.svg';
import { Button, ButtonVariants } from 'shared';

export const Clicker = () => {
  return (
    <div className="h-full flex-1 flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-4 items-center">
        <Button variant={ButtonVariants.TRANSPARENT}>
          <CompassIcon className="w-64 h-64 stroke-black" />
        </Button>
        <CastIcon className="w-16 h-16" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <span>Time left: 1h 37m 16s</span>
        <Button variant={ButtonVariants.OUTLINED} className="py-4 px-12 w-full">
          CLAIM 555 GWTC
        </Button>
      </div>
    </div>
  );
};
