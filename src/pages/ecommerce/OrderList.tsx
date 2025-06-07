import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Calendar,
  Users,
  Download,
  RefreshCw,
  CheckCircle,
  Clock,
  Truck,
  AlertTriangle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Order {
  id: string;
  orderNumber: string;
  customer: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  status:
    | "pending"
    | "confirmed"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  total: number;
  items: number;
  date: string;
  shippingMethod: string;
  expectedDelivery?: string;
}

const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-001",
    customer: {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face",
    },
    status: "shipped",
    paymentStatus: "paid",
    total: 1513.84,
    items: 2,
    date: "2024-02-15T10:30:00Z",
    shippingMethod: "Express Shipping",
    expectedDelivery: "2024-02-20",
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    customer: {
      id: "2",
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    status: "delivered",
    paymentStatus: "paid",
    total: 299.99,
    items: 1,
    date: "2024-02-10T14:20:00Z",
    shippingMethod: "Standard Shipping",
    expectedDelivery: "2024-02-18",
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    customer: {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    status: "processing",
    paymentStatus: "paid",
    total: 756.5,
    items: 3,
    date: "2024-02-08T09:15:00Z",
    shippingMethod: "Standard Shipping",
    expectedDelivery: "2024-02-22",
  },
  {
    id: "4",
    orderNumber: "ORD-2024-004",
    customer: {
      id: "4",
      name: "David Wilson",
      email: "david.wilson@example.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    status: "confirmed",
    paymentStatus: "paid",
    total: 2199.99,
    items: 4,
    date: "2024-02-05T16:45:00Z",
    shippingMethod: "Express Shipping",
    expectedDelivery: "2024-02-25",
  },
  {
    id: "5",
    orderNumber: "ORD-2024-005",
    customer: {
      id: "5",
      name: "Lisa Anderson",
      email: "lisa.anderson@example.com",
    },
    status: "pending",
    paymentStatus: "pending",
    total: 89.99,
    items: 1,
    date: "2024-02-03T11:20:00Z",
    shippingMethod: "Standard Shipping",
  },
  {
    id: "6",
    orderNumber: "ORD-2024-006",
    customer: {
      id: "6",
      name: "James Miller",
      email: "james.miller@example.com",
    },
    status: "cancelled",
    paymentStatus: "refunded",
    total: 445.5,
    items: 2,
    date: "2024-02-01T08:30:00Z",
    shippingMethod: "Express Shipping",
  },
];

const OrderList = () => {
  const navigate = useNavigate();
  const [orders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;
    const matchesPayment =
      paymentFilter === "all" || order.paymentStatus === paymentFilter;
    return matchesSearch && matchesStatus && matchesPayment;
  });

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
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "confirmed":
        return <CheckCircle className="h-4 w-4" />;
      case "processing":
        return <Package className="h-4 w-4" />;
      case "shipped":
        return <Truck className="h-4 w-4" />;
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "cancelled":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
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
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Statistics
  const totalOrders = orders.length;
  const totalRevenue = orders
    .filter((o) => o.paymentStatus === "paid")
    .reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const shippedOrders = orders.filter((o) => o.status === "shipped").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-falcon-blue" />
            Order List
          </h1>
          <p className="text-falcon-text-light font-poppins">
            Manage and track all customer orders
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filter
          </Button>
          <Button variant="outline" className="font-poppins">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                  {totalOrders}
                </p>
                <p className="text-xs text-falcon-green">
                  +12% from last month
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
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {formatCurrency(totalRevenue)}
                </p>
                <p className="text-xs text-falcon-green">
                  +8.5% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Pending Orders
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {pendingOrders}
                </p>
                <p className="text-xs text-yellow-600">Needs attention</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Shipped Orders
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {shippedOrders}
                </p>
                <p className="text-xs text-falcon-orange">In transit</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-falcon-text-light h-4 w-4" />
              <Input
                placeholder="Search orders, customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Order Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={paymentFilter} onValueChange={setPaymentFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Payment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Orders ({filteredOrders.length})</span>
            <div className="text-sm font-normal text-falcon-text-light">
              Showing {filteredOrders.length} of {totalOrders} orders
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Items</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow
                  key={order.id}
                  className="cursor-pointer hover:bg-falcon-bg-light"
                  onClick={() => navigate(`/ecommerce/orders/${order.id}`)}
                >
                  <TableCell>
                    <div>
                      <div className="font-medium text-falcon-text-dark">
                        {order.orderNumber}
                      </div>
                      <div className="text-sm text-falcon-text-light">
                        {order.shippingMethod}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={order.customer.avatar}
                          alt={order.customer.name}
                        />
                        <AvatarFallback className="text-xs">
                          {order.customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-falcon-text-dark text-sm">
                          {order.customer.name}
                        </div>
                        <div className="text-xs text-falcon-text-light">
                          {order.customer.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium text-falcon-text-dark">
                        {formatDate(order.date)}
                      </div>
                      {order.expectedDelivery && (
                        <div className="text-xs text-falcon-text-light">
                          Expected:{" "}
                          {new Date(
                            order.expectedDelivery,
                          ).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={getPaymentStatusColor(order.paymentStatus)}
                    >
                      {order.paymentStatus.charAt(0).toUpperCase() +
                        order.paymentStatus.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{order.items}</span>
                    <span className="text-sm text-falcon-text-light ml-1">
                      {order.items === 1 ? "item" : "items"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {formatCurrency(order.total)}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/ecommerce/orders/${order.id}`);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                          <Package className="h-4 w-4 mr-2" />
                          Track Package
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                          <Download className="h-4 w-4 mr-2" />
                          Download Invoice
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Process Refund
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 mx-auto text-falcon-text-light mb-4" />
              <h3 className="text-xl font-semibold text-falcon-text-dark mb-2">
                No orders found
              </h3>
              <p className="text-falcon-text-light mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setPaymentFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderList;
