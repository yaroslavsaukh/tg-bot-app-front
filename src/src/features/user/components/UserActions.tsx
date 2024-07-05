import { ReactComponent as MessagesIcon } from 'assets/svg/messages.svg';
import { ReactComponent as SettingsIcon } from 'assets/svg/settings.svg';
import { Button, ButtonVariants } from 'shared';

export const UserActions = () => {
  return (
    <div className="flex gap-4">
      <Button variant={ButtonVariants.TRANSPARENT}>
        <MessagesIcon className="w-8 h-8 stroke-black" />
      </Button>
      <Button variant={ButtonVariants.TRANSPARENT}>
        <SettingsIcon className="w-8 h-8 stroke-black" />
      </Button>
    </div>
  );
};
