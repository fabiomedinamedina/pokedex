import { Sidebar } from '@/components';

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="bg-gray-100 w-screen h-screen antialiased text-slate-300 selection:bg-red-light selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="w-full text-slate-900 h-screen overflow-y-scroll">
          { children }
        </div>
      </div>
    </div>
  );
}