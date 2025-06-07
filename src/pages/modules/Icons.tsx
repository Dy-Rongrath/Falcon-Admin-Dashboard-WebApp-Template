import React, { useState } from "react";
import {
  Search,
  Copy,
  Check,
  // Navigation & UI
  Home,
  Menu,
  Settings,
  User,
  Users,
  Bell,
  Mail,
  Calendar,
  Clock,
  // Actions
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  Share,
  // Media & Files
  Image,
  File,
  FileText,
  Folder,
  FolderOpen,
  Video,
  Music,
  // Communication
  Phone,
  MessageSquare,
  Send,
  Heart,
  Star,
  ThumbsUp,
  // Business & Finance
  DollarSign,
  CreditCard,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  // Shopping & E-commerce
  ShoppingCart,
  Package,
  Truck,
  Tag,
  Gift,
  // Tech & Development
  Code,
  Database,
  Server,
  Wifi,
  Globe,
  Lock,
  Shield,
  // Weather & Nature
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Leaf,
  Flower,
  // Travel & Places
  MapPin,
  Car,
  Plane,
  Train,
  Building,
  // Health & Medical
  Activity,
  Heart as HeartIcon,
  Thermometer,
  Pill,
  // Sports & Recreation
  Trophy,
  Target,
  Zap,
  Gamepad2,
  // Social & Community
  Bookmark,
  Flag,
  Award,
  Crown,
  // Arrows & Directions
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  // Status & Alerts
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  HelpCircle,
  // Tools & Utilities
  Wrench,
  Hammer,
  Scissors,
  Ruler,
  Calculator,
} from "lucide-react";

