import React, { useState } from "react";
import {
  Search,
  Filter,
  User,
  Heart,
  MessageCircle,
  Share2,
  UserPlus,
  Calendar,
  Clock,
  MoreHorizontal,
  Eye,
  Bookmark,
  Award,
} from "lucide-react";

const ActivityLog: React.FC = () => {
  const [filterType, setFilterType] = useState("all");
  const [timeFilter, setTimeFilter] = useState("today");
  const [searchTerm, setSearchTerm] = useState("");

  const activities = [
    {
      id: 1,
      type: "like",
      user: "Sarah Johnson",
      action: "liked your post",
      target: "React Best Practices Guide",
      timestamp: "2 minutes ago",
      avatar: "SJ",
      color: "bg-blue-500",
      details: "Your tutorial on React hooks received a new like",
      icon: Heart,
    },
    {
      id: 2,
      type: "comment",
      user: "Mike Davis",
      action: "commented on",
      target: "UI Design Principles",
      timestamp: "15 minutes ago",
      avatar: "MD",
      color: "bg-green-500",
      details: "Great insights on modern design patterns!",
      icon: MessageCircle,
    },
    {
      id: 3,
      type: "follow",
      user: "Emily Rodriguez",
      action: "started following you",
      target: "",
      timestamp: "1 hour ago",
      avatar: "ER",
      color: "bg-purple-500",
      details: "You have a new follower interested in your content",
      icon: UserPlus,
    },
    {
      id: 4,
      type: "share",
      user: "Alex Thompson",
      action: "shared your article",
      target: "JavaScript Performance Tips",
      timestamp: "2 hours ago",
      avatar: "AT",
      color: "bg-orange-500",
      details: "Your article was shared with 250+ connections",
      icon: Share2,
    },
    {
      id: 5,
      type: "achievement",
      user: "System",
      action: "earned achievement",
      target: "Top Contributor Badge",
      timestamp: "3 hours ago",
      avatar: "🏆",
      color: "bg-yellow-500",
      details: "Congratulations! You've reached 1000 helpful votes",
      icon: Award,
    },
    {
      id: 6,
      type: "view",
      user: "Jennifer Liu",
      action: "viewed your profile",
      target: "",
      timestamp: "4 hours ago",
      avatar: "JL",
      color: "bg-indigo-500",
      details: "Someone is interested in your professional background",
      icon: Eye,
    },
    {
      id: 7,
      type: "bookmark",
      user: "David Kim",
      action: "bookmarked your post",
      target: "Advanced CSS Techniques",
      timestamp: "5 hours ago",
      avatar: "DK",
      color: "bg-pink-500",
      details: "Your CSS tutorial was saved for later reading",
      icon: Bookmark,
    },
    {
      id: 8,
      type: "like",
      user: "Lisa Anderson",
      action: "liked your comment",
      target: 'on "Future of Web Development"',
      timestamp: "6 hours ago",
      avatar: "LA",
      color: "bg-blue-500",
      details: "Your thoughtful comment received appreciation",
      icon: Heart,
    },
    {
      id: 9,
      type: "follow",
      user: "Robert Chen",
      action: "started following you",
      target: "",
      timestamp: "1 day ago",
      avatar: "RC",
      color: "bg-purple-500",
      details: "Another developer joined your network",
      icon: UserPlus,
    },
    {
      id: 10,
      type: "comment",
      user: "Amanda Garcia",
      action: "replied to your comment",
      target: 'in "React vs Vue Discussion"',
      timestamp: "1 day ago",
      avatar: "AG",
      color: "bg-green-500",
      details: "Thanks for the detailed comparison! Very helpful.",
      icon: MessageCircle,
    },
    {
      id: 11,
      type: "achievement",
      user: "System",
      action: "milestone reached",
      target: "10,000 Profile Views",
      timestamp: "2 days ago",
      avatar: "📈",
      color: "bg-yellow-500",
      details: "Your profile reached 10,000 views this month",
      icon: Award,
    },
    {
      id: 12,
      type: "share",
      user: "Thomas Wilson",
      action: "shared your tutorial",
      target: "Node.js Security Best Practices",
      timestamp: "2 days ago",
      avatar: "TW",
      color: "bg-orange-500",
      details: "Your security guide is being shared widely",
      icon: Share2,
    },
  ];

  const activityTypes = [
    { value: "all", label: "All Activities", count: activities.length },
    {
      value: "like",
      label: "Likes",
      count: activities.filter((a) => a.type === "like").length,
    },
    {
      value: "comment",
      label: "Comments",
      count: activities.filter((a) => a.type === "comment").length,
    },
    {
      value: "follow",
      label: "Follows",
      count: activities.filter((a) => a.type === "follow").length,
    },
    {
      value: "share",
      label: "Shares",
      count: activities.filter((a) => a.type === "share").length,
    },
    {
      value: "achievement",
      label: "Achievements",
      count: activities.filter((a) => a.type === "achievement").length,
    },
  ];

  const timeFilters = [
    { value: "today", label: "Today" },
    { value: "week", label: "This Week" },
    { value: "month", label: "This Month" },
    { value: "all", label: "All Time" },
  ];

  const filteredActivities = activities.filter((activity) => {
    const matchesType = filterType === "all" || activity.type === filterType;
    const matchesSearch =
      activity.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.target.toLowerCase().includes(searchTerm.toLowerCase());

    // For demo purposes, we'll show all activities for time filter
    // In a real app, you'd filter by actual timestamps
    return matchesType && matchesSearch;
  });

  const getActivityIcon = (activity: any) => {
    const IconComponent = activity.icon;
    return <IconComponent className="w-5 h-5 text-white" />;
  };

  const getTimeAgo = (timestamp: string) => {
    // This is a simple demo - in a real app you'd use a proper date library
    return timestamp;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Activity Log
          </h1>
          <p className="text-gray-600">
            Track all interactions and engagement with your content
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {activityTypes.map((type) => (
            <div
              key={type.value}
              className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all ${
                filterType === type.value
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setFilterType(type.value)}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {type.count}
                </div>
                <div className="text-sm text-gray-600">{type.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Time Filter */}
            <div className="flex items-center space-x-4">
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {timeFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h3>
            <p className="text-sm text-gray-600">
              Showing {filteredActivities.length} activities
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <div
                    className={`w-12 h-12 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    {activity.avatar.length <= 2 ? (
                      <span className="text-white font-semibold">
                        {activity.avatar}
                      </span>
                    ) : (
                      <span className="text-lg">{activity.avatar}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-semibold">{activity.user}</span>{" "}
                          <span className="text-gray-600">
                            {activity.action}
                          </span>
                          {activity.target && (
                            <>
                              {" "}
                              <span className="font-medium text-blue-600">
                                {activity.target}
                              </span>
                            </>
                          )}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {activity.details}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {getTimeAgo(activity.timestamp)}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        {/* Activity Icon */}
                        <div
                          className={`w-8 h-8 ${activity.color} rounded-full flex items-center justify-center`}
                        >
                          {getActivityIcon(activity)}
                        </div>

                        {/* More Options */}
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="p-6 text-center border-t border-gray-200">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Load More Activities
            </button>
          </div>
        </div>

        {/* Empty State */}
        {filteredActivities.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No activities found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to see more activities
            </p>
          </div>
        )}

        {/* Activity Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Most Active Today
            </h4>
            <div className="space-y-3">
              {["Sarah Johnson", "Mike Davis", "Emily Rodriguez"].map(
                (user, index) => (
                  <div key={user} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-semibold">
                          {user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {user}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {5 - index} activities
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Content
            </h4>
            <div className="space-y-3">
              {[
                "React Best Practices Guide",
                "JavaScript Performance Tips",
                "Advanced CSS Techniques",
              ].map((content, index) => (
                <div
                  key={content}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-gray-900 truncate">
                    {content}
                  </span>
                  <span className="text-sm text-blue-600 ml-2">
                    {10 - index * 2} interactions
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Engagement Summary
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Likes</span>
                <span className="text-sm font-semibold text-gray-900">127</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Comments</span>
                <span className="text-sm font-semibold text-gray-900">43</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">New Followers</span>
                <span className="text-sm font-semibold text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Shares</span>
                <span className="text-sm font-semibold text-gray-900">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
