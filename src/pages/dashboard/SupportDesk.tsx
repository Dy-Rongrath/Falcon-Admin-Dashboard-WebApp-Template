import React from "react";
import {
  LineChart,
  Line,
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
  MessageSquare,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  Star,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const SupportDesk: React.FC = () => {
  // Sample data for support metrics
  const ticketVolumeData = [
    { day: "Mon", new: 45, resolved: 38, pending: 12 },
    { day: "Tue", new: 52, resolved: 42, pending: 18 },
    { day: "Wed", new: 38, resolved: 48, pending: 8 },
    { day: "Thu", new: 65, resolved: 35, pending: 30 },
    { day: "Fri", new: 58, resolved: 52, pending: 15 },
    { day: "Sat", new: 25, resolved: 28, pending: 8 },
    { day: "Sun", new: 18, resolved: 22, pending: 5 },
  ];

  const responseTimeData = [
    { category: "Critical", avgTime: 0.5, target: 1, color: "#E63757" },
    { category: "High", avgTime: 2.3, target: 4, color: "#F5803E" },
    { category: "Medium", avgTime: 6.8, target: 8, color: "#2C7BE5" },
    { category: "Low", avgTime: 18.5, target: 24, color: "#00D97E" },
  ];

  const ticketCategoriesData = [
    { name: "Technical Issues", value: 35, color: "#2C7BE5" },
    { name: "Billing & Payment", value: 25, color: "#00D97E" },
    { name: "Feature Requests", value: 20, color: "#F5803E" },
    { name: "General Inquiry", value: 15, color: "#E63757" },
    { name: "Bug Reports", value: 5, color: "#8E44AD" },
  ];

  const satisfactionTrendData = [
    { month: "Jan", satisfaction: 4.2, responseTime: 3.5, resolution: 4.1 },
    { month: "Feb", satisfaction: 4.3, responseTime: 3.2, resolution: 4.2 },
    { month: "Mar", satisfaction: 4.1, responseTime: 3.8, resolution: 4.0 },
    { month: "Apr", satisfaction: 4.4, responseTime: 2.9, resolution: 4.3 },
    { month: "May", satisfaction: 4.5, responseTime: 2.7, resolution: 4.4 },
    { month: "Jun", satisfaction: 4.6, responseTime: 2.5, resolution: 4.5 },
  ];

  const recentTickets = [
    {
      id: "#T-2024-001",
      customer: "Alice Johnson",
      subject: "Payment processing issue",
      priority: "High",
      status: "In Progress",
      assignee: "John Doe",
      created: "2 hours ago",
    },
    {
      id: "#T-2024-002",
      customer: "Bob Smith",
      subject: "Feature request: Dark mode",
      priority: "Low",
      status: "Open",
      assignee: "Jane Smith",
      created: "4 hours ago",
    },
    {
      id: "#T-2024-003",
      customer: "Carol Wilson",
      subject: "Login authentication error",
      priority: "Critical",
      status: "Resolved",
      assignee: "Mike Johnson",
      created: "6 hours ago",
    },
    {
      id: "#T-2024-004",
      customer: "David Brown",
      subject: "Report generation bug",
      priority: "Medium",
      status: "Open",
      assignee: "Sarah Davis",
      created: "1 day ago",
    },
    {
      id: "#T-2024-005",
      customer: "Eva Martinez",
      subject: "Account upgrade question",
      priority: "Low",
      status: "Closed",
      assignee: "Tom Wilson",
      created: "2 days ago",
    },
  ];

  const agentPerformance = [
    {
      name: "John Doe",
      tickets: 28,
      resolved: 25,
      satisfaction: 4.7,
      avgTime: "2.3h",
    },
    {
      name: "Jane Smith",
      tickets: 32,
      resolved: 30,
      satisfaction: 4.5,
      avgTime: "1.8h",
    },
    {
      name: "Mike Johnson",
      tickets: 24,
      resolved: 22,
      satisfaction: 4.8,
      avgTime: "2.1h",
    },
    {
      name: "Sarah Davis",
      tickets: 29,
      resolved: 26,
      satisfaction: 4.4,
      avgTime: "2.7h",
    },
    {
      name: "Tom Wilson",
      tickets: 26,
      resolved: 24,
      satisfaction: 4.6,
      avgTime: "2.0h",
    },
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
            <span className="text-sm text-gray-500 ml-1">vs last week</span>
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Medium":
        return "bg-blue-100 text-blue-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "Closed":
        return "bg-gray-100 text-gray-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Open":
        return "bg-yellow-100 text-yellow-800";
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
            Support Desk Dashboard
          </h1>
          <p className="text-gray-600">
            Customer support metrics, ticket management, and team performance
          </p>
        </div>

        {/* Key Support Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Open Tickets"
            value="142"
            change="-8.3%"
            isPositive={true}
            icon={
              <MessageSquare className="w-6 h-6" style={{ color: "#2C7BE5" }} />
            }
            color="#2C7BE5"
          />
          <MetricCard
            title="Avg Response Time"
            value="2.5h"
            change="-15%"
            isPositive={true}
            icon={<Clock className="w-6 h-6" style={{ color: "#00D97E" }} />}
            color="#00D97E"
          />
          <MetricCard
            title="Resolution Rate"
            value="89.3%"
            change="+5.2%"
            isPositive={true}
            icon={
              <CheckCircle className="w-6 h-6" style={{ color: "#F5803E" }} />
            }
            color="#F5803E"
          />
          <MetricCard
            title="Customer Satisfaction"
            value="4.6/5"
            subtitle="Based on 1,247 ratings"
            change="+0.3"
            isPositive={true}
            icon={<Star className="w-6 h-6" style={{ color: "#E63757" }} />}
            color="#E63757"
          />
        </div>

        {/* Ticket Volume & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Daily Ticket Volume
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ticketVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="new" fill="#2C7BE5" name="New Tickets" />
                <Bar dataKey="resolved" fill="#00D97E" name="Resolved" />
                <Bar dataKey="pending" fill="#F5803E" name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ticket Categories
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ticketCategoriesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {ticketCategoriesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Response Time Analysis & Satisfaction Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Response Time by Priority
            </h3>
            <div className="space-y-4">
              {responseTimeData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      {item.category}
                    </span>
                    <div className="text-right">
                      <span
                        className="text-lg font-bold"
                        style={{ color: item.color }}
                      >
                        {item.avgTime}h
                      </span>
                      <p className="text-xs text-gray-500">
                        Target: {item.target}h
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min((item.avgTime / item.target) * 100, 100)}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.avgTime <= item.target
                      ? "Meeting target"
                      : "Above target"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Customer Satisfaction Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={satisfactionTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 5]} />
                <Tooltip formatter={(value) => [value, ""]} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="satisfaction"
                  stroke="#2C7BE5"
                  strokeWidth={3}
                  name="Overall Satisfaction"
                />
                <Line
                  type="monotone"
                  dataKey="responseTime"
                  stroke="#00D97E"
                  strokeWidth={2}
                  name="Response Time Rating"
                />
                <Line
                  type="monotone"
                  dataKey="resolution"
                  stroke="#F5803E"
                  strokeWidth={2}
                  name="Resolution Quality"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Tickets */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Tickets
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticket ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assignee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {ticket.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ticket.customer}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                      {ticket.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(ticket.priority)}`}
                      >
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(ticket.status)}`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {ticket.assignee}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ticket.created}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Agent Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Agent Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {agentPerformance.map((agent, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{agent.name}</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tickets:</span>
                    <span className="font-medium">{agent.tickets}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Resolved:</span>
                    <span className="font-medium text-green-600">
                      {agent.resolved}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-medium text-yellow-600">
                      {agent.satisfaction}★
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Time:</span>
                    <span className="font-medium">{agent.avgTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDesk;
