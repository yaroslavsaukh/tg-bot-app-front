import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

import { ReactComponent as LoadingIcon } from 'assets/svg/loading.svg';

import { ButtonVariantsStyles } from '../constants/button';
import { ButtonVariants } from '../types/button.interfaces';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  loaderClassName?: string;
  variant?: ButtonVariants;
  isLoading?: boolean;
}

export const Button: FC<Props> = ({
  children,
  className,
  loaderClassName,
  isLoading,
  disabled,
  variant = ButtonVariants.MAIN,
  ...props
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        'w-fit relative disabled:pointer-events-none flex items-center rounded-lg transition-all disabled:opacity-50',
        ButtonVariantsStyles[variant],
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <div
          className={twMerge(
            cn(
              'absolute z-40 -inset-px bg-gray2 border-gray1 flex rounded-lg items-center justify-center',
              loaderClassName
            )
          )}
        >
          <LoadingIcon className="w-7 h-7" />
        </div>
      )}
      {children}
    </button>
  );
};
