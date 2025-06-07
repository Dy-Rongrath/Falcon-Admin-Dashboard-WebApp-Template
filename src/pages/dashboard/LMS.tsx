import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Clock,
  Play,
  CheckCircle,
  Star,
  Calendar,
  FileText,
  Video,
  Headphones,
  Download,
  Plus,
  Search,
  Filter,
} from "lucide-react";

const learningData = [
  { month: "Jan", courses: 45, students: 1200, completion: 78 },
  { month: "Feb", courses: 52, students: 1350, completion: 82 },
  { month: "Mar", courses: 48, students: 1180, completion: 75 },
  { month: "Apr", courses: 58, students: 1520, completion: 85 },
  { month: "May", courses: 62, students: 1680, completion: 88 },
  { month: "Jun", courses: 67, students: 1750, completion: 91 },
];

const popularCourses = [
  {
    id: "1",
    title: "React Advanced Patterns",
    instructor: "Sarah Johnson",
    students: 1247,
    rating: 4.8,
    duration: "12 hours",
    progress: 85,
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
    category: "Development",
    level: "Advanced",
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    instructor: "Michael Chen",
    students: 892,
    rating: 4.6,
    duration: "8 hours",
    progress: 67,
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
    category: "Design",
    level: "Beginner",
  },
  {
    id: "3",
    title: "Data Science with Python",
    instructor: "Dr. Emily Rodriguez",
    students: 543,
    rating: 4.9,
    duration: "24 hours",
    progress: 45,
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
    category: "Data Science",
    level: "Intermediate",
  },
];

const recentActivities = [
  {
    type: "completion",
    user: "John Smith",
    action: "completed",
    course: "JavaScript Fundamentals",
    time: "2 hours ago",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
  {
    type: "enrollment",
    user: "Lisa Anderson",
    action: "enrolled in",
    course: "React Advanced Patterns",
    time: "4 hours ago",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
  {
    type: "achievement",
    user: "David Wilson",
    action: "earned certificate for",
    course: "UI/UX Design Fundamentals",
    time: "1 day ago",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  },
];

const LMS = () => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins">
            LMS Dashboard
          </h1>
          <p className="text-falcon-text-light">
            Learning Management System Overview
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            Create Course
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-falcon-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Total Courses
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">332</p>
                <p className="text-xs text-falcon-green">+12 new this month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-falcon-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Active Students
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  9,726
                </p>
                <p className="text-xs text-falcon-green">
                  +8.2% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Certificates Issued
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  1,247
                </p>
                <p className="text-xs text-falcon-orange">
                  +15.7% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Completion Rate
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  84.3%
                </p>
                <p className="text-xs text-purple-600">+2.1% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Learning Analytics */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Learning Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={learningData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#D8E2EF" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #D8E2EF",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="students"
                    stackId="1"
                    stroke="#2C7BE5"
                    fill="#2C7BE5"
                    fillOpacity={0.3}
                    name="Students"
                  />
                  <Area
                    type="monotone"
                    dataKey="completion"
                    stackId="2"
                    stroke="#00D97E"
                    fill="#00D97E"
                    fillOpacity={0.3}
                    name="Completion %"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Course Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Course Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Development", courses: 145, color: "bg-blue-500" },
                { name: "Design", courses: 89, color: "bg-green-500" },
                { name: "Marketing", courses: 67, color: "bg-orange-500" },
                { name: "Business", courses: 54, color: "bg-purple-500" },
                { name: "Data Science", courses: 42, color: "bg-red-500" },
              ].map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${category.color}`}
                    ></div>
                    <span className="text-sm font-medium text-falcon-text-dark">
                      {category.name}
                    </span>
                  </div>
                  <span className="text-sm text-falcon-text-light">
                    {category.courses} courses
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Courses */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Popular Courses</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    size="sm"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-white bg-opacity-90 hover:bg-white"
                  >
                    <Play className="h-5 w-5 text-falcon-blue ml-0.5" />
                  </Button>
                  <Badge className="absolute top-2 right-2 bg-white text-falcon-text-dark">
                    {course.duration}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-falcon-text-light">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-falcon-text-light mb-3">
                    by {course.instructor}
                  </p>
                  <div className="flex items-center justify-between text-sm text-falcon-text-light mb-3">
                    <span>{formatNumber(course.students)} students</span>
                    <span>{course.category}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={activity.avatar} alt={activity.user} />
                    <AvatarFallback>
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm text-falcon-text-dark">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}{" "}
                      <span className="font-medium">{activity.course}</span>
                    </p>
                    <p className="text-xs text-falcon-text-light">
                      {activity.time}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {activity.type === "completion" && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {activity.type === "enrollment" && (
                      <BookOpen className="h-5 w-5 text-blue-500" />
                    )}
                    {activity.type === "achievement" && (
                      <Award className="h-5 w-5 text-yellow-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Plus className="h-6 w-6" />
                <span>Create Course</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>Manage Students</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Award className="h-6 w-6" />
                <span>Issue Certificates</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span>View Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LMS;
