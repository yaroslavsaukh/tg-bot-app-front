import { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  tooltipContent?: ReactNode;
}

export const TitleWithSubtitle = ({ title, subtitle, tooltipContent }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col flex-1">
        <span className="text-2xl">{title}</span>
        <span className="text-sm">{subtitle}</span>
      </div>
      {tooltipContent && <div className="flex gap-2">{tooltipContent}</div>}
    </div>
  );
};
