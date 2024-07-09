import { useState } from 'react';

import cn from 'classnames';

import { ReactComponent as CastIcon } from 'assets/svg/cast.svg';
import { ReactComponent as CompassIcon } from 'assets/svg/compass.svg';
import { Button, ButtonVariants, Countdown, useBendEffect } from 'shared';

export const Clicker = () => {
  const { tiltStyle, handleMouseMove, handleMouseLeave } = useBendEffect();

  const [count, setCount] = useState(0);
  const [isBumping, setIsBumping] = useState(false);

  const onClick = () => {
    setCount((prevState) => (prevState += 1));
    setIsBumping(true);
    setTimeout(() => setIsBumping(false), 500);
  };

  return (
    <div className="h-full flex-1 flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center text-3xl">
          <span>Total balance</span>
          <span>{count} GWTC</span>
        </div>
        <Button
          className="duration-75 transition-transform ease-out transform"
          variant={ButtonVariants.TRANSPARENT}
          style={tiltStyle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        >
          <CompassIcon className={cn('w-64 h-64 stroke-black', { 'animate-bump': isBumping })} />
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
