import { GameCard } from 'entities/games';

interface Props {
  title?: string;
}

export const GamesList = ({ title }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <span className="p-4 text-lg border rounded-md text-center bg-blue-100">{title}</span>
      )}
      {Array.from({ length: 3 }, (_, i) => (
        <GameCard key={i} />
      ))}
    </div>
  );
};
