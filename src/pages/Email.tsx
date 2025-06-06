import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Search,
  Plus,
  Star,
  Archive,
  Trash2,
  Reply,
  Forward,
  Paperclip,
  Send,
  Inbox,
  Send as SendIcon,
  File,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Email {
  id: string;
  from: {
    name: string;
    email: string;
    avatar: string;
  };
  subject: string;
  preview: string;
  body: string;
  timestamp: string;
  isRead: boolean;
  isStarred: boolean;
  hasAttachment: boolean;
  category: "inbox" | "sent" | "drafts" | "spam";
}

const emails: Email[] = [
  {
    id: "1",
    from: {
      name: "John Doe",
      email: "john@company.com",
      avatar: "/placeholder.svg",
    },
    subject: "Project Update - Q4 Review",
    preview:
      "Hi team, I wanted to share the latest updates on our Q4 project milestones...",
    body: "Hi team,\n\nI wanted to share the latest updates on our Q4 project milestones. We've made significant progress across all departments and I'm pleased to report that we're on track to meet our objectives.\n\nKey achievements:\n- Completed Phase 1 development\n- Conducted user testing sessions\n- Finalized design specifications\n\nNext steps:\n- Begin Phase 2 implementation\n- Schedule stakeholder presentations\n- Prepare deployment plan\n\nPlease let me know if you have any questions.\n\nBest regards,\nJohn",
    timestamp: "2024-01-28T10:30:00Z",
    isRead: false,
    isStarred: true,
    hasAttachment: true,
    category: "inbox",
  },
  {
    id: "2",
    from: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg",
    },
    subject: "Meeting Reminder - Tomorrow 2PM",
    preview:
      "Just a quick reminder about our scheduled meeting tomorrow at 2PM...",
    body: "Hi everyone,\n\nJust a quick reminder about our scheduled meeting tomorrow at 2PM in the main conference room.\n\nAgenda:\n- Review current project status\n- Discuss upcoming deadlines\n- Resource allocation\n\nPlease bring your latest reports.\n\nThanks,\nJane",
    timestamp: "2024-01-27T14:20:00Z",
    isRead: true,
    isStarred: false,
    hasAttachment: false,
    category: "inbox",
  },
  {
    id: "3",
    from: {
      name: "Mike Johnson",
      email: "mike@company.com",
      avatar: "/placeholder.svg",
    },
    subject: "Budget Approval Request",
    preview:
      "I'm writing to request approval for the additional budget allocation...",
    body: "Dear Finance Team,\n\nI'm writing to request approval for the additional budget allocation for the upcoming marketing campaign.\n\nDetails:\n- Total amount: $15,000\n- Duration: 3 months\n- Expected ROI: 250%\n\nPlease find the detailed proposal attached.\n\nBest regards,\nMike",
    timestamp: "2024-01-26T09:15:00Z",
    isRead: true,
    isStarred: false,
    hasAttachment: true,
    category: "inbox",
  },
];

export default function Email() {
  const [selectedCategory, setSelectedCategory] = useState<
    "inbox" | "sent" | "drafts" | "spam"
  >("inbox");
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(emails[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "inbox" as const, label: "Inbox", icon: Inbox, count: 6 },
    { id: "sent" as const, label: "Sent", icon: SendIcon, count: 12 },
    { id: "drafts" as const, label: "Drafts", icon: File, count: 3 },
    { id: "spam" as const, label: "Spam", icon: AlertCircle, count: 2 },
  ];

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Mail className="h-6 w-6" />
            Email
          </h1>
          <p className="text-gray-600">Manage your email communications</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Compose
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-200px)]">
        {/* Sidebar */}
        <div className="col-span-3">
          <Card className="h-full">
            <CardHeader className="pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search emails..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors",
                      selectedCategory === category.id &&
                        "bg-blue-50 text-blue-600 border-r-2 border-blue-600",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="h-4 w-4" />
                      <span className="font-medium">{category.label}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Email List */}
        <div className="col-span-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {emails.map((email) => (
                  <button
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className={cn(
                      "w-full p-4 text-left hover:bg-gray-50 transition-colors",
                      selectedEmail?.id === email.id &&
                        "bg-blue-50 border-r-2 border-blue-600",
                      !email.isRead && "font-medium bg-gray-50",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8 mt-1">
                        <AvatarImage
                          src={email.from.avatar}
                          alt={email.from.name}
                        />
                        <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                          {email.from.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {email.from.name}
                          </p>
                          <div className="flex items-center gap-1">
                            {email.isStarred && (
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            )}
                            {email.hasAttachment && (
                              <Paperclip className="h-3 w-3 text-gray-400" />
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-900 font-medium mb-1 truncate">
                          {email.subject}
                        </p>
                        <p className="text-xs text-gray-500 truncate mb-2">
                          {email.preview}
                        </p>
                        <p className="text-xs text-gray-400">
                          {formatTimestamp(email.timestamp)}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Email Content */}
        <div className="col-span-5">
          {selectedEmail ? (
            <Card className="h-full flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={selectedEmail.from.avatar}
                        alt={selectedEmail.from.name}
                      />
                      <AvatarFallback className="bg-gray-100 text-gray-600">
                        {selectedEmail.from.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">
                        {selectedEmail.from.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {selectedEmail.from.email}
                      </p>
                      <p className="text-xs text-gray-400">
                        {formatTimestamp(selectedEmail.timestamp)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {selectedEmail.subject}
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <div className="prose max-w-none">
                  <div className="whitespace-pre-wrap text-gray-900">
                    {selectedEmail.body}
                  </div>
                </div>
                {selectedEmail.hasAttachment && (
                  <div className="mt-6 pt-4 border-t">
                    <p className="text-sm font-medium text-gray-900 mb-2">
                      Attachments
                    </p>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <Paperclip className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-700">
                        project-report.pdf
                      </span>
                      <Badge variant="outline" className="text-xs">
                        2.4 MB
                      </Badge>
                    </div>
                  </div>
                )}
              </CardContent>
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2">
                    <Reply className="h-4 w-4" />
                    Reply
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Forward className="h-4 w-4" />
                    Forward
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <div className="text-center">
                <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Select an email to read</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
