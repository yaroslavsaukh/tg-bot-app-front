import { useState } from 'react';

export const useOpen = (initialValue?: boolean): [boolean, VoidFunction, VoidFunction] => {
  const [isOpen, setIsOpen] = useState(initialValue || false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return [isOpen, handleOpen, handleClose];
};
