import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Plus,
  MoreHorizontal,
  Calendar,
  MessageSquare,
  Paperclip,
  Users,
  Trello,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  assignees: {
    name: string;
    avatar: string;
  }[];
  dueDate: string;
  comments: number;
  attachments: number;
  labels: string[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
}

const kanbanData: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-gray-100",
    tasks: [
      {
        id: "task-1",
        title: "Design System Update",
        description:
          "Update the design system components with new brand guidelines",
        priority: "high",
        assignees: [
          { name: "John Doe", avatar: "/placeholder.svg" },
          { name: "Jane Smith", avatar: "/placeholder.svg" },
        ],
        dueDate: "2024-02-05",
        comments: 3,
        attachments: 2,
        labels: ["Design", "UI/UX"],
      },
      {
        id: "task-2",
        title: "API Documentation",
        description: "Create comprehensive API documentation for v2.0",
        priority: "medium",
        assignees: [{ name: "Mike Johnson", avatar: "/placeholder.svg" }],
        dueDate: "2024-02-08",
        comments: 1,
        attachments: 0,
        labels: ["Development", "Documentation"],
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "bg-blue-100",
    tasks: [
      {
        id: "task-3",
        title: "User Authentication",
        description: "Implement OAuth 2.0 authentication system",
        priority: "high",
        assignees: [
          { name: "Sarah Wilson", avatar: "/placeholder.svg" },
          { name: "David Brown", avatar: "/placeholder.svg" },
        ],
        dueDate: "2024-02-03",
        comments: 5,
        attachments: 1,
        labels: ["Development", "Security"],
      },
      {
        id: "task-4",
        title: "Dashboard Analytics",
        description: "Build real-time analytics dashboard",
        priority: "medium",
        assignees: [{ name: "John Doe", avatar: "/placeholder.svg" }],
        dueDate: "2024-02-10",
        comments: 2,
        attachments: 3,
        labels: ["Analytics", "Dashboard"],
      },
    ],
  },
  {
    id: "review",
    title: "In Review",
    color: "bg-yellow-100",
    tasks: [
      {
        id: "task-5",
        title: "Mobile App UI",
        description: "Mobile application user interface design",
        priority: "medium",
        assignees: [{ name: "Jane Smith", avatar: "/placeholder.svg" }],
        dueDate: "2024-02-01",
        comments: 4,
        attachments: 5,
        labels: ["Mobile", "Design"],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "bg-green-100",
    tasks: [
      {
        id: "task-6",
        title: "Database Migration",
        description: "Migrate legacy database to new system",
        priority: "high",
        assignees: [
          { name: "Mike Johnson", avatar: "/placeholder.svg" },
          { name: "Sarah Wilson", avatar: "/placeholder.svg" },
        ],
        dueDate: "2024-01-28",
        comments: 8,
        attachments: 2,
        labels: ["Database", "Migration"],
      },
      {
        id: "task-7",
        title: "Performance Testing",
        description: "Conduct comprehensive performance testing",
        priority: "low",
        assignees: [{ name: "David Brown", avatar: "/placeholder.svg" }],
        dueDate: "2024-01-25",
        comments: 1,
        attachments: 1,
        labels: ["Testing", "Performance"],
      },
    ],
  },
];

export default function Kanban() {
  const [columns, setColumns] = useState(kanbanData);

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
    }
  };

  const TaskCard = ({ task }: { task: Task }) => (
    <Card className="mb-3 hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Task Header */}
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-gray-900 text-sm leading-tight">
              {task.title}
            </h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-600 line-clamp-2">
            {task.description}
          </p>

          {/* Labels */}
          <div className="flex flex-wrap gap-1">
            {task.labels.map((label, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs px-2 py-0.5"
              >
                {label}
              </Badge>
            ))}
          </div>

          {/* Priority */}
          <Badge className={`text-xs w-fit ${getPriorityColor(task.priority)}`}>
            {task.priority} priority
          </Badge>

          {/* Task Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(task.dueDate).toLocaleDateString()}
              </div>
              {task.comments > 0 && (
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {task.comments}
                </div>
              )}
              {task.attachments > 0 && (
                <div className="flex items-center gap-1">
                  <Paperclip className="h-3 w-3" />
                  {task.attachments}
                </div>
              )}
            </div>
          </div>

          {/* Assignees */}
          <div className="flex items-center justify-between">
            <div className="flex -space-x-1">
              {task.assignees.map((assignee, index) => (
                <Avatar key={index} className="h-6 w-6 border-2 border-white">
                  <AvatarImage src={assignee.avatar} alt={assignee.name} />
                  <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                    {assignee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Trello className="h-6 w-6" />
            Kanban Board
          </h1>
          <p className="text-gray-600">
            Manage your projects with visual task management
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Users className="h-4 w-4 mr-2" />
            Team View
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {columns.map((column) => (
          <Card key={column.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${column.color.replace("bg-", "bg-").replace("-100", "-500")}`}
                ></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {column.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {column.tasks.length} tasks
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-3">
            {/* Column Header */}
            <Card className={column.color}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-900">
                    {column.title} ({column.tasks.length})
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* Tasks */}
            <div className="space-y-3">
              {column.tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>

            {/* Add Task Button */}
            <Button
              variant="outline"
              className="w-full border-dashed text-gray-500 hover:text-gray-900"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add a task
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
