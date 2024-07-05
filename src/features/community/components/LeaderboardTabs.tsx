import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { FriendReferalsBlock } from './FriendReferalsBlock';
import { FriendBlock } from './FriendsBlock';
import { LeaderboardBlock } from './LeaderboardBlock';

export const LeaderboardTabs = () => {
  return (
    <>
      <Tabs>
        <TabList className="flex gap-4 border rounded-md p-2 mb-4">
          <Tab className="flex-1 text-center border p-1 rounded-md hover:bg-slate-200">
            <p>Leaderboard</p>
          </Tab>
          <Tab className="flex-1 text-center border p-1 rounded-md hover:bg-slate-200">
            <p>Friends</p>
          </Tab>
        </TabList>
        <TabPanel>
          <LeaderboardBlock />
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-6">
            <FriendBlock />
            <FriendReferalsBlock />
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};
