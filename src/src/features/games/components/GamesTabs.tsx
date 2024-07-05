import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { Button, TitleWithSubtitle } from 'shared';

import { GamesTiers } from './GamesTiers';

export const GamesTabs = () => {
  return (
    <Tabs defaultIndex={0}>
      <TabList className="flex gap-4 border rounded-md p-2 mb-4">
        <Tab className="flex-1 text-center border p-1 rounded-md hover:bg-slate-200">
          <p>Games</p>
        </Tab>
        <Tab className="flex-1 text-center border p-1 rounded-md hover:bg-slate-200">
          <p>Tournaments</p>
        </Tab>
      </TabList>
      <TabPanel className="mt-4">
        <GamesTiers />
      </TabPanel>
      <TabPanel>
        <div className="flex flex-col gap-4">
          <TitleWithSubtitle
            title="Tournaments"
            subtitle="Compete and earn 🥰"
            tooltipContent="⠀"
          />
          <Button className="w-full p-3 text-2xl">Season N TBD</Button>
        </div>
      </TabPanel>
    </Tabs>
  );
};
