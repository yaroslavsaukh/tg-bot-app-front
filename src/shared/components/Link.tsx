import { FC, ReactNode } from 'react';

import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { LinkVariantsStyles } from '../constants/link';
import { LinkVariants } from '../types/link.interfaces';

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
  variant?: LinkVariants;
}

export const Link: FC<Props> = ({ children, className, variant = LinkVariants.MAIN, ...props }) => {
  return (
    <RouterLink
      className={twMerge(
        'w-fit relative disabled:pointer-events-none flex items-center py-2.5 px-4 rounded-lg transition-all',
        LinkVariantsStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
