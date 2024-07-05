import { UserCard } from 'entities/user';
import { UserActions } from 'features/user';

export const UserProfile = () => {
  return (
    <div className="flex justify-between">
      <UserCard />
      <UserActions />
    </div>
  );
};
