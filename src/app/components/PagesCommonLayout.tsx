import { Outlet } from 'react-router-dom';

import { TabBar } from 'features/tab-bar';

export const PagesCommonLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen p-4 relative">
      <main className="flex-1 pb-24 overflow-x-hidden overflow-y-auto remove-scrollbar">
        <Outlet />
      </main>
      <footer className="mt-4 fixed bottom-0 left-0 right-0 bg-white">
        <TabBar />
      </footer>
    </div>
  );
};
