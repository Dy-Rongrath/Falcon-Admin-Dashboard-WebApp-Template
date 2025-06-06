import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Home,
  ShoppingCart,
  Users,
  BarChart3,
  Package,
  Settings,
  Mail,
  Calendar,
  FileText,
  Briefcase,
  Bell,
  Shield,
  Zap,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  File,
  CreditCard,
  User,
  Palette,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  badge?: string;
  children?: NavItem[];
  path?: string;
}

const navigationItems: NavItem[] = [
  { icon: Home, label: "Dashboard", path: "/" },
  {
    icon: ShoppingCart,
    label: "E commerce",
    children: [
      { icon: Package, label: "Products", path: "/ecommerce/products" },
      { icon: ShoppingCart, label: "Orders", path: "/ecommerce/orders" },
      { icon: Users, label: "Customers", path: "/ecommerce/customers" },
    ],
  },
  { icon: Users, label: "User management", path: "/users" },
  {
    icon: BarChart3,
    label: "Analytics",
    path: "/analytics",
  },
  { icon: Package, label: "Product", badge: "New", path: "/products" },
  { icon: Mail, label: "Email", badge: "6", path: "/email" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: FileText, label: "Kanban", path: "/kanban" },
  { icon: MessageSquare, label: "Chat", path: "/chat" },
  { icon: File, label: "Files", path: "/files" },
  { icon: CreditCard, label: "Invoices", path: "/invoices" },
  { icon: User, label: "Profile", path: "/profile" },
  {
    icon: Briefcase,
    label: "Support desk",
    children: [
      { icon: Bell, label: "Tickets", path: "/support/tickets" },
      { icon: Users, label: "Agents", path: "/support/agents" },
    ],
  },
  { icon: Palette, label: "Components", path: "/components" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: Shield, label: "Authentication", path: "/auth" },
  { icon: Zap, label: "Utilities", path: "/utilities" },
];

export default function SideNavigation() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const isParentActive = (item: NavItem) => {
    if (item.path && isActive(item.path)) return true;
    if (item.children) {
      return item.children.some((child) => isActive(child.path));
    }
    return false;
  };

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.label);
    const itemIsActive = isActive(item.path) || isParentActive(item);

    const handleClick = () => {
      if (hasChildren) {
        toggleExpanded(item.label);
      } else if (item.path) {
        navigate(item.path);
      }
    };

    return (
      <div key={item.label}>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 h-10 px-3 text-sm font-medium transition-colors",
            level > 0 && "ml-6 w-[calc(100%-24px)]",
            itemIsActive
              ? "bg-blue-50 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
          )}
          onClick={handleClick}
        >
          <item.icon
            className={cn("h-4 w-4 shrink-0", itemIsActive && "text-blue-600")}
          />
          <span className="flex-1 text-left">{item.label}</span>
          {item.badge && (
            <Badge
              variant={item.badge === "New" ? "secondary" : "default"}
              className={cn(
                "text-xs px-1.5 py-0.5",
                item.badge === "New"
                  ? "bg-green-100 text-green-700 hover:bg-green-100"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-100",
              )}
            >
              {item.badge}
            </Badge>
          )}
          {hasChildren &&
            (isExpanded ? (
              <ChevronDown className="h-3 w-3 text-slate-400" />
            ) : (
              <ChevronRight className="h-3 w-3 text-slate-400" />
            ))}
        </Button>
        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children!.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <div>
            <h1 className="font-semibold text-slate-900">falcon</h1>
            <p className="text-xs text-slate-500">v3.23.0</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-slate-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search..."
            className="pl-10 h-9 bg-slate-50 border-0 text-sm placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-1">
          {navigationItems.map((item) => renderNavItem(item))}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200">
        <div className="text-center">
          <p className="text-xs text-slate-500">Built with Falcon</p>
          <p className="text-xs text-slate-400 mt-1">v3.23.0</p>
        </div>
      </div>
    </div>
  );
}
