import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Trello,
  Plus,
  MoreHorizontal,
  Calendar,
  MessageSquare,
  Paperclip,
  Flag,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Archive,
  Edit,
  Trash2,
  Filter,
  Search,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "todo" | "in_progress" | "review" | "done";
  assignees: {
    id: string;
    name: string;
    avatar: string;
  }[];
  dueDate: string;
  tags: string[];
  attachments: number;
  comments: number;
  progress: number;
  createdAt: string;
}

interface Column {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
  limit?: number;
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Design new landing page",
    description:
      "Create a modern and responsive landing page for the new product launch",
    priority: "high",
    status: "todo",
    assignees: [
      { id: "1", name: "Sarah Johnson", avatar: "/api/placeholder/32/32" },
      { id: "2", name: "Mike Chen", avatar: "/api/placeholder/32/32" },
    ],
    dueDate: "2024-02-20",
    tags: ["Design", "Frontend"],
    attachments: 3,
    comments: 5,
    progress: 0,
    createdAt: "2024-02-15",
  },
  {
    id: "2",
    title: "API Integration",
    description: "Integrate with the new payment gateway API",
    priority: "urgent",
    status: "in_progress",
    assignees: [
      { id: "3", name: "Alex Rodriguez", avatar: "/api/placeholder/32/32" },
    ],
    dueDate: "2024-02-18",
    tags: ["Backend", "API"],
    attachments: 1,
    comments: 8,
    progress: 65,
    createdAt: "2024-02-12",
  },
  {
    id: "3",
    title: "User Testing",
    description: "Conduct usability testing for the new features",
    priority: "medium",
    status: "review",
    assignees: [
      { id: "4", name: "Emma Wilson", avatar: "/api/placeholder/32/32" },
      { id: "5", name: "David Lee", avatar: "/api/placeholder/32/32" },
    ],
    dueDate: "2024-02-22",
    tags: ["Testing", "UX"],
    attachments: 0,
    comments: 3,
    progress: 90,
    createdAt: "2024-02-10",
  },
  {
    id: "4",
    title: "Database Migration",
    description: "Migrate user data to the new database schema",
    priority: "high",
    status: "done",
    assignees: [
      { id: "6", name: "Lisa Chen", avatar: "/api/placeholder/32/32" },
    ],
    dueDate: "2024-02-16",
    tags: ["Backend", "Database"],
    attachments: 2,
    comments: 12,
    progress: 100,
    createdAt: "2024-02-08",
  },
  {
    id: "5",
    title: "Mobile App Optimization",
    description: "Optimize mobile app performance and fix memory leaks",
    priority: "medium",
    status: "todo",
    assignees: [
      { id: "7", name: "John Smith", avatar: "/api/placeholder/32/32" },
    ],
    dueDate: "2024-02-25",
    tags: ["Mobile", "Performance"],
    attachments: 0,
    comments: 2,
    progress: 0,
    createdAt: "2024-02-14",
  },
  {
    id: "6",
    title: "Security Audit",
    description: "Perform comprehensive security audit of the application",
    priority: "urgent",
    status: "in_progress",
    assignees: [
      { id: "8", name: "Maria Garcia", avatar: "/api/placeholder/32/32" },
      { id: "9", name: "Tom Wilson", avatar: "/api/placeholder/32/32" },
    ],
    dueDate: "2024-02-19",
    tags: ["Security", "Audit"],
    attachments: 5,
    comments: 15,
    progress: 40,
    createdAt: "2024-02-11",
  },
];

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-gray-100",
    tasks: mockTasks.filter((task) => task.status === "todo"),
    limit: 10,
  },
  {
    id: "in_progress",
    title: "In Progress",
    color: "bg-falcon-blue bg-opacity-10",
    tasks: mockTasks.filter((task) => task.status === "in_progress"),
    limit: 5,
  },
  {
    id: "review",
    title: "Review",
    color: "bg-falcon-orange bg-opacity-10",
    tasks: mockTasks.filter((task) => task.status === "review"),
    limit: 3,
  },
  {
    id: "done",
    title: "Done",
    color: "bg-falcon-green bg-opacity-10",
    tasks: mockTasks.filter((task) => task.status === "done"),
  },
];

