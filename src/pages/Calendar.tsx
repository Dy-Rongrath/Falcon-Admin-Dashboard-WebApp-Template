import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // June 2025

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

  const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Sample events data matching the official template
  const events = [
    {
      id: 1,
      title: "Boot Camp",
      date: 1,
      color: "bg-green-500",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Conference",
      date: 7,
      color: "bg-green-500",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Meeting",
      date: 7,
      time: "10 AM",
      color: "bg-gray-500",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Crain's New York Business",
      date: 11,
      color: "bg-blue-500",
      textColor: "text-white",
    },
    {
      id: 5,
      title: "Contest",
      date: 14,
      time: "10 AM",
      color: "bg-gray-500",
      textColor: "text-white",
    },
    {
      id: 6,
      title: "ICT Expo 2025 - Product Release",
      date: 16,
      color: "bg-orange-500",
      textColor: "text-white",
    },
    {
      id: 7,
      title: "Event With Url",
      date: 23,
      color: "bg-green-500",
      textColor: "text-white",
    },
    {
      id: 8,
      title: "Competition",
      date: 26,
      color: "bg-red-500",
      textColor: "text-white",
    },
  ];

  // Next month events (for July preview)
  const nextMonthEvents = [
    {
      id: 9,
      title: "Birthday Party",
      date: 5,
      color: "bg-blue-500",
      textColor: "text-white",
    },
  ];

  // Generate calendar days
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

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const getEventsForDay = (date: number, isNextMonth = false) => {
    if (isNextMonth) {
      return nextMonthEvents.filter((event) => event.date === date);
    }
    return events.filter((event) => event.date === date);
  };

  const isToday = (day: Date) => {
    const today = new Date();
    return day.toDateString() === today.toDateString();
  };

  const isCurrentMonth = (day: Date) => {
    return day.getMonth() === currentDate.getMonth();
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="bg-white rounded-lg shadow-sm font-poppins">
      {/* Calendar Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateMonth("prev")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => navigateMonth("next")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
        </div>

        <div className="flex items-center space-x-3">
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Month View</option>
            <option>Week View</option>
            <option>Day View</option>
          </select>
          <button
            onClick={goToToday}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
          >
            Today
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-px mb-px">
          {dayHeaders.map((day) => (
            <div key={day} className="py-3 text-center">
              <span className="text-sm font-medium text-gray-500">{day}</span>
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
          {calendarDays.map((day, index) => {
            const dayNumber = day.getDate();
            const isCurrentMonthDay = isCurrentMonth(day);
            const isTodayDay = isToday(day);
            const isNextMonth =
              day.getMonth() > currentDate.getMonth() ||
              (day.getMonth() === 0 && currentDate.getMonth() === 11);
            const isPrevMonth =
              day.getMonth() < currentDate.getMonth() ||
              (day.getMonth() === 11 && currentDate.getMonth() === 0);

            // Get events for this day
            let dayEvents = [];
            if (isCurrentMonthDay) {
              dayEvents = getEventsForDay(dayNumber, false);
            } else if (isNextMonth) {
              dayEvents = getEventsForDay(dayNumber, true);
            }

            return (
              <div
                key={index}
                className={`bg-white min-h-[120px] p-2 ${
                  !isCurrentMonthDay ? "bg-gray-50" : ""
                }`}
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm font-medium ${
                        isTodayDay
                          ? "bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center"
                          : !isCurrentMonthDay
                            ? "text-gray-400"
                            : "text-gray-900"
                      }`}
                    >
                      {dayNumber}
                    </span>
                  </div>

                  {/* Events */}
                  <div className="flex-1 space-y-1">
                    {dayEvents.slice(0, 3).map((event, eventIndex) => (
                      <div
                        key={event.id}
                        className={`${event.color} ${event.textColor} px-2 py-1 rounded text-xs font-medium cursor-pointer hover:opacity-90 transition-opacity ${
                          !isCurrentMonthDay ? "opacity-60" : ""
                        }`}
                        title={event.title}
                      >
                        <div className="truncate">
                          {event.time && (
                            <span className="mr-1">{event.time}</span>
                          )}
                          {event.title}
                        </div>
                      </div>
                    ))}

                    {/* More events indicator for day 7 (today) */}
                    {dayNumber === 7 && isTodayDay && (
                      <div className="text-xs text-gray-500 text-center py-1">
                        +4 more
                      </div>
                    )}

                    {/* General more events indicator */}
                    {dayEvents.length > 3 && dayNumber !== 7 && (
                      <div className="text-xs text-gray-500 text-center py-1">
                        +{dayEvents.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
