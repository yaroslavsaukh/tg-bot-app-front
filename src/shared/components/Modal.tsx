import { FC, ReactNode } from 'react';

import cn from 'classnames';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { ReactComponent as CloseIcon } from 'assets/svg/close.svg';

import { Button } from './Button';
import { Overlay } from './Overlay';
import { ButtonVariants } from '../types/button.interfaces';

interface Props {
  isOpened: boolean;
  handleClose: VoidFunction;
  children: ReactNode;
  modalClassName?: string;
  header?: string;
}

export const Modal: FC<Props> = ({ isOpened, handleClose, children, modalClassName, header }) => {
  return createPortal(
    <div
      id="modal"
      className={twMerge(
        cn(
          'inset-0 fixed invisible flex transition-all items-center opacity-0 justify-center z-[1000] h-screen w-screen',
          {
            'visible opacity-100': isOpened
          }
        )
      )}
    >
      <div
        className={twMerge(
          'flex flex-col p-5 rounded-xl w-full md:w-3/5 lg:w-2/5 m-4 bg-white z-50',
          modalClassName
        )}
      >
        <div className="flex flex-row-reverse items-center">
          <div className="flex flex-1 justify-end p-2">
            <Button variant={ButtonVariants.TRANSPARENT} onClick={handleClose} className="self-end">
              <CloseIcon className="w-6 h-6" />
            </Button>
          </div>
          {header && (
            <>
              <span className="flex-1 text-center text-xl">{header}</span>
              <div className="flex-1" />
            </>
          )}
        </div>

        <div>{children}</div>
      </div>
      <Overlay onClick={handleClose} />
    </div>,
    document.getElementById('modal') as HTMLElement
  );
};
