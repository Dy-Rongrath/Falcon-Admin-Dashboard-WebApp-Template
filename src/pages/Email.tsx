import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Inbox,
  Send,
  Edit,
  Star,
  Archive,
  Trash2,
  Search,
  Paperclip,
  Reply,
  Forward,
  MoreHorizontal,
  Plus,
  Calendar,
  Clock,
  Flag,
  Download,
  Printer,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Email {
  id: string;
  from: {
    name: string;
    email: string;
    avatar: string;
  };
  to: string[];
  subject: string;
  body: string;
  timestamp: string;
  isRead: boolean;
  isStarred: boolean;
  isFlagged: boolean;
  hasAttachments: boolean;
  category: "primary" | "social" | "promotions" | "updates";
  isImportant: boolean;
}

const mockEmails: Email[] = [
  {
    id: "1",
    from: {
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    to: ["me@company.com"],
    subject: "Q4 Sales Report - Action Required",
    body: "Hi team,\n\nI hope this email finds you well. I wanted to share the Q4 sales report with you and discuss some important updates regarding our performance this quarter...",
    timestamp: "2024-02-15 09:30",
    isRead: false,
    isStarred: true,
    isFlagged: true,
    hasAttachments: true,
    category: "primary",
    isImportant: true,
  },
  {
    id: "2",
    from: {
      name: "Michael Chen",
      email: "michael.chen@techstart.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    to: ["me@company.com"],
    subject: "Meeting Follow-up: Project Alpha",
    body: "Thank you for the productive meeting this morning. As discussed, I'm sending over the project timeline and next steps...",
    timestamp: "2024-02-15 08:45",
    isRead: true,
    isStarred: false,
    isFlagged: false,
    hasAttachments: false,
    category: "primary",
    isImportant: false,
  },
  {
    id: "3",
    from: {
      name: "LinkedIn",
      email: "notifications@linkedin.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    to: ["me@company.com"],
    subject: "Your weekly LinkedIn summary",
    body: "Here's what you missed this week on LinkedIn...",
    timestamp: "2024-02-14 18:00",
    isRead: true,
    isStarred: false,
    isFlagged: false,
    hasAttachments: false,
    category: "social",
    isImportant: false,
  },
  {
    id: "4",
    from: {
      name: "Emily Rodriguez",
      email: "emily.r@design.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    to: ["me@company.com"],
    subject: "New Design System Components",
    body: "I've finished the new component library for our design system. Please review the attached files and let me know your thoughts...",
    timestamp: "2024-02-14 16:20",
    isRead: false,
    isStarred: true,
    isFlagged: false,
    hasAttachments: true,
    category: "primary",
    isImportant: true,
  },
  {
    id: "5",
    from: {
      name: "Amazon",
      email: "shipment@amazon.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    to: ["me@company.com"],
    subject: "Your order has been shipped!",
    body: "Good news! Your recent order has been shipped and is on its way...",
    timestamp: "2024-02-14 14:15",
    isRead: true,
    isStarred: false,
    isFlagged: false,
    hasAttachments: false,
    category: "promotions",
    isImportant: false,
  },
];

const emailCategories = [
  { id: "inbox", label: "Inbox", icon: Inbox, count: 12 },
  { id: "starred", label: "Starred", icon: Star, count: 3 },
  { id: "sent", label: "Sent Mail", icon: Send, count: 0 },
  { id: "drafts", label: "Drafts", icon: Edit, count: 2 },
  { id: "archive", label: "Archive", icon: Archive, count: 45 },
  { id: "trash", label: "Trash", icon: Trash2, count: 8 },
];

export default function Email() {
  const [selectedCategory, setSelectedCategory] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(
    mockEmails[0],
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [composeData, setComposeData] = useState({
    to: "",
    subject: "",
    body: "",
  });

  const filteredEmails = mockEmails.filter((email) => {
    const matchesSearch =
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.from.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.body.toLowerCase().includes(searchTerm.toLowerCase());

    switch (selectedCategory) {
      case "starred":
        return matchesSearch && email.isStarred;
      case "inbox":
      default:
        return matchesSearch;
    }
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "primary":
        return "bg-falcon-blue bg-opacity-10 text-falcon-blue";
      case "social":
        return "bg-falcon-green bg-opacity-10 text-falcon-green";
      case "promotions":
        return "bg-falcon-orange bg-opacity-10 text-falcon-orange";
      case "updates":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-primary font-poppins flex items-center gap-2">
            <Mail className="h-6 w-6 text-falcon-blue" />
            Email
          </h1>
          <p className="text-falcon-text-secondary font-poppins">
            Manage your emails and communications
          </p>
        </div>
        <Button
          onClick={() => setIsComposing(true)}
          className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins"
        >
          <Plus className="h-4 w-4 mr-2" />
          Compose
        </Button>
      </div>

      {/* Email Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        {/* Sidebar */}
        <Card className="bg-white border-falcon-border-light lg:col-span-1">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-muted" />
                <Input
                  placeholder="Search emails..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 font-poppins"
                />
              </div>
            </div>
            <Separator />
            <ScrollArea className="h-96">
              <div className="p-2">
                {emailCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 h-10 px-3 text-sm font-medium transition-colors font-poppins mb-1",
                      selectedCategory === category.id
                        ? "bg-falcon-blue bg-opacity-10 text-falcon-blue"
                        : "text-falcon-text-secondary hover:bg-falcon-bg-light",
                    )}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="flex-1 text-left">{category.label}</span>
                    {category.count > 0 && (
                      <Badge
                        variant="secondary"
                        className="text-xs px-1.5 py-0.5 bg-falcon-text-muted bg-opacity-20"
                      >
                        {category.count}
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Email List */}
        <Card className="bg-white border-falcon-border-light lg:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="font-poppins text-falcon-text-primary flex items-center justify-between">
              <span>Emails ({filteredEmails.length})</span>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-96">
              <div className="space-y-1 p-2">
                {filteredEmails.map((email) => (
                  <div
                    key={email.id}
                    className={cn(
                      "p-3 rounded-lg cursor-pointer transition-colors hover:bg-falcon-bg-light",
                      selectedEmail?.id === email.id
                        ? "bg-falcon-blue bg-opacity-10 border border-falcon-blue border-opacity-20"
                        : "",
                      !email.isRead ? "border-l-4 border-falcon-blue" : "",
                    )}
                    onClick={() => setSelectedEmail(email)}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={email.from.avatar}
                          alt={email.from.name}
                        />
                        <AvatarFallback>
                          {email.from.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p
                            className={cn(
                              "text-sm font-poppins truncate",
                              !email.isRead
                                ? "font-semibold text-falcon-text-primary"
                                : "text-falcon-text-secondary",
                            )}
                          >
                            {email.from.name}
                          </p>
                          <div className="flex items-center gap-1">
                            {email.isStarred && (
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            )}
                            {email.isFlagged && (
                              <Flag className="h-3 w-3 text-red-500 fill-current" />
                            )}
                            {email.hasAttachments && (
                              <Paperclip className="h-3 w-3 text-falcon-text-muted" />
                            )}
                          </div>
                        </div>
                        <p
                          className={cn(
                            "text-sm font-poppins truncate mb-1",
                            !email.isRead
                              ? "font-medium text-falcon-text-primary"
                              : "text-falcon-text-secondary",
                          )}
                        >
                          {email.subject}
                        </p>
                        <p className="text-xs text-falcon-text-muted font-poppins truncate mb-2">
                          {email.body.substring(0, 60)}...
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge className={getCategoryColor(email.category)}>
                            {email.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-falcon-text-muted font-poppins">
                            <Clock className="h-3 w-3" />
                            {email.timestamp.split(" ")[1]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Email Content */}
        <Card className="bg-white border-falcon-border-light lg:col-span-2">
          {selectedEmail ? (
            <div className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={selectedEmail.from.avatar}
                        alt={selectedEmail.from.name}
                      />
                      <AvatarFallback>
                        {selectedEmail.from.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-falcon-text-primary font-poppins">
                        {selectedEmail.from.name}
                      </p>
                      <p className="text-sm text-falcon-text-muted font-poppins">
                        {selectedEmail.from.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Reply className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Forward className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Star
                        className={cn(
                          "h-4 w-4",
                          selectedEmail.isStarred &&
                            "text-yellow-400 fill-current",
                        )}
                      />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-falcon-text-primary font-poppins">
                    {selectedEmail.subject}
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-falcon-text-muted font-poppins">
                      <span>To: {selectedEmail.to.join(", ")}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {selectedEmail.timestamp}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedEmail.hasAttachments && (
                        <Badge variant="outline" className="text-xs">
                          <Paperclip className="h-3 w-3 mr-1" />
                          Attachments
                        </Badge>
                      )}
                      <Badge
                        className={getCategoryColor(selectedEmail.category)}
                      >
                        {selectedEmail.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="flex-1 p-6">
                <ScrollArea className="h-full">
                  <div className="prose max-w-none text-falcon-text-primary font-poppins whitespace-pre-wrap">
                    {selectedEmail.body}
                  </div>
                </ScrollArea>
              </CardContent>
              <Separator />
              <div className="p-4">
                <div className="flex gap-2">
                  <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
                    <Reply className="h-4 w-4 mr-2" />
                    Reply
                  </Button>
                  <Button variant="outline" className="font-poppins">
                    <Forward className="h-4 w-4 mr-2" />
                    Forward
                  </Button>
                  <Button variant="outline" className="font-poppins">
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <Mail className="h-12 w-12 text-falcon-text-muted mx-auto mb-4" />
                <p className="text-falcon-text-muted font-poppins">
                  Select an email to read
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>

      {/* Compose Modal would go here */}
      {isComposing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl max-h-[80vh] bg-white">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Compose Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  To
                </label>
                <Input
                  value={composeData.to}
                  onChange={(e) =>
                    setComposeData((prev) => ({ ...prev, to: e.target.value }))
                  }
                  placeholder="recipient@example.com"
                  className="font-poppins"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Subject
                </label>
                <Input
                  value={composeData.subject}
                  onChange={(e) =>
                    setComposeData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  placeholder="Email subject"
                  className="font-poppins"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Message
                </label>
                <Textarea
                  value={composeData.body}
                  onChange={(e) =>
                    setComposeData((prev) => ({
                      ...prev,
                      body: e.target.value,
                    }))
                  }
                  placeholder="Type your message here..."
                  rows={10}
                  className="font-poppins"
                />
              </div>
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setIsComposing(false)}
                  className="font-poppins"
                >
                  Cancel
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="font-poppins">
                    <Paperclip className="h-4 w-4 mr-2" />
                    Attach
                  </Button>
                  <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
