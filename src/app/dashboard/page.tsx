import { StatsCards } from "./components/stats-cards";
import { OverviewChart } from "./components/overview-chart";
import { RecentActivity } from "./components/recent-activity";
import { DataTableDemo } from "./components/data-table";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-zinc-400 mt-1">Selamat datang kembali, Admin!</p>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        <div className="lg:col-span-4">
          <OverviewChart />
        </div>
        <div className="lg:col-span-3">
          <RecentActivity />
        </div>
      </div>

      <DataTableDemo />
    </div>
  );
}