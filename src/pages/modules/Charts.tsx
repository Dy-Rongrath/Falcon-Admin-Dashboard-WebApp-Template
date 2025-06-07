import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
} from "recharts";
import {
  TrendingUp,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Target,
} from "lucide-react";

const Charts: React.FC = () => {
  // Sample data for different chart types
  const salesData = [
    { month: "Jan", sales: 4000, revenue: 2400, profit: 1600 },
    { month: "Feb", sales: 3000, revenue: 1398, profit: 1398 },
    { month: "Mar", sales: 2000, revenue: 9800, profit: 3908 },
    { month: "Apr", sales: 2780, revenue: 3908, profit: 4800 },
    { month: "May", sales: 1890, revenue: 4800, profit: 3800 },
    { month: "Jun", sales: 2390, revenue: 3800, profit: 4300 },
  ];

  const marketShareData = [
    { name: "Desktop", value: 45, color: "#2C7BE5" },
    { name: "Mobile", value: 35, color: "#00D97E" },
    { name: "Tablet", value: 15, color: "#F5803E" },
    { name: "Other", value: 5, color: "#E63757" },
  ];

  const performanceData = [
    { subject: "Performance", A: 120, B: 110, fullMark: 150 },
    { subject: "Speed", A: 98, B: 130, fullMark: 150 },
    { subject: "Reliability", A: 86, B: 130, fullMark: 150 },
    { subject: "Security", A: 99, B: 100, fullMark: 150 },
    { subject: "Usability", A: 85, B: 90, fullMark: 150 },
    { subject: "Features", A: 65, B: 85, fullMark: 150 },
  ];

  const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  const trafficData = [
    { hour: "00:00", visitors: 120, pageViews: 240 },
    { hour: "04:00", visitors: 80, pageViews: 160 },
    { hour: "08:00", visitors: 450, pageViews: 890 },
    { hour: "12:00", visitors: 680, pageViews: 1240 },
    { hour: "16:00", visitors: 520, pageViews: 980 },
    { hour: "20:00", visitors: 380, pageViews: 720 },
  ];

  const ChartContainer: React.FC<{
    title: string;
    description: string;
    icon: React.ReactNode;
    children: React.ReactNode;
  }> = ({ title, description, icon, children }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-100 rounded-lg mr-3">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="h-80">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Charts & Data Visualization
          </h1>
          <p className="text-gray-600">
            Interactive charts and graphs built with Recharts library
          </p>
        </div>

        {/* Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Line Chart */}
          <ChartContainer
            title="Line Chart"
            description="Monthly sales and revenue trends"
            icon={<Activity className="w-6 h-6 text-blue-600" />}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [value.toLocaleString(), ""]} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#2C7BE5"
                  strokeWidth={3}
                  dot={{ fill: "#2C7BE5", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#00D97E"
                  strokeWidth={2}
                  dot={{ fill: "#00D97E", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Area Chart */}
          <ChartContainer
            title="Area Chart"
            description="Stacked revenue and profit visualization"
            icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [value.toLocaleString(), ""]} />
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
          </ChartContainer>

          {/* Bar Chart */}
          <ChartContainer
            title="Bar Chart"
            description="Comparative sales performance"
            icon={<BarChart3 className="w-6 h-6 text-blue-600" />}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [value.toLocaleString(), ""]} />
                <Legend />
                <Bar dataKey="sales" fill="#2C7BE5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" fill="#00D97E" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Pie Chart */}
          <ChartContainer
            title="Pie Chart"
            description="Market share distribution"
            icon={<PieChartIcon className="w-6 h-6 text-blue-600" />}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketShareData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {marketShareData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Share"]} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Radar Chart */}
          <ChartContainer
            title="Radar Chart"
            description="Performance metrics comparison"
            icon={<Target className="w-6 h-6 text-blue-600" />}
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                  name="Product A"
                  dataKey="A"
                  stroke="#2C7BE5"
                  fill="#2C7BE5"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Product B"
                  dataKey="B"
                  stroke="#00D97E"
                  fill="#00D97E"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Scatter Chart */}
          <ChartContainer
            title="Scatter Chart"
            description="Data correlation analysis"
            icon={<Activity className="w-6 h-6 text-blue-600" />}
          >
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={scatterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="x" name="height" unit="cm" />
                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="Data Points" dataKey="z" fill="#2C7BE5" />
              </ScatterChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Composed Chart - Full Width */}
        <div className="mt-8">
          <ChartContainer
            title="Composed Chart"
            description="Multiple chart types combined with traffic data"
            icon={<BarChart3 className="w-6 h-6 text-blue-600" />}
          >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visitors" barSize={20} fill="#2C7BE5" />
                <Line
                  type="monotone"
                  dataKey="pageViews"
                  stroke="#F5803E"
                  strokeWidth={3}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Chart Customization Examples */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mini Chart 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Mini Line Chart
            </h4>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData.slice(0, 4)}>
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#2C7BE5"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Simplified view without axes
            </p>
          </div>

          {/* Mini Chart 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Mini Bar Chart
            </h4>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData.slice(0, 4)}>
                  <Bar dataKey="revenue" fill="#00D97E" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Compact bar visualization
            </p>
          </div>

          {/* Mini Chart 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Mini Area Chart
            </h4>
            <div className="h-24">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData.slice(0, 4)}>
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stroke="#F5803E"
                    fill="#F5803E"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Filled area visualization
            </p>
          </div>
        </div>

        {/* Chart Tips */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Chart Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">
                Choose the Right Type
              </h4>
              <p className="text-sm text-gray-600">
                Select chart types that best represent your data and story
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Keep It Simple</h4>
              <p className="text-sm text-gray-600">
                Avoid cluttered charts; focus on the key message
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <PieChartIcon className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">
                Use Color Wisely
              </h4>
              <p className="text-sm text-gray-600">
                Consistent color schemes improve readability
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Label Clearly</h4>
              <p className="text-sm text-gray-600">
                Always include clear titles, axes labels, and legends
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