export default function Kanban() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-700 border-red-200";
      case "high":
        return "bg-falcon-orange bg-opacity-10 text-falcon-orange border-falcon-orange border-opacity-20";
      case "medium":
        return "bg-falcon-blue bg-opacity-10 text-falcon-blue border-falcon-blue border-opacity-20";
      case "low":
        return "bg-gray-100 text-gray-600 border-gray-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <AlertCircle className="h-3 w-3" />;
      case "high":
        return <Flag className="h-3 w-3" />;
      case "medium":
        return <Clock className="h-3 w-3" />;
      case "low":
        return <CheckCircle className="h-3 w-3" />;
      default:
        return <Clock className="h-3 w-3" />;
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date();
  };

  const handleDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(task));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    const taskData = e.dataTransfer.getData("text/plain");
    const task = JSON.parse(taskData) as Task;

    // Update task status and move between columns
    const updatedTask = { ...task, status: columnId as Task["status"] };

    setColumns((prevColumns) =>
      prevColumns.map((column) => ({
        ...column,
        tasks:
          column.id === columnId
            ? [...column.tasks.filter((t) => t.id !== task.id), updatedTask]
            : column.tasks.filter((t) => t.id !== task.id),
      })),
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-primary font-poppins flex items-center gap-2">
            <Trello className="h-6 w-6 text-falcon-blue" />
            Kanban Board
          </h1>
          <p className="text-falcon-text-secondary font-poppins">
            Manage your projects with visual task boards
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="font-poppins">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>
      </div>

      {/* Kanban Board Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {columns.map((column) => (
          <Card key={column.id} className="bg-white border-falcon-border-light">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                    {column.title}
                  </p>
                  <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                    {column.tasks.length}
                  </p>
                  {column.limit && (
                    <p className="text-xs text-falcon-text-muted font-poppins">
                      Limit: {column.limit}
                    </p>
                  )}
                </div>
                <div className={cn("w-3 h-12 rounded-full", column.color)} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4">
            {/* Column Header */}
            <Card className="bg-white border-falcon-border-light">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={cn("w-3 h-3 rounded-full", column.color)} />
                    <CardTitle className="font-poppins text-falcon-text-primary text-sm">
                      {column.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {column.tasks.length}
                    </Badge>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Task
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Column
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Archive className="h-4 w-4 mr-2" />
                        Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {column.limit && (
                  <Progress
                    value={(column.tasks.length / column.limit) * 100}
                    className="h-1 mt-2"
                  />
                )}
              </CardHeader>
            </Card>

            {/* Tasks */}
            <div
              className="space-y-3 min-h-96"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, column.id)}
            >
              {column.tasks.map((task) => (
                <Card
                  key={task.id}
                  className="bg-white border-falcon-border-light hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                  onClick={() => setSelectedTask(task)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {/* Task Header */}
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-falcon-text-primary font-poppins text-sm leading-tight">
                          {task.title}
                        </h4>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                            >
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Star className="h-4 w-4 mr-2" />
                              Star
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      {/* Task Description */}
                      <p className="text-xs text-falcon-text-secondary font-poppins line-clamp-2">
                        {task.description}
                      </p>

                      {/* Priority Badge */}
                      <div className="flex items-center gap-2">
                        <Badge
                          className={cn(
                            "text-xs border",
                            getPriorityColor(task.priority),
                          )}
                        >
                          {getPriorityIcon(task.priority)}
                          <span className="ml-1 capitalize">
                            {task.priority}
                          </span>
                        </Badge>
                        {isOverdue(task.dueDate) && (
                          <Badge variant="destructive" className="text-xs">
                            Overdue
                          </Badge>
                        )}
                      </div>

                      {/* Tags */}
                      {task.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {task.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs px-1.5 py-0.5"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Progress Bar */}
                      {task.progress > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-falcon-text-muted font-poppins">
                              Progress
                            </span>
                            <span className="text-xs text-falcon-text-muted font-poppins">
                              {task.progress}%
                            </span>
                          </div>
                          <Progress value={task.progress} className="h-1" />
                        </div>
                      )}

                      {/* Task Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-falcon-text-muted">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span className="font-poppins">{task.dueDate}</span>
                          </div>
                          {task.attachments > 0 && (
                            <div className="flex items-center gap-1">
                              <Paperclip className="h-3 w-3" />
                              <span className="font-poppins">
                                {task.attachments}
                              </span>
                            </div>
                          )}
                          {task.comments > 0 && (
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              <span className="font-poppins">
                                {task.comments}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Assignees */}
                        <div className="flex -space-x-1">
                          {task.assignees.slice(0, 3).map((assignee) => (
                            <Avatar
                              key={assignee.id}
                              className="w-6 h-6 border-2 border-white"
                            >
                              <AvatarImage
                                src={assignee.avatar}
                                alt={assignee.name}
                              />
                              <AvatarFallback className="text-xs">
                                {assignee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {task.assignees.length > 3 && (
                            <div className="w-6 h-6 bg-falcon-bg-light border-2 border-white rounded-full flex items-center justify-center">
                              <span className="text-xs text-falcon-text-muted font-poppins">
                                +{task.assignees.length - 3}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Add Task Button */}
              <Button
                variant="ghost"
                className="w-full h-12 border-2 border-dashed border-falcon-border-light hover:border-falcon-blue hover:bg-falcon-blue hover:bg-opacity-5 font-poppins"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
