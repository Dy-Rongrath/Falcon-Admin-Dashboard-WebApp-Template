import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  MoreHorizontal,
  Star,
  Users,
  Calendar,
  MessageSquare,
  Paperclip,
  CheckSquare,
  Filter,
  Share,
  Bell,
  Archive,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskCard {
  id: string;
  title: string;
  coverImage?: string;
  badges: {
    text: string;
    color: "green" | "blue" | "cyan" | "red" | "gray" | "purple";
  }[];
  checklist?: {
    completed: number;
    total: number;
  };
  attachments?: number;
  comments?: number;
  assignees: {
    id: string;
    name: string;
    avatar: string;
  }[];
  dueDate?: string;
}

interface KanbanColumn {
  id: string;
  title: string;
  cards: TaskCard[];
}

const mockTeamMembers = [
  {
    id: "1",
    name: "Ashley Garrett",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Olivia Smith",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Michael Johnson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    avatar:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "David Brown",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
];

const initialColumns: KanbanColumn[] = [
  {
    id: "documentation",
    title: "Documentation",
    cards: [
      {
        id: "doc1",
        title: "👌",
        badges: [],
        assignees: [],
      },
      {
        id: "doc2",
        title: "👇",
        badges: [],
        assignees: [],
      },
      {
        id: "doc3",
        title: "➕",
        badges: [],
        assignees: [],
      },
      {
        id: "doc4",
        title: "Hovering on the cards",
        badges: [],
        assignees: [],
      },
      {
        id: "doc5",
        title: "At the top of the board, click ⭐",
        badges: [],
        assignees: [],
      },
      {
        id: "doc6",
        title: "🙋 Add members to the board by clicking",
        badges: [],
        assignees: [],
      },
      {
        id: "doc7",
        title: "📃 Add more lists to this board by clicking",
        badges: [],
        assignees: [],
      },
      {
        id: "doc8",
        title: "Click the meatball (...)",
        badges: [],
        assignees: [],
      },
    ],
  },
  {
    id: "doing",
    title: "Doing",
    cards: [
      {
        id: "doing1",
        title: "Add a cookie notice to make the website GDPR compliant",
        badges: [],
        checklist: { completed: 3, total: 6 },
        assignees: [mockTeamMembers[0]],
      },
      {
        id: "doing2",
        title: "Add a pdf file that describes how to use the website",
        badges: [],
        coverImage:
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=120&fit=crop",
        attachments: 1,
        assignees: [mockTeamMembers[1], mockTeamMembers[2]],
      },
      {
        id: "doing3",
        title: "Make a Registration form using the design from attachment",
        badges: [
          { text: "New", color: "green" },
          { text: "Goal", color: "blue" },
        ],
        assignees: [],
      },
      {
        id: "doing4",
        title: "Update profile page layout according to the new wireframes",
        badges: [{ text: "Enhancement", color: "cyan" }],
        assignees: [],
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    cards: [
      {
        id: "review1",
        title: "Update all the npm packages to the latest versions",
        badges: [{ text: "bug", color: "red" }],
        checklist: { completed: 5, total: 5 },
        assignees: [mockTeamMembers[3], mockTeamMembers[4]],
      },
      {
        id: "review2",
        title:
          "Add a getting started page that explaining the purpose of the template",
        badges: [{ text: "Documentation", color: "gray" }],
        assignees: [],
      },
      {
        id: "review3",
        title: "Review and test all the task assigned to this milestone",
        badges: [],
        assignees: [],
      },
      {
        id: "review4",
        title: "Get all the data by API call instead of JSON files",
        badges: [{ text: "New", color: "green" }],
        assignees: [],
      },
    ],
  },
  {
    id: "release",
    title: "Release",
    cards: [
      {
        id: "release1",
        title: "Add a new illustration to the landing page hero section",
        badges: [],
        coverImage:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=120&fit=crop",
        attachments: 2,
        assignees: [mockTeamMembers[0], mockTeamMembers[2], mockTeamMembers[4]],
      },
      {
        id: "release2",
        title: "Design a new E-commerce template using the new color palette",
        badges: [{ text: "Goal", color: "blue" }],
        assignees: [],
      },
      {
        id: "release3",
        title: "Make a weather app design for mobile and tablet",
        badges: [],
        assignees: [],
      },
      {
        id: "release4",
        title: "List all the Frequently Asked Questions for easy onboarding",
        badges: [{ text: "Documentation", color: "gray" }],
        assignees: [],
      },
      {
        id: "release5",
        title:
          "Remove all the warning from dev dependencies and make it production ready",
        badges: [],
        assignees: [],
      },
    ],
  },
];

const badgeColors = {
  green: "bg-green-100 text-green-800 border-green-200",
  blue: "bg-blue-100 text-blue-800 border-blue-200",
  cyan: "bg-cyan-100 text-cyan-800 border-cyan-200",
  red: "bg-red-100 text-red-800 border-red-200",
  gray: "bg-gray-100 text-gray-800 border-gray-200",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
};

export default function Kanban() {
  const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
  const [isStarred, setIsStarred] = useState(false);

  const handleDragStart = (
    e: React.DragEvent,
    card: TaskCard,
    sourceColumnId: string,
  ) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ card, sourceColumnId }),
    );
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const { card, sourceColumnId } = JSON.parse(data);

    if (sourceColumnId === targetColumnId) return;

    setColumns((prev) =>
      prev.map((column) => {
        if (column.id === sourceColumnId) {
          return {
            ...column,
            cards: column.cards.filter((c) => c.id !== card.id),
          };
        }
        if (column.id === targetColumnId) {
          return {
            ...column,
            cards: [...column.cards, card],
          };
        }
        return column;
      }),
    );
  };

  return (
    <div className="h-full bg-falcon-bg-light">
      {/* Project Header */}
      <div className="bg-white border-b border-falcon-border-light p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins">
                Falcon
              </h1>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsStarred(!isStarred)}
                className={cn(
                  "h-8 w-8 p-0",
                  isStarred
                    ? "text-yellow-500"
                    : "text-falcon-text-light hover:text-yellow-500",
                )}
              >
                <Star className={cn("h-5 w-5", isStarred && "fill-current")} />
              </Button>
            </div>

            {/* Team Members */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {mockTeamMembers.slice(0, 4).map((member) => (
                  <Avatar
                    key={member.id}
                    className="w-8 h-8 border-2 border-white"
                  >
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-xs">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <div className="w-8 h-8 bg-falcon-bg-light border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-xs text-falcon-text-light font-poppins">
                    +1
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-falcon-text-light hover:text-falcon-blue"
              >
                <Users className="h-4 w-4 mr-1" />
                <span className="text-sm font-poppins">Add members</span>
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="font-poppins">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="font-poppins">
              <Calendar className="h-4 w-4 mr-2" />
              Calendar
            </Button>
            <Button variant="outline" size="sm" className="font-poppins">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Board settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="h-4 w-4 mr-2" />
                  Watch
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Archive className="h-4 w-4 mr-2" />
                  Archive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="p-6 overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {columns.map((column) => (
            <div key={column.id} className="w-80 flex-shrink-0">
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-falcon-text-dark font-poppins text-sm">
                  {column.title}
                </h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Plus className="h-4 w-4 mr-2" />
                      Add a card
                    </DropdownMenuItem>
                    <DropdownMenuItem>Copy list</DropdownMenuItem>
                    <DropdownMenuItem>Move list</DropdownMenuItem>
                    <DropdownMenuItem>Archive this list</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Cards Container */}
              <div
                className="space-y-3 min-h-96"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, column.id)}
              >
                {column.cards.map((card) => (
                  <Card
                    key={card.id}
                    className="bg-white border-falcon-border-light hover:shadow-md transition-all cursor-pointer group"
                    draggable
                    onDragStart={(e) => handleDragStart(e, card, column.id)}
                  >
                    <CardContent className="p-0">
                      {/* Cover Image */}
                      {card.coverImage && (
                        <div className="w-full h-24 bg-gray-100 rounded-t-lg overflow-hidden">
                          <img
                            src={card.coverImage}
                            alt="Card cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="p-3">
                        {/* Badges */}
                        {card.badges.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {card.badges.map((badge, index) => (
                              <Badge
                                key={index}
                                className={cn(
                                  "text-xs px-2 py-0.5 border font-medium",
                                  badgeColors[badge.color],
                                )}
                              >
                                {badge.text}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Card Title */}
                        <h4 className="text-sm font-medium text-falcon-text-dark font-poppins leading-relaxed mb-3">
                          {card.title}
                        </h4>

                        {/* Card Meta */}
                        {(card.checklist ||
                          card.attachments ||
                          card.comments ||
                          card.assignees.length > 0) && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {/* Checklist */}
                              {card.checklist && (
                                <div className="flex items-center space-x-1 text-falcon-text-light">
                                  <CheckSquare className="h-3 w-3" />
                                  <span className="text-xs font-poppins">
                                    {card.checklist.completed}/
                                    {card.checklist.total}
                                  </span>
                                </div>
                              )}

                              {/* Attachments */}
                              {card.attachments && (
                                <div className="flex items-center space-x-1 text-falcon-text-light">
                                  <Paperclip className="h-3 w-3" />
                                  <span className="text-xs font-poppins">
                                    {card.attachments}
                                  </span>
                                </div>
                              )}

                              {/* Comments */}
                              {card.comments && (
                                <div className="flex items-center space-x-1 text-falcon-text-light">
                                  <MessageSquare className="h-3 w-3" />
                                  <span className="text-xs font-poppins">
                                    {card.comments}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Assignees */}
                            {card.assignees.length > 0 && (
                              <div className="flex -space-x-1">
                                {card.assignees.slice(0, 3).map((assignee) => (
                                  <Avatar
                                    key={assignee.id}
                                    className="w-6 h-6 border-2 border-white"
                                  >
                                    <AvatarImage
                                      src={assignee.avatar}
                                      alt={assignee.name}
                                    />
                                    <AvatarFallback className="text-xs">
                                      {assignee.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                ))}
                                {card.assignees.length > 3 && (
                                  <div className="w-6 h-6 bg-falcon-bg-light border-2 border-white rounded-full flex items-center justify-center">
                                    <span className="text-xs text-falcon-text-light font-poppins">
                                      +{card.assignees.length - 3}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Edit button (visible on hover) */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 bg-white shadow-sm"
                        >
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Add Card Button */}
                <Button
                  variant="ghost"
                  className="w-full h-10 border-2 border-dashed border-falcon-border-light hover:border-falcon-blue hover:bg-falcon-blue hover:bg-opacity-5 text-falcon-text-light hover:text-falcon-blue font-poppins justify-start"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add a card
                </Button>
              </div>
            </div>
          ))}

          {/* Add Column Button */}
          <div className="w-80 flex-shrink-0">
            <Button
              variant="ghost"
              className="w-full h-12 border-2 border-dashed border-falcon-border-light hover:border-falcon-blue hover:bg-falcon-blue hover:bg-opacity-5 text-falcon-text-light hover:text-falcon-blue font-poppins"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add another list
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