const Icons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const iconCategories = {
    "Navigation & UI": [
      { name: "Home", component: Home },
      { name: "Menu", component: Menu },
      { name: "Settings", component: Settings },
      { name: "User", component: User },
      { name: "Users", component: Users },
      { name: "Bell", component: Bell },
      { name: "Mail", component: Mail },
      { name: "Calendar", component: Calendar },
      { name: "Clock", component: Clock },
    ],
    Actions: [
      { name: "Plus", component: Plus },
      { name: "Minus", component: Minus },
      { name: "Edit", component: Edit },
      { name: "Trash2", component: Trash2 },
      { name: "Save", component: Save },
      { name: "Download", component: Download },
      { name: "Upload", component: Upload },
      { name: "Share", component: Share },
      { name: "Copy", component: Copy },
    ],
    "Media & Files": [
      { name: "Image", component: Image },
      { name: "File", component: File },
      { name: "FileText", component: FileText },
      { name: "Folder", component: Folder },
      { name: "FolderOpen", component: FolderOpen },
      { name: "Video", component: Video },
      { name: "Music", component: Music },
    ],
    Communication: [
      { name: "Phone", component: Phone },
      { name: "MessageSquare", component: MessageSquare },
      { name: "Send", component: Send },
      { name: "Heart", component: Heart },
      { name: "Star", component: Star },
      { name: "ThumbsUp", component: ThumbsUp },
    ],
    "Business & Finance": [
      { name: "DollarSign", component: DollarSign },
      { name: "CreditCard", component: CreditCard },
      { name: "TrendingUp", component: TrendingUp },
      { name: "TrendingDown", component: TrendingDown },
      { name: "BarChart3", component: BarChart3 },
      { name: "PieChart", component: PieChart },
    ],
    "Shopping & E-commerce": [
      { name: "ShoppingCart", component: ShoppingCart },
      { name: "Package", component: Package },
      { name: "Truck", component: Truck },
      { name: "Tag", component: Tag },
      { name: "Gift", component: Gift },
    ],
    "Tech & Development": [
      { name: "Code", component: Code },
      { name: "Database", component: Database },
      { name: "Server", component: Server },
      { name: "Wifi", component: Wifi },
      { name: "Globe", component: Globe },
      { name: "Lock", component: Lock },
      { name: "Shield", component: Shield },
    ],
    "Arrows & Directions": [
      { name: "ArrowUp", component: ArrowUp },
      { name: "ArrowDown", component: ArrowDown },
      { name: "ArrowLeft", component: ArrowLeft },
      { name: "ArrowRight", component: ArrowRight },
      { name: "ChevronUp", component: ChevronUp },
      { name: "ChevronDown", component: ChevronDown },
      { name: "ChevronLeft", component: ChevronLeft },
      { name: "ChevronRight", component: ChevronRight },
    ],
    "Status & Alerts": [
      { name: "AlertTriangle", component: AlertTriangle },
      { name: "AlertCircle", component: AlertCircle },
      { name: "CheckCircle", component: CheckCircle },
      { name: "XCircle", component: XCircle },
      { name: "Info", component: Info },
      { name: "HelpCircle", component: HelpCircle },
    ],
    "Weather & Nature": [
      { name: "Sun", component: Sun },
      { name: "Moon", component: Moon },
      { name: "Cloud", component: Cloud },
      { name: "CloudRain", component: CloudRain },
      { name: "Leaf", component: Leaf },
      { name: "Flower", component: Flower },
    ],
    "Travel & Places": [
      { name: "MapPin", component: MapPin },
      { name: "Car", component: Car },
      { name: "Plane", component: Plane },
      { name: "Train", component: Train },
      { name: "Building", component: Building },
    ],
    "Health & Medical": [
      { name: "Activity", component: Activity },
      { name: "HeartIcon", component: HeartIcon },
      { name: "Thermometer", component: Thermometer },
      { name: "Pill", component: Pill },
    ],
    "Sports & Recreation": [
      { name: "Trophy", component: Trophy },
      { name: "Target", component: Target },
      { name: "Zap", component: Zap },
      { name: "Gamepad2", component: Gamepad2 },
    ],
    "Social & Community": [
      { name: "Bookmark", component: Bookmark },
      { name: "Flag", component: Flag },
      { name: "Award", component: Award },
      { name: "Crown", component: Crown },
    ],
    "Tools & Utilities": [
      { name: "Wrench", component: Wrench },
      { name: "Hammer", component: Hammer },
      { name: "Scissors", component: Scissors },
      { name: "Ruler", component: Ruler },
      { name: "Calculator", component: Calculator },
    ],
  };

  const handleCopyIcon = (iconName: string) => {
    const importStatement = `import { ${iconName} } from 'lucide-react';`;
    const jsxUsage = `<${iconName} className="w-6 h-6" />`;
    const fullCode = `${importStatement}\n\n// Usage:\n${jsxUsage}`;

    navigator.clipboard.writeText(fullCode).then(() => {
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000);
    });
  };

  const filteredCategories = Object.entries(iconCategories).reduce(
    (acc, [category, icons]) => {
      const filteredIcons = icons.filter((icon) =>
        icon.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      if (filteredIcons.length > 0) {
        acc[category] = filteredIcons;
      }
      return acc;
    },
    {} as typeof iconCategories,
  );

  const IconCard: React.FC<{
    name: string;
    component: React.ComponentType<any>;
  }> = ({ name, component: IconComponent }) => (
    <div className="group relative bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-gray-50 rounded-lg mb-3 group-hover:bg-blue-50 transition-colors">
          <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-blue-600" />
        </div>
        <h4 className="text-sm font-medium text-gray-900 mb-1">{name}</h4>
        <button
          onClick={() => handleCopyIcon(name)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-blue-600 hover:text-blue-800 flex items-center"
        >
          {copiedIcon === name ? (
            <>
              <Check className="w-3 h-3 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 mr-1" />
              Copy Code
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Icons Library
          </h1>
          <p className="text-gray-600">
            Beautiful SVG icons from Lucide React with copy-to-clipboard
            functionality
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-md">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search icons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Icon Usage Guide */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            How to Use Icons
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                1. Import the Icon
              </h4>
              <div className="bg-gray-100 rounded-lg p-3 text-sm font-mono">
                import &#123; IconName &#125; from 'lucide-react';
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">2. Use in JSX</h4>
              <div className="bg-gray-100 rounded-lg p-3 text-sm font-mono">
                &lt;IconName className="w-6 h-6" /&gt;
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                3. Customize with CSS
              </h4>
              <div className="bg-gray-100 rounded-lg p-3 text-sm font-mono">
                className="w-8 h-8 text-blue-500"
              </div>
            </div>
          </div>
        </div>

        {/* Icon Categories */}
        {Object.entries(filteredCategories).map(([category, icons]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {icons.map((icon) => (
                <IconCard
                  key={icon.name}
                  name={icon.name}
                  component={icon.component}
                />
              ))}
            </div>
          </div>
        ))}

        {Object.keys(filteredCategories).length === 0 && searchTerm && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No icons found
            </h3>
            <p className="text-gray-600">
              Try searching with different keywords
            </p>
          </div>
        )}

        {/* Popular Icon Sizes */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Common Icon Sizes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                size: "w-4 h-4",
                label: "16px",
                description: "Small text icons",
              },
              {
                size: "w-5 h-5",
                label: "20px",
                description: "Default button icons",
              },
              { size: "w-6 h-6", label: "24px", description: "Standard icons" },
              {
                size: "w-8 h-8",
                label: "32px",
                description: "Large action icons",
              },
            ].map((size) => (
              <div key={size.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Home className={size.size + " text-gray-700"} />
                </div>
                <h4 className="font-medium text-gray-900">{size.label}</h4>
                <p className="text-sm text-gray-600">{size.description}</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">
                  {size.size}
                </code>
              </div>
            ))}
          </div>
        </div>

        {/* Color Examples */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Color Variations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { color: "text-gray-600", label: "Default Gray" },
              { color: "text-blue-600", label: "Primary Blue" },
              { color: "text-green-600", label: "Success Green" },
              { color: "text-red-600", label: "Danger Red" },
              { color: "text-yellow-600", label: "Warning Yellow" },
              { color: "text-purple-600", label: "Purple" },
            ].map((colorClass) => (
              <div key={colorClass.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className={`w-8 h-8 ${colorClass.color}`} />
                </div>
                <h4 className="text-sm font-medium text-gray-900">
                  {colorClass.label}
                </h4>
                <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
                  {colorClass.color}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
