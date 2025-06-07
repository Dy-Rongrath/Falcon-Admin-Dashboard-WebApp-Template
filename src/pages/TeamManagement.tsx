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
  Users,
  Search,
  Plus,
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  Award,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Edit,
  Trash2,
  UserPlus,
  Shield,
  Crown,
  Star,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "developer" | "designer" | "analyst";
  department: string;
  avatar: string;
  status: "active" | "away" | "offline";
  joinDate: string;
  projects: number;
  tasksCompleted: number;
  performance: number;
  salary: number;
  skills: string[];
  phone: string;
}

interface Team {
  id: string;
  name: string;
  description: string;
  lead: string;
  members: TeamMember[];
  projects: number;
  budget: number;
  performance: number;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@company.com",
    role: "admin",
    department: "Engineering",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    status: "active",
    joinDate: "2023-01-15",
    projects: 8,
    tasksCompleted: 145,
    performance: 95,
    salary: 120000,
    skills: ["React", "Node.js", "TypeScript", "Leadership"],
    phone: "+1 (555) 123-4567",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@company.com",
    role: "manager",
    department: "Design",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    status: "active",
    joinDate: "2023-02-20",
    projects: 6,
    tasksCompleted: 128,
    performance: 92,
    salary: 95000,
    skills: ["Figma", "UI/UX", "Product Design", "Management"],
    phone: "+1 (555) 234-5678",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@company.com",
    role: "developer",
    department: "Engineering",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    status: "away",
    joinDate: "2023-03-10",
    projects: 4,
    tasksCompleted: 98,
    performance: 88,
    salary: 85000,
    skills: ["Python", "Django", "PostgreSQL", "API Development"],
    phone: "+1 (555) 345-6789",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    role: "designer",
    department: "Design",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    status: "active",
    joinDate: "2023-04-05",
    projects: 5,
    tasksCompleted: 87,
    performance: 90,
    salary: 75000,
    skills: ["Sketch", "Adobe Creative Suite", "Prototyping", "Branding"],
    phone: "+1 (555) 456-7890",
  },
  {
    id: "5",
    name: "David Brown",
    email: "david.brown@company.com",
    role: "analyst",
    department: "Analytics",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    status: "offline",
    joinDate: "2023-05-12",
    projects: 3,
    tasksCompleted: 76,
    performance: 85,
    salary: 70000,
    skills: ["SQL", "Tableau", "Python", "Data Analysis"],
    phone: "+1 (555) 567-8901",
  },
];

const teams: Team[] = [
  {
    id: "1",
    name: "Frontend Team",
    description:
      "Responsible for user interface development and user experience",
    lead: "Jane Smith",
    members: teamMembers.filter((m) =>
      ["developer", "designer"].includes(m.role),
    ),
    projects: 8,
    budget: 450000,
    performance: 92,
  },
  {
    id: "2",
    name: "Backend Team",
    description: "Handles server-side development and database management",
    lead: "John Doe",
    members: teamMembers.filter((m) => m.role === "developer"),
    projects: 6,
    budget: 380000,
    performance: 88,
  },
  {
    id: "3",
    name: "Analytics Team",
    description: "Data analysis and business intelligence",
    lead: "David Brown",
    members: teamMembers.filter((m) => m.role === "analyst"),
    projects: 4,
    budget: 220000,
    performance: 85,
  },
];

