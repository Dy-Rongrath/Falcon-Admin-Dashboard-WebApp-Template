import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Chrome,
  Firefox,
  MapPin,
  Clock,
  Target,
  DollarSign,
} from "lucide-react";

// Sample data for analytics
const websiteTrafficData = [
  {
    date: "Jan 1",
    visitors: 4200,
    pageViews: 8400,
    sessions: 3800,
    bounceRate: 45,
  },
  {
    date: "Jan 8",
    visitors: 3800,
    pageViews: 7200,
    sessions: 3400,
    bounceRate: 52,
  },
  {
    date: "Jan 15",
    visitors: 5200,
    pageViews: 10800,
    sessions: 4600,
    bounceRate: 38,
  },
  {
    date: "Jan 22",
    visitors: 4800,
    pageViews: 9600,
    sessions: 4200,
    bounceRate: 41,
  },
  {
    date: "Jan 29",
    visitors: 6200,
    pageViews: 12400,
    sessions: 5400,
    bounceRate: 35,
  },
  {
    date: "Feb 5",
    visitors: 5800,
    pageViews: 11200,
    sessions: 5100,
    bounceRate: 39,
  },
  {
    date: "Feb 12",
    visitors: 6800,
    pageViews: 13600,
    sessions: 6000,
    bounceRate: 33,
  },
];

const revenueData = [
  { month: "Jan", revenue: 12000, profit: 3200, expenses: 8800 },
  { month: "Feb", revenue: 15000, profit: 4100, expenses: 10900 },
  { month: "Mar", revenue: 18000, profit: 5200, expenses: 12800 },
  { month: "Apr", revenue: 22000, profit: 6800, expenses: 15200 },
  { month: "May", revenue: 25000, profit: 7500, expenses: 17500 },
  { date: "Jun", revenue: 28000, profit: 8900, expenses: 19100 },
];

const deviceData = [
  { name: "Desktop", value: 45, color: "#2C7BE5" },
  { name: "Mobile", value: 35, color: "#00D27A" },
  { name: "Tablet", value: 20, color: "#F5803E" },
];

const browserData = [
  { name: "Chrome", users: 12450, percentage: 68.2, color: "#2C7BE5" },
  { name: "Safari", users: 3680, percentage: 20.1, color: "#00D27A" },
  { name: "Firefox", users: 1240, percentage: 6.8, color: "#F5803E" },
  { name: "Edge", users: 890, percentage: 4.9, color: "#6C757D" },
];

const topPagesData = [
  {
    page: "/",
    title: "Homepage",
    views: 12450,
    uniqueViews: 8200,
    avgTime: "3:24",
    exitRate: "28%",
  },
  {
    page: "/products",
    title: "Products",
    views: 9800,
    uniqueViews: 7100,
    avgTime: "4:12",
    exitRate: "35%",
  },
  {
    page: "/analytics",
    title: "Analytics",
    views: 7200,
    uniqueViews: 5800,
    avgTime: "5:48",
    exitRate: "22%",
  },
  {
    page: "/settings",
    title: "Settings",
    views: 4900,
    uniqueViews: 3600,
    avgTime: "2:56",
    exitRate: "45%",
  },
  {
    page: "/profile",
    title: "Profile",
    views: 3800,
    uniqueViews: 2900,
    avgTime: "3:18",
    exitRate: "38%",
  },
];

const locationData = [
  { country: "United States", users: 8450, percentage: 42.3, flag: "🇺🇸" },
  { country: "Canada", users: 2680, percentage: 13.4, flag: "🇨🇦" },
  { country: "United Kingdom", users: 2240, percentage: 11.2, flag: "🇬🇧" },
  { country: "Germany", users: 1890, percentage: 9.5, flag: "🇩🇪" },
  { country: "France", users: 1540, percentage: 7.7, flag: "🇫🇷" },
  { country: "Others", users: 3200, percentage: 15.9, flag: "🌍" },
];

