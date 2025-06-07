import React from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Eye,
  Target,
  Clock,
} from "lucide-react";

const Analytics: React.FC = () => {
  // Sample data for charts
  const revenueData = [
    { month: "Jan", revenue: 12000, profit: 8000, expenses: 4000 },
    { month: "Feb", revenue: 15000, profit: 10000, expenses: 5000 },
    { month: "Mar", revenue: 18000, profit: 12000, expenses: 6000 },
    { month: "Apr", revenue: 22000, profit: 15000, expenses: 7000 },
    { month: "May", revenue: 25000, profit: 17000, expenses: 8000 },
    { month: "Jun", revenue: 28000, profit: 19000, expenses: 9000 },
  ];

  const userActivityData = [
    { day: "Mon", active: 1200, new: 80, returning: 1120 },
    { day: "Tue", active: 1500, new: 120, returning: 1380 },
    { day: "Wed", active: 1800, new: 150, returning: 1650 },
    { day: "Thu", active: 1600, new: 100, returning: 1500 },
    { day: "Fri", active: 2200, new: 200, returning: 2000 },
    { day: "Sat", active: 1900, new: 180, returning: 1720 },
    { day: "Sun", active: 1400, new: 90, returning: 1310 },
  ];

  const trafficSourceData = [
    { name: "Organic Search", value: 45, color: "#2C7BE5" },
    { name: "Direct", value: 25, color: "#00D97E" },
    { name: "Social Media", value: 15, color: "#F5803E" },
    { name: "Referral", value: 10, color: "#E63757" },
    { name: "Email", value: 5, color: "#8E44AD" },
  ];

  const conversionData = [
    { step: "Visitors", count: 10000, rate: 100 },
    { step: "Product Views", count: 6500, rate: 65 },
    { step: "Add to Cart", count: 2600, rate: 26 },
    { step: "Checkout", count: 1300, rate: 13 },
    { step: "Purchase", count: 780, rate: 7.8 },
  ];

  const StatCard: React.FC<{
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: React.ReactNode;
    color: string;
  }> = ({ title, value, change, isPositive, icon, color }) => (
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

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Comprehensive business intelligence and performance metrics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Revenue"
            value="$125,430"
            change="+12.5%"
            isPositive={true}
            icon={
              <DollarSign className="w-6 h-6" style={{ color: "#2C7BE5" }} />
            }
            color="#2C7BE5"
          />
          <StatCard
            title="Active Users"
            value="12,456"
            change="+8.2%"
            isPositive={true}
            icon={<Users className="w-6 h-6" style={{ color: "#00D97E" }} />}
            color="#00D97E"
          />
          <StatCard
            title="Conversion Rate"
            value="7.8%"
            change="-2.1%"
            isPositive={false}
            icon={<Target className="w-6 h-6" style={{ color: "#F5803E" }} />}
            color="#F5803E"
          />
          <StatCard
            title="Page Views"
            value="892,341"
            change="+15.7%"
            isPositive={true}
            icon={<Eye className="w-6 h-6" style={{ color: "#E63757" }} />}
            color="#E63757"
          />
        </div>

        {/* Revenue & Profit Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Revenue & Profit Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [`$${value.toLocaleString()}`, ""]}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="1"
                  stroke="#2C7BE5"
                  fill="#2C7BE5"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stackId="1"
                  stroke="#00D97E"
                  fill="#00D97E"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Traffic Sources
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Activity & Conversion Funnel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              User Activity Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="active"
                  stroke="#2C7BE5"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="new"
                  stroke="#00D97E"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="returning"
                  stroke="#F5803E"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Conversion Funnel
            </h3>
            <div className="space-y-4">
              {conversionData.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {step.step}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.count.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${step.rate}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {step.rate}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border rounded-lg">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-gray-900">
                Avg. Session Duration
              </h4>
              <p className="text-2xl font-bold text-blue-600">3:42</p>
              <p className="text-sm text-gray-500">+5.2% from last week</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-gray-900">
                Bounce Rate
              </h4>
              <p className="text-2xl font-bold text-green-600">42.3%</p>
              <p className="text-sm text-gray-500">-2.1% from last week</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <ShoppingCart className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <h4 className="text-lg font-semibold text-gray-900">
                Cart Abandonment
              </h4>
              <p className="text-2xl font-bold text-orange-600">28.7%</p>
              <p className="text-sm text-gray-500">-1.8% from last week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
