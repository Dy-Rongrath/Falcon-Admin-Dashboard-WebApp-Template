import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  FileText,
  Download,
  Filter,
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Eye,
  BarChart3,
  PieChart as PieChartIcon,
  Share2,
  RefreshCw,
  FileSpreadsheet,
  Printer,
  Mail,
} from "lucide-react";

const salesReportData = [
  { month: "Jan", revenue: 45000, orders: 120, customers: 89, profit: 12000 },
  { month: "Feb", revenue: 52000, orders: 140, customers: 95, profit: 14500 },
  { month: "Mar", revenue: 48000, orders: 135, customers: 102, profit: 13200 },
  { month: "Apr", revenue: 61000, orders: 165, customers: 118, profit: 17800 },
  { month: "May", revenue: 55000, orders: 155, customers: 124, profit: 16100 },
  { month: "Jun", revenue: 67000, orders: 180, customers: 142, profit: 19500 },
  { month: "Jul", revenue: 71000, orders: 195, customers: 156, profit: 21200 },
  { month: "Aug", revenue: 69000, orders: 188, customers: 151, profit: 20400 },
  { month: "Sep", revenue: 75000, orders: 205, customers: 167, profit: 22800 },
  { month: "Oct", revenue: 82000, orders: 220, customers: 178, profit: 25100 },
  { month: "Nov", revenue: 79000, orders: 215, customers: 184, profit: 24200 },
  { month: "Dec", revenue: 88000, orders: 245, customers: 201, profit: 27500 },
];

const userActivityData = [
  { date: "2024-01-01", activeUsers: 1200, newUsers: 340, returnUsers: 860 },
  { date: "2024-01-08", activeUsers: 1100, newUsers: 280, returnUsers: 820 },
  { date: "2024-01-15", activeUsers: 1350, newUsers: 420, returnUsers: 930 },
  { date: "2024-01-22", activeUsers: 1280, newUsers: 380, returnUsers: 900 },
  { date: "2024-01-29", activeUsers: 1420, newUsers: 460, returnUsers: 960 },
  { date: "2024-02-05", activeUsers: 1380, newUsers: 440, returnUsers: 940 },
  { date: "2024-02-12", activeUsers: 1580, newUsers: 520, returnUsers: 1060 },
];

const productPerformanceData = [
  { product: "iPhone 14 Pro", sales: 1250, revenue: 1248750, growth: 12.5 },
  { product: "MacBook Air", sales: 950, revenue: 1138050, growth: 8.2 },
  { product: "iPad Pro", sales: 750, revenue: 599250, growth: -2.1 },
  { product: "AirPods Pro", sales: 680, revenue: 169320, growth: 15.3 },
  { product: "Apple Watch", sales: 540, revenue: 215460, growth: 6.8 },
  { product: 'iMac 24"', sales: 320, revenue: 639680, growth: -5.2 },
  { product: "Mac Studio", sales: 180, revenue: 1079820, growth: 22.1 },
  { product: "Studio Display", sales: 150, revenue: 239850, growth: 9.7 },
];

const trafficSourceData = [
  {
    source: "Organic Search",
    visits: 45000,
    percentage: 42.1,
    color: "#2C7BE5",
  },
  { source: "Direct", visits: 28000, percentage: 26.2, color: "#00D27A" },
  { source: "Social Media", visits: 18000, percentage: 16.8, color: "#F5803E" },
  { source: "Email", visits: 8500, percentage: 7.9, color: "#6C757D" },
  { source: "Paid Ads", visits: 7500, percentage: 7.0, color: "#E91E63" },
];

const financialData = [
  { category: "Revenue", q1: 145000, q2: 167000, q3: 189000, q4: 203000 },
  { category: "Expenses", q1: 89000, q2: 102000, q3: 115000, q4: 128000 },
  { category: "Profit", q1: 56000, q2: 65000, q3: 74000, q4: 75000 },
];

