import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp,
  FileText,
  Settings,
} from "lucide-react";

const Management: React.FC = () => {
  // Sample data
  const projectProgressData = [
    {
      project: "Website Redesign",
      completed: 85,
      total: 100,
      status: "On Track",
    },
    { project: "Mobile App", completed: 62, total: 100, status: "At Risk" },
    {
      project: "API Integration",
      completed: 90,
      total: 100,
      status: "On Track",
    },
    {
      project: "Database Migration",
      completed: 45,
      total: 100,
      status: "Behind",
    },
    {
      project: "Security Audit",
      completed: 100,
      total: 100,
      status: "Completed",
    },
  ];

  const teamPerformanceData = [
    { month: "Jan", productivity: 82, efficiency: 78, satisfaction: 85 },
    { month: "Feb", productivity: 85, efficiency: 82, satisfaction: 87 },
    { month: "Mar", productivity: 88, efficiency: 85, satisfaction: 89 },
    { month: "Apr", productivity: 90, efficiency: 88, satisfaction: 91 },
    { month: "May", productivity: 87, efficiency: 84, satisfaction: 88 },
    { month: "Jun", productivity: 92, efficiency: 90, satisfaction: 93 },
  ];

  const resourceUtilizationData = [
    { resource: "Developers", allocated: 85, available: 100 },
    { resource: "Designers", allocated: 70, available: 100 },
    { resource: "QA Engineers", allocated: 90, available: 100 },
    { resource: "DevOps", allocated: 60, available: 100 },
    { resource: "Project Managers", allocated: 95, available: 100 },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "project",
      title: "Website Redesign milestone completed",
      time: "2 hours ago",
      status: "success",
    },
    {
      id: 2,
      type: "team",
      title: "New developer joined the team",
      time: "4 hours ago",
      status: "info",
    },
    {
      id: 3,
      type: "deadline",
      title: "API Integration deadline approaching",
      time: "6 hours ago",
      status: "warning",
    },
    {
      id: 4,
      type: "budget",
      title: "Monthly budget review scheduled",
      time: "1 day ago",
      status: "info",
    },
    {
      id: 5,
      type: "task",
      title: "Security audit completed successfully",
      time: "2 days ago",
      status: "success",
    },
  ];

  const upcomingDeadlines = [
    {
      project: "Mobile App Beta",
      deadline: "Jun 15, 2024",
      daysLeft: 5,
      priority: "high",
    },
    {
      project: "API Documentation",
      deadline: "Jun 20, 2024",
      daysLeft: 10,
      priority: "medium",
    },
    {
      project: "Performance Testing",
      deadline: "Jun 25, 2024",
      daysLeft: 15,
      priority: "low",
    },
    {
      project: "User Training",
      deadline: "Jul 1, 2024",
      daysLeft: 21,
      priority: "medium",
    },
  ];

  const MetricCard: React.FC<{
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
            <TrendingUp
              className={`w-4 h-4 mr-1 ${isPositive ? "text-green-500" : "text-red-500"}`}
            />
            <span
              className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}
            >
              {change}
            </span>
            <span className="text-sm text-gray-500 ml-1">this month</span>
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
      case "Completed":
        return "bg-green-100 text-green-800";
      case "On Track":
        return "bg-blue-100 text-blue-800";
      case "At Risk":
        return "bg-yellow-100 text-yellow-800";
      case "Behind":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "project":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "team":
        return <Users className="w-4 h-4 text-blue-500" />;
      case "deadline":
        return <Clock className="w-4 h-4 text-orange-500" />;
      case "budget":
        return <FileText className="w-4 h-4 text-purple-500" />;
      case "task":
        return <Settings className="w-4 h-4 text-gray-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Management Dashboard
          </h1>
          <p className="text-gray-600">
            Project management, team oversight, and resource allocation
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Active Projects"
            value="24"
            change="+4"
            isPositive={true}
            icon={<FileText className="w-6 h-6" style={{ color: "#2C7BE5" }} />}
            color="#2C7BE5"
          />
          <MetricCard
            title="Team Members"
            value="156"
            change="+12"
            isPositive={true}
            icon={<Users className="w-6 h-6" style={{ color: "#00D97E" }} />}
            color="#00D97E"
          />
          <MetricCard
            title="Completion Rate"
            value="89%"
            change="+5%"
            isPositive={true}
            icon={
              <CheckCircle className="w-6 h-6" style={{ color: "#F5803E" }} />
            }
            color="#F5803E"
          />
          <MetricCard
            title="Resource Utilization"
            value="82%"
            change="+3%"
            isPositive={true}
            icon={
              <TrendingUp className="w-6 h-6" style={{ color: "#E63757" }} />
            }
            color="#E63757"
          />
        </div>

        {/* Project Progress & Team Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Project Progress Overview
            </h3>
            <div className="space-y-4">
              {projectProgressData.map((project, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">
                      {project.project}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>{project.completed}% Complete</span>
                    <span>
                      {project.completed}/{project.total} tasks
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.completed}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Team Performance Metrics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={teamPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[70, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="productivity"
                  stroke="#2C7BE5"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="efficiency"
                  stroke="#00D97E"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="satisfaction"
                  stroke="#F5803E"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Resource Utilization & Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Resource Utilization
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={resourceUtilizationData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="resource" type="category" width={100} />
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Bar dataKey="allocated" fill="#2C7BE5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Recent Activities
            </h3>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 border-l-2 border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Upcoming Deadlines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 text-sm">
                    {deadline.project}
                  </h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(deadline.priority)}`}
                  >
                    {deadline.priority}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  {deadline.deadline}
                </p>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900">
                    {deadline.daysLeft} days left
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
