import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Copy,
  Download,
  Star,
  Heart,
  Home,
  User,
  Settings,
  Bell,
  Mail,
  Phone,
  Camera,
  Image,
  Video,
  Music,
  File,
  Folder,
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Globe,
  Wifi,
  Bluetooth,
  Battery,
  Zap,
  Sun,
  Moon,
  Cloud,
  Umbrella,
  Thermometer,
  Wind,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  HelpCircle,
  Plus,
  Minus,
  X,
  Check,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Upload,
  Edit,
  Trash2,
  Save,
  Share,
  Link,
  ExternalLink,
  Bookmark,
  Tag,
  Flag,
  Award,
  Gift,
  ShoppingCart,
  CreditCard,
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Zap as ZapIcon,
  Users,
  UserPlus,
  UserMinus,
  MessageCircle,
  MessageSquare,
  Send,
  Paperclip,
  Smile,
  ThumbsUp,
  ThumbsDown,
  Package,
  Truck,
  Plane,
  Car,
  Bike,
  Coffee,
  Pizza,
  Gamepad2,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Printer,
  Headphones,
  Speaker,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Radio,
  Tv,
  Bookmark as BookmarkIcon,
  Book,
  GraduationCap,
  Lightbulb,
  Brain,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCategory {
  name: string;
  count: number;
  icons: {
    name: string;
    component: React.ComponentType<{ className?: string }>;
    tags: string[];
  }[];
}

