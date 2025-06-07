import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Image,
  Video,
  Smile,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Plus,
  Search,
  Bell,
  Bookmark,
  ThumbsUp,
  Send,
  Globe,
  Lock,
  UserPlus,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Post {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  images?: string[];
  video?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
  privacy: "public" | "friends" | "private";
  location?: string;
  tags: string[];
}

interface SuggestedUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
  mutualFriends: number;
  isFollowing: boolean;
}

const mockPosts: Post[] = [
  {
    id: "1",
    author: {
      name: "Sarah Johnson",
      username: "@sarahj",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face",
      verified: true,
    },
    content:
      "Just finished building an amazing React dashboard! The component architecture is so clean and modular. Really excited to share it with the community 🚀",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    ],
    timestamp: "2 hours ago",
    likes: 142,
    comments: 23,
    shares: 8,
    isLiked: true,
    isBookmarked: false,
    privacy: "public",
    location: "San Francisco, CA",
    tags: ["react", "dashboard", "frontend"],
  },
  {
    id: "2",
    author: {
      name: "Michael Chen",
      username: "@mikec",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      verified: false,
    },
    content:
      "Beautiful sunset view from my office today. Sometimes it's good to take a break from coding and appreciate the world around us ☀️",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=500&h=300&fit=crop",
    ],
    timestamp: "4 hours ago",
    likes: 89,
    comments: 12,
    shares: 5,
    isLiked: false,
    isBookmarked: true,
    privacy: "public",
    tags: ["photography", "sunset", "office"],
  },
  {
    id: "3",
    author: {
      name: "Emily Rodriguez",
      username: "@emilyr",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      verified: true,
    },
    content:
      "Machine learning model achieved 98.5% accuracy on the test dataset! After weeks of fine-tuning parameters and optimizing the architecture, it's finally ready for production. Big thanks to my team for the collaboration! 🤖🎯",
    timestamp: "1 day ago",
    likes: 256,
    comments: 45,
    shares: 19,
    isLiked: true,
    isBookmarked: true,
    privacy: "public",
    location: "New York, NY",
    tags: ["machinelearning", "ai", "python", "datascience"],
  },
  {
    id: "4",
    author: {
      name: "David Wilson",
      username: "@davidw",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      verified: false,
    },
    content:
      "Attending the tech conference was incredibly inspiring! Met so many talented developers and learned about the latest trends in web development. Can't wait to implement some of these ideas in our next project.",
    timestamp: "2 days ago",
    likes: 67,
    comments: 8,
    shares: 3,
    isLiked: false,
    isBookmarked: false,
    privacy: "friends",
    location: "Austin, TX",
    tags: ["conference", "networking", "webdev"],
  },
];

const suggestedUsers: SuggestedUser[] = [
  {
    id: "1",
    name: "Alex Rodriguez",
    username: "@alexr",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    mutualFriends: 12,
    isFollowing: false,
  },
  {
    id: "2",
    name: "Lisa Chen",
    username: "@lisac",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    mutualFriends: 8,
    isFollowing: false,
  },
  {
    id: "3",
    name: "John Smith",
    username: "@johns",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=40&h=40&fit=crop&crop=face",
    mutualFriends: 15,
    isFollowing: false,
  },
];

