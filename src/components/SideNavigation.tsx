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
  Plus,
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
      {
        icon: Package,
        label: "Product",
        children: [
          {
            icon: Package,
            label: "Product grid",
            path: "/ecommerce/product-grid",
          },
          {
            icon: Package,
            label: "Product grid",
            path: "/ecommerce/products?view=grid",
          },
          {
            icon: Package,
            label: "Product details",
            path: "/ecommerce/products/1",
          },
          { icon: Plus, label: "Add product", path: "/ecommerce/add-product" },
        ],
      },
      {
        icon: ShoppingCart,
        label: "Orders",
        children: [
          {
            icon: ShoppingCart,
            label: "Order list",
            path: "/ecommerce/orders",
          },
          {
            icon: ShoppingCart,
            label: "Order details",
            path: "/ecommerce/orders/1",
          },
        ],
      },
      {
        icon: Users,
        label: "Customers",
        children: [
          { icon: Users, label: "Customer list", path: "/ecommerce/customers" },
          {
            icon: Users,
            label: "Customer details",
            path: "/ecommerce/customers/1",
          },
        ],
      },
      { icon: ShoppingCart, label: "Shopping cart", path: "/cart" },
      { icon: CreditCard, label: "Checkout", path: "/ecommerce/checkout" },
      { icon: CreditCard, label: "Billing", path: "/ecommerce/billing" },
      { icon: FileText, label: "Invoice", path: "/ecommerce/invoice/1" },
    ],
  },
  { icon: Users, label: "User management", path: "/users" },
  { icon: Users, label: "Team management", path: "/team" },
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
  { icon: Bell, label: "Notifications", badge: "3", path: "/notifications" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: FileText, label: "Reports", path: "/reports" },
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

interface SideNavigationProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function SideNavigation({
  isOpen = true,
  onClose,
}: SideNavigationProps) {
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
        // Close mobile sidebar when navigating
        if (window.innerWidth < 1024 && onClose) {
          onClose();
        }
      }
    };

    return (
      <div key={item.label}>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 h-10 px-3 text-sm font-medium transition-colors font-poppins",
            level > 0 && "ml-6 w-[calc(100%-24px)]",
            itemIsActive
              ? "bg-falcon-blue bg-opacity-10 text-falcon-blue hover:bg-falcon-blue hover:bg-opacity-10"
              : "text-falcon-text-secondary hover:bg-gray-50 hover:text-falcon-text-primary",
          )}
          onClick={handleClick}
        >
          <item.icon
            className={cn(
              "h-4 w-4 shrink-0",
              itemIsActive && "text-falcon-blue",
            )}
          />
          <span className="flex-1 text-left">{item.label}</span>
          {item.badge && (
            <Badge
              variant={item.badge === "New" ? "secondary" : "default"}
              className={cn(
                "text-xs px-1.5 py-0.5",
                item.badge === "New"
                  ? "bg-falcon-green bg-opacity-10 text-falcon-green hover:bg-falcon-green hover:bg-opacity-10"
                  : "bg-falcon-blue bg-opacity-10 text-falcon-blue hover:bg-falcon-blue hover:bg-opacity-10",
              )}
            >
              {item.badge}
            </Badge>
          )}
          {hasChildren && (
            <div className="ml-auto">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          )}
        </Button>
        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 h-screen w-64 bg-white border-r border-falcon-border-light transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <ScrollArea className="h-full">
        <div className="flex h-full max-h-screen flex-col gap-2">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-falcon-border-light px-6">
            <h1 className="text-xl font-bold text-falcon-blue font-poppins">
              falcon
            </h1>
          </div>

          {/* Search */}
          <div className="px-3 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-muted" />
              <Input
                placeholder="Search..."
                className="pl-10 h-9 bg-falcon-bg-light border-0 text-sm placeholder:text-falcon-text-muted font-poppins"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-3 pb-6">
            <div className="space-y-1">
              {navigationItems.map((item) => renderNavItem(item))}
            </div>
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
}
