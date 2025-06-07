import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bell,
  Search,
  Settings,
  Check,
  X,
  Info,
  AlertTriangle,
  CheckCircle,
  Mail,
  MessageSquare,
  Calendar,
  Users,
  ShoppingCart,
  Heart,
  Star,
  Trash2,
  Archive,
  MoreHorizontal,
  Volume2,
  VolumeX,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error" | "message" | "system";
  category: "all" | "mentions" | "comments" | "likes" | "orders" | "system";
  isRead: boolean;
  timestamp: string;
  avatar?: string;
  sender?: string;
  actionUrl?: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "New Order Received",
    message: "Order #12345 has been placed by John Doe",
    type: "success",
    category: "orders",
    isRead: false,
    timestamp: "2024-01-28T10:30:00Z",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    sender: "E-commerce System",
    actionUrl: "/orders/12345",
  },
  {
    id: "2",
    title: "Sarah mentioned you",
    message:
      "Sarah Wilson mentioned you in a comment: 'Great work on the dashboard!'",
    type: "info",
    category: "mentions",
    isRead: false,
    timestamp: "2024-01-28T09:15:00Z",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    sender: "Sarah Wilson",
  },
  {
    id: "3",
    title: "System Maintenance",
    message: "Scheduled maintenance will begin at 2:00 AM tomorrow",
    type: "warning",
    category: "system",
    isRead: true,
    timestamp: "2024-01-27T16:45:00Z",
    sender: "System Administrator",
  },
  {
    id: "4",
    title: "New Comment on Project",
    message: "Mike Johnson commented on 'Dashboard Redesign' project",
    type: "message",
    category: "comments",
    isRead: false,
    timestamp: "2024-01-27T14:20:00Z",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    sender: "Mike Johnson",
  },
  {
    id: "5",
    title: "Payment Failed",
    message:
      "Payment for subscription renewal failed. Please update your payment method.",
    type: "error",
    category: "system",
    isRead: false,
    timestamp: "2024-01-27T11:30:00Z",
    sender: "Billing System",
  },
  {
    id: "6",
    title: "Someone liked your post",
    message:
      "Alex Brown and 5 others liked your post about React best practices",
    type: "info",
    category: "likes",
    isRead: true,
    timestamp: "2024-01-26T18:10:00Z",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    sender: "Alex Brown",
  },
];

export default function Notifications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "mentions" | "comments" | "likes" | "orders" | "system"
  >("all");
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const getTypeIcon = (type: Notification["type"]) => {
    switch (type) {
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "error":
        return <X className="h-4 w-4 text-red-500" />;
      case "message":
        return <MessageSquare className="h-4 w-4 text-purple-500" />;
      case "system":
        return <Settings className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTypeBadge = (type: Notification["type"]) => {
    const colors = {
      info: "bg-blue-100 text-blue-700",
      success: "bg-green-100 text-green-700",
      warning: "bg-yellow-100 text-yellow-700",
      error: "bg-red-100 text-red-700",
      message: "bg-purple-100 text-purple-700",
      system: "bg-gray-100 text-gray-700",
    };

    return (
      <Badge className={`${colors[type]} hover:${colors[type]} text-xs`}>
        {type}
      </Badge>
    );
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Just now";
    if (diffDays === 2) return "1 hour ago";
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  const filteredNotifications = notifications.filter((notification) => {
    const matchesCategory =
      selectedCategory === "all" || notification.category === selectedCategory;
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesReadFilter = !showUnreadOnly || !notification.isRead;

    return matchesCategory && matchesSearch && matchesReadFilter;
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Bell className="h-6 w-6" />
            Notifications
            {unreadCount > 0 && (
              <Badge className="bg-red-500 text-white h-5 w-5 p-0 text-xs flex items-center justify-center">
                {unreadCount}
              </Badge>
            )}
          </h1>
          <p className="text-gray-600">
            Stay updated with all your notifications and alerts
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
        </div>
      </div>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">Email Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Order updates</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mentions</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Comments</span>
                  <Switch />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Push Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Browser notifications</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sound alerts</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Desktop notifications</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Frequency</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Real-time</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Daily digest</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Weekly summary</span>
                  <Switch />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <Tabs
        value={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value as any)}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
            <TabsTrigger value="mentions">Mentions</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">Unread only</span>
              <Switch
                checked={showUnreadOnly}
                onCheckedChange={setShowUnreadOnly}
              />
            </div>
          </div>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <TabsContent value={selectedCategory}>
          <Card>
            <CardContent className="p-0">
              <ScrollArea className="h-[600px]">
                <div className="divide-y">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 transition-colors ${
                        !notification.isRead
                          ? "bg-blue-50/30 border-l-4 border-l-blue-500"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {notification.avatar ? (
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={notification.avatar}
                                alt={notification.sender}
                              />
                              <AvatarFallback className="bg-gray-100 text-gray-600">
                                {notification.sender
                                  ?.split(" ")
                                  .map((n) => n[0])
                                  .join("") || "SY"}
                              </AvatarFallback>
                            </Avatar>
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                              {getTypeIcon(notification.type)}
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3
                              className={`font-medium ${!notification.isRead ? "text-gray-900" : "text-gray-700"}`}
                            >
                              {notification.title}
                            </h3>
                            {getTypeBadge(notification.type)}
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>

                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {notification.message}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>{notification.sender}</span>
                            <span>•</span>
                            <span>
                              {formatTimestamp(notification.timestamp)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {!notification.isRead && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                            >
                              <Check className="h-3 w-3" />
                            </Button>
                          )}

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0"
                              >
                                <MoreHorizontal className="h-3 w-3" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {!notification.isRead && (
                                <DropdownMenuItem>
                                  <Check className="h-4 w-4 mr-2" />
                                  Mark as Read
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem>
                                <Archive className="h-4 w-4 mr-2" />
                                Archive
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  ))}

                  {filteredNotifications.length === 0 && (
                    <div className="p-12 text-center">
                      <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-2">
                        No notifications found
                      </p>
                      <p className="text-sm text-gray-400">
                        {showUnreadOnly
                          ? "All caught up! No unread notifications."
                          : "Try adjusting your filters."}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
