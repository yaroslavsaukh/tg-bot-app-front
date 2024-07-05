import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { BonusesBlock } from './BonusesBlock';
import { TasksBlock } from './TasksBlock';

export const BonusesTabs = () => {
  return (
    <Tabs>
      <TabList className="flex gap-4 border rounded-md p-2 mb-4">
        <Tab className="flex-1 text-center border p-1 rounded-md hover:bg-slate-200">
          <p>Tasks</p>
        </Tab>
        <Tab className="flex-1 text-center border p-1 rounded-md hover:bg-slate-200">
          <p>Bonuses</p>
        </Tab>
      </TabList>
      <TabPanel className="mt-4">
        <TasksBlock />
      </TabPanel>
      <TabPanel>
        <BonusesBlock />
      </TabPanel>
    </Tabs>
  );
};
