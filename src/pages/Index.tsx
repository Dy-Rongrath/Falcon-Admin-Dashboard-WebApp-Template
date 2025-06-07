import MetricCard from "@/components/MetricCard";
import RunningProjects from "@/components/RunningProjects";
import SalesChart from "@/components/SalesChart";
import StorageUsage from "@/components/StorageUsage";
import UpgradePrompt from "@/components/UpgradePrompt";
import ProductsTable from "@/components/ProductsTable";
import SharedFiles from "@/components/SharedFiles";
import ActiveUsers from "@/components/ActiveUsers";
import BandwidthChart from "@/components/BandwidthChart";
import TopProductsChart from "@/components/TopProductsChart";

const Index = () => {
  return (
    <div className="space-y-6 p-0">
      {/* First Row - 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Weekly Sales"
          value="$47K"
          trend="+3.5%"
          type="sales"
        />
        <MetricCard title="Total Order" value="58.4K" type="orders" />
        <MetricCard title="Market Share" value="26M" type="market" />
        <MetricCard title="Weather" value="New York City" type="weather" />
      </div>

      {/* Second Row - Running Projects and Total Sales Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RunningProjects />
        <SalesChart />
      </div>

      {/* Third Row - Storage Usage and Upgrade Prompt */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StorageUsage />
        <UpgradePrompt />
      </div>

      {/* Fourth Row - Best Selling Products and Shared Files */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductsTable />
        <SharedFiles />
      </div>

      {/* Fifth Row - Active Users and Bandwidth Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActiveUsers />
        <BandwidthChart />
      </div>

      {/* Bottom Row - Top Products Chart (Full Width) */}
      <div className="w-full">
        <TopProductsChart />
      </div>
    </div>
  );
};

export default Index;
