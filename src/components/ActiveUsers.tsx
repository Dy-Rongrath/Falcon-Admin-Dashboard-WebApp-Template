import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Circle } from "lucide-react";

interface ActiveUser {
  name: string;
  email: string;
  status: "online" | "away" | "busy";
  lastSeen: string;
  avatar: string;
}

const users: ActiveUser[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    status: "online",
    lastSeen: "Just now",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    status: "away",
    lastSeen: "5 min ago",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    status: "online",
    lastSeen: "2 min ago",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    status: "busy",
    lastSeen: "1 hour ago",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
  },
  {
    name: "David Brown",
    email: "david@example.com",
    status: "online",
    lastSeen: "Just now",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
  },
];

export default function ActiveUsers() {
  const getStatusIndicator = (status: ActiveUser["status"]) => {
    const statusColors = {
      online: "text-green-500",
      away: "text-yellow-500",
      busy: "text-red-500",
    };

    return (
      <Circle className={`h-2 w-2 fill-current ${statusColors[status]}`} />
    );
  };

  const getStatusBadge = (status: ActiveUser["status"]) => {
    switch (status) {
      case "online":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
            Online
          </Badge>
        );
      case "away":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 text-xs">
            Away
          </Badge>
        );
      case "busy":
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100 text-xs">
            Busy
          </Badge>
        );
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <Users className="h-5 w-5" />
          Active Users
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-slate-100 text-slate-600">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5">
                {getStatusIndicator(user.status)}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">{user.name}</p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>

            <div className="text-right">
              {getStatusBadge(user.status)}
              <p className="text-xs text-slate-500 mt-1">{user.lastSeen}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
