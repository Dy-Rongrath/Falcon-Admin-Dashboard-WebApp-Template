import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
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
} from "recharts";
import {
  Users,
  DollarSign,
  TrendingUp,
  Target,
  Phone,
  Mail,
  Calendar,
  FileText,
  MoreHorizontal,
  Plus,
  Filter,
  Search,
  Star,
  MapPin,
  Building,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const salesData = [
  { month: "Jan", revenue: 65000, leads: 120, deals: 45 },
  { month: "Feb", revenue: 72000, leads: 135, deals: 52 },
  { month: "Mar", revenue: 58000, leads: 110, deals: 38 },
  { month: "Apr", revenue: 81000, leads: 150, deals: 61 },
  { month: "May", revenue: 95000, leads: 175, deals: 72 },
  { month: "Jun", revenue: 89000, leads: 160, deals: 68 },
];

const pipelineData = [
  { name: "Qualified", value: 15, color: "#2C7BE5" },
  { name: "Proposal", value: 25, color: "#00D97E" },
  { name: "Negotiation", value: 35, color: "#F5803E" },
  { name: "Closed Won", value: 25, color: "#FFB800" },
];

const recentLeads = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "Tech Solutions Inc.",
    email: "sarah@techsolutions.com",
    phone: "+1 (555) 123-4567",
    value: 15000,
    stage: "Qualified",
    source: "Website",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "Digital Marketing Co.",
    email: "m.chen@digitalmark.com",
    phone: "+1 (555) 234-5678",
    value: 28000,
    stage: "Proposal",
    source: "LinkedIn",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    company: "Growth Ventures",
    email: "emily@growthventures.com",
    phone: "+1 (555) 345-6789",
    value: 42000,
    stage: "Negotiation",
    source: "Referral",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
];

const CRM = () => {
  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Qualified":
        return "bg-blue-100 text-blue-800";
      case "Proposal":
        return "bg-green-100 text-green-800";
      case "Negotiation":
        return "bg-orange-100 text-orange-800";
      case "Closed Won":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins">
            CRM Dashboard
          </h1>
          <p className="text-falcon-text-light">
            Manage your sales pipeline and customer relationships
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-falcon-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  $460K
                </p>
                <p className="text-xs text-falcon-green">
                  +18.2% from last month
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
                  Active Leads
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">850</p>
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
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Conversion Rate
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  24.8%
                </p>
                <p className="text-xs text-falcon-orange">
                  +2.1% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Avg Deal Size
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  $28.5K
                </p>
                <p className="text-xs text-purple-600">+5.4% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Performance Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #D8E2EF",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#2C7BE5"
                    fill="#2C7BE5"
                    fillOpacity={0.3}
                    name="Revenue ($)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Sales Pipeline */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pipelineData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pipelineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Leads</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center space-x-4 p-3 border border-falcon-border-light rounded-lg"
                >
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={lead.avatar} alt={lead.name} />
                    <AvatarFallback>
                      {lead.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-falcon-text-dark text-sm">
                        {lead.name}
                      </h4>
                      <Badge className={getStageColor(lead.stage)}>
                        {lead.stage}
                      </Badge>
                    </div>
                    <div className="text-xs text-falcon-text-light space-y-1">
                      <div className="flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        {lead.company}
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Value: {formatCurrency(lead.value)}</span>
                        <span>Source: {lead.source}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tasks & Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "call",
                  title: "Call Sarah Johnson",
                  time: "10:00 AM",
                  status: "pending",
                  icon: Phone,
                },
                {
                  type: "email",
                  title: "Follow up with Michael Chen",
                  time: "2:00 PM",
                  status: "completed",
                  icon: Mail,
                },
                {
                  type: "meeting",
                  title: "Demo with Growth Ventures",
                  time: "3:30 PM",
                  status: "pending",
                  icon: Calendar,
                },
                {
                  type: "proposal",
                  title: "Send proposal to Digital Marketing Co.",
                  time: "5:00 PM",
                  status: "pending",
                  icon: FileText,
                },
              ].map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activity.status === "completed"
                          ? "bg-green-100"
                          : "bg-blue-100"
                      }`}
                    >
                      <IconComponent
                        className={`h-4 w-4 ${
                          activity.status === "completed"
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-falcon-text-dark text-sm">
                        {activity.title}
                      </p>
                      <p className="text-xs text-falcon-text-light">
                        {activity.time}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {activity.status === "completed" ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Clock className="h-4 w-4 text-orange-600" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Plus className="h-6 w-6" />
              <span>Add Lead</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Calendar className="h-6 w-6" />
              <span>Schedule Call</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Mail className="h-6 w-6" />
              <span>Send Email</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <FileText className="h-6 w-6" />
              <span>Create Proposal</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CRM;
