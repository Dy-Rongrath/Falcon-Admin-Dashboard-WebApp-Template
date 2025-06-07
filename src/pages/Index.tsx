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
    <div className="space-y-6">
      {/* First Row - Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Weekly Sales"
          value="$47K"
          trend="+3.5%"
          type="sales"
        />
        <MetricCard title="Total Orders" value="58.4K" type="orders" />
        <MetricCard title="Market Share" value="26M" type="market" />
        <MetricCard title="Weather" value="New York City" type="weather" />
      </div>

      {/* Second Row - Projects and Sales Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RunningProjects />
        <SalesChart />
      </div>

      {/* Third Row - Storage and Upgrade */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StorageUsage />
        <UpgradePrompt />
      </div>

      {/* Fourth Row - Products Table and Shared Files */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductsTable />
        <SharedFiles />
      </div>

      {/* Fifth Row - Active Users and Bandwidth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActiveUsers />
        <BandwidthChart />
      </div>

      {/* Bottom Row - Top Products Chart */}
      <div className="col-span-full">
        <TopProductsChart />
      </div>
    </div>
  );
};

export default Index;
