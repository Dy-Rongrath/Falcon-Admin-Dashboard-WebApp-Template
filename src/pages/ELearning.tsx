import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Play,
  Clock,
  Users,
  Star,
  Search,
  Filter,
  Plus,
  Award,
  Calendar,
  BarChart3,
  Video,
  FileText,
  Download,
  BookMarked,
  TrendingUp,
  CheckCircle,
  User,
  Globe,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  price: number;
  thumbnail: string;
  progress?: number;
  completed?: boolean;
  description: string;
  tags: string[];
}

interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
  score?: number;
  maxScore: number;
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Complete React Developer Course",
    instructor: "Sarah Johnson",
    instructorAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face",
    category: "Development",
    level: "Intermediate",
    duration: "24h 30m",
    lessons: 48,
    students: 1247,
    rating: 4.8,
    price: 89.99,
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
    progress: 65,
    description:
      "Master React from basics to advanced concepts with hands-on projects",
    tags: ["React", "JavaScript", "Frontend", "Hooks"],
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    instructor: "Michael Chen",
    instructorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    category: "Design",
    level: "Beginner",
    duration: "18h 45m",
    lessons: 32,
    students: 892,
    rating: 4.6,
    price: 79.99,
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
    progress: 30,
    description:
      "Learn the fundamentals of user interface and user experience design",
    tags: ["UI", "UX", "Design", "Figma"],
  },
  {
    id: "3",
    title: "Advanced Data Science with Python",
    instructor: "Dr. Emily Rodriguez",
    instructorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    category: "Data Science",
    level: "Advanced",
    duration: "36h 15m",
    lessons: 72,
    students: 543,
    rating: 4.9,
    price: 129.99,
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
    completed: true,
    progress: 100,
    description:
      "Deep dive into machine learning and data analysis with Python",
    tags: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
  },
  {
    id: "4",
    title: "Digital Marketing Mastery",
    instructor: "David Wilson",
    instructorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    category: "Marketing",
    level: "Intermediate",
    duration: "22h 10m",
    lessons: 38,
    students: 1156,
    rating: 4.7,
    price: 69.99,
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    description:
      "Master digital marketing strategies and grow your business online",
    tags: ["SEO", "Social Media", "Analytics", "Advertising"],
  },
];

const mockAssignments: Assignment[] = [
  {
    id: "1",
    title: "React Component Architecture Project",
    course: "Complete React Developer Course",
    dueDate: "2024-02-25",
    status: "pending",
    maxScore: 100,
  },
  {
    id: "2",
    title: "User Research Case Study",
    course: "UI/UX Design Fundamentals",
    dueDate: "2024-02-22",
    status: "submitted",
    maxScore: 100,
  },
  {
    id: "3",
    title: "Data Analysis Report",
    course: "Advanced Data Science with Python",
    dueDate: "2024-02-20",
    status: "graded",
    score: 92,
    maxScore: 100,
  },
];

const ELearning = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Development",
    "Design",
    "Data Science",
    "Marketing",
    "Business",
  ];
  const levelColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  };

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const completedCourses = mockCourses.filter((c) => c.completed).length;
  const inProgressCourses = mockCourses.filter(
    (c) => c.progress && c.progress > 0 && !c.completed,
  ).length;
  const totalStudyTime = mockCourses.reduce((acc, course) => {
    const hours = parseFloat(course.duration.split("h")[0]);
    return acc + (course.progress ? (hours * course.progress) / 100 : 0);
  }, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-falcon-blue" />
            E-Learning Platform
          </h1>
          <p className="text-falcon-text-light font-poppins">
            Enhance your skills with our comprehensive course library
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
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
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {mockCourses.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-falcon-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Completed
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {completedCourses}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  In Progress
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {inProgressCourses}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Study Hours
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {totalStudyTime.toFixed(0)}h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="browse">Browse Courses</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-falcon-text-light h-4 w-4" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-falcon-border-light rounded-md bg-white text-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  {course.completed && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-falcon-green text-white">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                  )}
                  {course.progress !== undefined && !course.completed && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                      <div className="flex items-center justify-between text-white text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-1" />
                    </div>
                  )}
                  <Button
                    size="sm"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-white bg-opacity-90 hover:bg-white"
                  >
                    <Play className="h-5 w-5 text-falcon-blue ml-0.5" />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={levelColors[course.level]}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-falcon-text-light">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-falcon-text-dark mb-2 line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-falcon-text-light mb-3 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center space-x-2 mb-3">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src={course.instructorAvatar}
                        alt={course.instructor}
                      />
                      <AvatarFallback className="text-xs">
                        {course.instructor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-falcon-text-light">
                      {course.instructor}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-falcon-text-light mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {course.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-falcon-blue">
                      ${course.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90"
                    >
                      Continue Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="browse" className="space-y-6">
          <div className="text-center py-12">
            <Globe className="h-16 w-16 mx-auto text-falcon-text-light mb-4" />
            <h3 className="text-xl font-semibold text-falcon-text-dark mb-2">
              Explore New Courses
            </h3>
            <p className="text-falcon-text-light mb-6">
              Discover thousands of courses from expert instructors
            </p>
            <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90">
              Browse All Courses
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <div className="space-y-4">
            {mockAssignments.map((assignment) => (
              <Card key={assignment.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-falcon-text-dark mb-1">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-falcon-text-light mb-2">
                        Course: {assignment.course}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-falcon-text-light">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {assignment.dueDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BarChart3 className="h-4 w-4" />
                          <span>
                            {assignment.score
                              ? `${assignment.score}/${assignment.maxScore}`
                              : `Max: ${assignment.maxScore}`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge
                        className={
                          assignment.status === "graded"
                            ? "bg-green-100 text-green-800"
                            : assignment.status === "submitted"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {assignment.status === "graded"
                          ? "Graded"
                          : assignment.status === "submitted"
                            ? "Submitted"
                            : "Pending"}
                      </Badge>
                      <Button size="sm" variant="outline">
                        {assignment.status === "pending" ? "Submit" : "View"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
                <h3 className="font-semibold text-falcon-text-dark mb-2">
                  Course Completion
                </h3>
                <p className="text-sm text-falcon-text-light">
                  Complete your first course
                </p>
                <Badge className="mt-3 bg-green-100 text-green-800">
                  Earned
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                <h3 className="font-semibold text-falcon-text-dark mb-2">
                  High Achiever
                </h3>
                <p className="text-sm text-falcon-text-light">
                  Score 90% or higher on 3 assignments
                </p>
                <Badge className="mt-3 bg-gray-100 text-gray-800">
                  In Progress
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 mx-auto text-purple-500 mb-4" />
                <h3 className="font-semibold text-falcon-text-dark mb-2">
                  Mentor
                </h3>
                <p className="text-sm text-falcon-text-light">
                  Help 10 students in discussions
                </p>
                <Badge className="mt-3 bg-gray-100 text-gray-800">Locked</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ELearning;
