import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
  Calendar,
  Clock,
  Bell,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Download,
  Upload,
  Eye,
  BarChart3,
  PieChart,
  Target,
  Award,
  Zap,
  Globe,
  Smartphone,
  Laptop,
  Tablet,
  Wifi,
  Battery,
  Signal,
  ThermometerSun,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  Music,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Bookmark,
  Coffee,
  MapPin,
  Navigation,
  Car,
  Plane,
  Settings,
} from "lucide-react";

interface Widget {
  id: string;
  title: string;
  category:
    | "stats"
    | "charts"
    | "social"
    | "weather"
    | "music"
    | "todo"
    | "calendar"
    | "analytics";
  size: "small" | "medium" | "large";
  component: React.ReactNode;
}

const StatsWidget = ({ title, value, change, icon: Icon, color }: any) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-falcon-text-light">{title}</p>
          <p className="text-2xl font-bold text-falcon-text-dark">{value}</p>
          <div
            className={`flex items-center text-sm ${change >= 0 ? "text-falcon-green" : "text-red-500"}`}
          >
            {change >= 0 ? (
              <TrendingUp className="h-3 w-3 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 mr-1" />
            )}
            {Math.abs(change)}% from last month
          </div>
        </div>
        <div
          className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const SocialWidget = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-sm">Recent Activity</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {[
        {
          user: "Sarah Johnson",
          action: "liked your post",
          time: "2m ago",
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=32&h=32&fit=crop&crop=face",
        },
        {
          user: "Mike Chen",
          action: "commented on your photo",
          time: "1h ago",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
        },
        {
          user: "Emily Rodriguez",
          action: "shared your article",
          time: "3h ago",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
        },
      ].map((activity, index) => (
        <div key={index} className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={activity.avatar} alt={activity.user} />
            <AvatarFallback className="text-xs">
              {activity.user
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm text-falcon-text-dark">
              <span className="font-medium">{activity.user}</span>{" "}
              {activity.action}
            </p>
            <p className="text-xs text-falcon-text-light">{activity.time}</p>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

const WeatherWidget = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-sm flex items-center gap-2">
        <Sun className="h-4 w-4" />
        San Francisco
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-center space-y-2">
        <div className="text-3xl font-bold text-falcon-text-dark">72°F</div>
        <p className="text-sm text-falcon-text-light">Partly Cloudy</p>
        <div className="flex justify-between text-xs text-falcon-text-light pt-2">
          <div className="flex items-center gap-1">
            <Wind className="h-3 w-3" />
            <span>8 mph</span>
          </div>
          <div className="flex items-center gap-1">
            <Droplets className="h-3 w-3" />
            <span>65%</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-3">
          {["Mon", "Tue", "Wed", "Thu"].map((day, index) => (
            <div key={day} className="text-center">
              <p className="text-xs text-falcon-text-light">{day}</p>
              <Sun className="h-4 w-4 mx-auto my-1 text-yellow-500" />
              <p className="text-xs font-medium text-falcon-text-dark">
                {75 + index}°
              </p>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const MusicWidget = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-sm flex items-center gap-2">
        <Music className="h-4 w-4" />
        Now Playing
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <Music className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-falcon-text-dark text-sm">
              Bohemian Rhapsody
            </p>
            <p className="text-xs text-falcon-text-light">Queen</p>
          </div>
        </div>
        <Progress value={65} className="h-1" />
        <div className="flex items-center justify-between">
          <span className="text-xs text-falcon-text-light">2:35</span>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <SkipForward className="h-3 w-3 rotate-180" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Play className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <SkipForward className="h-3 w-3" />
            </Button>
          </div>
          <span className="text-xs text-falcon-text-light">5:55</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TodoWidget = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-sm">Today's Tasks</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      {[
        { task: "Review quarterly reports", completed: true },
        { task: "Team meeting at 2PM", completed: false },
        { task: "Update project documentation", completed: false },
        { task: "Call client about proposal", completed: true },
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div
            className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
              item.completed
                ? "bg-falcon-green border-falcon-green"
                : "border-falcon-border-light"
            }`}
          >
            {item.completed && (
              <div className="w-2 h-2 bg-white rounded-full"></div>
            )}
          </div>
          <span
            className={`text-sm ${item.completed ? "line-through text-falcon-text-light" : "text-falcon-text-dark"}`}
          >
            {item.task}
          </span>
        </div>
      ))}
    </CardContent>
  </Card>
);

const CalendarWidget = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-sm flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        February 2024
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-7 gap-1 text-xs">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="text-center text-falcon-text-light p-1">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }, (_, i) => {
          const date = i - 2;
          const isToday = date === 18;
          const hasEvent = [3, 7, 14, 21, 28].includes(date);
          return (
            <div
              key={i}
              className={`text-center p-1 relative ${
                date > 0 && date <= 29
                  ? "text-falcon-text-dark"
                  : "text-falcon-text-light"
              } ${isToday ? "bg-falcon-blue text-white rounded" : ""}`}
            >
              {date > 0 && date <= 29 ? date : ""}
              {hasEvent && !isToday && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-falcon-orange rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>
    </CardContent>
  </Card>
);

const AnalyticsWidget = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-sm">Traffic Overview</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-falcon-text-light">Page Views</span>
          <span className="text-sm font-medium text-falcon-text-dark">
            24.5k
          </span>
        </div>
        <Progress value={75} className="h-2" />

        <div className="flex justify-between items-center">
          <span className="text-sm text-falcon-text-light">
            Unique Visitors
          </span>
          <span className="text-sm font-medium text-falcon-text-dark">
            18.2k
          </span>
        </div>
        <Progress value={60} className="h-2" />

        <div className="flex justify-between items-center">
          <span className="text-sm text-falcon-text-light">Bounce Rate</span>
          <span className="text-sm font-medium text-falcon-text-dark">32%</span>
        </div>
        <Progress value={32} className="h-2" />
      </div>
    </CardContent>
  </Card>
);

const Widgets = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const widgets: Widget[] = [
    {
      id: "stats-1",
      title: "Revenue",
      category: "stats",
      size: "small",
      component: (
        <StatsWidget
          title="Total Revenue"
          value="$45,231"
          change={12.5}
          icon={DollarSign}
          color="bg-falcon-green"
        />
      ),
    },
    {
      id: "stats-2",
      title: "Users",
      category: "stats",
      size: "small",
      component: (
        <StatsWidget
          title="Active Users"
          value="2,543"
          change={8.2}
          icon={Users}
          color="bg-falcon-blue"
        />
      ),
    },
    {
      id: "stats-3",
      title: "Orders",
      category: "stats",
      size: "small",
      component: (
        <StatsWidget
          title="Total Orders"
          value="1,892"
          change={-3.1}
          icon={ShoppingCart}
          color="bg-falcon-orange"
        />
      ),
    },
    {
      id: "stats-4",
      title: "Growth",
      category: "stats",
      size: "small",
      component: (
        <StatsWidget
          title="Growth Rate"
          value="23.4%"
          change={5.7}
          icon={TrendingUp}
          color="bg-purple-500"
        />
      ),
    },
    {
      id: "social-1",
      title: "Social Activity",
      category: "social",
      size: "medium",
      component: <SocialWidget />,
    },
    {
      id: "weather-1",
      title: "Weather",
      category: "weather",
      size: "medium",
      component: <WeatherWidget />,
    },
    {
      id: "music-1",
      title: "Music Player",
      category: "music",
      size: "medium",
      component: <MusicWidget />,
    },
    {
      id: "todo-1",
      title: "Todo List",
      category: "todo",
      size: "medium",
      component: <TodoWidget />,
    },
    {
      id: "calendar-1",
      title: "Calendar",
      category: "calendar",
      size: "medium",
      component: <CalendarWidget />,
    },
    {
      id: "analytics-1",
      title: "Analytics",
      category: "analytics",
      size: "medium",
      component: <AnalyticsWidget />,
    },
  ];

  const categories = [
    "all",
    "stats",
    "charts",
    "social",
    "weather",
    "music",
    "todo",
    "calendar",
    "analytics",
  ];

  const filteredWidgets = widgets.filter(
    (widget) =>
      selectedCategory === "all" || widget.category === selectedCategory,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
            <Target className="h-6 w-6 text-falcon-blue" />
            Widget Library
          </h1>
          <p className="text-falcon-text-light font-poppins">
            Reusable UI components and widgets for your dashboard
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" className="font-poppins">
            <Settings className="h-4 w-4 mr-2" />
            Customize
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-falcon-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Total Widgets
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {widgets.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-falcon-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Categories
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {categories.length - 1}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Active Widgets
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {filteredWidgets.length}
                </p>
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
                  Performance
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">98%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="capitalize"
          >
            {category === "all" ? "All Widgets" : category}
          </Button>
        ))}
      </div>

      <Tabs defaultValue="gallery" className="space-y-6">
        <TabsList>
          <TabsTrigger value="gallery">Widget Gallery</TabsTrigger>
          <TabsTrigger value="grid">Grid Layout</TabsTrigger>
          <TabsTrigger value="customization">Customization</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="space-y-8">
          {/* Stats Widgets */}
          <div>
            <h2 className="text-lg font-semibold text-falcon-text-dark mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Statistics Widgets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredWidgets
                .filter((w) => w.category === "stats")
                .map((widget) => (
                  <div key={widget.id}>{widget.component}</div>
                ))}
            </div>
          </div>

          {/* Functional Widgets */}
          <div>
            <h2 className="text-lg font-semibold text-falcon-text-dark mb-4 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Functional Widgets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWidgets
                .filter((w) => w.category !== "stats")
                .map((widget) => (
                  <div key={widget.id}>{widget.component}</div>
                ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="grid" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWidgets.map((widget) => (
              <div key={widget.id}>{widget.component}</div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="customization" className="space-y-6">
          <div className="text-center py-12">
            <Settings className="h-16 w-16 mx-auto text-falcon-text-light mb-4" />
            <h3 className="text-xl font-semibold text-falcon-text-dark mb-2">
              Widget Customization
            </h3>
            <p className="text-falcon-text-light mb-6">
              Customize widget appearance, behavior, and data sources
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Eye className="h-6 w-6 text-falcon-blue" />
                  </div>
                  <h4 className="font-semibold text-falcon-text-dark mb-2">
                    Themes
                  </h4>
                  <p className="text-sm text-falcon-text-light">
                    Customize colors, fonts, and styling
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Activity className="h-6 w-6 text-falcon-green" />
                  </div>
                  <h4 className="font-semibold text-falcon-text-dark mb-2">
                    Data Sources
                  </h4>
                  <p className="text-sm text-falcon-text-light">
                    Connect to APIs and databases
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-falcon-orange" />
                  </div>
                  <h4 className="font-semibold text-falcon-text-dark mb-2">
                    Interactions
                  </h4>
                  <p className="text-sm text-falcon-text-light">
                    Add click handlers and animations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Widgets;
