import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Package,
  Truck,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Calendar,
  User,
  Edit,
  RefreshCw,
  Printer,
  Download,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Clock,
  X,
  ShoppingCart,
  DollarSign,
  FileText,
  Eye,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

interface OrderItem {
  id: string;
  name: string;
  image: string;
  sku: string;
  price: number;
  quantity: number;
  total: number;
  variant?: {
    color?: string;
    size?: string;
  };
}

interface ShippingAddress {
  name: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone?: string;
}

interface OrderDetail {
  id: string;
  orderNumber: string;
  status:
    | "pending"
    | "confirmed"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled"
    | "refunded";
  paymentStatus:
    | "pending"
    | "paid"
    | "failed"
    | "refunded"
    | "partially_refunded";
  customer: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    totalOrders: number;
    totalSpent: number;
  };
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  shippingAddress: ShippingAddress;
  billingAddress: ShippingAddress;
  paymentMethod: {
    type: "credit_card" | "paypal" | "bank_transfer" | "cash_on_delivery";
    last4?: string;
    brand?: string;
  };
  shippingMethod: {
    name: string;
    cost: number;
    estimatedDelivery: string;
    trackingNumber?: string;
    carrier?: string;
  };
  createdAt: string;
  updatedAt: string;
  notes: string[];
  timeline: {
    id: string;
    event: string;
    description: string;
    timestamp: string;
    user?: string;
  }[];
}

const mockOrder: OrderDetail = {
  id: "1",
  orderNumber: "ORD-2024-001",
  status: "shipped",
  paymentStatus: "paid",
  customer: {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face",
    totalOrders: 12,
    totalSpent: 2450.0,
  },
  items: [
    {
      id: "1",
      name: "Apple iPhone 15 Pro Max",
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=80&h=80&fit=crop",
      sku: "APL-IP15PM-256-NT",
      price: 1199.0,
      quantity: 1,
      total: 1199.0,
      variant: {
        color: "Natural Titanium",
        size: "256GB",
      },
    },
    {
      id: "2",
      name: "Apple AirPods Pro (2nd generation)",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=80&h=80&fit=crop",
      sku: "APL-APP-PRO2",
      price: 249.0,
      quantity: 1,
      total: 249.0,
    },
  ],
  subtotal: 1448.0,
  tax: 115.84,
  shipping: 0.0,
  discount: 50.0,
  total: 1513.84,
  shippingAddress: {
    name: "Sarah Johnson",
    company: "Tech Solutions Inc.",
    address1: "123 Technology Drive",
    address2: "Suite 400",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "United States",
    phone: "+1 (555) 123-4567",
  },
  billingAddress: {
    name: "Sarah Johnson",
    address1: "123 Technology Drive",
    address2: "Suite 400",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "United States",
    phone: "+1 (555) 123-4567",
  },
  paymentMethod: {
    type: "credit_card",
    last4: "4242",
    brand: "Visa",
  },
  shippingMethod: {
    name: "Express Shipping",
    cost: 0.0,
    estimatedDelivery: "2024-02-20",
    trackingNumber: "1Z999AA1234567890",
    carrier: "UPS",
  },
  createdAt: "2024-02-15T10:30:00Z",
  updatedAt: "2024-02-18T14:20:00Z",
  notes: ["Customer requested expedited processing", "Gift wrapping requested"],
  timeline: [
    {
      id: "1",
      event: "Order Placed",
      description: "Order was successfully placed and payment confirmed",
      timestamp: "2024-02-15T10:30:00Z",
    },
    {
      id: "2",
      event: "Payment Confirmed",
      description: "Payment of $1,513.84 was successfully processed",
      timestamp: "2024-02-15T10:35:00Z",
    },
    {
      id: "3",
      event: "Order Confirmed",
      description: "Order confirmed and sent to fulfillment center",
      timestamp: "2024-02-15T11:00:00Z",
      user: "System",
    },
    {
      id: "4",
      event: "Processing Started",
      description: "Items are being prepared for shipment",
      timestamp: "2024-02-16T09:15:00Z",
      user: "Warehouse Team",
    },
    {
      id: "5",
      event: "Shipped",
      description: "Order shipped via UPS Express. Tracking: 1Z999AA1234567890",
      timestamp: "2024-02-17T16:45:00Z",
      user: "Shipping Department",
    },
  ],
};

