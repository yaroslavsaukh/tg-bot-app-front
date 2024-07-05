import { LinkVariants } from '../types/link.interfaces';

export const LinkVariantsStyles: { [key in LinkVariants]: string } = {
  [LinkVariants.MAIN]: 'border justify-center hover:bg-transparent',
  [LinkVariants.TRANSPARENT]: 'bg-transparent border-none rounded-none'
};
