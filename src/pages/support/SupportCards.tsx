import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Clock,
  User,
  Tag,
  MessageSquare,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Pause,
} from "lucide-react";

const SupportCards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const tickets = [
    {
      id: "T-2024-001",
      title: "Payment Processing Issue",
      description:
        "Customer unable to complete checkout process due to payment gateway error",
      customer: "Alice Johnson",
      customerEmail: "alice.johnson@email.com",
      status: "open",
      priority: "high",
      assignee: "John Doe",
      category: "Payment",
      created: "2024-06-15 09:30 AM",
      updated: "2024-06-15 11:45 AM",
      dueDate: "2024-06-16 09:30 AM",
      tags: ["payment", "urgent", "checkout"],
      messages: 3,
      timeSpent: "2h 30m",
      customerSatisfaction: null,
    },
    {
      id: "T-2024-002",
      title: "Feature Request: Dark Mode",
      description:
        "User requesting dark mode theme option for better accessibility",
      customer: "Bob Smith",
      customerEmail: "bob.smith@email.com",
      status: "in-progress",
      priority: "low",
      assignee: "Jane Smith",
      category: "Feature Request",
      created: "2024-06-14 02:15 PM",
      updated: "2024-06-15 10:20 AM",
      dueDate: "2024-06-20 02:15 PM",
      tags: ["ui", "accessibility", "enhancement"],
      messages: 5,
      timeSpent: "1h 15m",
      customerSatisfaction: null,
    },
    {
      id: "T-2024-003",
      title: "Login Authentication Error",
      description:
        "Users experiencing intermittent login failures with two-factor authentication",
      customer: "Carol Wilson",
      customerEmail: "carol.wilson@email.com",
      status: "resolved",
      priority: "critical",
      assignee: "Mike Johnson",
      category: "Technical",
      created: "2024-06-13 11:00 AM",
      updated: "2024-06-14 04:30 PM",
      dueDate: "2024-06-13 06:00 PM",
      tags: ["authentication", "security", "critical"],
      messages: 8,
      timeSpent: "4h 45m",
      customerSatisfaction: 5,
    },
    {
      id: "T-2024-004",
      title: "Report Generation Bug",
      description:
        "Analytics reports showing incorrect data for the past month",
      customer: "David Brown",
      customerEmail: "david.brown@email.com",
      status: "pending",
      priority: "medium",
      assignee: "Sarah Davis",
      category: "Bug",
      created: "2024-06-12 04:20 PM",
      updated: "2024-06-15 09:15 AM",
      dueDate: "2024-06-17 04:20 PM",
      tags: ["reports", "analytics", "data"],
      messages: 2,
      timeSpent: "3h 10m",
      customerSatisfaction: null,
    },
    {
      id: "T-2024-005",
      title: "Account Upgrade Question",
      description:
        "Customer inquiry about upgrading to premium plan and available features",
      customer: "Eva Martinez",
      customerEmail: "eva.martinez@email.com",
      status: "closed",
      priority: "low",
      assignee: "Tom Wilson",
      category: "Billing",
      created: "2024-06-10 08:45 AM",
      updated: "2024-06-11 03:30 PM",
      dueDate: "2024-06-12 08:45 AM",
      tags: ["billing", "upgrade", "sales"],
      messages: 4,
      timeSpent: "45m",
      customerSatisfaction: 4,
    },
    {
      id: "T-2024-006",
      title: "Mobile App Crash on iOS",
      description:
        "iOS app crashes when accessing user profile on devices running iOS 17.5",
      customer: "Frank Lopez",
      customerEmail: "frank.lopez@email.com",
      status: "open",
      priority: "high",
      assignee: "Lisa Chen",
      category: "Mobile",
      created: "2024-06-15 01:20 PM",
      updated: "2024-06-15 02:45 PM",
      dueDate: "2024-06-16 01:20 PM",
      tags: ["mobile", "ios", "crash"],
      messages: 1,
      timeSpent: "1h 25m",
      customerSatisfaction: null,
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Status", count: tickets.length },
    {
      value: "open",
      label: "Open",
      count: tickets.filter((t) => t.status === "open").length,
    },
    {
      value: "in-progress",
      label: "In Progress",
      count: tickets.filter((t) => t.status === "in-progress").length,
    },
    {
      value: "pending",
      label: "Pending",
      count: tickets.filter((t) => t.status === "pending").length,
    },
    {
      value: "resolved",
      label: "Resolved",
      count: tickets.filter((t) => t.status === "resolved").length,
    },
    {
      value: "closed",
      label: "Closed",
      count: tickets.filter((t) => t.status === "closed").length,
    },
  ];

  const priorityOptions = [
    { value: "all", label: "All Priority" },
    { value: "critical", label: "Critical" },
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500" };
      case "in-progress":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-800",
          dot: "bg-yellow-500",
        };
      case "pending":
        return {
          bg: "bg-orange-100",
          text: "text-orange-800",
          dot: "bg-orange-500",
        };
      case "resolved":
        return {
          bg: "bg-green-100",
          text: "text-green-800",
          dot: "bg-green-500",
        };
      case "closed":
        return { bg: "bg-gray-100", text: "text-gray-800", dot: "bg-gray-500" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-800", dot: "bg-gray-500" };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return {
          bg: "bg-red-100",
          text: "text-red-800",
          border: "border-red-300",
        };
      case "high":
        return {
          bg: "bg-orange-100",
          text: "text-orange-800",
          border: "border-orange-300",
        };
      case "medium":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-800",
          border: "border-yellow-300",
        };
      case "low":
        return {
          bg: "bg-green-100",
          text: "text-green-800",
          border: "border-green-300",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-800",
          border: "border-gray-300",
        };
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <AlertTriangle className="w-4 h-4" />;
      case "in-progress":
        return <Clock className="w-4 h-4" />;
      case "pending":
        return <Pause className="w-4 h-4" />;
      case "resolved":
        return <CheckCircle className="w-4 h-4" />;
      case "closed":
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const formatTimeAgo = (dateString: string) => {
    // Simple time ago formatting for demo
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Support Tickets - Card View
            </h1>
            <p className="text-gray-600">
              Manage and track customer support tickets in card format
            </p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Ticket
          </button>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {statusOptions.map((status) => (
            <div
              key={status.value}
              className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all ${
                statusFilter === status.value
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setStatusFilter(status.value)}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {status.count ||
                    tickets.filter(
                      (t) =>
                        status.value === "all" || t.status === status.value,
                    ).length}
                </div>
                <div className="text-sm text-gray-600">{status.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tickets, customers, or IDs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {priorityOptions.map((priority) => (
                  <option key={priority.value} value={priority.value}>
                    {priority.label}
                  </option>
                ))}
              </select>

              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <div className="w-4 h-4 space-y-1">
                    <div className="bg-current h-0.5 rounded"></div>
                    <div className="bg-current h-0.5 rounded"></div>
                    <div className="bg-current h-0.5 rounded"></div>
                    <div className="bg-current h-0.5 rounded"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredTickets.length} of {tickets.length} tickets
          </div>
        </div>

        {/* Tickets Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {filteredTickets.map((ticket) => {
            const statusColors = getStatusColor(ticket.status);
            const priorityColors = getPriorityColor(ticket.priority);

            return (
              <div
                key={ticket.id}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-l-4 ${priorityColors.border} ${
                  viewMode === "list" ? "p-4" : "p-6"
                }`}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-mono text-blue-600">
                        {ticket.id}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${priorityColors.bg} ${priorityColors.text}`}
                      >
                        {ticket.priority}
                      </span>
                    </div>
                    <h3
                      className={`font-semibold text-gray-900 ${viewMode === "list" ? "text-base" : "text-lg"} line-clamp-2`}
                    >
                      {ticket.title}
                    </h3>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>

                {/* Description */}
                <p
                  className={`text-gray-600 mb-4 ${viewMode === "list" ? "text-sm line-clamp-1" : "text-sm line-clamp-3"}`}
                >
                  {ticket.description}
                </p>

                {/* Customer Info */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {ticket.customer}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {ticket.customerEmail}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {ticket.tags
                    .slice(0, viewMode === "list" ? 2 : 3)
                    .map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  {ticket.tags.length > (viewMode === "list" ? 2 : 3) && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{ticket.tags.length - (viewMode === "list" ? 2 : 3)}
                    </span>
                  )}
                </div>

                {/* Status and Metrics */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex items-center px-3 py-1 rounded-full ${statusColors.bg}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${statusColors.dot} mr-2`}
                    ></div>
                    <span
                      className={`text-xs font-medium ${statusColors.text}`}
                    >
                      {ticket.status.replace("-", " ")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      {ticket.messages}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {ticket.timeSpent}
                    </span>
                  </div>
                </div>

                {/* Assignee and Time */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Assigned to {ticket.assignee}</span>
                  <span>{formatTimeAgo(ticket.updated)}</span>
                </div>

                {/* Customer Satisfaction */}
                {ticket.customerSatisfaction && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Satisfaction
                      </span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full mr-1 ${
                              i < ticket.customerSatisfaction!
                                ? "bg-yellow-400"
                                : "bg-gray-200"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-xs text-gray-600">
                          {ticket.customerSatisfaction}/5
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTickets.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No tickets found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredTickets.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Load More Tickets
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportCards;
