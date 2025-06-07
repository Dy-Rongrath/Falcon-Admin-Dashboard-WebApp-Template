import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
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
  Plus,
  MoreHorizontal,
  Mail,
  Phone,
  Star,
  Clock,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Award,
  Calendar,
  Edit,
  Trash2,
  Shield,
  MessageSquare,
  HeadphonesIcon,
} from "lucide-react";

interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  status: "online" | "offline" | "busy";
  role: "agent" | "supervisor" | "manager";
  rating: number;
  ticketsResolved: number;
  ticketsAssigned: number;
  avgResponseTime: string;
  department: string;
  joinDate: string;
  languages: string[];
  skills: string[];
}

const mockAgents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "+1 (555) 123-4567",
    avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    status: "online",
    role: "supervisor",
    rating: 4.9,
    ticketsResolved: 234,
    ticketsAssigned: 12,
    avgResponseTime: "2.3 mins",
    department: "Technical Support",
    joinDate: "2022-01-15",
    languages: ["English", "Spanish"],
    skills: ["Technical Support", "Customer Service", "Troubleshooting"],
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@company.com",
    phone: "+1 (555) 234-5678",
    avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    status: "online",
    role: "agent",
    rating: 4.7,
    ticketsResolved: 189,
    ticketsAssigned: 8,
    avgResponseTime: "3.1 mins",
    department: "General Support",
    joinDate: "2022-03-20",
    languages: ["English", "Mandarin"],
    skills: ["Customer Service", "Product Knowledge", "Communication"],
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@company.com",
    phone: "+1 (555) 345-6789",
    avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    status: "busy",
    role: "agent",
    rating: 4.8,
    ticketsResolved: 156,
    ticketsAssigned: 15,
    avgResponseTime: "2.8 mins",
    department: "Billing Support",
    joinDate: "2022-06-10",
    languages: ["English", "Spanish", "Portuguese"],
    skills: ["Billing", "Customer Service", "Problem Solving"],
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@company.com",
    phone: "+1 (555) 456-7890",
    avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    status: "offline",
    role: "manager",
    rating: 4.9,
    ticketsResolved: 89,
    ticketsAssigned: 3,
    avgResponseTime: "1.9 mins",
    department: "Management",
    joinDate: "2021-09-05",
    languages: ["English", "Korean"],
    skills: ["Team Management", "Strategy", "Customer Relations"],
  },
  {
    id: "5",
    name: "Lisa Thompson",
    email: "lisa.thompson@company.com",
    phone: "+1 (555) 567-8901",
    avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    status: "online",
    role: "agent",
    rating: 4.6,
    ticketsResolved: 201,
    ticketsAssigned: 11,
    avgResponseTime: "3.5 mins",
    department: "Technical Support",
    joinDate: "2022-02-28",
    languages: ["English", "French"],
    skills: ["Technical Support", "Hardware", "Software"],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "online":
      return "bg-green-500";
    case "busy":
      return "bg-orange-500";
    case "offline":
      return "bg-gray-400";
    default:
      return "bg-gray-400";
  }
};

const getRoleColor = (role: string) => {
  switch (role) {
    case "manager":
      return "bg-purple-100 text-purple-700";
    case "supervisor":
      return "bg-blue-100 text-blue-700";
    case "agent":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function SupportAgents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const filteredAgents = mockAgents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || agent.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(mockAgents.map((agent) => agent.department))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Support Agents
          </h1>
          <p className="text-gray-600">
            Manage your support team and monitor performance
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Agent
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Agents
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockAgents.length}
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Online Agents
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {
                    mockAgents.filter((agent) => agent.status === "online")
                      .length
                  }
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {(
                    mockAgents.reduce((sum, agent) => sum + agent.rating, 0) /
                    mockAgents.length
                  ).toFixed(1)}
                </p>
              </div>
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Tickets
                </p>
                <p className="text-2xl font-bold text-orange-600">
                  {mockAgents.reduce(
                    (sum, agent) => sum + agent.ticketsAssigned,
                    0,
                  )}
                </p>
              </div>
              <MessageSquare className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Agents Table */}
      <Card>
        <CardHeader>
          <CardTitle>Agents ({filteredAgents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Resolved</TableHead>
                <TableHead>Assigned</TableHead>
                <TableHead>Avg Response</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAgents.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={agent.avatar} alt={agent.name} />
                          <AvatarFallback>
                            {agent.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(agent.status)}`}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {agent.name}
                        </p>
                        <p className="text-sm text-gray-500">{agent.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        agent.status === "online" ? "default" : "secondary"
                      }
                      className={getRoleColor(agent.role)}
                    >
                      {agent.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {agent.department}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{agent.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <p className="font-medium text-green-600">
                        {agent.ticketsResolved}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <p className="font-medium text-orange-600">
                        {agent.ticketsAssigned}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {agent.avgResponseTime}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="w-4 h-4 mr-2" />
                          Send Message
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Shield className="w-4 h-4 mr-2" />
                          Permissions
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
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
    </div>
  );
}