const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState<OrderDetail>(mockOrder);
  const [newNote, setNewNote] = useState("");
  const [editingStatus, setEditingStatus] = useState(false);

  const getStatusColor = (status: string) => {
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
      case "refunded":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      case "refunded":
        return "bg-gray-100 text-gray-800";
      case "partially_refunded":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleStatusUpdate = (newStatus: string) => {
    setOrder((prev) => ({ ...prev, status: newStatus as any }));
    setEditingStatus(false);
  };

  const addNote = () => {
    if (newNote.trim()) {
      setOrder((prev) => ({
        ...prev,
        notes: [...prev.notes, newNote.trim()],
      }));
      setNewNote("");
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
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/ecommerce/orders")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Orders
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-falcon-text-dark">
              Order {order.orderNumber}
            </h1>
            <p className="text-falcon-text-light">
              Placed on {formatDate(order.createdAt)}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Invoice
          </Button>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refund
          </Button>
        </div>
      </div>

      {/* Status Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-falcon-text-light">
                  Status:
                </span>
                {editingStatus ? (
                  <Select
                    value={order.status}
                    onValueChange={handleStatusUpdate}
                  >
                    <SelectTrigger className="w-32 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="refunded">Refunded</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditingStatus(true)}
                      className="h-6 w-6 p-0"
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-falcon-text-light">
                  Payment:
                </span>
                <Badge className={getPaymentStatusColor(order.paymentStatus)}>
                  {order.paymentStatus
                    .replace("_", " ")
                    .charAt(0)
                    .toUpperCase() + order.paymentStatus.slice(1)}
                </Badge>
              </div>
              {order.shippingMethod.trackingNumber && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-falcon-text-light">
                    Tracking:
                  </span>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-falcon-blue"
                  >
                    {order.shippingMethod.trackingNumber}
                  </Button>
                </div>
              )}
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-falcon-text-dark">
                {formatCurrency(order.total)}
              </div>
              <div className="text-sm text-falcon-text-light">
                {order.items.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                items
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="items" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="items">Items</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>

            <TabsContent value="items">
              <Card>
                <CardHeader>
                  <CardTitle>Order Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 p-4 border border-falcon-border-light rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-falcon-text-dark">
                            {item.name}
                          </h3>
                          <div className="text-sm text-falcon-text-light space-y-1">
                            <p>SKU: {item.sku}</p>
                            {item.variant && (
                              <div className="flex space-x-4">
                                {item.variant.color && (
                                  <span>Color: {item.variant.color}</span>
                                )}
                                {item.variant.size && (
                                  <span>Size: {item.variant.size}</span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-falcon-text-dark">
                            {formatCurrency(item.price)} × {item.quantity}
                          </div>
                          <div className="text-sm text-falcon-text-light">
                            Total: {formatCurrency(item.total)}
                          </div>
                        </div>
                      </div>
                    ))}

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>{formatCurrency(order.subtotal)}</span>
                      </div>
                      {order.discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount:</span>
                          <span>-{formatCurrency(order.discount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>
                          {order.shipping === 0
                            ? "FREE"
                            : formatCurrency(order.shipping)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax:</span>
                        <span>{formatCurrency(order.tax)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span>{formatCurrency(order.total)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline">
              <Card>
                <CardHeader>
                  <CardTitle>Order Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.timeline.map((event, index) => (
                      <div
                        key={event.id}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-falcon-blue bg-opacity-10 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-falcon-blue rounded-full"></div>
                          </div>
                          {index < order.timeline.length - 1 && (
                            <div className="w-px h-8 bg-falcon-border-light ml-4 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-falcon-text-dark">
                              {event.event}
                            </h3>
                            <span className="text-sm text-falcon-text-light">
                              {formatDate(event.timestamp)}
                            </span>
                          </div>
                          <p className="text-sm text-falcon-text-light mt-1">
                            {event.description}
                          </p>
                          {event.user && (
                            <p className="text-xs text-falcon-text-light mt-1">
                              by {event.user}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium text-falcon-text-dark mb-3">
                          Shipping Address
                        </h3>
                        <div className="space-y-1 text-sm text-falcon-text-light">
                          <p className="font-medium text-falcon-text-dark">
                            {order.shippingAddress.name}
                          </p>
                          {order.shippingAddress.company && (
                            <p>{order.shippingAddress.company}</p>
                          )}
                          <p>{order.shippingAddress.address1}</p>
                          {order.shippingAddress.address2 && (
                            <p>{order.shippingAddress.address2}</p>
                          )}
                          <p>
                            {order.shippingAddress.city},{" "}
                            {order.shippingAddress.state}{" "}
                            {order.shippingAddress.zip}
                          </p>
                          <p>{order.shippingAddress.country}</p>
                          {order.shippingAddress.phone && (
                            <p>{order.shippingAddress.phone}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-falcon-text-dark mb-3">
                          Shipping Method
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Method:</span>
                            <span className="font-medium">
                              {order.shippingMethod.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cost:</span>
                            <span>
                              {order.shippingMethod.cost === 0
                                ? "FREE"
                                : formatCurrency(order.shippingMethod.cost)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Estimated Delivery:</span>
                            <span>
                              {new Date(
                                order.shippingMethod.estimatedDelivery,
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          {order.shippingMethod.carrier && (
                            <div className="flex justify-between">
                              <span>Carrier:</span>
                              <span>{order.shippingMethod.carrier}</span>
                            </div>
                          )}
                          {order.shippingMethod.trackingNumber && (
                            <div className="flex justify-between">
                              <span>Tracking Number:</span>
                              <Button
                                variant="link"
                                className="h-auto p-0 text-falcon-blue text-sm"
                              >
                                {order.shippingMethod.trackingNumber}
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="payment">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium text-falcon-text-dark mb-3">
                          Payment Method
                        </h3>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                            <CreditCard className="h-3 w-3 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-falcon-text-dark">
                              {order.paymentMethod.brand} ending in{" "}
                              {order.paymentMethod.last4}
                            </p>
                            <p className="text-sm text-falcon-text-light">
                              {order.paymentMethod.type.replace("_", " ")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-falcon-text-dark mb-3">
                          Billing Address
                        </h3>
                        <div className="space-y-1 text-sm text-falcon-text-light">
                          <p className="font-medium text-falcon-text-dark">
                            {order.billingAddress.name}
                          </p>
                          <p>{order.billingAddress.address1}</p>
                          {order.billingAddress.address2 && (
                            <p>{order.billingAddress.address2}</p>
                          )}
                          <p>
                            {order.billingAddress.city},{" "}
                            {order.billingAddress.state}{" "}
                            {order.billingAddress.zip}
                          </p>
                          <p>{order.billingAddress.country}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <Card>
            <CardHeader>
              <CardTitle>Customer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src={order.customer.avatar}
                    alt={order.customer.name}
                  />
                  <AvatarFallback>
                    {order.customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-falcon-text-dark">
                    {order.customer.name}
                  </p>
                  <p className="text-sm text-falcon-text-light">
                    {order.customer.email}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Orders:</span>
                  <span className="font-medium">
                    {order.customer.totalOrders}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total Spent:</span>
                  <span className="font-medium">
                    {formatCurrency(order.customer.totalSpent)}
                  </span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <User className="h-3 w-3 mr-1" />
                  View Profile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="h-3 w-3 mr-1" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Order Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Order Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.notes.length > 0 && (
                <div className="space-y-2">
                  {order.notes.map((note, index) => (
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
                  placeholder="Add a note about this order..."
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
                <Package className="h-4 w-4 mr-2" />
                Create Shipment
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Process Refund
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <FileText className="h-4 w-4 mr-2" />
                Generate Invoice
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Customer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
