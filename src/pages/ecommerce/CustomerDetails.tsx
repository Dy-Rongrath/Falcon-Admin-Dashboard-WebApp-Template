import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  User,
  Edit,
  Save,
  X,
  MessageSquare,
  Gift,
  Star,
  Package,
  CreditCard,
  Eye,
  Ban,
  UserCheck,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

interface Address {
  id: string;
  type: "shipping" | "billing";
  name: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

interface Order {
  id: string;
  orderNumber: string;
  status:
    | "pending"
    | "confirmed"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled";
  total: number;
  date: string;
  items: number;
}

interface CustomerDetail {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
  status: "active" | "inactive" | "blocked";
  joinDate: string;
  lastOrderDate?: string;
  totalOrders: number;
  totalSpent: number;
  averageOrderValue: number;
  addresses: Address[];
  orders: Order[];
  tags: string[];
  notes: string[];
  preferences: {
    marketing: boolean;
    notifications: boolean;
    newsletter: boolean;
  };
  loyaltyPoints: number;
  tier: "bronze" | "silver" | "gold" | "platinum";
}

const mockCustomer: CustomerDetail = {
  id: "1",
  firstName: "Sarah",
  lastName: "Johnson",
  email: "sarah.johnson@example.com",
  phone: "+1 (555) 123-4567",
  avatar:
    "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=80&h=80&fit=crop&crop=face",
  status: "active",
  joinDate: "2023-01-15",
  lastOrderDate: "2024-02-15",
  totalOrders: 12,
  totalSpent: 2450.0,
  averageOrderValue: 204.17,
  loyaltyPoints: 2450,
  tier: "gold",
  addresses: [
    {
      id: "1",
      type: "shipping",
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      address1: "123 Technology Drive",
      address2: "Suite 400",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "United States",
      phone: "+1 (555) 123-4567",
      isDefault: true,
    },
    {
      id: "2",
      type: "billing",
      name: "Sarah Johnson",
      address1: "456 Residential Street",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      country: "United States",
      isDefault: true,
    },
  ],
  orders: [
    {
      id: "1",
      orderNumber: "ORD-2024-001",
      status: "delivered",
      total: 1513.84,
      date: "2024-02-15",
      items: 2,
    },
    {
      id: "2",
      orderNumber: "ORD-2024-002",
      status: "shipped",
      total: 299.99,
      date: "2024-02-10",
      items: 1,
    },
    {
      id: "3",
      orderNumber: "ORD-2024-003",
      status: "processing",
      total: 156.5,
      date: "2024-02-08",
      items: 3,
    },
  ],
  tags: ["vip", "frequent-buyer", "tech-enthusiast"],
  notes: [
    "Prefers express shipping",
    "Interested in new tech products",
    "Birthday: March 15th",
  ],
  preferences: {
    marketing: true,
    notifications: true,
    newsletter: true,
  },
};

const CustomerDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [customer, setCustomer] = useState<CustomerDetail>(mockCustomer);
  const [editing, setEditing] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [newTag, setNewTag] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-yellow-100 text-yellow-800";
      case "blocked":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "bronze":
        return "bg-amber-100 text-amber-800";
      case "silver":
        return "bg-gray-100 text-gray-800";
      case "gold":
        return "bg-yellow-100 text-yellow-800";
      case "platinum":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-purple-100 text-purple-800";
      case "shipped":
        return "bg-falcon-blue bg-opacity-10 text-falcon-blue";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const addNote = () => {
    if (newNote.trim()) {
      setCustomer((prev) => ({
        ...prev,
        notes: [...prev.notes, newNote.trim()],
      }));
      setNewNote("");
    }
  };