const topCustomersData = [
  {
    name: "Acme Corporation",
    orders: 45,
    revenue: 89500,
    lastOrder: "2024-02-15",
  },
  {
    name: "TechStart Inc.",
    orders: 38,
    revenue: 76200,
    lastOrder: "2024-02-14",
  },
  {
    name: "Global Solutions",
    orders: 42,
    revenue: 69800,
    lastOrder: "2024-02-13",
  },
  {
    name: "Innovation Labs",
    orders: 29,
    revenue: 58400,
    lastOrder: "2024-02-12",
  },
  {
    name: "Digital Dynamics",
    orders: 35,
    revenue: 52700,
    lastOrder: "2024-02-11",
  },
];

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState("last-30-days");
  const [selectedReport, setSelectedReport] = useState("overview");

  const reportTypes = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "sales", label: "Sales Report", icon: DollarSign },
    { id: "users", label: "User Analytics", icon: Users },
    { id: "products", label: "Product Performance", icon: ShoppingCart },
    { id: "traffic", label: "Website Traffic", icon: Eye },
    { id: "financial", label: "Financial", icon: FileSpreadsheet },
  ];

  const totalRevenue = 704000;
  const totalOrders = 2013;
  const totalCustomers = 1445;
  const averageOrderValue = 349.78;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-primary font-poppins flex items-center gap-2">
            <FileText className="h-6 w-6 text-falcon-blue" />
            Reports & Analytics
          </h1>
          <p className="text-falcon-text-secondary font-poppins">
            Comprehensive business insights and performance metrics
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-7-days">Last 7 Days</SelectItem>
              <SelectItem value="last-30-days">Last 30 Days</SelectItem>
              <SelectItem value="last-90-days">Last 90 Days</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="font-poppins">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Report Type Selector */}
      <Card className="bg-white border-falcon-border-light">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {reportTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedReport === type.id ? "default" : "outline"}
                className={`flex flex-col items-center gap-2 h-20 font-poppins ${
                  selectedReport === type.id
                    ? "bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90"
                    : "hover:bg-falcon-bg-light"
                }`}
                onClick={() => setSelectedReport(type.id)}
              >
                <type.icon className="h-5 w-5" />
                <span className="text-xs">{type.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  ${totalRevenue.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingUp className="h-4 w-4" />
                  +18.2%
                </div>
              </div>
              <div className="p-3 bg-falcon-blue bg-opacity-10 rounded-lg">
                <DollarSign className="h-6 w-6 text-falcon-blue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Total Orders
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {totalOrders.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingUp className="h-4 w-4" />
                  +12.5%
                </div>
              </div>
              <div className="p-3 bg-falcon-green bg-opacity-10 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-falcon-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Total Customers
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {totalCustomers.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingUp className="h-4 w-4" />
                  +8.7%
                </div>
              </div>
              <div className="p-3 bg-falcon-orange bg-opacity-10 rounded-lg">
                <Users className="h-6 w-6 text-falcon-orange" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Average Order Value
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  ${averageOrderValue}
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingUp className="h-4 w-4" />
                  +3.2%
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Content */}
      <Tabs
        value={selectedReport}
        onValueChange={setSelectedReport}
        className="space-y-6"
      >
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Revenue Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesReportData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                      <XAxis
                        dataKey="month"
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
                        dataKey="revenue"
                        stroke="#2C7BE5"
                        strokeWidth={3}
                        dot={{ fill: "#2C7BE5", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="profit"
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
                  Traffic Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSourceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="visits"
                      >
                        {trafficSourceData.map((entry, index) => (
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
                <div className="space-y-2 mt-4">
                  {trafficSourceData.map((source) => (
                    <div
                      key={source.source}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: source.color }}
                        ></div>
                        <span className="font-medium text-falcon-text-primary font-poppins">
                          {source.source}
                        </span>
                      </div>
                      <span className="text-falcon-text-secondary font-poppins">
                        {source.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Customers Table */}
          <Card className="bg-white border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Top Customers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-poppins">Customer</TableHead>
                    <TableHead className="font-poppins">Orders</TableHead>
                    <TableHead className="font-poppins">Revenue</TableHead>
                    <TableHead className="font-poppins">Last Order</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topCustomersData.map((customer) => (
                    <TableRow key={customer.name}>
                      <TableCell className="font-medium font-poppins">
                        {customer.name}
                      </TableCell>
                      <TableCell className="font-poppins">
                        {customer.orders}
                      </TableCell>
                      <TableCell className="font-poppins">
                        ${customer.revenue.toLocaleString()}
                      </TableCell>
                      <TableCell className="font-poppins">
                        {customer.lastOrder}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-white border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Monthly Sales Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesReportData}>
                      <defs>
                        <linearGradient
                          id="revenueGradient"
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
                        <linearGradient
                          id="profitGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#00D27A"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#00D27A"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                      <XAxis
                        dataKey="month"
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
                        dataKey="revenue"
                        stroke="#2C7BE5"
                        strokeWidth={2}
                        fill="url(#revenueGradient)"
                      />
                      <Area
                        type="monotone"
                        dataKey="profit"
                        stroke="#00D27A"
                        strokeWidth={2}
                        fill="url(#profitGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card className="bg-white border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Product Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-poppins">Product</TableHead>
                    <TableHead className="font-poppins">Sales</TableHead>
                    <TableHead className="font-poppins">Revenue</TableHead>
                    <TableHead className="font-poppins">Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productPerformanceData.map((product) => (
                    <TableRow key={product.product}>
                      <TableCell className="font-medium font-poppins">
                        {product.product}
                      </TableCell>
                      <TableCell className="font-poppins">
                        {product.sales}
                      </TableCell>
                      <TableCell className="font-poppins">
                        ${product.revenue.toLocaleString()}
                      </TableCell>
                      <TableCell className="font-poppins">
                        <div
                          className={`flex items-center gap-1 ${product.growth >= 0 ? "text-falcon-green" : "text-red-600"}`}
                        >
                          {product.growth >= 0 ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          {product.growth}%
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card className="bg-white border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                User Activity Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userActivityData}>
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
                      dataKey="newUsers"
                      fill="#2C7BE5"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="returnUsers"
                      fill="#00D27A"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
