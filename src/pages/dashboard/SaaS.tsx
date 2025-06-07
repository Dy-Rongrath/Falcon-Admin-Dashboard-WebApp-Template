import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  UserCheck,
  UserMinus,
  Globe,
} from "lucide-react";

const SaaS: React.FC = () => {
  // Sample data for SaaS metrics
  const mrrData = [
    { month: "Jan", mrr: 45000, arr: 540000, churn: 2.3 },
    { month: "Feb", mrr: 52000, arr: 624000, churn: 1.9 },
    { month: "Mar", mrr: 58000, arr: 696000, churn: 2.1 },
    { month: "Apr", mrr: 65000, arr: 780000, churn: 1.7 },
    { month: "May", mrr: 72000, arr: 864000, churn: 1.5 },
    { month: "Jun", mrr: 78000, arr: 936000, churn: 1.3 },
  ];

  const subscriptionTiersData = [
    { tier: "Free", users: 15420, revenue: 0, color: "#E5E7EB" },
    { tier: "Basic", users: 8750, revenue: 87500, color: "#2C7BE5" },
    { tier: "Pro", users: 3240, revenue: 97200, color: "#00D97E" },
    { tier: "Enterprise", users: 520, revenue: 156000, color: "#F5803E" },
  ];

  const userGrowthData = [
    { month: "Jan", total: 18500, new: 1200, churned: 180 },
    { month: "Feb", total: 20100, new: 1800, churned: 200 },
    { month: "Mar", total: 22300, new: 2400, churned: 200 },
    { month: "Apr", total: 25200, new: 3100, churned: 220 },
    { month: "May", total: 27800, new: 2850, churned: 250 },
    { month: "Jun", total: 28930, new: 1380, churned: 250 },
  ];

  const cohortRetentionData = [
    { week: "Week 1", retention: 100 },
    { week: "Week 2", retention: 85 },
    { week: "Week 3", retention: 78 },
    { week: "Week 4", retention: 72 },
    { week: "Week 8", retention: 65 },
    { week: "Week 12", retention: 58 },
  ];

  const recentSubscriptions = [
    {
      id: 1,
      customer: "Acme Corp",
      plan: "Enterprise",
      amount: "$2,500",
      status: "active",
      date: "2024-06-10",
    },
    {
      id: 2,
      customer: "TechStart Inc",
      plan: "Pro",
      amount: "$99",
      status: "active",
      date: "2024-06-10",
    },
    {
      id: 3,
      customer: "Digital Agency",
      plan: "Basic",
      amount: "$29",
      status: "trial",
      date: "2024-06-09",
    },
    {
      id: 4,
      customer: "Startup XYZ",
      plan: "Pro",
      amount: "$99",
      status: "cancelled",
      date: "2024-06-09",
    },
    {
      id: 5,
      customer: "Enterprise Co",
      plan: "Enterprise",
      amount: "$2,500",
      status: "active",
      date: "2024-06-08",
    },
  ];

  const topFeatures = [
    { feature: "API Access", usage: 89, trend: "+5%" },
    { feature: "Analytics Dashboard", usage: 76, trend: "+12%" },
    { feature: "Team Collaboration", usage: 68, trend: "+8%" },
    { feature: "Custom Integrations", usage: 45, trend: "-2%" },
    { feature: "Advanced Reporting", usage: 34, trend: "+15%" },
  ];

  const MetricCard: React.FC<{
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: React.ReactNode;
    color: string;
    subtitle?: string;
  }> = ({ title, value, change, isPositive, icon, color, subtitle }) => (
    <div
      className="bg-white rounded-lg shadow-md p-6 border-l-4"
      style={{ borderLeftColor: color }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 font-poppins">
            {value}
          </p>
          {subtitle && <p className="text-xs text-gray-500 mb-2">{subtitle}</p>}
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}
            >
              {change}
            </span>
            <span className="text-sm text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        <div
          className="p-3 rounded-full"
          style={{ backgroundColor: `${color}20` }}
        >
          {icon}
        </div>
      </div>
    </div>
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "trial":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            SaaS Dashboard
          </h1>
          <p className="text-gray-600">
            Subscription metrics, user analytics, and revenue insights
          </p>
        </div>

        {/* Key SaaS Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Monthly Recurring Revenue"
            value="$78,000"
            subtitle="Annual: $936,000"
            change="+8.3%"
            isPositive={true}
            icon={
              <DollarSign className="w-6 h-6" style={{ color: "#2C7BE5" }} />
            }
            color="#2C7BE5"
          />
          <MetricCard
            title="Active Subscribers"
            value="28,930"
            change="+4.1%"
            isPositive={true}
            icon={<Users className="w-6 h-6" style={{ color: "#00D97E" }} />}
            color="#00D97E"
          />
          <MetricCard
            title="Churn Rate"
            value="1.3%"
            change="-0.2%"
            isPositive={true}
            icon={
              <UserMinus className="w-6 h-6" style={{ color: "#F5803E" }} />
            }
            color="#F5803E"
          />
          <MetricCard
            title="Customer LTV"
            value="$2,450"
            change="+12.7%"
            isPositive={true}
            icon={
              <TrendingUp className="w-6 h-6" style={{ color: "#E63757" }} />
            }
            color="#E63757"
          />
        </div>

        {/* MRR Growth & Subscription Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              MRR & ARR Growth
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={mrrData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => [
                    name === "mrr"
                      ? `$${value.toLocaleString()}`
                      : name === "arr"
                        ? `$${value.toLocaleString()}`
                        : `${value}%`,
                    name === "mrr"
                      ? "MRR"
                      : name === "arr"
                        ? "ARR"
                        : "Churn Rate",
                  ]}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="mrr"
                  stackId="1"
                  stroke="#2C7BE5"
                  fill="#2C7BE5"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="arr"
                  stackId="1"
                  stroke="#00D97E"
                  fill="#00D97E"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Subscription Tiers Performance
            </h3>
            <div className="space-y-4">
              {subscriptionTiersData.map((tier, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">{tier.tier}</h4>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: tier.color }}
                    >
                      {tier.users.toLocaleString()} users
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Monthly Revenue
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ${tier.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(tier.users / 28930) * 100}%`,
                        backgroundColor: tier.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Growth & Retention */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              User Growth & Churn
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#2C7BE5"
                  strokeWidth={3}
                  name="Total Users"
                />
                <Line
                  type="monotone"
                  dataKey="new"
                  stroke="#00D97E"
                  strokeWidth={2}
                  name="New Users"
                />
                <Line
                  type="monotone"
                  dataKey="churned"
                  stroke="#E63757"
                  strokeWidth={2}
                  name="Churned Users"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cohort Retention
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cohortRetentionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, "Retention"]} />
                <Bar dataKey="retention" fill="#2C7BE5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Subscriptions & Feature Usage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Recent Subscriptions
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentSubscriptions.map((subscription) => (
                    <tr key={subscription.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {subscription.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {subscription.plan}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {subscription.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(subscription.status)}`}
                        >
                          {subscription.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Top Features Usage
            </h3>
            <div className="space-y-4">
              {topFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      {feature.feature}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">
                        {feature.usage}%
                      </span>
                      <span
                        className={`text-xs ${feature.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                      >
                        {feature.trend}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${feature.usage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <UserCheck className="w-6 h-6 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Add Customer
              </span>
            </button>
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
              <CreditCard className="w-6 h-6 text-green-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                Create Plan
              </span>
            </button>
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
              <Globe className="w-6 h-6 text-orange-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                API Settings
              </span>
            </button>
            <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
              <TrendingUp className="w-6 h-6 text-purple-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                View Reports
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaaS;
