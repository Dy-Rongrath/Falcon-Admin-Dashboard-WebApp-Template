import React, { useState } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Users,
  Clock,
  Star,
  ChevronRight,
  Play,
  Download,
} from "lucide-react";

const CourseList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Complete React Development Course",
      instructor: "John Smith",
      category: "Programming",
      level: "Intermediate",
      duration: "40 hours",
      students: 1250,
      rating: 4.8,
      price: 89.99,
      image: "/api/placeholder/300/200",
      description:
        "Master React development with hands-on projects and real-world applications.",
      lessons: 45,
      completion: 0,
      enrolled: false,
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      instructor: "Sarah Wilson",
      category: "Design",
      level: "Beginner",
      duration: "25 hours",
      students: 890,
      rating: 4.6,
      price: 79.99,
      image: "/api/placeholder/300/200",
      description:
        "Learn the principles of user interface and user experience design.",
      lessons: 32,
      completion: 75,
      enrolled: true,
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Dr. Michael Chen",
      category: "Data Science",
      level: "Advanced",
      duration: "60 hours",
      students: 2100,
      rating: 4.9,
      price: 129.99,
      image: "/api/placeholder/300/200",
      description:
        "Comprehensive data science course covering machine learning and analytics.",
      lessons: 68,
      completion: 30,
      enrolled: true,
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "Lisa Anderson",
      category: "Marketing",
      level: "Intermediate",
      duration: "35 hours",
      students: 1580,
      rating: 4.7,
      price: 99.99,
      image: "/api/placeholder/300/200",
      description:
        "Learn effective digital marketing strategies and campaign management.",
      lessons: 38,
      completion: 0,
      enrolled: false,
    },
    {
      id: 5,
      title: "Project Management Essentials",
      instructor: "Robert Taylor",
      category: "Business",
      level: "Beginner",
      duration: "20 hours",
      students: 950,
      rating: 4.5,
      price: 69.99,
      image: "/api/placeholder/300/200",
      description:
        "Essential project management skills for modern professionals.",
      lessons: 24,
      completion: 100,
      enrolled: true,
    },
    {
      id: 6,
      title: "Mobile App Development",
      instructor: "Alex Rodriguez",
      category: "Programming",
      level: "Advanced",
      duration: "50 hours",
      students: 1750,
      rating: 4.8,
      price: 119.99,
      image: "/api/placeholder/300/200",
      description:
        "Build native mobile applications for iOS and Android platforms.",
      lessons: 55,
      completion: 0,
      enrolled: false,
    },
  ];

  const categories = [
    "all",
    "Programming",
    "Design",
    "Data Science",
    "Marketing",
    "Business",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Course Library
          </h1>
          <p className="text-gray-600">
            Discover and enroll in courses to advance your skills
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">
              {courses.length}
            </h3>
            <p className="text-gray-600">Total Courses</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">
              {courses.filter((c) => c.enrolled).length}
            </h3>
            <p className="text-gray-600">Enrolled Courses</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">
              {courses.filter((c) => c.completion === 100).length}
            </h3>
            <p className="text-gray-600">Completed</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-gray-900">
              {
                courses.filter((c) => c.completion > 0 && c.completion < 100)
                  .length
              }
            </h3>
            <p className="text-gray-600">In Progress</p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Course Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-80" />
                </div>
                {course.enrolled && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                      Enrolled
                    </span>
                  </div>
                )}
                {course.completion > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs py-2 px-4">
                    Progress: {course.completion}%
                    <div className="w-full bg-gray-300 rounded-full h-1 mt-1">
                      <div
                        className="bg-green-500 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${course.completion}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${getLevelColor(course.level)}`}
                  >
                    {course.level}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {course.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="mr-4">{course.instructor}</span>
                  <span className="mr-4 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      ${course.price}
                    </span>
                    <div className="text-xs text-gray-500">
                      {course.lessons} lessons
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {course.enrolled ? (
                      course.completion === 100 ? (
                        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                          <Download className="w-4 h-4 mr-2" />
                          Certificate
                        </button>
                      ) : (
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <Play className="w-4 h-4 mr-2" />
                          Continue
                        </button>
                      )
                    ) : (
                      <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Enroll Now
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
