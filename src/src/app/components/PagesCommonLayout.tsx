import { Outlet } from 'react-router-dom';

import { TabBar } from 'features/tab-bar';

export const PagesCommonLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen p-4 bg-white">
      <main className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto remove-scrollbar">
        <Outlet />
      </main>
      <footer className="mt-4 bg-white">
        <TabBar />
      </footer>
    </div>
  );
};