const iconCategories: IconCategory[] = [
  {
    name: "General",
    count: 24,
    icons: [
      { name: "Home", component: Home, tags: ["home", "house", "main"] },
      { name: "User", component: User, tags: ["user", "person", "profile"] },
      {
        name: "Settings",
        component: Settings,
        tags: ["settings", "gear", "config"],
      },
      {
        name: "Bell",
        component: Bell,
        tags: ["bell", "notification", "alert"],
      },
      { name: "Mail", component: Mail, tags: ["mail", "email", "message"] },
      { name: "Phone", component: Phone, tags: ["phone", "call", "contact"] },
      {
        name: "Calendar",
        component: Calendar,
        tags: ["calendar", "date", "schedule"],
      },
      { name: "Clock", component: Clock, tags: ["clock", "time", "watch"] },
      { name: "MapPin", component: MapPin, tags: ["map", "location", "pin"] },
      { name: "Globe", component: Globe, tags: ["globe", "world", "internet"] },
      {
        name: "Search",
        component: Search,
        tags: ["search", "find", "magnify"],
      },
      { name: "Star", component: Star, tags: ["star", "favorite", "rating"] },
      { name: "Heart", component: Heart, tags: ["heart", "love", "like"] },
      { name: "Eye", component: Eye, tags: ["eye", "view", "visible"] },
      { name: "Lock", component: Lock, tags: ["lock", "secure", "private"] },
      {
        name: "Shield",
        component: Shield,
        tags: ["shield", "security", "protection"],
      },
      { name: "Key", component: Key, tags: ["key", "password", "access"] },
      {
        name: "Info",
        component: Info,
        tags: ["info", "information", "details"],
      },
      {
        name: "HelpCircle",
        component: HelpCircle,
        tags: ["help", "question", "support"],
      },
      {
        name: "CheckCircle",
        component: CheckCircle,
        tags: ["check", "success", "complete"],
      },
      {
        name: "XCircle",
        component: XCircle,
        tags: ["close", "error", "cancel"],
      },
      {
        name: "AlertTriangle",
        component: AlertTriangle,
        tags: ["alert", "warning", "caution"],
      },
      {
        name: "Bookmark",
        component: Bookmark,
        tags: ["bookmark", "save", "mark"],
      },
      { name: "Flag", component: Flag, tags: ["flag", "mark", "important"] },
    ],
  },
  {
    name: "Media",
    count: 20,
    icons: [
      {
        name: "Camera",
        component: Camera,
        tags: ["camera", "photo", "picture"],
      },
      { name: "Image", component: Image, tags: ["image", "picture", "photo"] },
      { name: "Video", component: Video, tags: ["video", "film", "movie"] },
      { name: "Music", component: Music, tags: ["music", "audio", "sound"] },
      { name: "Play", component: Play, tags: ["play", "start", "begin"] },
      { name: "Pause", component: Pause, tags: ["pause", "stop", "break"] },
      { name: "Square", component: Square, tags: ["stop", "square", "end"] },
      {
        name: "SkipBack",
        component: SkipBack,
        tags: ["previous", "back", "rewind"],
      },
      {
        name: "SkipForward",
        component: SkipForward,
        tags: ["next", "forward", "advance"],
      },
      {
        name: "Volume2",
        component: Volume2,
        tags: ["volume", "sound", "audio"],
      },
      {
        name: "VolumeX",
        component: VolumeX,
        tags: ["mute", "silent", "quiet"],
      },
      { name: "Mic", component: Mic, tags: ["microphone", "record", "voice"] },
      {
        name: "MicOff",
        component: MicOff,
        tags: ["mute", "mic-off", "silent"],
      },
      {
        name: "Headphones",
        component: Headphones,
        tags: ["headphones", "audio", "listen"],
      },
      {
        name: "Speaker",
        component: Speaker,
        tags: ["speaker", "audio", "sound"],
      },
      {
        name: "Radio",
        component: Radio,
        tags: ["radio", "broadcast", "station"],
      },
      { name: "Tv", component: Tv, tags: ["tv", "television", "screen"] },
      {
        name: "Monitor",
        component: Monitor,
        tags: ["monitor", "screen", "display"],
      },
      { name: "Repeat", component: Repeat, tags: ["repeat", "loop", "cycle"] },
      {
        name: "Shuffle",
        component: Shuffle,
        tags: ["shuffle", "random", "mix"],
      },
    ],
  },
  {
    name: "Navigation",
    count: 16,
    icons: [
      {
        name: "ChevronUp",
        component: ChevronUp,
        tags: ["up", "chevron", "arrow"],
      },
      {
        name: "ChevronDown",
        component: ChevronDown,
        tags: ["down", "chevron", "arrow"],
      },
      {
        name: "ChevronLeft",
        component: ChevronLeft,
        tags: ["left", "chevron", "arrow"],
      },
      {
        name: "ChevronRight",
        component: ChevronRight,
        tags: ["right", "chevron", "arrow"],
      },
      {
        name: "ArrowUp",
        component: ArrowUp,
        tags: ["up", "arrow", "direction"],
      },
      {
        name: "ArrowDown",
        component: ArrowDown,
        tags: ["down", "arrow", "direction"],
      },
      {
        name: "ArrowLeft",
        component: ArrowLeft,
        tags: ["left", "arrow", "direction"],
      },
      {
        name: "ArrowRight",
        component: ArrowRight,
        tags: ["right", "arrow", "direction"],
      },
      {
        name: "Navigation",
        component: Navigation,
        tags: ["navigation", "compass", "direction"],
      },
      { name: "Plus", component: Plus, tags: ["plus", "add", "create"] },
      {
        name: "Minus",
        component: Minus,
        tags: ["minus", "subtract", "remove"],
      },
      { name: "X", component: X, tags: ["close", "cancel", "exit"] },
      { name: "Check", component: Check, tags: ["check", "confirm", "done"] },
      { name: "Upload", component: Upload, tags: ["upload", "import", "add"] },
      {
        name: "Download",
        component: Download,
        tags: ["download", "export", "save"],
      },
      {
        name: "ExternalLink",
        component: ExternalLink,
        tags: ["external", "link", "open"],
      },
    ],
  },
  {
    name: "Business",
    count: 18,
    icons: [
      {
        name: "ShoppingCart",
        component: ShoppingCart,
        tags: ["cart", "shopping", "buy"],
      },
      {
        name: "CreditCard",
        component: CreditCard,
        tags: ["card", "payment", "money"],
      },
      {
        name: "DollarSign",
        component: DollarSign,
        tags: ["dollar", "money", "price"],
      },
      {
        name: "TrendingUp",
        component: TrendingUp,
        tags: ["trending", "growth", "up"],
      },
      {
        name: "TrendingDown",
        component: TrendingDown,
        tags: ["trending", "decline", "down"],
      },
      {
        name: "BarChart3",
        component: BarChart3,
        tags: ["chart", "graph", "analytics"],
      },
      { name: "PieChart", component: PieChart, tags: ["pie", "chart", "data"] },
      {
        name: "Activity",
        component: Activity,
        tags: ["activity", "pulse", "stats"],
      },
      { name: "Target", component: Target, tags: ["target", "goal", "aim"] },
      {
        name: "Award",
        component: Award,
        tags: ["award", "trophy", "achievement"],
      },
      { name: "Gift", component: Gift, tags: ["gift", "present", "bonus"] },
      {
        name: "Package",
        component: Package,
        tags: ["package", "box", "delivery"],
      },
      {
        name: "Truck",
        component: Truck,
        tags: ["truck", "delivery", "shipping"],
      },
      { name: "Users", component: Users, tags: ["users", "team", "group"] },
      {
        name: "UserPlus",
        component: UserPlus,
        tags: ["add", "user", "invite"],
      },
      {
        name: "UserMinus",
        component: UserMinus,
        tags: ["remove", "user", "delete"],
      },
      {
        name: "Briefcase",
        component: Package,
        tags: ["briefcase", "work", "business"],
      },
      {
        name: "Building",
        component: Home,
        tags: ["building", "office", "company"],
      },
    ],
  },
  {
    name: "Communication",
    count: 12,
    icons: [
      {
        name: "MessageCircle",
        component: MessageCircle,
        tags: ["message", "chat", "talk"],
      },
      {
        name: "MessageSquare",
        component: MessageSquare,
        tags: ["message", "comment", "reply"],
      },
      { name: "Send", component: Send, tags: ["send", "submit", "forward"] },
      {
        name: "Paperclip",
        component: Paperclip,
        tags: ["attach", "clip", "file"],
      },
      { name: "Smile", component: Smile, tags: ["smile", "emoji", "happy"] },
      {
        name: "ThumbsUp",
        component: ThumbsUp,
        tags: ["like", "thumbs", "approve"],
      },
      {
        name: "ThumbsDown",
        component: ThumbsDown,
        tags: ["dislike", "thumbs", "disapprove"],
      },
      {
        name: "Share",
        component: Share,
        tags: ["share", "forward", "distribute"],
      },
      { name: "Link", component: Link, tags: ["link", "chain", "connect"] },
      { name: "Tag", component: Tag, tags: ["tag", "label", "category"] },
      { name: "Edit", component: Edit, tags: ["edit", "modify", "change"] },
      { name: "Copy", component: Copy, tags: ["copy", "duplicate", "clone"] },
    ],
  },
  {
    name: "Technology",
    count: 14,
    icons: [
      {
        name: "Smartphone",
        component: Smartphone,
        tags: ["phone", "mobile", "device"],
      },
      { name: "Tablet", component: Tablet, tags: ["tablet", "ipad", "device"] },
      {
        name: "Laptop",
        component: Laptop,
        tags: ["laptop", "computer", "device"],
      },
      {
        name: "Printer",
        component: Printer,
        tags: ["printer", "print", "document"],
      },
      { name: "Wifi", component: Wifi, tags: ["wifi", "wireless", "internet"] },
      {
        name: "Bluetooth",
        component: Bluetooth,
        tags: ["bluetooth", "wireless", "connect"],
      },
      {
        name: "Battery",
        component: Battery,
        tags: ["battery", "power", "charge"],
      },
      { name: "Zap", component: Zap, tags: ["power", "electric", "energy"] },
      { name: "Sun", component: Sun, tags: ["sun", "light", "bright"] },
      { name: "Moon", component: Moon, tags: ["moon", "dark", "night"] },
      {
        name: "Cloud",
        component: Cloud,
        tags: ["cloud", "storage", "weather"],
      },
      { name: "File", component: File, tags: ["file", "document", "paper"] },
      {
        name: "Folder",
        component: Folder,
        tags: ["folder", "directory", "organize"],
      },
      { name: "Save", component: Save, tags: ["save", "disk", "store"] },
    ],
  },
];

