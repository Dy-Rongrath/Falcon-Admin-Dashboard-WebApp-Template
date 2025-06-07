import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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
  Image as ImageIcon,
  File,
  Calendar,
  MapPin,
  Clock,
  Check,
  CheckCheck,
  Edit,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "away" | "offline";
  lastSeen: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  type: "direct" | "group";
  isTyping?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  type: "text" | "image" | "file" | "system";
  isOwn: boolean;
  status: "sent" | "delivered" | "read";
  attachments?: {
    type: "image" | "file";
    name: string;
    url: string;
    size?: string;
  }[];
}

const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/api/placeholder/40/40",
    status: "online",
    lastSeen: "Now",
    lastMessage: "That sounds great! When can we schedule the meeting?",
    lastMessageTime: "2m",
    unreadCount: 2,
    type: "direct",
  },
  {
    id: "2",
    name: "Design Team",
    avatar: "/api/placeholder/40/40",
    status: "online",
    lastSeen: "5 minutes ago",
    lastMessage: "Michael: I've uploaded the new designs",
    lastMessageTime: "5m",
    unreadCount: 0,
    type: "group",
  },
  {
    id: "3",
    name: "Alex Chen",
    avatar: "/api/placeholder/40/40",
    status: "away",
    lastSeen: "2 hours ago",
    lastMessage: "Thanks for the update!",
    lastMessageTime: "2h",
    unreadCount: 0,
    type: "direct",
  },
  {
    id: "4",
    name: "Development Team",
    avatar: "/api/placeholder/40/40",
    status: "online",
    lastSeen: "Now",
    lastMessage: "Emma: The new feature is ready for testing",
    lastMessageTime: "1h",
    unreadCount: 1,
    type: "group",
  },
  {
    id: "5",
    name: "Lisa Rodriguez",
    avatar: "/api/placeholder/40/40",
    status: "offline",
    lastSeen: "Yesterday",
    lastMessage: "Let me check and get back to you",
    lastMessageTime: "1d",
    unreadCount: 0,
    type: "direct",
  },
];

const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "1",
    senderName: "Sarah Johnson",
    content: "Hi! How are you doing today?",
    timestamp: "10:30 AM",
    type: "text",
    isOwn: false,
    status: "read",
  },
  {
    id: "2",
    senderId: "me",
    senderName: "You",
    content:
      "I'm doing great, thanks for asking! Just working on the new project.",
    timestamp: "10:32 AM",
    type: "text",
    isOwn: true,
    status: "read",
  },
  {
    id: "3",
    senderId: "1",
    senderName: "Sarah Johnson",
    content:
      "That's awesome! I'd love to hear more about it. Are you free for a quick call?",
    timestamp: "10:35 AM",
    type: "text",
    isOwn: false,
    status: "read",
  },
  {
    id: "4",
    senderId: "me",
    senderName: "You",
    content: "Sure! I can do a call around 2 PM if that works for you.",
    timestamp: "10:36 AM",
    type: "text",
    isOwn: true,
    status: "read",
  },
  {
    id: "5",
    senderId: "1",
    senderName: "Sarah Johnson",
    content: "Perfect! I'll send you a calendar invite.",
    timestamp: "10:37 AM",
    type: "text",
    isOwn: false,
    status: "read",
    attachments: [
      {
        type: "file",
        name: "Meeting_Invite.ics",
        url: "#",
        size: "2.1 KB",
      },
    ],
  },
  {
    id: "6",
    senderId: "me",
    senderName: "You",
    content: "Sounds good! Looking forward to it.",
    timestamp: "10:38 AM",
    type: "text",
    isOwn: true,
    status: "delivered",
  },
  {
    id: "7",
    senderId: "1",
    senderName: "Sarah Johnson",
    content: "That sounds great! When can we schedule the meeting?",
    timestamp: "11:45 AM",
    type: "text",
    isOwn: false,
    status: "sent",
  },
];

