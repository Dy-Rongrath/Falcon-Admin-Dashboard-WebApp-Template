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
  {
    icon: Home,
    label: "Dashboard",
    children: [
      { icon: Home, label: "Default", path: "/" },
      { icon: BarChart3, label: "Analytics", path: "/analytics" },
      { icon: Users, label: "CRM", path: "/dashboard/crm" },
      { icon: ShoppingCart, label: "E commerce", path: "/ecommerce/products" },
      { icon: Package, label: "LMS", badge: "New", path: "/dashboard/lms" },
      { icon: Briefcase, label: "Management", path: "/dashboard/management" },
      { icon: Zap, label: "SaaS", path: "/dashboard/saas" },
      {
        icon: Bell,
        label: "Support desk",
        badge: "New",
        path: "/support/tickets",
      },
    ],
  },
  {
    icon: Package,
    label: "App",
    children: [
      { icon: Calendar, label: "Calendar", path: "/calendar" },
      { icon: MessageSquare, label: "Chat", path: "/chat" },
      { icon: Mail, label: "Email", path: "/email" },
      { icon: Calendar, label: "Events", path: "/events" },
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
                label: "Product list",
                path: "/ecommerce/products",
              },
              {
                icon: Package,
                label: "Product grid",
                path: "/ecommerce/product-grid",
              },
              {
                icon: Package,
                label: "Product details",
                path: "/ecommerce/products/1",
              },
              {
                icon: Plus,
                label: "Add product",
                path: "/ecommerce/add-product",
              },
            ],
          },
          {
            icon: ShoppingCart,
            label: "Orders",
            children: [
              {
                icon: ShoppingCart,
                label: "Order list",
                path: "/ecommerce/order-list",
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
              {
                icon: Users,
                label: "Customer list",
                path: "/ecommerce/customers",
              },
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
      { icon: Package, label: "E learning", badge: "New", path: "/elearning" },
      { icon: FileText, label: "Kanban", path: "/kanban" },
      { icon: Users, label: "Social", path: "/social" },
      {
        icon: Briefcase,
        label: "Support desk",
        children: [
          { icon: Bell, label: "Tickets", path: "/support/tickets" },
          { icon: Users, label: "Agents", path: "/support/agents" },
        ],
      },
    ],
  },
  {
    icon: FileText,
    label: "Pages",
    children: [
      { icon: Home, label: "Starter", path: "/starter" },
      { icon: FileText, label: "Landing", path: "/landing" },
      { icon: Shield, label: "Authentication", path: "/auth" },
      { icon: User, label: "User", path: "/profile" },
      { icon: CreditCard, label: "Pricing", path: "/pricing" },
      { icon: MessageSquare, label: "Faq", path: "/faq" },
      {
        icon: Bell,
        label: "Errors",
        children: [
          { icon: Bell, label: "404", path: "/404" },
          { icon: Bell, label: "500", path: "/500" },
        ],
      },
      { icon: Package, label: "Miscellaneous", path: "/pages/miscellaneous" },
      { icon: Palette, label: "Layouts", path: "/pages/layouts" },
    ],
  },
  {
    icon: Package,
    label: "Modules",
    children: [
      {
        icon: FileText,
        label: "Forms",
        children: [
          { icon: FileText, label: "Basic", path: "/forms/basic" },
          { icon: FileText, label: "Advanced", path: "/forms/advanced" },
          {
            icon: FileText,
            label: "Floating labels",
            path: "/forms/floating-labels",
          },
          { icon: FileText, label: "Wizard", path: "/forms/wizard" },
          { icon: FileText, label: "Validation", path: "/forms/validation" },
        ],
      },
      { icon: BarChart3, label: "Tables", path: "/modules/tables" },
      { icon: BarChart3, label: "Charts", path: "/charts" },
      { icon: Palette, label: "Icons", path: "/icons" },
      { icon: FileText, label: "Maps", path: "/maps" },
      { icon: Package, label: "Components", path: "/components" },
      { icon: Settings, label: "Utilities", path: "/utilities" },
      { icon: Package, label: "Widgets", path: "/widgets" },
      { icon: FileText, label: "Multi level", path: "/modules/multi-level" },
    ],
  },
  {
    icon: FileText,
    label: "Documentation",
    children: [
      {
        icon: FileText,
        label: "Getting started",
        path: "/docs/getting-started",
      },
      { icon: Palette, label: "Customization", path: "/docs/customization" },
      { icon: MessageSquare, label: "Faq", path: "/docs/faq" },
      { icon: Package, label: "Gulp", path: "/docs/gulp" },
      { icon: FileText, label: "Design file", path: "/docs/design-file" },
      { icon: FileText, label: "Changelog", path: "/docs/changelog" },
    ],
  },
];

interface SideNavigationProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function SideNavigation({
  isOpen = true,
  onClose,
}: SideNavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

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

  const isParentActive = (item: NavItem): boolean => {
    if (item.path && isActive(item.path)) return true;
    if (item.children) {
      return item.children.some((child) => isParentActive(child));
    }
    return false;
  };

  const renderNavItem = (
    item: NavItem,
    level = 0,
    uniqueKey?: string,
  ): React.ReactNode => {
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
      <div key={uniqueKey || `${item.label}-${level}`}>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 h-10 px-3 text-sm font-medium transition-colors font-poppins",
            level > 0 && "ml-6 w-[calc(100%-24px)]",
            level > 1 && "ml-12 w-[calc(100%-48px)]",
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
            {item.children?.map((child, index) =>
              renderNavItem(child, level + 1, `${item.label}-${index}`),
            )}
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
            <span className="text-xs text-falcon-text-muted ml-1 font-poppins">
              v3.23.0
            </span>
          </div>

          {/* Search */}
          <div className="p-4 pb-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-falcon-text-muted" />
              <Input
                placeholder="Search..."
                className="pl-10 h-9 bg-falcon-bg-light border-0 text-sm placeholder:text-falcon-text-muted font-poppins"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-1 p-4">
            {navigationItems.map((item, index) =>
              renderNavItem(item, 0, `nav-${index}`),
            )}
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
}
