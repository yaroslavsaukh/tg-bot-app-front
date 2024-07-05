import { ButtonVariants } from '../types/button.interfaces';

export const ButtonVariantsStyles: { [key in ButtonVariants]: string } = {
  [ButtonVariants.MAIN]: 'border justify-center',
  [ButtonVariants.OUTLINED]: 'border justify-center',
  [ButtonVariants.TRANSPARENT]: 'justify-center'
};
