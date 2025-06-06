import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Plus,
  Send,
  Phone,
  Video,
  Info,
  MoreHorizontal,
  Smile,
  Paperclip,
  Mic,
  MessageCircle,
  Users,
  Settings,
  Archive,
  Star,
  VolumeX,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "away" | "offline";
  lastSeen: string;
  lastMessage: string;
  unreadCount: number;
  type: "direct" | "group";
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  type: "text" | "image" | "file";
  reactions?: string[];
}

const contacts: Contact[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/placeholder.svg",
    status: "online",
    lastSeen: "Just now",
    lastMessage: "Hey, how's the project going?",
    unreadCount: 2,
    type: "direct",
  },
  {
    id: "2",
    name: "Team Design",
    avatar: "/placeholder.svg",
    status: "online",
    lastSeen: "5 min ago",
    lastMessage: "Sarah: The new mockups are ready",
    unreadCount: 5,
    type: "group",
  },
  {
    id: "3",
    name: "Jane Smith",
    avatar: "/placeholder.svg",
    status: "away",
    lastSeen: "2 hours ago",
    lastMessage: "Thanks for the update!",
    unreadCount: 0,
    type: "direct",
  },
  {
    id: "4",
    name: "Development Team",
    avatar: "/placeholder.svg",
    status: "online",
    lastSeen: "10 min ago",
    lastMessage: "Mike: Code review completed",
    unreadCount: 1,
    type: "group",
  },
  {
    id: "5",
    name: "Sarah Wilson",
    avatar: "/placeholder.svg",
    status: "offline",
    lastSeen: "Yesterday",
    lastMessage: "See you tomorrow!",
    unreadCount: 0,
    type: "direct",
  },
];

const messages: Message[] = [
  {
    id: "1",
    senderId: "1",
    senderName: "John Doe",
    content: "Hey team! How's everyone doing today?",
    timestamp: "10:30 AM",
    type: "text",
  },
  {
    id: "2",
    senderId: "current",
    senderName: "You",
    content: "Good morning! Just finished the design review.",
    timestamp: "10:32 AM",
    type: "text",
  },
  {
    id: "3",
    senderId: "1",
    senderName: "John Doe",
    content: "Great! Can you share the updated mockups?",
    timestamp: "10:35 AM",
    type: "text",
  },
  {
    id: "4",
    senderId: "current",
    senderName: "You",
    content:
      "Sure, uploading them now. The client feedback has been incorporated.",
    timestamp: "10:37 AM",
    type: "text",
  },
  {
    id: "5",
    senderId: "1",
    senderName: "John Doe",
    content: "Perfect! Looking forward to seeing them. 👍",
    timestamp: "10:38 AM",
    type: "text",
    reactions: ["👍", "🎉"],
  },
];

export default function Chat() {
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusColor = (status: Contact["status"]) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-500";
    }
  };

  const formatTime = (timestamp: string) => {
    return timestamp;
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MessageCircle className="h-6 w-6" />
            Chat & Messages
          </h1>
          <p className="text-gray-600">Team communication and messaging</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Chat
        </Button>
      </div>

      {/* Chat Interface */}
      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-200px)]">
        {/* Contacts Sidebar */}
        <div className="col-span-4">
          <Card className="h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="space-y-4">
                <CardTitle>Messages</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full">
                <div className="space-y-1 p-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      onClick={() => setSelectedContact(contact)}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedContact.id === contact.id
                          ? "bg-blue-50 border-blue-200 border"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={contact.avatar}
                            alt={contact.name}
                          />
                          <AvatarFallback className="bg-gray-100 text-gray-600">
                            {contact.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(contact.status)}`}
                        />
                        {contact.type === "group" && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <Users className="h-2 w-2 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-gray-900 truncate">
                            {contact.name}
                          </p>
                          <span className="text-xs text-gray-500">
                            {contact.lastSeen}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                          {contact.lastMessage}
                        </p>
                      </div>
                      {contact.unreadCount > 0 && (
                        <Badge className="bg-blue-600 text-white h-5 w-5 p-0 text-xs flex items-center justify-center">
                          {contact.unreadCount}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="col-span-8">
          <Card className="h-full flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={selectedContact.avatar}
                        alt={selectedContact.name}
                      />
                      <AvatarFallback className="bg-gray-100 text-gray-600">
                        {selectedContact.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(selectedContact.status)}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {selectedContact.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {selectedContact.status === "online"
                        ? "Active now"
                        : `Last seen ${selectedContact.lastSeen}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Info className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Star className="h-4 w-4 mr-2" />
                        Star Conversation
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <VolumeX className="h-4 w-4 mr-2" />
                        Mute Notifications
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Archive className="h-4 w-4 mr-2" />
                        Archive Chat
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="h-4 w-4 mr-2" />
                        Chat Settings
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>

            {/* Messages Area */}
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === "current" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex gap-3 max-w-[70%] ${message.senderId === "current" ? "flex-row-reverse" : ""}`}
                      >
                        {message.senderId !== "current" && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={selectedContact.avatar}
                              alt={message.senderName}
                            />
                            <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                              {message.senderName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`space-y-1 ${message.senderId === "current" ? "items-end" : "items-start"} flex flex-col`}
                        >
                          <div
                            className={`rounded-lg px-4 py-2 ${
                              message.senderId === "current"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">
                              {formatTime(message.timestamp)}
                            </span>
                            {message.reactions &&
                              message.reactions.length > 0 && (
                                <div className="flex gap-1">
                                  {message.reactions.map((reaction, index) => (
                                    <span key={index} className="text-xs">
                                      {reaction}
                                    </span>
                                  ))}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex items-end gap-3">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-1 space-y-2">
                  <Textarea
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    rows={1}
                    className="resize-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