export default function Chat() {
  const [selectedContact, setSelectedContact] = useState<Contact>(
    mockContacts[0],
  );
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactInfo, setShowContactInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const filteredContacts = mockContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: String(messages.length + 1),
        senderId: "me",
        senderName: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "text",
        isOwn: true,
        status: "sent",
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-falcon-green";
      case "away":
        return "bg-falcon-orange";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getMessageStatus = (status: string) => {
    switch (status) {
      case "sent":
        return <Check className="h-3 w-3 text-falcon-text-muted" />;
      case "delivered":
        return <CheckCheck className="h-3 w-3 text-falcon-text-muted" />;
      case "read":
        return <CheckCheck className="h-3 w-3 text-falcon-blue" />;
      default:
        return null;
    }
  };

  return (
    <div className="h-[calc(100vh-120px)]">
      <Card className="h-full bg-white border-falcon-border-light">
        <div className="flex h-full">
          {/* Contacts Sidebar */}
          <div className="w-80 border-r border-falcon-border-light flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-falcon-border-light">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-falcon-text-primary font-poppins">
                  Chats
                </h2>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-muted" />
                <Input
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-falcon-bg-light border-0 font-poppins"
                />
              </div>
            </div>

            {/* Contacts List */}
            <ScrollArea className="flex-1">
              <div className="p-2">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-falcon-bg-light",
                      selectedContact.id === contact.id
                        ? "bg-falcon-blue bg-opacity-10"
                        : "",
                    )}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback>
                          {contact.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={cn(
                          "absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white",
                          getStatusColor(contact.status),
                        )}
                      />
                      {contact.type === "group" && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-falcon-blue rounded-full flex items-center justify-center">
                          <Users className="h-2 w-2 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-falcon-text-primary font-poppins truncate">
                          {contact.name}
                        </p>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-falcon-text-muted font-poppins">
                            {contact.lastMessageTime}
                          </span>
                          {contact.unreadCount > 0 && (
                            <Badge className="bg-falcon-blue text-white text-xs px-1.5 py-0.5 min-w-0 h-5">
                              {contact.unreadCount}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-falcon-text-secondary font-poppins truncate mt-1">
                        {contact.lastMessage}
                      </p>
                      {contact.isTyping && (
                        <p className="text-xs text-falcon-blue font-poppins italic">
                          typing...
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-falcon-border-light">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={selectedContact.avatar}
                        alt={selectedContact.name}
                      />
                      <AvatarFallback>
                        {selectedContact.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={cn(
                        "absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white",
                        getStatusColor(selectedContact.status),
                      )}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-falcon-text-primary font-poppins">
                      {selectedContact.name}
                    </h3>
                    <p className="text-sm text-falcon-text-secondary font-poppins">
                      {selectedContact.status === "online"
                        ? "Active now"
                        : `Last seen ${selectedContact.lastSeen}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" title="Voice call">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" title="Video call">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    title="Contact info"
                    onClick={() => setShowContactInfo(!showContactInfo)}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex flex-1 min-h-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-3 max-w-[70%]",
                        message.isOwn ? "ml-auto flex-row-reverse" : "",
                      )}
                    >
                      {!message.isOwn && (
                        <Avatar className="w-8 h-8">
                          <AvatarImage
                            src={selectedContact.avatar}
                            alt={message.senderName}
                          />
                          <AvatarFallback className="text-xs">
                            {message.senderName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      )}

                      <div
                        className={cn(
                          "flex-1",
                          message.isOwn ? "text-right" : "",
                        )}
                      >
                        <div
                          className={cn(
                            "inline-block px-4 py-2 rounded-2xl max-w-full break-words",
                            message.isOwn
                              ? "bg-falcon-blue text-white"
                              : "bg-falcon-bg-light text-falcon-text-primary",
                          )}
                        >
                          <p className="text-sm font-poppins">
                            {message.content}
                          </p>

                          {message.attachments && (
                            <div className="mt-2 space-y-2">
                              {message.attachments.map((attachment, index) => (
                                <div
                                  key={index}
                                  className={cn(
                                    "flex items-center gap-2 p-2 rounded-lg",
                                    message.isOwn ? "bg-blue-600" : "bg-white",
                                  )}
                                >
                                  <File className="h-4 w-4" />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-medium truncate">
                                      {attachment.name}
                                    </p>
                                    {attachment.size && (
                                      <p className="text-xs opacity-75">
                                        {attachment.size}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div
                          className={cn(
                            "flex items-center gap-1 mt-1 text-xs text-falcon-text-muted",
                            message.isOwn ? "justify-end" : "",
                          )}
                        >
                          <span className="font-poppins">
                            {message.timestamp}
                          </span>
                          {message.isOwn && getMessageStatus(message.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Contact Info Sidebar */}
              {showContactInfo && (
                <div className="w-80 border-l border-falcon-border-light p-4">
                  <div className="text-center mb-6">
                    <Avatar className="w-20 h-20 mx-auto mb-3">
                      <AvatarImage
                        src={selectedContact.avatar}
                        alt={selectedContact.name}
                      />
                      <AvatarFallback className="text-lg">
                        {selectedContact.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-falcon-text-primary font-poppins">
                      {selectedContact.name}
                    </h3>
                    <p className="text-sm text-falcon-text-secondary font-poppins">
                      {selectedContact.status === "online"
                        ? "Active now"
                        : `Last seen ${selectedContact.lastSeen}`}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                      <Button variant="outline" className="flex-1 font-poppins">
                        <Video className="h-4 w-4 mr-2" />
                        Video
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Button
                        variant="ghost"
                        className="w-full justify-start font-poppins"
                      >
                        <VolumeX className="h-4 w-4 mr-3" />
                        Mute notifications
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start font-poppins"
                      >
                        <Star className="h-4 w-4 mr-3" />
                        Add to favorites
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start font-poppins"
                      >
                        <Archive className="h-4 w-4 mr-3" />
                        Archive chat
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-red-600 font-poppins"
                      >
                        <Trash2 className="h-4 w-4 mr-3" />
                        Delete chat
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-falcon-border-light">
              <div className="flex items-end gap-3">
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" title="Attach file">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" title="Add emoji">
                    <Smile className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex-1">
                  <Textarea
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    className="min-h-0 resize-none border-falcon-border-light focus:ring-falcon-blue font-poppins"
                    rows={1}
                  />
                </div>

                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" title="Voice message">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins"
                    title="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
