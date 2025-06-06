import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Filter,
  Search,
  Clock,
  MapPin,
  Users,
  Video,
  Coffee,
  Briefcase,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  type: "meeting" | "call" | "event" | "deadline" | "personal";
  attendees: string[];
  location?: string;
  color: string;
  allDay?: boolean;
}

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Standup",
    description: "Daily team standup meeting",
    start: new Date(2024, 1, 5, 9, 0),
    end: new Date(2024, 1, 5, 9, 30),
    type: "meeting",
    attendees: ["john@example.com", "jane@example.com", "mike@example.com"],
    location: "Conference Room A",
    color: "bg-blue-500",
  },
  {
    id: "2",
    title: "Product Review",
    description: "Quarterly product review with stakeholders",
    start: new Date(2024, 1, 5, 14, 0),
    end: new Date(2024, 1, 5, 16, 0),
    type: "meeting",
    attendees: ["sarah@example.com", "david@example.com"],
    location: "Zoom Meeting",
    color: "bg-purple-500",
  },
  {
    id: "3",
    title: "Project Deadline",
    description: "Dashboard redesign project deadline",
    start: new Date(2024, 1, 8, 17, 0),
    end: new Date(2024, 1, 8, 17, 0),
    type: "deadline",
    attendees: [],
    color: "bg-red-500",
  },
  {
    id: "4",
    title: "Coffee with Client",
    description: "Informal meeting with potential client",
    start: new Date(2024, 1, 10, 10, 30),
    end: new Date(2024, 1, 10, 11, 30),
    type: "personal",
    attendees: ["client@company.com"],
    location: "Starbucks Downtown",
    color: "bg-green-500",
  },
  {
    id: "5",
    title: "Conference Call",
    description: "Weekly conference call with remote team",
    start: new Date(2024, 1, 12, 15, 0),
    end: new Date(2024, 1, 12, 16, 0),
    type: "call",
    attendees: ["team@company.com"],
    color: "bg-orange-500",
  },
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 1, 1)); // February 2024
  const [selectedView, setSelectedView] = useState<"month" | "week" | "day">(
    "month",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );

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

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

  const getEventsForDay = (date: Date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.start);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const getEventIcon = (type: CalendarEvent["type"]) => {
    switch (type) {
      case "meeting":
        return <Briefcase className="h-3 w-3" />;
      case "call":
        return <Video className="h-3 w-3" />;
      case "event":
        return <CalendarIcon className="h-3 w-3" />;
      case "deadline":
        return <Clock className="h-3 w-3" />;
      case "personal":
        return <Coffee className="h-3 w-3" />;
    }
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const calendarDays = generateCalendarDays();
  const upcomingEvents = events
    .filter((event) => event.start > new Date())
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <CalendarIcon className="h-6 w-6" />
            Calendar
          </h1>
          <p className="text-gray-600">Manage your schedule and appointments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Calendar Main View */}
        <div className="col-span-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("prev")}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <h2 className="text-xl font-semibold">
                      {monthNames[currentDate.getMonth()]}{" "}
                      {currentDate.getFullYear()}
                    </h2>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("next")}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentDate(new Date())}
                  >
                    Today
                  </Button>
                </div>

                <Tabs
                  value={selectedView}
                  onValueChange={(value) => setSelectedView(value as any)}
                >
                  <TabsList>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="day">Day</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              {selectedView === "month" && (
                <div className="space-y-4">
                  {/* Calendar Header */}
                  <div className="grid grid-cols-7 gap-2">
                    {daysOfWeek.map((day) => (
                      <div
                        key={day}
                        className="p-2 text-center font-medium text-gray-500 text-sm"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {calendarDays.map((day, index) => {
                      const isCurrentMonth =
                        day.getMonth() === currentDate.getMonth();
                      const isToday =
                        day.toDateString() === new Date().toDateString();
                      const dayEvents = getEventsForDay(day);

                      return (
                        <div
                          key={index}
                          className={`min-h-[120px] p-2 border rounded-lg text-sm cursor-pointer hover:bg-gray-50 ${
                            isCurrentMonth
                              ? "bg-white"
                              : "bg-gray-50 text-gray-400"
                          } ${isToday ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
                        >
                          <div
                            className={`font-medium mb-2 ${isToday ? "text-blue-600" : ""}`}
                          >
                            {day.getDate()}
                          </div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 3).map((event) => (
                              <div
                                key={event.id}
                                className={`text-xs p-1 rounded text-white truncate cursor-pointer ${event.color}`}
                                onClick={() => setSelectedEvent(event)}
                              >
                                <div className="flex items-center gap-1">
                                  {getEventIcon(event.type)}
                                  <span>{event.title}</span>
                                </div>
                              </div>
                            ))}
                            {dayEvents.length > 3 && (
                              <div className="text-xs text-gray-500 text-center">
                                +{dayEvents.length - 3} more
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {selectedView === "week" && (
                <div className="space-y-4">
                  <div className="text-center text-gray-500">
                    Week view - Coming soon
                  </div>
                </div>
              )}

              {selectedView === "day" && (
                <div className="space-y-4">
                  <div className="text-center text-gray-500">
                    Day view - Coming soon
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Mini Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-xs">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="p-1 text-center font-medium text-gray-500"
                  >
                    {day.substring(0, 1)}
                  </div>
                ))}
                {calendarDays.slice(0, 35).map((day, index) => {
                  const isCurrentMonth =
                    day.getMonth() === currentDate.getMonth();
                  const isToday =
                    day.toDateString() === new Date().toDateString();
                  const hasEvents = getEventsForDay(day).length > 0;

                  return (
                    <div
                      key={index}
                      className={`p-1 text-center cursor-pointer rounded text-xs ${
                        isCurrentMonth ? "text-gray-900" : "text-gray-400"
                      } ${isToday ? "bg-blue-500 text-white" : "hover:bg-gray-100"}
                      ${hasEvents && !isToday ? "bg-blue-100" : ""}`}
                    >
                      {day.getDate()}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <div
                      className={`w-3 h-3 rounded-full mt-1 ${event.color}`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-gray-900 truncate">
                        {event.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.start.toLocaleDateString()}</span>
                        <span>
                          {event.start.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {upcomingEvents.length === 0 && (
                  <div className="text-center py-6">
                    <CalendarIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">No upcoming events</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Event Types Legend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Event Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Meetings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Personal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Deadlines</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Event Details Modal would go here */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <Card className="w-96 mx-4" onClick={(e) => e.stopPropagation()}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{selectedEvent.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="h-4 w-4 mr-2" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{selectedEvent.description}</p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>
                    {selectedEvent.start.toLocaleDateString()} at{" "}
                    {selectedEvent.start.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                {selectedEvent.location && (
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{selectedEvent.location}</span>
                  </div>
                )}

                {selectedEvent.attendees.length > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span>{selectedEvent.attendees.length} attendees</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2 pt-4">
                <Button size="sm" className="flex-1">
                  Join Meeting
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
