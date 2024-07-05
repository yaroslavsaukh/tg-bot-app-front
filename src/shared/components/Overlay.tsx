import { FC } from 'react';

import { twMerge } from 'tailwind-merge';

export interface Props {
  isShown?: boolean;
  onClick?: VoidFunction;
  className?: string;
}
export const Overlay: FC<Props> = ({ isShown, onClick, className }) => {
  if (!isShown && isShown !== undefined) return null;

  return (
    <div
      onClick={onClick}
      className={twMerge(
        'w-screen h-screen bg-gray-400 opacity-50 fixed left-0 top-0 z-10 overflow-hidden',
        className
      )}
    />
  );
};