const Icons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const allIcons = iconCategories.flatMap((category) =>
    category.icons.map((icon) => ({ ...icon, category: category.name })),
  );

  const filteredIcons = allIcons.filter((icon) => {
    const matchesSearch =
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All" || icon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyIconCode = (iconName: string) => {
    const code = `import { ${iconName} } from "lucide-react";\n\n<${iconName} className="h-4 w-4" />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const totalIcons = iconCategories.reduce(
    (sum, category) => sum + category.count,
    0,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
            <Star className="h-6 w-6 text-falcon-blue" />
            Icon Library
          </h1>
          <p className="text-falcon-text-light font-poppins">
            Beautiful, customizable icons from Lucide React
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins">
            <Download className="h-4 w-4 mr-2" />
            Download All
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-falcon-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Total Icons
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {totalIcons}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-falcon-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Categories
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {iconCategories.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <Download className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Downloads
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">2.4k</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Usage
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">94%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-falcon-text-light h-4 w-4" />
          <Input
            placeholder="Search icons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-falcon-border-light rounded-md bg-white text-sm min-w-40"
        >
          <option value="All">All Categories</option>
          {iconCategories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name} ({category.count})
            </option>
          ))}
        </select>
      </div>

      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-6">
          {selectedCategory === "All" ? (
            // Show by categories
            <div className="space-y-8">
              {iconCategories.map((category) => {
                const categoryIcons = category.icons.filter(
                  (icon) =>
                    icon.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    icon.tags.some((tag) =>
                      tag.toLowerCase().includes(searchTerm.toLowerCase()),
                    ),
                );

                if (categoryIcons.length === 0) return null;

                return (
                  <div key={category.name}>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-falcon-text-dark font-poppins">
                        {category.name}
                      </h2>
                      <Badge variant="outline">
                        {categoryIcons.length} icons
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                      {categoryIcons.map((icon) => {
                        const IconComponent = icon.component;
                        return (
                          <Card
                            key={icon.name}
                            className="group hover:shadow-lg transition-all cursor-pointer border-falcon-border-light hover:border-falcon-blue"
                            onClick={() => copyIconCode(icon.name)}
                          >
                            <CardContent className="p-4 text-center">
                              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center text-falcon-text-light group-hover:text-falcon-blue transition-colors">
                                <IconComponent className="h-6 w-6" />
                              </div>
                              <p className="text-xs font-medium text-falcon-text-dark truncate">
                                {icon.name}
                              </p>
                              {copiedIcon === icon.name && (
                                <div className="absolute inset-0 bg-falcon-blue bg-opacity-90 rounded-lg flex items-center justify-center">
                                  <div className="text-white text-xs font-medium flex items-center gap-1">
                                    <Check className="h-3 w-3" />
                                    Copied!
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Show filtered icons
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
              {filteredIcons.map((icon) => {
                const IconComponent = icon.component;
                return (
                  <Card
                    key={`${icon.category}-${icon.name}`}
                    className="group hover:shadow-lg transition-all cursor-pointer border-falcon-border-light hover:border-falcon-blue relative"
                    onClick={() => copyIconCode(icon.name)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center text-falcon-text-light group-hover:text-falcon-blue transition-colors">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-medium text-falcon-text-dark truncate">
                        {icon.name}
                      </p>
                      {copiedIcon === icon.name && (
                        <div className="absolute inset-0 bg-falcon-blue bg-opacity-90 rounded-lg flex items-center justify-center">
                          <div className="text-white text-xs font-medium flex items-center gap-1">
                            <Check className="h-3 w-3" />
                            Copied!
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="list" className="space-y-2">
          {filteredIcons.map((icon) => {
            const IconComponent = icon.component;
            return (
              <Card
                key={`${icon.category}-${icon.name}`}
                className="hover:shadow-sm transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-falcon-bg-light rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-falcon-text-dark" />
                      </div>
                      <div>
                        <h3 className="font-medium text-falcon-text-dark">
                          {icon.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {icon.category}
                          </Badge>
                          <div className="flex flex-wrap gap-1">
                            {icon.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-falcon-text-light"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyIconCode(icon.name)}
                      className="flex items-center gap-2"
                    >
                      {copiedIcon === icon.name ? (
                        <>
                          <Check className="h-3 w-3" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>
      </Tabs>

      {filteredIcons.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 mx-auto text-falcon-text-light mb-4" />
          <h3 className="text-xl font-semibold text-falcon-text-dark mb-2">
            No icons found
          </h3>
          <p className="text-falcon-text-light">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Icons;
