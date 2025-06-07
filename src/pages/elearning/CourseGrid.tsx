import React, { useState } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Users,
  Clock,
  Star,
  Play,
  Download,
  Heart,
  Share2,
} from "lucide-react";

const CourseGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

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
      reviews: 324,
      price: 89.99,
      originalPrice: 129.99,
      description:
        "Master React development with hands-on projects and real-world applications.",
      lessons: 45,
      completion: 0,
      enrolled: false,
      featured: true,
      tags: ["React", "JavaScript", "Frontend"],
      lastUpdated: "2024-01-15",
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
      reviews: 189,
      price: 79.99,
      originalPrice: 99.99,
      description:
        "Learn the principles of user interface and user experience design.",
      lessons: 32,
      completion: 75,
      enrolled: true,
      featured: false,
      tags: ["UI", "UX", "Design"],
      lastUpdated: "2024-02-20",
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
      reviews: 567,
      price: 129.99,
      originalPrice: 179.99,
      description:
        "Comprehensive data science course covering machine learning and analytics.",
      lessons: 68,
      completion: 30,
      enrolled: true,
      featured: true,
      tags: ["Python", "Machine Learning", "Analytics"],
      lastUpdated: "2024-01-10",
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
      reviews: 412,
      price: 99.99,
      originalPrice: 149.99,
      description:
        "Learn effective digital marketing strategies and campaign management.",
      lessons: 38,
      completion: 0,
      enrolled: false,
      featured: false,
      tags: ["Marketing", "SEO", "Social Media"],
      lastUpdated: "2024-03-05",
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
      reviews: 203,
      price: 69.99,
      originalPrice: 89.99,
      description:
        "Essential project management skills for modern professionals.",
      lessons: 24,
      completion: 100,
      enrolled: true,
      featured: false,
      tags: ["Project Management", "Leadership"],
      lastUpdated: "2024-02-28",
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
      reviews: 445,
      price: 119.99,
      originalPrice: 159.99,
      description:
        "Build native mobile applications for iOS and Android platforms.",
      lessons: 55,
      completion: 0,
      enrolled: false,
      featured: true,
      tags: ["Mobile", "iOS", "Android"],
      lastUpdated: "2024-01-25",
    },
    {
      id: 7,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Emma Thompson",
      category: "Data Science",
      level: "Intermediate",
      duration: "45 hours",
      students: 1420,
      rating: 4.7,
      reviews: 298,
      price: 109.99,
      originalPrice: 139.99,
      description:
        "Introduction to machine learning algorithms and applications.",
      lessons: 52,
      completion: 15,
      enrolled: true,
      featured: false,
      tags: ["AI", "Machine Learning", "Python"],
      lastUpdated: "2024-02-10",
    },
    {
      id: 8,
      title: "Graphic Design Masterclass",
      instructor: "David Kim",
      category: "Design",
      level: "Intermediate",
      duration: "30 hours",
      students: 1150,
      rating: 4.6,
      reviews: 234,
      price: 84.99,
      originalPrice: 109.99,
      description:
        "Master graphic design principles and industry-standard tools.",
      lessons: 36,
      completion: 0,
      enrolled: false,
      featured: false,
      tags: ["Graphic Design", "Adobe", "Branding"],
      lastUpdated: "2024-03-01",
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
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.students - a.students;
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return (
          new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        );
      default:
        return 0;
    }
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

  const getDiscountPercentage = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Course Grid View
          </h1>
          <p className="text-gray-600">
            Browse our comprehensive course library in grid format
          </p>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
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

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>

              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {sortedCourses.length} of {courses.length} courses
          </div>
        </div>

        {/* Featured Courses Banner */}
        {selectedCategory === "all" && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses
                .filter((course) => course.featured)
                .slice(0, 3)
                .map((course) => (
                  <div
                    key={course.id}
                    className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-yellow-400 text-black text-xs rounded-full font-semibold">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-3">
                      {course.instructor}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm">{course.rating}</span>
                      </div>
                      <div className="text-lg font-bold">${course.price}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Course Image & Overlay */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-80" />
                </div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center space-x-3">
                    <button className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {course.enrolled && (
                    <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                      Enrolled
                    </span>
                  )}
                  {course.originalPrice > course.price && (
                    <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                      {getDiscountPercentage(
                        course.price,
                        course.originalPrice,
                      )}
                      % OFF
                    </span>
                  )}
                </div>

                {/* Progress Bar for Enrolled Courses */}
                {course.enrolled && course.completion > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs py-2 px-3">
                    <div className="flex justify-between items-center mb-1">
                      <span>Progress</span>
                      <span>{course.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-1">
                      <div
                        className="bg-green-500 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${course.completion}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="p-5">
                {/* Level and Rating */}
                <div className="flex items-center justify-between mb-3">
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
                    <span className="text-xs text-gray-500 ml-1">
                      ({course.reviews})
                    </span>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {course.description}
                </p>

                {/* Instructor */}
                <p className="text-sm text-gray-500 mb-3">
                  By {course.instructor}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {course.lessons}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-blue-600">
                        ${course.price}
                      </span>
                      {course.originalPrice > course.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    {course.enrolled ? (
                      course.completion === 100 ? (
                        <button className="flex items-center px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                          <Download className="w-4 h-4 mr-1" />
                          Certificate
                        </button>
                      ) : (
                        <button className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                          <Play className="w-4 h-4 mr-1" />
                          Continue
                        </button>
                      )
                    ) : (
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                        Enroll
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedCourses.length === 0 && (
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

        {/* Load More Button */}
        {sortedCourses.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Load More Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseGrid;
