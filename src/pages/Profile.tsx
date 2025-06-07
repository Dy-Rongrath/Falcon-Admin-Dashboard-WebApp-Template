import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Upload,
  Save,
  Shield,
  Award,
  Activity,
  Users,
  FileText,
  Star,
  Camera,
  Globe,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

export default function Profile() {
  const profileCompletion = 85;

  const achievements = [
    {
      name: "Project Master",
      description: "Completed 50+ projects",
      icon: Award,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "Team Leader",
      description: "Led 10+ successful teams",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Innovation Expert",
      description: "Introduced 5+ new features",
      icon: Star,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Quality Guru",
      description: "Maintained 99% quality score",
      icon: Shield,
      color: "bg-green-100 text-green-600",
    },
  ];

  const recentActivity = [
    { action: "Updated project status", time: "2 hours ago", type: "project" },
    { action: "Reviewed code changes", time: "4 hours ago", type: "review" },
    { action: "Created new task board", time: "1 day ago", type: "task" },
    { action: "Joined team meeting", time: "2 days ago", type: "meeting" },
    {
      action: "Completed training module",
      time: "3 days ago",
      type: "training",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <User className="h-6 w-6" />
            Profile
          </h1>
          <p className="text-gray-600">
            Manage your personal information and preferences
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={`${import.meta.env.BASE_URL}placeholder.svg`} alt="Profile" />
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 h-8 w-8 p-0 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                      John Doe
                    </h2>
                    <Badge className="bg-green-100 text-green-700">
                      Pro Member
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Senior Product Manager at TechCorp
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>Joined March 2023</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Profile Completion */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Profile Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-gray-600">
                    {profileCompletion}%
                  </span>
                </div>
                <Progress value={profileCompletion} className="h-2" />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Basic Info</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Profile Photo</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Bio & Description</span>
                    <span className="text-orange-600">Pending</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Social Links</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Projects</span>
                  </div>
                  <span className="font-medium">42</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Team Members</span>
                  </div>
                  <span className="font-medium">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Achievements</span>
                  </div>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">Rating</span>
                  </div>
                  <span className="font-medium">4.9</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Profile Details */}
      <Tabs defaultValue="info" className="space-y-6">
        <TabsList>
          <TabsTrigger value="info">Personal Info</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    defaultValue="Experienced product manager with a passion for building innovative solutions that solve real-world problems."
                    rows={4}
                  />
                </div>
                <Button className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Work Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="TechCorp" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" defaultValue="Senior Product Manager" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue="Product Management" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      defaultValue="2023-03-15"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <Input id="employeeId" defaultValue="EMP-001" />
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Save className="h-4 w-4 mr-2" />
                  Update Work Info
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="experience">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-blue-200 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-2"></div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">
                        Senior Product Manager
                      </h3>
                      <p className="text-gray-600">
                        TechCorp • March 2023 - Present
                      </p>
                      <p className="text-sm text-gray-700">
                        Leading product strategy and development for flagship
                        SaaS platform. Managed cross-functional teams of 15+
                        engineers and designers.
                      </p>
                    </div>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-2 top-2"></div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">
                        Product Manager
                      </h3>
                      <p className="text-gray-600">
                        StartupCo • June 2021 - February 2023
                      </p>
                      <p className="text-sm text-gray-700">
                        Drove product development from concept to launch.
                        Increased user engagement by 40% through data-driven
                        feature improvements.
                      </p>
                    </div>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-2 top-2"></div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">
                        Associate Product Manager
                      </h3>
                      <p className="text-gray-600">
                        InnovateInc • January 2020 - May 2021
                      </p>
                      <p className="text-sm text-gray-700">
                        Supported senior product managers in feature development
                        and user research. Led mobile app redesign project.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">
                        Product Management
                      </span>
                      <span className="text-sm text-gray-600">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Data Analysis</span>
                      <span className="text-sm text-gray-600">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">
                        Team Leadership
                      </span>
                      <span className="text-sm text-gray-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">UX Design</span>
                      <span className="text-sm text-gray-600">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${achievement.color}`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {achievement.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
                      </p>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        Earned this month
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
