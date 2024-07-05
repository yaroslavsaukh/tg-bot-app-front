import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

export const ActivitiesTabs = () => {
  return (
    <Tabs className="remove-scrollbar">
      <TabList className="flex gap-4 border rounded-md p-2 mb-4">
        <Tab className="flex-1 text-center border p-1 rounded-md hover:bg-slate-200">
          <p>Leaderboard</p>
        </Tab>
        <Tab className="flex-1 text-center border p-1 rounded-md hover:bg-slate-200">
          <p>Friends</p>
        </Tab>
      </TabList>
      <TabPanel>
        <span className="w-full h-64 flex items-center justify-center text-center">WIP</span>
      </TabPanel>
      <TabPanel>
        <span className="w-full h-64 flex items-center justify-center text-center"> WIP</span>
      </TabPanel>
    </Tabs>
  );
};