const realTimeData = [
  { time: "00:00", activeUsers: 234 },
  { time: "01:00", activeUsers: 189 },
  { time: "02:00", activeUsers: 156 },
  { time: "03:00", activeUsers: 134 },
  { time: "04:00", activeUsers: 145 },
  { time: "05:00", activeUsers: 167 },
  { time: "06:00", activeUsers: 223 },
  { time: "07:00", activeUsers: 289 },
  { time: "08:00", activeUsers: 356 },
  { time: "09:00", activeUsers: 445 },
  { time: "10:00", activeUsers: 512 },
  { time: "11:00", activeUsers: 578 },
];

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const totalVisitors = 34200;
  const totalPageViews = 68400;
  const averageBounceRate = 42;
  const conversionRate = 3.2;
  const currentActiveUsers = 578;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-primary font-poppins flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-falcon-blue" />
            Analytics
          </h1>
          <p className="text-falcon-text-secondary font-poppins">
            Track your website performance and user behavior insights
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
              <SelectItem value="1y">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Real-time Stats */}
      <Card className="bg-gradient-to-r from-falcon-blue to-falcon-light-blue text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold font-poppins">
                Real-time Overview
              </h3>
              <p className="text-blue-100 font-poppins">
                Active users right now
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold font-poppins">
                {currentActiveUsers}
              </div>
              <div className="text-blue-100 text-sm font-poppins">
                +12% from yesterday
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Total Visitors
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {totalVisitors.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingUp className="h-4 w-4" />
                  +12.5%
                </div>
              </div>
              <div className="p-3 bg-falcon-blue bg-opacity-10 rounded-lg">
                <Users className="h-6 w-6 text-falcon-blue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Page Views
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {totalPageViews.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingUp className="h-4 w-4" />
                  +8.2%
                </div>
              </div>
              <div className="p-3 bg-falcon-green bg-opacity-10 rounded-lg">
                <Eye className="h-6 w-6 text-falcon-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Bounce Rate
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {averageBounceRate}%
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingDown className="h-4 w-4" />
                  -3.1%
                </div>
              </div>
              <div className="p-3 bg-falcon-orange bg-opacity-10 rounded-lg">
                <MousePointer className="h-6 w-6 text-falcon-orange" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Conversion Rate
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {conversionRate}%
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingUp className="h-4 w-4" />
                  +0.8%
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Content */}
      <Tabs defaultValue="traffic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-falcon-bg-light">
          <TabsTrigger value="traffic" className="font-poppins">
            Website Traffic
          </TabsTrigger>
          <TabsTrigger value="users" className="font-poppins">
            User Behavior
          </TabsTrigger>
          <TabsTrigger value="devices" className="font-poppins">
            Devices & Browsers
          </TabsTrigger>
          <TabsTrigger value="location" className="font-poppins">
            Geographic Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Visitors Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={websiteTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                      <XAxis
                        dataKey="date"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 12,
                          fill: "#4D5969",
                          fontFamily: "Poppins",
                        }}
                        allowDataOverflow={false}
                        allowDecimals={true}
                        allowDuplicatedCategory={true}
                        scale="auto"
                        tickCount={undefined}
                        minTickGap={5}
                        mirror={false}
                        reversed={false}
                        hide={false}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        type="number"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 12,
                          fill: "#4D5969",
                          fontFamily: "Poppins",
                        }}
                        domain={["dataMin", "dataMax"]}
                        allowDataOverflow={false}
                        allowDecimals={true}
                        allowDuplicatedCategory={true}
                        scale="auto"
                        tickCount={undefined}
                        minTickGap={5}
                        mirror={false}
                        reversed={false}
                        hide={false}
                        orientation="left"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #D8E2EF",
                          borderRadius: "8px",
                          fontFamily: "Poppins",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="#2C7BE5"
                        strokeWidth={3}
                        dot={{ fill: "#2C7BE5", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="pageViews"
                        stroke="#00D27A"
                        strokeWidth={3}
                        dot={{ fill: "#00D27A", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Real-time Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={realTimeData}>
                      <defs>
                        <linearGradient
                          id="activeUsersGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#2C7BE5"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#2C7BE5"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                      <XAxis
                        dataKey="time"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 12,
                          fill: "#4D5969",
                          fontFamily: "Poppins",
                        }}
                        allowDataOverflow={false}
                        allowDecimals={true}
                        allowDuplicatedCategory={true}
                        scale="auto"
                        tickCount={undefined}
                        minTickGap={5}
                        mirror={false}
                        reversed={false}
                        hide={false}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        type="number"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 12,
                          fill: "#4D5969",
                          fontFamily: "Poppins",
                        }}
                        domain={["dataMin", "dataMax"]}
                        allowDataOverflow={false}
                        allowDecimals={true}
                        allowDuplicatedCategory={true}
                        scale="auto"
                        tickCount={undefined}
                        minTickGap={5}
                        mirror={false}
                        reversed={false}
                        hide={false}
                        orientation="left"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #D8E2EF",
                          borderRadius: "8px",
                          fontFamily: "Poppins",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="activeUsers"
                        stroke="#2C7BE5"
                        strokeWidth={2}
                        fill="url(#activeUsersGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Pages */}
          <Card className="bg-white border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Top Performing Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPagesData.map((page, index) => (
                  <div
                    key={page.page}
                    className="flex items-center justify-between p-4 bg-falcon-bg-light rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium text-falcon-text-muted font-poppins">
                        #{index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-falcon-text-primary font-poppins">
                          {page.title}
                        </div>
                        <div className="text-sm text-falcon-text-secondary font-poppins">
                          {page.page}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 text-sm">
                      <div className="text-center">
                        <div className="font-medium text-falcon-text-primary font-poppins">
                          {page.views.toLocaleString()}
                        </div>
                        <div className="text-falcon-text-muted font-poppins">
                          Views
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-falcon-text-primary font-poppins">
                          {page.avgTime}
                        </div>
                        <div className="text-falcon-text-muted font-poppins">
                          Avg Time
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-falcon-text-primary font-poppins">
                          {page.exitRate}
                        </div>
                        <div className="text-falcon-text-muted font-poppins">
                          Exit Rate
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  User Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={websiteTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                      <XAxis
                        dataKey="date"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 12,
                          fill: "#4D5969",
                          fontFamily: "Poppins",
                        }}
                        allowDataOverflow={false}
                        allowDecimals={true}
                        allowDuplicatedCategory={true}
                        scale="auto"
                        tickCount={undefined}
                        minTickGap={5}
                        mirror={false}
                        reversed={false}
                        hide={false}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        type="number"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 12,
                          fill: "#4D5969",
                          fontFamily: "Poppins",
                        }}
                        domain={["dataMin", "dataMax"]}
                        allowDataOverflow={false}
                        allowDecimals={true}
                        allowDuplicatedCategory={true}
                        scale="auto"
                        tickCount={undefined}
                        minTickGap={5}
                        mirror={false}
                        reversed={false}
                        hide={false}
                        orientation="left"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #D8E2EF",
                          borderRadius: "8px",
                          fontFamily: "Poppins",
                        }}
                      />
                      <Bar
                        dataKey="sessions"
                        fill="#2C7BE5"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Bounce Rate Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={websiteTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                      <XAxis
                        dataKey="date"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 12,
                          fill: "#4D5969",
                          fontFamily: "Poppins",
                        }}
                        allowDataOverflow={false}
                        allowDecimals={true}
                        allowDuplicatedCategory={true}
                        scale="auto"
                        tickCount={undefined}
                        minTickGap={5}
                        mirror={false}
                        reversed={false}
                        hide={false}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        type="number"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 12,
                          fill: "#4D5969",
                          fontFamily: "Poppins",
                        }}
                        domain={["dataMin", "dataMax"]}
                        allowDataOverflow={false}
                        allowDecimals={true}
                        allowDuplicatedCategory={true}
                        scale="auto"
                        tickCount={undefined}
                        minTickGap={5}
                        mirror={false}
                        reversed={false}
                        hide={false}
                        orientation="left"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #D8E2EF",
                          borderRadius: "8px",
                          fontFamily: "Poppins",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="bounceRate"
                        stroke="#F5803E"
                        strokeWidth={3}
                        dot={{ fill: "#F5803E", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="devices" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Device Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #D8E2EF",
                          borderRadius: "8px",
                          fontFamily: "Poppins",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {deviceData.map((device, index) => (
                    <div key={device.name} className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: device.color }}
                        ></div>
                        <span className="text-sm font-medium text-falcon-text-primary font-poppins">
                          {device.name}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-falcon-text-primary font-poppins">
                        {device.value}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Browser Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {browserData.map((browser) => (
                    <div
                      key={browser.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-falcon-bg-light flex items-center justify-center">
                          {browser.name === "Chrome" && <Chrome className="h-5 w-5 text-falcon-blue" />}
                          {browser.name === "Safari" && <Globe className="h-5 w-5 text-falcon-green" />}
                          {browser.name === "Firefox" && <Firefox className="h-5 w-5 text-falcon-orange" />}
                          {browser.name === "Edge" && <Globe className="h-5 w-5 text-gray-600" />}
                        </div>
                        </div>
                        <div>
                          <div className="font-medium text-falcon-text-primary font-poppins">
                            {browser.name}
                          </div>
                          <div className="text-sm text-falcon-text-secondary font-poppins">
                            {browser.users.toLocaleString()} users
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-falcon-text-primary font-poppins">
                          {browser.percentage}%
                        </div>
                        <Progress
                          value={browser.percentage}
                          className="w-20 h-2 mt-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="location" className="space-y-6">
          <Card className="bg-white border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Geographic Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {locationData.map((location) => (
                  <div
                    key={location.country}
                    className="flex items-center justify-between p-4 bg-falcon-bg-light rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{location.flag}</span>
                      <div>
                        <div className="font-medium text-falcon-text-primary font-poppins">
                          {location.country}
                        </div>
                        <div className="text-sm text-falcon-text-secondary font-poppins">
                          {location.users.toLocaleString()} users
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-falcon-text-primary font-poppins">
                        {location.percentage}%
                      </div>
                      <Progress
                        value={location.percentage}
                        className="w-16 h-2 mt-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}