import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  ResponsiveContainer,
  Legend,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  ReferenceLine,
} from "recharts";
import {
  BarChart3,
  TrendingUp,
  PieChart as PieChartIcon,
  Activity,
  Target,
  Zap,
  Globe,
  Users,
} from "lucide-react";

// Sample data for different chart types
const salesData = [
  { month: "Jan", sales: 4000, revenue: 2400, profit: 1600 },
  { month: "Feb", sales: 3000, revenue: 1398, profit: 1200 },
  { month: "Mar", sales: 2000, revenue: 9800, profit: 2200 },
  { month: "Apr", sales: 2780, revenue: 3908, profit: 1800 },
  { month: "May", sales: 1890, revenue: 4800, profit: 2500 },
  { month: "Jun", sales: 2390, revenue: 3800, profit: 2100 },
  { month: "Jul", sales: 3490, revenue: 4300, profit: 2800 },
  { month: "Aug", sales: 4000, revenue: 4500, profit: 3200 },
  { month: "Sep", sales: 3200, revenue: 4200, profit: 2900 },
  { month: "Oct", sales: 3800, revenue: 4800, profit: 3100 },
  { month: "Nov", sales: 4200, revenue: 5200, profit: 3400 },
  { month: "Dec", sales: 4800, revenue: 5800, profit: 3800 },
];

const userGrowthData = [
  { month: "Jan", users: 1000, activeUsers: 800 },
  { month: "Feb", users: 1200, activeUsers: 950 },
  { month: "Mar", users: 1500, activeUsers: 1180 },
  { month: "Apr", users: 1800, activeUsers: 1420 },
  { month: "May", users: 2200, activeUsers: 1750 },
  { month: "Jun", users: 2600, activeUsers: 2080 },
  { month: "Jul", users: 3100, activeUsers: 2480 },
  { month: "Aug", users: 3600, activeUsers: 2880 },
  { month: "Sep", users: 4200, activeUsers: 3360 },
  { month: "Oct", users: 4800, activeUsers: 3840 },
  { month: "Nov", users: 5500, activeUsers: 4400 },
  { month: "Dec", users: 6200, activeUsers: 4960 },
];

const categoryData = [
  { name: "Desktop", value: 45, color: "#2C7BE5" },
  { name: "Mobile", value: 35, color: "#00D97E" },
  { name: "Tablet", value: 20, color: "#F5803E" },
];

const performanceData = [
  { metric: "Speed", value: 85, fullMark: 100 },
  { metric: "Reliability", value: 92, fullMark: 100 },
  { metric: "Security", value: 78, fullMark: 100 },
  { metric: "Efficiency", value: 88, fullMark: 100 },
  { metric: "Scalability", value: 75, fullMark: 100 },
  { metric: "Usability", value: 90, fullMark: 100 },
];

const scatterData = [
  { x: 10, y: 30, size: 400 },
  { x: 30, y: 200, size: 1000 },
  { x: 45, y: 100, size: 700 },
  { x: 50, y: 400, size: 500 },
  { x: 70, y: 150, size: 800 },
  { x: 80, y: 250, size: 600 },
  { x: 90, y: 350, size: 900 },
  { x: 100, y: 180, size: 300 },
];

const trafficData = [
  { hour: "00:00", visitors: 120, pageViews: 450 },
  { hour: "04:00", visitors: 80, pageViews: 280 },
  { hour: "08:00", visitors: 300, pageViews: 1200 },
  { hour: "12:00", visitors: 450, pageViews: 1800 },
  { hour: "16:00", visitors: 380, pageViews: 1520 },
  { hour: "20:00", visitors: 280, pageViews: 1120 },
];