  const addTag = () => {
    if (newTag.trim() && !customer.tags.includes(newTag.trim().toLowerCase())) {
      setCustomer((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim().toLowerCase()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setCustomer((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSave = () => {
    // Save customer data
    setEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/ecommerce/customers")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Customers
          </Button>
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={customer.avatar}
                alt={`${customer.firstName} ${customer.lastName}`}
              />
              <AvatarFallback>
                {customer.firstName[0]}
                {customer.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-falcon-text-dark">
                {customer.firstName} {customer.lastName}
              </h1>
              <p className="text-falcon-text-light">{customer.email}</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          {editing ? (
            <>
              <Button variant="outline" onClick={() => setEditing(false)}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => setEditing(true)}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Customer
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Status & Info Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-falcon-text-light">
                  Status:
                </span>
                <Badge className={getStatusColor(customer.status)}>
                  {customer.status.charAt(0).toUpperCase() +
                    customer.status.slice(1)}
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-falcon-text-light">
                  Tier:
                </span>
                <Badge className={getTierColor(customer.tier)}>
                  {customer.tier.charAt(0).toUpperCase() +
                    customer.tier.slice(1)}
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-falcon-text-light">
                  Joined:
                </span>
                <span className="text-sm text-falcon-text-dark">
                  {formatDate(customer.joinDate)}
                </span>
              </div>
              {customer.lastOrderDate && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-falcon-text-light">
                    Last Order:
                  </span>
                  <span className="text-sm text-falcon-text-dark">
                    {formatDate(customer.lastOrderDate)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-lg font-bold text-falcon-text-dark">
                  {customer.totalOrders}
                </div>
                <div className="text-xs text-falcon-text-light">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-falcon-text-dark">
                  {formatCurrency(customer.totalSpent)}
                </div>
                <div className="text-xs text-falcon-text-light">
                  Total Spent
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-falcon-text-dark">
                  {customer.loyaltyPoints.toLocaleString()}
                </div>
                <div className="text-xs text-falcon-text-light">Points</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="space-y-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {editing ? (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={customer.firstName}
                            onChange={(e) =>
                              setCustomer((prev) => ({
                                ...prev,
                                firstName: e.target.value,
                              }))
                            }
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={customer.lastName}
                            onChange={(e) =>
                              setCustomer((prev) => ({
                                ...prev,
                                lastName: e.target.value,
                              }))
                            }
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={customer.email}
                            onChange={(e) =>
                              setCustomer((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={customer.phone || ""}
                            onChange={(e) =>
                              setCustomer((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-falcon-text-light" />
                            <span className="text-sm text-falcon-text-light">
                              Name:
                            </span>
                            <span className="font-medium text-falcon-text-dark">
                              {customer.firstName} {customer.lastName}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-falcon-text-light" />
                            <span className="text-sm text-falcon-text-light">
                              Email:
                            </span>
                            <span className="font-medium text-falcon-text-dark">
                              {customer.email}
                            </span>
                          </div>
                          {customer.phone && (
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-falcon-text-light" />
                              <span className="text-sm text-falcon-text-light">
                                Phone:
                              </span>
                              <span className="font-medium text-falcon-text-dark">
                                {customer.phone}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-falcon-text-light" />
                            <span className="text-sm text-falcon-text-light">
                              Member since:
                            </span>
                            <span className="font-medium text-falcon-text-dark">
                              {formatDate(customer.joinDate)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-falcon-text-light" />
                            <span className="text-sm text-falcon-text-light">
                              Average order:
                            </span>
                            <span className="font-medium text-falcon-text-dark">
                              {formatCurrency(customer.averageOrderValue)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-falcon-text-light" />
                            <span className="text-sm text-falcon-text-light">
                              Loyalty tier:
                            </span>
                            <Badge className={getTierColor(customer.tier)}>
                              {customer.tier.charAt(0).toUpperCase() +
                                customer.tier.slice(1)}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                          <ShoppingCart className="h-6 w-6 text-falcon-blue" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-falcon-text-light">
                            Total Orders
                          </p>
                          <p className="text-2xl font-bold text-falcon-text-dark">
                            {customer.totalOrders}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center">
                          <DollarSign className="h-6 w-6 text-falcon-green" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-falcon-text-light">
                            Total Spent
                          </p>
                          <p className="text-2xl font-bold text-falcon-text-dark">
                            {formatCurrency(customer.totalSpent)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                          <Gift className="h-6 w-6 text-falcon-orange" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-falcon-text-light">
                            Loyalty Points
                          </p>
                          <p className="text-2xl font-bold text-falcon-text-dark">
                            {customer.loyaltyPoints.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {customer.orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">
                            {order.orderNumber}
                          </TableCell>
                          <TableCell>{formatDate(order.date)}</TableCell>
                          <TableCell>
                            <Badge
                              className={getOrderStatusColor(order.status)}
                            >
                              {order.status.charAt(0).toUpperCase() +
                                order.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>{order.items}</TableCell>
                          <TableCell className="text-right">
                            {formatCurrency(order.total)}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                navigate(`/ecommerce/orders/${order.id}`)
                              }
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <div className="space-y-6">
                {customer.addresses.map((address) => (
                  <Card key={address.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="capitalize">
                          {address.type} Address
                          {address.isDefault && (
                            <Badge variant="outline" className="ml-2">
                              Default
                            </Badge>
                          )}
                        </CardTitle>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 text-sm">
                        <p className="font-medium text-falcon-text-dark">
                          {address.name}
                        </p>
                        {address.company && <p>{address.company}</p>}
                        <p>{address.address1}</p>
                        {address.address2 && <p>{address.address2}</p>}
                        <p>
                          {address.city}, {address.state} {address.zip}
                        </p>
                        <p>{address.country}</p>
                        {address.phone && <p>{address.phone}</p>}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "order",
                        description: "Placed order ORD-2024-001",
                        date: "2024-02-15T10:30:00Z",
                        icon: ShoppingCart,
                      },
                      {
                        type: "payment",
                        description: "Payment of $1,513.84 processed",
                        date: "2024-02-15T10:35:00Z",
                        icon: CreditCard,
                      },
                      {
                        type: "update",
                        description: "Updated shipping address",
                        date: "2024-02-10T14:20:00Z",
                        icon: MapPin,
                      },
                      {
                        type: "login",
                        description: "Logged into account",
                        date: "2024-02-08T09:15:00Z",
                        icon: User,
                      },
                    ].map((activity, index) => {
                      const IconComponent = activity.icon;
                      return (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-falcon-blue bg-opacity-10 rounded-full flex items-center justify-center">
                              <IconComponent className="h-4 w-4 text-falcon-blue" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-falcon-text-dark">
                              {activity.description}
                            </p>
                            <p className="text-xs text-falcon-text-light">
                              {formatDate(activity.date)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {customer.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {tag}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add tag"
                  onKeyPress={(e) => e.key === "Enter" && addTag()}
                />
                <Button onClick={addTag} variant="outline" size="sm">
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Customer Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {customer.notes.length > 0 && (
                <div className="space-y-2">
                  {customer.notes.map((note, index) => (
                    <div
                      key={index}
                      className="p-2 bg-falcon-bg-light rounded text-sm"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              )}
              <div className="space-y-2">
                <Textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add a note about this customer..."
                  className="min-h-20"
                />
                <Button
                  onClick={addNote}
                  disabled={!newNote.trim()}
                  size="sm"
                  className="w-full"
                >
                  Add Note
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Marketing emails</span>
                <Badge
                  className={
                    customer.preferences.marketing
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }
                >
                  {customer.preferences.marketing
                    ? "Subscribed"
                    : "Unsubscribed"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Order notifications</span>
                <Badge
                  className={
                    customer.preferences.notifications
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }
                >
                  {customer.preferences.notifications ? "Enabled" : "Disabled"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Newsletter</span>
                <Badge
                  className={
                    customer.preferences.newsletter
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }
                >
                  {customer.preferences.newsletter
                    ? "Subscribed"
                    : "Unsubscribed"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Start Chat
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Gift className="h-4 w-4 mr-2" />
                Send Coupon
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Package className="h-4 w-4 mr-2" />
                View Orders
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="w-full justify-start"
              >
                <Ban className="h-4 w-4 mr-2" />
                Block Customer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