const Social = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [newPost, setNewPost] = useState("");
  const [users, setUsers] = useState<SuggestedUser[]>(suggestedUsers);

  const handleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  const handleBookmark = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post,
      ),
    );
  };

  const handleFollow = (userId: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user,
      ),
    );
  };

  const getPrivacyIcon = (privacy: string) => {
    switch (privacy) {
      case "public":
        return <Globe className="h-3 w-3" />;
      case "friends":
        return <Users className="h-3 w-3" />;
      case "private":
        return <Lock className="h-3 w-3" />;
      default:
        return <Globe className="h-3 w-3" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
            <Users className="h-6 w-6 text-falcon-blue" />
            Social Feed
          </h1>
          <p className="text-falcon-text-light font-poppins">
            Connect and share with your network
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" className="font-poppins">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {/* User Profile Card */}
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Avatar className="w-16 h-16 mx-auto mb-3">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
                  <AvatarFallback>YU</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-falcon-text-dark mb-1">
                  Your User
                </h3>
                <p className="text-sm text-falcon-text-light mb-3">@youruser</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg font-bold text-falcon-text-dark">
                      142
                    </p>
                    <p className="text-xs text-falcon-text-light">Posts</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-falcon-text-dark">
                      2.3k
                    </p>
                    <p className="text-xs text-falcon-text-light">Followers</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-falcon-text-dark">
                      890
                    </p>
                    <p className="text-xs text-falcon-text-light">Following</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-falcon-text-dark flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending
              </h3>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-3">
                {[
                  "#webdevelopment",
                  "#react",
                  "#machinelearning",
                  "#startup",
                  "#design",
                ].map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-falcon-blue hover:underline cursor-pointer">
                      {tag}
                    </span>
                    <span className="text-xs text-falcon-text-light">
                      {Math.floor(Math.random() * 1000)}k
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Suggested Users */}
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-falcon-text-dark flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                People you may know
              </h3>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-3">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-xs">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-falcon-text-dark truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-falcon-text-light">
                        {user.mutualFriends} mutual
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant={user.isFollowing ? "outline" : "default"}
                      onClick={() => handleFollow(user.id)}
                      className="text-xs"
                    >
                      {user.isFollowing ? "Following" : "Follow"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post */}
          <Card>
            <CardContent className="p-4">
              <div className="flex space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
                  <AvatarFallback>YU</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="What's on your mind?"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-20 resize-none border-none shadow-none focus-visible:ring-0 p-0"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-falcon-text-light"
                      >
                        <Image className="h-4 w-4 mr-1" />
                        Photo
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-falcon-text-light"
                      >
                        <Video className="h-4 w-4 mr-1" />
                        Video
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-falcon-text-light"
                      >
                        <MapPin className="h-4 w-4 mr-1" />
                        Location
                      </Button>
                    </div>
                    <Button size="sm" disabled={!newPost.trim()}>
                      <Send className="h-4 w-4 mr-1" />
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Post Header */}
                  <div className="p-4 pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src={post.author.avatar}
                            alt={post.author.name}
                          />
                          <AvatarFallback>
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-1">
                            <span className="font-semibold text-falcon-text-dark text-sm">
                              {post.author.name}
                            </span>
                            {post.author.verified && (
                              <Badge className="bg-falcon-blue text-white text-xs px-1">
                                ✓
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-falcon-text-light">
                            <span>{post.author.username}</span>
                            <span>•</span>
                            <span>{post.timestamp}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              {getPrivacyIcon(post.privacy)}
                              <span className="capitalize">{post.privacy}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Bookmark className="h-4 w-4 mr-2" />
                            Save post
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="h-4 w-4 mr-2" />
                            Edit post
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Delete post
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-3">
                    <p className="text-falcon-text-dark text-sm leading-relaxed mb-3">
                      {post.content}
                    </p>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-falcon-blue text-sm hover:underline cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Location */}
                    {post.location && (
                      <div className="flex items-center space-x-1 text-xs text-falcon-text-light mb-3">
                        <MapPin className="h-3 w-3" />
                        <span>{post.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Post Images */}
                  {post.images && post.images.length > 0 && (
                    <div
                      className={`grid gap-1 ${post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                    >
                      {post.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Post content ${index + 1}`}
                          className="w-full h-64 object-cover cursor-pointer hover:opacity-95 transition-opacity"
                        />
                      ))}
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center space-x-1 ${post.isLiked ? "text-red-500" : "text-falcon-text-light"}`}
                        >
                          <Heart
                            className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`}
                          />
                          <span className="text-sm">{post.likes}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center space-x-1 text-falcon-text-light"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{post.comments}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center space-x-1 text-falcon-text-light"
                        >
                          <Share2 className="h-4 w-4" />
                          <span className="text-sm">{post.shares}</span>
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleBookmark(post.id)}
                        className={
                          post.isBookmarked
                            ? "text-falcon-blue"
                            : "text-falcon-text-light"
                        }
                      >
                        <Bookmark
                          className={`h-4 w-4 ${post.isBookmarked ? "fill-current" : ""}`}
                        />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {/* Events */}
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-falcon-text-dark flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Upcoming Events
              </h3>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-3">
                <div className="border-l-2 border-falcon-blue pl-3">
                  <p className="font-medium text-sm text-falcon-text-dark">
                    Tech Meetup
                  </p>
                  <p className="text-xs text-falcon-text-light">
                    Tomorrow, 7:00 PM
                  </p>
                </div>
                <div className="border-l-2 border-falcon-green pl-3">
                  <p className="font-medium text-sm text-falcon-text-dark">
                    Design Workshop
                  </p>
                  <p className="text-xs text-falcon-text-light">
                    Friday, 2:00 PM
                  </p>
                </div>
                <div className="border-l-2 border-falcon-orange pl-3">
                  <p className="font-medium text-sm text-falcon-text-dark">
                    Conference 2024
                  </p>
                  <p className="text-xs text-falcon-text-light">Next week</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Online Friends */}
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-falcon-text-dark flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Online Now
              </h3>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-2">
                {mockPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-center space-x-2">
                    <div className="relative">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={post.author.avatar}
                          alt={post.author.name}
                        />
                        <AvatarFallback className="text-xs">
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-falcon-text-dark">
                      {post.author.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Social;