const Charts = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-falcon-blue" />
            Charts & Analytics
          </h1>
          <p className="text-falcon-text-light font-poppins">
            Comprehensive data visualization components
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-falcon-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  $45,231
                </p>
                <p className="text-xs text-falcon-green">
                  +12.5% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-falcon-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Active Users
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  4,960
                </p>
                <p className="text-xs text-falcon-green">
                  +8.2% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Page Views
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  28.4k
                </p>
                <p className="text-xs text-falcon-orange">
                  +5.7% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Conversion Rate
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">3.2%</p>
                <p className="text-xs text-purple-600">+0.8% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="line" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="line">Line Charts</TabsTrigger>
          <TabsTrigger value="bar">Bar Charts</TabsTrigger>
          <TabsTrigger value="area">Area Charts</TabsTrigger>
          <TabsTrigger value="pie">Pie Charts</TabsTrigger>
          <TabsTrigger value="scatter">Scatter</TabsTrigger>
          <TabsTrigger value="radar">Radar</TabsTrigger>
        </TabsList>

        <TabsContent value="line" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-falcon-blue" />
                  Sales Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #D8E2EF",
                        borderRadius: "8px",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#2C7BE5"
                      strokeWidth={2}
                      dot={{ fill: "#2C7BE5", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: "#2C7BE5", strokeWidth: 2 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#00D97E"
                      strokeWidth={2}
                      dot={{ fill: "#00D97E", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: "#00D97E", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-falcon-green" />
                  User Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #D8E2EF",
                        borderRadius: "8px",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#2C7BE5"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, stroke: "#2C7BE5", strokeWidth: 2 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="activeUsers"
                      stroke="#F5803E"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={false}
                      activeDot={{ r: 6, stroke: "#F5803E", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bar" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-falcon-blue" />
                  Monthly Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #D8E2EF",
                        borderRadius: "8px",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="revenue"
                      fill="#2C7BE5"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="profit"
                      fill="#00D97E"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-falcon-orange" />
                  Traffic by Hour
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                    <XAxis
                      dataKey="hour"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #D8E2EF",
                        borderRadius: "8px",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="visitors"
                      fill="#F5803E"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="pageViews"
                      stroke="#2C7BE5"
                      strokeWidth={3}
                      dot={{ fill: "#2C7BE5", strokeWidth: 2, r: 4 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="area" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-falcon-blue" />
                  Revenue Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #D8E2EF",
                        borderRadius: "8px",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stackId="1"
                      stroke="#2C7BE5"
                      fill="#2C7BE5"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="profit"
                      stackId="1"
                      stroke="#00D97E"
                      fill="#00D97E"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-falcon-green" />
                  User Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 12,
                        fill: "#4D5969",
                        fontFamily: "Poppins",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #D8E2EF",
                        borderRadius: "8px",
                        fontFamily: "Poppins",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="colorUsers"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#00D97E"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#00D97E"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#00D97E"
                      fillOpacity={1}
                      fill="url(#colorUsers)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pie" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5 text-falcon-blue" />
                  Device Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #D8E2EF",
                        borderRadius: "8px",
                        fontFamily: "Poppins",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-falcon-orange" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {performanceData.map((item) => (
                    <div key={item.metric} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-falcon-text-dark">
                          {item.metric}
                        </span>
                        <span className="text-falcon-text-light">
                          {item.value}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-falcon-blue to-falcon-green h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scatter" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-falcon-blue" />
                Performance vs Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart data={scatterData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="Performance"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 12,
                      fill: "#4D5969",
                      fontFamily: "Poppins",
                    }}
                  />
                  <YAxis
                    type="number"
                    dataKey="y"
                    name="Engagement"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 12,
                      fill: "#4D5969",
                      fontFamily: "Poppins",
                    }}
                  />
                  <Tooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #D8E2EF",
                      borderRadius: "8px",
                      fontFamily: "Poppins",
                    }}
                  />
                  <Scatter dataKey="size" fill="#2C7BE5" />
                </ScatterChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="radar" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-falcon-blue" />
                System Performance Radar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={performanceData}>
                  <PolarGrid stroke="#D8E2EF" />
                  <PolarAngleAxis
                    dataKey="metric"
                    tick={{
                      fontSize: 12,
                      fill: "#4D5969",
                      fontFamily: "Poppins",
                    }}
                  />
                  <PolarRadiusAxis
                    tick={{
                      fontSize: 10,
                      fill: "#4D5969",
                      fontFamily: "Poppins",
                    }}
                  />
                  <Radar
                    name="Performance"
                    dataKey="value"
                    stroke="#2C7BE5"
                    fill="#2C7BE5"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #D8E2EF",
                      borderRadius: "8px",
                      fontFamily: "Poppins",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Charts;
