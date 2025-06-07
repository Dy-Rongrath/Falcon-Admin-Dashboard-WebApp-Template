import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Video,
  Coffee,
  Briefcase,
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  attendees: number;
  type: "meeting" | "conference" | "webinar" | "social";
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  organizer: {
    name: string;
    avatar: string;
  };
}

const events: Event[] = [
  {
    id: "EVT-001",
    title: "Product Strategy Meeting",
    description: "Quarterly product roadmap review and planning session",
    date: "2024-02-05",
    time: "10:00 AM",
    duration: "2 hours",
    location: "Conference Room A",
    attendees: 12,
    type: "meeting",
    status: "upcoming",
    organizer: {
      name: "John Doe",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
  },
  {
    id: "EVT-002",
    title: "Tech Conference 2024",
    description: "Annual technology conference with industry leaders",
    date: "2024-02-08",
    time: "09:00 AM",
    duration: "8 hours",
    location: "Convention Center",
    attendees: 500,
    type: "conference",
    status: "upcoming",
    organizer: {
      name: "Jane Smith",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
  },
  {
    id: "EVT-003",
    title: "UX Design Webinar",
    description: "Best practices for modern user experience design",
    date: "2024-02-10",
    time: "2:00 PM",
    duration: "1 hour",
    location: "Online",
    attendees: 150,
    type: "webinar",
    status: "upcoming",
    organizer: {
      name: "Mike Johnson",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
  },
  {
    id: "EVT-004",
    title: "Team Building Event",
    description: "Monthly team building and networking event",
    date: "2024-02-12",
    time: "6:00 PM",
    duration: "3 hours",
    location: "City Park",
    attendees: 45,
    type: "social",
    status: "upcoming",
    organizer: {
      name: "Sarah Wilson",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
  },
  {
    id: "EVT-005",
    title: "Project Kickoff Meeting",
    description: "Initial planning meeting for Q2 project initiatives",
    date: "2024-01-28",
    time: "11:00 AM",
    duration: "1.5 hours",
    location: "Conference Room B",
    attendees: 8,
    type: "meeting",
    status: "completed",
    organizer: {
      name: "David Brown",
      avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
    },
  },
];

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  const getEventIcon = (type: Event["type"]) => {
    switch (type) {
      case "meeting":
        return <Briefcase className="h-4 w-4" />;
      case "conference":
        return <Users className="h-4 w-4" />;
      case "webinar":
        return <Video className="h-4 w-4" />;
      case "social":
        return <Coffee className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: Event["status"]) => {
    switch (status) {
      case "upcoming":
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            Upcoming
          </Badge>
        );
      case "ongoing":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Ongoing
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
            Completed
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            Cancelled
          </Badge>
        );
    }
  };

  const getTypeBadge = (type: Event["type"]) => {
    const colors = {
      meeting: "bg-purple-100 text-purple-700",
      conference: "bg-blue-100 text-blue-700",
      webinar: "bg-green-100 text-green-700",
      social: "bg-orange-100 text-orange-700",
    };

    return (
      <Badge className={`${colors[type]} hover:${colors[type]}`}>{type}</Badge>
    );
  };

  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const todayEvents = events.filter((e) => e.date === "2024-02-05");

  // Simple calendar grid (7x6)
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    for (let i = 0; i < 42; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Events & Calendar
          </h1>
          <p className="text-gray-600">
            Manage your events, meetings, and appointments
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">
                  {events.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-gray-900">
                  {upcomingEvents.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Today's Events</p>
                <p className="text-2xl font-bold text-gray-900">
                  {todayEvents.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Attendees</p>
                <p className="text-2xl font-bold text-gray-900">
                  {events.reduce((sum, event) => sum + event.attendees, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="list" className="space-y-6">
        <TabsList>
          <TabsTrigger value="list">Event List</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search events..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-80"
                    />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Events List */}
          <div className="space-y-4">
            {events.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {getEventIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {event.title}
                          </h3>
                          {getTypeBadge(event.type)}
                          {getStatusBadge(event.status)}
                        </div>
                        <p className="text-gray-600 mb-3">
                          {event.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time} ({event.duration})
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {event.attendees} attendees
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mt-3">
                          <Avatar className="h-6 w-6">
                            <AvatarImage
                              src={event.organizer.avatar}
                              alt={event.organizer.name}
                            />
                            <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                              {event.organizer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-500">
                            Organized by {event.organizer.name}
                          </span>
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
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Event</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Cancel Event
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentDate(
                        new Date(
                          currentDate.setMonth(currentDate.getMonth() - 1),
                        ),
                      )
                    }
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentDate(new Date())}
                  >
                    Today
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentDate(
                        new Date(
                          currentDate.setMonth(currentDate.getMonth() + 1),
                        ),
                      )
                    }
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="p-2 text-center font-medium text-gray-500 text-sm"
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => {
                  const isCurrentMonth =
                    day.getMonth() === currentDate.getMonth();
                  const isToday =
                    day.toDateString() === new Date().toDateString();
                  const hasEvent = events.some(
                    (event) =>
                      new Date(event.date).toDateString() ===
                      day.toDateString(),
                  );

                  return (
                    <div
                      key={index}
                      className={`p-2 h-20 border rounded-lg text-sm ${
                        isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-400"
                      } ${isToday ? "border-blue-500 bg-blue-50" : "border-gray-200"} 
                      ${hasEvent ? "border-green-300" : ""}`}
                    >
                      <div
                        className={`font-medium ${isToday ? "text-blue-600" : ""}`}
                      >
                        {day.getDate()}
                      </div>
                      {hasEvent && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {event.description}
                      </p>
                      {getTypeBadge(event.type)}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()} at{" "}
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {event.attendees} attendees
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={event.organizer.avatar}
                          alt={event.organizer.name}
                        />
                        <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                          {event.organizer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-gray-500">
                        {event.organizer.name}
                      </span>
                    </div>
                    <Button size="sm">Join Event</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
