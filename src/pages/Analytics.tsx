import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
} from "recharts";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MousePointer,
  Download,
  Calendar,
} from "lucide-react";

const websiteTrafficData = [
  { month: "Jan", visitors: 4200, pageViews: 8400, bounceRate: 45 },
  { month: "Feb", visitors: 3800, pageViews: 7200, bounceRate: 52 },
  { month: "Mar", visitors: 5200, pageViews: 10800, bounceRate: 38 },
  { month: "Apr", visitors: 4800, pageViews: 9600, bounceRate: 41 },
  { month: "May", visitors: 6200, pageViews: 12400, bounceRate: 35 },
  { month: "Jun", visitors: 5800, pageViews: 11200, bounceRate: 39 },
];

const revenueData = [
  { month: "Jan", revenue: 12000, profit: 3200 },
  { month: "Feb", revenue: 15000, profit: 4100 },
  { month: "Mar", revenue: 18000, profit: 5200 },
  { month: "Apr", revenue: 22000, profit: 6800 },
  { month: "May", revenue: 25000, profit: 7500 },
  { month: "Jun", revenue: 28000, profit: 8900 },
];

const deviceData = [
  { name: "Desktop", value: 45, color: "#3b82f6" },
  { name: "Mobile", value: 35, color: "#10b981" },
  { name: "Tablet", value: 20, color: "#f59e0b" },
];

const topPagesData = [
  { page: "/dashboard", views: 12450, uniqueViews: 8200 },
  { page: "/products", views: 9800, uniqueViews: 7100 },
  { page: "/analytics", views: 7200, uniqueViews: 5800 },
  { page: "/settings", views: 4900, uniqueViews: 3600 },
  { page: "/users", views: 3800, uniqueViews: 2900 },
];

export default function Analytics() {
  const totalVisitors = 34200;
  const totalPageViews = 68400;
  const averageBounceRate = 42;
  const conversionRate = 3.2;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Analytics
          </h1>
          <p className="text-gray-600">
            Track your website performance and user behavior
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 Days
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Total Visitors</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalVisitors.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+12.5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Eye className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Page Views</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalPageViews.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+8.2%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <MousePointer className="h-5 w-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Bounce Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {averageBounceRate}%
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">-2.1%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {conversionRate}%
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+0.8%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <Tabs defaultValue="traffic" className="space-y-6">
        <TabsList>
          <TabsTrigger value="traffic">Website Traffic</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="devices">Device Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Visitors Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={websiteTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis
                        dataKey="month"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#64748b" }}
                      />
                      <YAxis
                        type="number"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#64748b" }}
                        domain={["dataMin", "dataMax"]}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Page Views vs Bounce Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={websiteTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis
                        dataKey="month"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#64748b" }}
                      />
                      <YAxis
                        type="number"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#64748b" }}
                        domain={["dataMin", "dataMax"]}
                      />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="pageViews"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Profit Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="month"
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#64748b" }}
                    />
                    <YAxis
                      type="number"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#64748b" }}
                      domain={["dataMin", "dataMax"]}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
                    <Bar dataKey="profit" fill="#10b981" name="Profit" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {deviceData.map((device, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: device.color }}
                      ></div>
                      <span className="font-medium text-gray-900">
                        {device.name}
                      </span>
                    </div>
                    <Badge variant="outline">{device.value}%</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPagesData.map((page, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{page.page}</p>
                  <p className="text-sm text-gray-500">
                    {page.uniqueViews.toLocaleString()} unique views
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    {page.views.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">total views</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
