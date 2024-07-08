import { useState } from 'react';

import { ReactComponent as CastIcon } from 'assets/svg/cast.svg';
import { ReactComponent as CompassIcon } from 'assets/svg/compass.svg';
import { Button, ButtonVariants, Countdown } from 'shared';

export const Clicker = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="h-full flex-1 flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-4 items-center">
        <Button
          variant={ButtonVariants.TRANSPARENT}
          onClick={() => setCount((prevState) => (prevState += 1))}
        >
          <CompassIcon className="w-64 h-64 stroke-black" />
        </Button>
        <CastIcon className="w-16 h-16" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <span>
          Time left: <Countdown />
        </span>
        <Button variant={ButtonVariants.OUTLINED} className="py-4 px-12 w-full">
          CLAIM {count} GWTC
        </Button>
      </div>
    </div>
  );
};
