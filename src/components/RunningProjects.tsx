import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  assignee: string;
  status: "completed" | "in-progress" | "pending";
  progress: number;
  avatarColor: string;
}

const projects: Project[] = [
  {
    name: "Falcon ReactJS",
    assignee: "John Doe",
    status: "completed",
    progress: 100,
    avatarColor: "bg-blue-100 text-blue-600",
  },
  {
    name: "Falcon Admin",
    assignee: "Jane Smith",
    status: "in-progress",
    progress: 75,
    avatarColor: "bg-green-100 text-green-600",
  },
  {
    name: "E-commerce Dashboard",
    assignee: "Mike Johnson",
    status: "in-progress",
    progress: 60,
    avatarColor: "bg-purple-100 text-purple-600",
  },
  {
    name: "Mobile App",
    assignee: "Sarah Wilson",
    status: "pending",
    progress: 30,
    avatarColor: "bg-orange-100 text-orange-600",
  },
];

export default function RunningProjects() {
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Completed
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            In Progress
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
            Pending
          </Badge>
        );
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900">
          Running Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback
                  className={cn("text-xs font-medium", project.avatarColor)}
                >
                  {project.assignee
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {project.name}
                </p>
                <p className="text-xs text-slate-500">{project.assignee}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-slate-500 mb-1">
                  {project.progress}%
                </div>
                <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      project.status === "completed"
                        ? "bg-green-500"
                        : project.status === "in-progress"
                          ? "bg-blue-500"
                          : "bg-orange-500",
                    )}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
              {getStatusBadge(project.status)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