export default function TeamManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const getRoleIcon = (role: TeamMember["role"]) => {
    switch (role) {
      case "admin":
        return <Crown className="h-4 w-4 text-yellow-500" />;
      case "manager":
        return <Shield className="h-4 w-4 text-blue-500" />;
      case "developer":
        return <Target className="h-4 w-4 text-green-500" />;
      case "designer":
        return <Star className="h-4 w-4 text-purple-500" />;
      case "analyst":
        return <TrendingUp className="h-4 w-4 text-orange-500" />;
    }
  };

  const getRoleBadge = (role: TeamMember["role"]) => {
    const colors = {
      admin: "bg-yellow-100 text-yellow-700",
      manager: "bg-blue-100 text-blue-700",
      developer: "bg-green-100 text-green-700",
      designer: "bg-purple-100 text-purple-700",
      analyst: "bg-orange-100 text-orange-700",
    };

    return (
      <Badge className={`${colors[role]} hover:${colors[role]}`}>{role}</Badge>
    );
  };

  const getStatusIndicator = (status: TeamMember["status"]) => {
    const colors = {
      active: "bg-green-500",
      away: "bg-yellow-500",
      offline: "bg-gray-500",
    };

    return <div className={`w-3 h-3 rounded-full ${colors[status]}`}></div>;
  };

  const totalMembers = teamMembers.length;
  const activeMembers = teamMembers.filter((m) => m.status === "active").length;
  const totalProjects = teamMembers.reduce(
    (sum, member) => sum + member.projects,
    0,
  );
  const avgPerformance =
    teamMembers.reduce((sum, member) => sum + member.performance, 0) /
    teamMembers.length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="h-6 w-6" />
            Team Management
          </h1>
          <p className="text-gray-600">
            Manage team members, roles, and performance
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Member
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Member
          </Button>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Members</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalMembers}
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
                <p className="text-sm text-gray-600">Active Members</p>
                <p className="text-2xl font-bold text-gray-900">
                  {activeMembers}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalProjects}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Award className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Performance</p>
                <p className="text-2xl font-bold text-gray-900">
                  {avgPerformance.toFixed(1)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Management */}
      <Tabs defaultValue="members" className="space-y-6">
        <TabsList>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="organigram">Organization</TabsTrigger>
        </TabsList>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search team members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-80"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  Department: All
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                Showing {teamMembers.length} members
              </div>
            </div>
          </CardContent>
        </Card>

        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Projects</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={member.avatar}
                                alt={member.name}
                              />
                              <AvatarFallback className="bg-gray-100 text-gray-600">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-0.5 -right-0.5">
                              {getStatusIndicator(member.status)}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-gray-900">
                                {member.name}
                              </p>
                              {getRoleIcon(member.role)}
                            </div>
                            <p className="text-sm text-gray-500">
                              {member.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getRoleBadge(member.role)}</TableCell>
                      <TableCell className="text-gray-600">
                        {member.department}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{member.projects}</span>
                          <span className="text-sm text-gray-500">active</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {member.performance}%
                            </span>
                          </div>
                          <Progress
                            value={member.performance}
                            className="h-2 w-16"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIndicator(member.status)}
                          <span className="capitalize text-sm">
                            {member.status}
                          </span>
                        </div>
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
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Member
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="h-4 w-4 mr-2" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Calendar className="h-4 w-4 mr-2" />
                              Schedule Meeting
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove Member
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

        <TabsContent value="teams">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <Card key={team.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{team.name}</CardTitle>
                    <Badge variant="outline">
                      {team.members.length} members
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{team.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Team Lead</span>
                      <span className="font-medium">{team.lead}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Active Projects</span>
                      <span className="font-medium">{team.projects}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Budget</span>
                      <span className="font-medium">
                        ${team.budget.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Performance</span>
                      <span className="font-medium">{team.performance}%</span>
                    </div>
                    <Progress value={team.performance} className="h-2" />
                  </div>

                  <div className="flex -space-x-2">
                    {team.members.slice(0, 4).map((member, index) => (
                      <Avatar
                        key={index}
                        className="h-8 w-8 border-2 border-white"
                      >
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {team.members.length > 4 && (
                      <div className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                        +{team.members.length - 4}
                      </div>
                    )}
                  </div>

                  <Button className="w-full" variant="outline">
                    View Team Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers
                    .sort((a, b) => b.performance - a.performance)
                    .slice(0, 5)
                    .map((member, index) => (
                      <div
                        key={member.id}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-medium">
                          #{index + 1}
                        </div>
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="bg-gray-100 text-gray-600">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {member.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {member.department}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">
                            {member.performance}%
                          </p>
                          <p className="text-xs text-gray-500">
                            {member.tasksCompleted} tasks
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Engineering", "Design", "Analytics"].map((dept) => {
                    const deptMembers = teamMembers.filter(
                      (m) => m.department === dept,
                    );
                    const avgPerf =
                      deptMembers.reduce((sum, m) => sum + m.performance, 0) /
                      deptMembers.length;

                    return (
                      <div key={dept} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">
                            {dept}
                          </span>
                          <span className="text-sm text-gray-600">
                            {avgPerf.toFixed(1)}%
                          </span>
                        </div>
                        <Progress value={avgPerf} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{deptMembers.length} members</span>
                          <span>
                            {deptMembers.reduce(
                              (sum, m) => sum + m.projects,
                              0,
                            )}{" "}
                            projects
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="organigram">
          <Card>
            <CardHeader>
              <CardTitle>Organization Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* CEO Level */}
                <div className="text-center">
                  <div className="inline-block p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`${import.meta.env.BASE_URL}placeholder.svg`} alt="CEO" />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          CEO
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-semibold">Chief Executive Officer</p>
                        <p className="text-sm text-gray-600">
                          Company Leadership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Department Heads */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {teams.map((team) => (
                    <div key={team.id} className="text-center">
                      <div className="p-4 bg-gray-50 rounded-lg border">
                        <div className="space-y-3">
                          <h3 className="font-semibold text-gray-900">
                            {team.name}
                          </h3>
                          <div className="flex justify-center">
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={`${import.meta.env.BASE_URL}placeholder.svg`}
                                alt={team.lead}
                              />
                              <AvatarFallback className="bg-gray-100 text-gray-600">
                                {team.lead
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <p className="font-medium">{team.lead}</p>
                            <p className="text-sm text-gray-500">Team Lead</p>
                          </div>

                          <div className="space-y-2">
                            {team.members.slice(0, 3).map((member) => (
                              <div
                                key={member.id}
                                className="flex items-center gap-2 text-sm"
                              >
                                <Avatar className="h-6 w-6">
                                  <AvatarImage
                                    src={member.avatar}
                                    alt={member.name}
                                  />
                                  <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                                    {member.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{member.name}</span>
                              </div>
                            ))}
                            {team.members.length > 3 && (
                              <p className="text-xs text-gray-500">
                                +{team.members.length - 3} more members
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
