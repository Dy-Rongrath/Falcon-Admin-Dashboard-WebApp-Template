import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  MessageCircle,
  Clock,
  User,
  AlertCircle,
  CheckCircle,
  XCircle,
  Briefcase,
  Mail,
  Phone,
} from "lucide-react";

interface Ticket {
  id: string;
  subject: string;
  description: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  priority: "low" | "medium" | "high" | "urgent";
  status: "open" | "in-progress" | "pending" | "resolved" | "closed";
  category: "technical" | "billing" | "general" | "feature-request";
  assignee: {
    name: string;
    avatar: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  responses: number;
}

const tickets: Ticket[] = [
  {
    id: "TIC-001",
    subject: "Unable to login to dashboard",
    description:
      "Getting authentication error when trying to log in with correct credentials",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
    priority: "high",
    status: "open",
    category: "technical",
    assignee: {
      name: "Sarah Wilson",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
    createdAt: "2024-01-28T10:30:00Z",
    updatedAt: "2024-01-28T14:20:00Z",
    responses: 3,
  },
  {
    id: "TIC-002",
    subject: "Billing inquiry about last month's charges",
    description:
      "Need clarification on the premium plan charges from last month",
    customer: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
    priority: "medium",
    status: "in-progress",
    category: "billing",
    assignee: {
      name: "Mike Johnson",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
    createdAt: "2024-01-27T09:15:00Z",
    updatedAt: "2024-01-28T11:45:00Z",
    responses: 5,
  },
  {
    id: "TIC-003",
    subject: "Feature request: Dark mode support",
    description: "Would love to see dark mode option added to the dashboard",
    customer: {
      name: "Alex Brown",
      email: "alex.brown@example.com",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
    priority: "low",
    status: "pending",
    category: "feature-request",
    assignee: null,
    createdAt: "2024-01-26T16:20:00Z",
    updatedAt: "2024-01-27T08:30:00Z",
    responses: 1,
  },
  {
    id: "TIC-004",
    subject: "Account suspension notice",
    description: "Received account suspension notice but payment is up to date",
    customer: {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
    priority: "urgent",
    status: "resolved",
    category: "billing",
    assignee: {
      name: "David Brown",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
    createdAt: "2024-01-25T12:00:00Z",
    updatedAt: "2024-01-26T15:30:00Z",
    responses: 8,
  },
  {
    id: "TIC-005",
    subject: "General question about API limits",
    description: "What are the rate limits for the REST API endpoints?",
    customer: {
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
    priority: "low",
    status: "closed",
    category: "general",
    assignee: {
      name: "Lisa Anderson",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
    createdAt: "2024-01-24T14:45:00Z",
    updatedAt: "2024-01-25T10:20:00Z",
    responses: 2,
  },
];

export default function SupportDesk() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const getPriorityBadge = (priority: Ticket["priority"]) => {
    switch (priority) {
      case "urgent":
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            Urgent
          </Badge>
        );
      case "high":
        return (
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
            High
          </Badge>
        );
      case "medium":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Medium
          </Badge>
        );
      case "low":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Low
          </Badge>
        );
    }
  };

  const getStatusBadge = (status: Ticket["status"]) => {
    switch (status) {
      case "open":
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            Open
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
            In Progress
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Pending
          </Badge>
        );
      case "resolved":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Resolved
          </Badge>
        );
      case "closed":
        return (
          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
            Closed
          </Badge>
        );
    }
  };

  const getCategoryBadge = (category: Ticket["category"]) => {
    const colors = {
      technical: "bg-red-100 text-red-700",
      billing: "bg-blue-100 text-blue-700",
      general: "bg-gray-100 text-gray-700",
      "feature-request": "bg-purple-100 text-purple-700",
    };

    return (
      <Badge className={`${colors[category]} hover:${colors[category]}`}>
        {category.replace("-", " ")}
      </Badge>
    );
  };

  const getStatusIcon = (status: Ticket["status"]) => {
    switch (status) {
      case "open":
        return <AlertCircle className="h-4 w-4 text-blue-500" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-purple-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "closed":
        return <XCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  const openTickets = tickets.filter((t) => t.status === "open").length;
  const inProgressTickets = tickets.filter(
    (t) => t.status === "in-progress",
  ).length;
  const resolvedTickets = tickets.filter((t) => t.status === "resolved").length;
  const avgResponseTime = "2.4 hours";

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Support Desk
          </h1>
          <p className="text-gray-600">
            Manage customer support tickets and inquiries
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Ticket
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Open Tickets</p>
                <p className="text-2xl font-bold text-gray-900">
                  {openTickets}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">
                  {inProgressTickets}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Resolved Today</p>
                <p className="text-2xl font-bold text-gray-900">
                  {resolvedTickets}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <MessageCircle className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Response</p>
                <p className="text-2xl font-bold text-gray-900">
                  {avgResponseTime}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tickets Management */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Tickets</TabsTrigger>
          <TabsTrigger value="open">Open ({openTickets})</TabsTrigger>
          <TabsTrigger value="in-progress">
            In Progress ({inProgressTickets})
          </TabsTrigger>
          <TabsTrigger value="urgent">Urgent</TabsTrigger>
        </TabsList>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search tickets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-80"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                Showing {tickets.length} tickets
              </div>
            </div>
          </CardContent>
        </Card>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(ticket.status)}
                          <div>
                            <p className="font-medium text-gray-900">
                              {ticket.subject}
                            </p>
                            <p className="text-sm text-gray-500">{ticket.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={ticket.customer.avatar}
                              alt={ticket.customer.name}
                            />
                            <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                              {ticket.customer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">
                              {ticket.customer.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {ticket.customer.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                      <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                      <TableCell>{getCategoryBadge(ticket.category)}</TableCell>
                      <TableCell>
                        {ticket.assignee ? (
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage
                                src={ticket.assignee.avatar}
                                alt={ticket.assignee.name}
                              />
                              <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                                {ticket.assignee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-700">
                              {ticket.assignee.name}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">
                            Unassigned
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {formatDate(ticket.updatedAt)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <MessageCircle className="h-4 w-4 mr-2" />
                              View Conversation
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <User className="h-4 w-4 mr-2" />
                              Assign to Me
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="h-4 w-4 mr-2" />
                              Send Email
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Mark Resolved
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="open">
          <div className="space-y-4">
            {tickets
              .filter((t) => t.status === "open")
              .map((ticket) => (
                <Card
                  key={ticket.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={ticket.customer.avatar}
                            alt={ticket.customer.name}
                          />
                          <AvatarFallback className="bg-gray-100 text-gray-600">
                            {ticket.customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {ticket.subject}
                            </h3>
                            {getPriorityBadge(ticket.priority)}
                            {getCategoryBadge(ticket.category)}
                          </div>
                          <p className="text-gray-600 mb-3">
                            {ticket.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>From: {ticket.customer.name}</span>
                            <span>•</span>
                            <span>Created: {formatDate(ticket.createdAt)}</span>
                            <span>•</span>
                            <span>{ticket.responses} responses</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                        <Button size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress">
          <div className="space-y-4">
            {tickets
              .filter((t) => t.status === "in-progress")
              .map((ticket) => (
                <Card key={ticket.id} className="border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Clock className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {ticket.subject}
                            </h3>
                            {getPriorityBadge(ticket.priority)}
                          </div>
                          <p className="text-gray-600 mb-3">
                            {ticket.description}
                          </p>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-500">
                              Assigned to:
                            </span>
                            {ticket.assignee && (
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage
                                    src={ticket.assignee.avatar}
                                    alt={ticket.assignee.name}
                                  />
                                  <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                                    {ticket.assignee.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium">
                                  {ticket.assignee.name}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Resolve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="urgent">
          <div className="space-y-4">
            {tickets
              .filter((t) => t.priority === "urgent")
              .map((ticket) => (
                <Card key={ticket.id} className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <span className="font-semibold text-red-700">
                        URGENT TICKET
                      </span>
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {ticket.subject}
                        </h3>
                        <p className="text-gray-700 mb-3">
                          {ticket.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span>Customer: {ticket.customer.name}</span>
                          <span>•</span>
                          <span>Created: {formatDate(ticket.createdAt)}</span>
                          <span>•</span>
                          <span className="text-red-600 font-medium">
                            NEEDS IMMEDIATE ATTENTION
                          </span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Respond Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
