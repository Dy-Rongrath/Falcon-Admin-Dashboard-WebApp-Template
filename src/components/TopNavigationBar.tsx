import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Sun,
  Moon,
  ShoppingCart,
  Bell,
  Settings,
  User,
  LogOut,
  Menu,
  CreditCard,
  HelpCircle,
  Calendar,
  Mail,
  MessageSquare,
  Heart,
  CheckCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "success",
    title: "Order Completed",
    message: "Your order #ORD-2024-001 has been successfully processed",
    time: "2 min ago",
    isRead: false,
    icon: CheckCircle,
  },
  {
    id: "2",
    type: "info",
    title: "New Message",
    message: "You have a new message from Sarah Johnson",
    time: "5 min ago",
    isRead: false,
    icon: MessageSquare,
  },
  {
    id: "3",
    type: "info",
    title: "Meeting Reminder",
    message: "Team meeting starts in 30 minutes",
    time: "25 min ago",
    isRead: true,
    icon: Calendar,
  },
  {
    id: "4",
    type: "warning",
    title: "Low Stock Alert",
    message: "iPhone 14 Pro is running low on stock (5 items left)",
    time: "1 hour ago",
    isRead: true,
    icon: Bell,
  },
  {
    id: "5",
    type: "info",
    title: "New Customer",
    message: "Welcome Emily Rodriguez to your customer list",
    time: "2 hours ago",
    isRead: true,
    icon: User,
  },
];

interface TopNavigationBarProps {
  onToggleSidebar?: () => void;
}

export default function TopNavigationBar({
  onToggleSidebar,
}: TopNavigationBarProps) {
  const [isDark, setIsDark] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const unreadNotifications = mockNotifications.filter((n) => !n.isRead).length;

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-falcon-green";
      case "warning":
        return "text-falcon-orange";
      case "error":
        return "text-red-500";
      default:
        return "text-falcon-blue";
    }
  };

  const handleProfileAction = (action: string) => {
    switch (action) {
      case "profile":
        navigate("/profile");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "logout":
        // Handle logout logic here
        console.log("Logging out...");
        break;
    }
  };

  return (
    <header className="h-16 bg-white border-b border-falcon-border-light flex items-center justify-between px-6 relative z-50">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden text-falcon-text-secondary hover:text-falcon-text-primary"
          onClick={onToggleSidebar}
        >
          <Menu className="h-4 w-4" />
        </Button>

        {/* Search */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-muted" />
          <Input
            placeholder="Search..."
            className="pl-10 w-80 h-9 bg-falcon-bg-light border-0 text-sm placeholder:text-falcon-text-muted font-poppins focus:ring-2 focus:ring-falcon-blue focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsDark(!isDark)}
          className="text-falcon-text-secondary hover:text-falcon-text-primary hover:bg-falcon-bg-light transition-colors"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        {/* Shopping Cart */}
        <Button
          variant="ghost"
          size="sm"
          className="relative text-falcon-text-secondary hover:text-falcon-text-primary hover:bg-falcon-bg-light transition-colors"
          title="Shopping Cart"
          onClick={() => navigate("/cart")}
        >
          <ShoppingCart className="h-4 w-4" />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-xs bg-falcon-blue hover:bg-falcon-blue text-white border-2 border-white">
            2
          </Badge>
        </Button>

        {/* Notifications */}
        <Popover
          open={isNotificationsOpen}
          onOpenChange={setIsNotificationsOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="relative text-falcon-text-secondary hover:text-falcon-text-primary hover:bg-falcon-bg-light transition-colors"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              {unreadNotifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-xs bg-falcon-orange hover:bg-falcon-orange text-white border-2 border-white">
                  {unreadNotifications}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 p-0 border-falcon-border-light"
            align="end"
          >
            <div className="p-4 border-b border-falcon-border-light">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-falcon-text-primary font-poppins">
                  Notifications
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-falcon-blue bg-opacity-10 text-falcon-blue"
                >
                  {unreadNotifications} new
                </Badge>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {mockNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "p-4 border-b border-falcon-border-light hover:bg-falcon-bg-light transition-colors cursor-pointer",
                    !notification.isRead && "bg-falcon-blue bg-opacity-5",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "p-1 rounded-full bg-opacity-20",
                        getNotificationColor(notification.type),
                      )}
                    >
                      <notification.icon
                        className={cn(
                          "h-4 w-4",
                          getNotificationColor(notification.type),
                        )}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-falcon-text-primary font-poppins truncate">
                          {notification.title}
                        </p>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-falcon-blue rounded-full ml-2" />
                        )}
                      </div>
                      <p className="text-sm text-falcon-text-secondary font-poppins mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-falcon-text-muted font-poppins mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-falcon-border-light">
              <Button
                variant="outline"
                className="w-full font-poppins"
                onClick={() => {
                  navigate("/notifications");
                  setIsNotificationsOpen(false);
                }}
              >
                View All Notifications
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-9 px-2 gap-2 hover:bg-falcon-bg-light transition-colors"
            >
              <Avatar className="h-7 w-7">
                <AvatarImage src={`${import.meta.env.BASE_URL}/placeholder/32/32`}alt="User" />
                <AvatarFallback className="bg-falcon-blue bg-opacity-10 text-falcon-blue text-xs font-medium">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-falcon-text-primary font-poppins">
                  John Doe
                </p>
                <p className="text-xs text-falcon-text-muted font-poppins">
                  Administrator
                </p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 border-falcon-border-light"
          >
            <DropdownMenuLabel className="font-poppins">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="font-poppins cursor-pointer"
              onClick={() => handleProfileAction("profile")}
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              className="font-poppins cursor-pointer"
              onClick={() => handleProfileAction("settings")}
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="font-poppins cursor-pointer">
              <CreditCard className="h-4 w-4 mr-2" />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="font-poppins cursor-pointer">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help & Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600 font-poppins cursor-pointer focus:text-red-600"
              onClick={() => handleProfileAction("logout")}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
