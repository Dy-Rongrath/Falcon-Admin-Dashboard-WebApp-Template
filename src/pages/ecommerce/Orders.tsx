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
  Edit,
  Printer,
  Download,
  ShoppingCart,
  Clock,
  CheckCircle,
  XCircle,
  Truck,
  CreditCard,
  Calendar,
  DollarSign,
  TrendingUp,
  Package,
} from "lucide-react";

interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  items: number;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  paymentStatus: "paid" | "pending" | "failed" | "refunded";
  paymentMethod: string;
  orderDate: string;
  shippingAddress: string;
}

const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-001",
    customer: {
      name: "John Smith",
      email: "john.smith@email.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    items: 3,
    total: 1249.97,
    status: "delivered",
    paymentStatus: "paid",
    paymentMethod: "Credit Card",
    orderDate: "2024-02-15",
    shippingAddress: "123 Main St, New York, NY",
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    items: 1,
    total: 899.99,
    status: "shipped",
    paymentStatus: "paid",
    paymentMethod: "PayPal",
    orderDate: "2024-02-14",
    shippingAddress: "456 Oak Ave, Los Angeles, CA",
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    customer: {
      name: "Michael Brown",
      email: "m.brown@email.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    items: 2,
    total: 649.98,
    status: "processing",
    paymentStatus: "paid",
    paymentMethod: "Credit Card",
    orderDate: "2024-02-13",
    shippingAddress: "789 Pine St, Chicago, IL",
  },
  {
    id: "4",
    orderNumber: "ORD-2024-004",
    customer: {
      name: "Emily Davis",
      email: "emily.davis@email.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    items: 1,
    total: 299.99,
    status: "pending",
    paymentStatus: "pending",
    paymentMethod: "Bank Transfer",
    orderDate: "2024-02-12",
    shippingAddress: "321 Elm St, Miami, FL",
  },
  {
    id: "5",
    orderNumber: "ORD-2024-005",
    customer: {
      name: "David Wilson",
      email: "d.wilson@email.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    items: 4,
    total: 1899.96,
    status: "cancelled",
    paymentStatus: "refunded",
    paymentMethod: "Credit Card",
    orderDate: "2024-02-11",
    shippingAddress: "654 Maple Dr, Seattle, WA",
  },
  {
    id: "6",
    orderNumber: "ORD-2024-006",
    customer: {
      name: "Lisa Anderson",
      email: "lisa.a@email.com",
      avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    },
    items: 2,
    total: 1199.98,
    status: "processing",
    paymentStatus: "paid",
    paymentMethod: "Apple Pay",
    orderDate: "2024-02-10",
    shippingAddress: "987 Cedar Ln, Boston, MA",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-falcon-green bg-opacity-10 text-falcon-green";
    case "shipped":
      return "bg-falcon-blue bg-opacity-10 text-falcon-blue";
    case "processing":
      return "bg-falcon-orange bg-opacity-10 text-falcon-orange";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "cancelled":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getPaymentStatusColor = (status: string) => {
  switch (status) {
    case "paid":
      return "bg-falcon-green bg-opacity-10 text-falcon-green";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "failed":
      return "bg-red-100 text-red-700";
    case "refunded":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="h-4 w-4" />;
    case "shipped":
      return <Truck className="h-4 w-4" />;
    case "processing":
      return <Clock className="h-4 w-4" />;
    case "pending":
      return <Clock className="h-4 w-4" />;
    case "cancelled":
      return <XCircle className="h-4 w-4" />;
    default:
      return <Package className="h-4 w-4" />;
  }
};

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("all");

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || order.status === selectedStatus;
    const matchesPaymentStatus =
      selectedPaymentStatus === "all" ||
      order.paymentStatus === selectedPaymentStatus;
    return matchesSearch && matchesStatus && matchesPaymentStatus;
  });

  const totalOrders = mockOrders.length;
  const pendingOrders = mockOrders.filter((o) => o.status === "pending").length;
  const completedOrders = mockOrders.filter(
    (o) => o.status === "delivered",
  ).length;
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-primary font-poppins flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-falcon-blue" />
            Orders
          </h1>
          <p className="text-falcon-text-secondary font-poppins">
            Manage and track customer orders
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" className="font-poppins">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Total Orders
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {totalOrders}
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingUp className="h-4 w-4" />
                  +12.5%
                </div>
              </div>
              <div className="p-3 bg-falcon-blue bg-opacity-10 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-falcon-blue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Pending Orders
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {pendingOrders}
                </p>
                <div className="flex items-center gap-1 text-sm text-yellow-600 font-poppins">
                  <Clock className="h-4 w-4" />
                  Needs attention
                </div>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Completed Orders
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {completedOrders}
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <CheckCircle className="h-4 w-4" />
                  Delivered
                </div>
              </div>
              <div className="p-3 bg-falcon-green bg-opacity-10 rounded-lg">
                <CheckCircle className="h-6 w-6 text-falcon-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  ${totalRevenue.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 text-sm text-falcon-green font-poppins">
                  <TrendingUp className="h-4 w-4" />
                  +8.7%
                </div>
              </div>
              <div className="p-3 bg-falcon-orange bg-opacity-10 rounded-lg">
                <DollarSign className="h-6 w-6 text-falcon-orange" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-white border-falcon-border-light">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-muted" />
              <Input
                placeholder="Search by order number, customer name, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 font-poppins"
              />
            </div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Order Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedPaymentStatus}
              onValueChange={setSelectedPaymentStatus}
            >
              <SelectTrigger className="w-full sm:w-40">
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
      <Card className="bg-white border-falcon-border-light">
        <CardHeader>
          <CardTitle className="font-poppins text-falcon-text-primary">
            Orders ({filteredOrders.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-poppins">Order</TableHead>
                <TableHead className="font-poppins">Customer</TableHead>
                <TableHead className="font-poppins">Items</TableHead>
                <TableHead className="font-poppins">Total</TableHead>
                <TableHead className="font-poppins">Status</TableHead>
                <TableHead className="font-poppins">Payment</TableHead>
                <TableHead className="font-poppins">Date</TableHead>
                <TableHead className="font-poppins">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-falcon-text-primary font-poppins">
                        {order.orderNumber}
                      </p>
                      <p className="text-sm text-falcon-text-muted font-poppins">
                        {order.paymentMethod}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
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
                        <p className="font-medium text-falcon-text-primary font-poppins">
                          {order.customer.name}
                        </p>
                        <p className="text-sm text-falcon-text-muted font-poppins">
                          {order.customer.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <span className="font-medium text-falcon-text-primary font-poppins">
                        {order.items}
                      </span>
                      <p className="text-xs text-falcon-text-muted font-poppins">
                        items
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-falcon-text-primary font-poppins">
                    ${order.total.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(order.status)}
                        {order.status}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={getPaymentStatusColor(order.paymentStatus)}
                    >
                      <div className="flex items-center gap-1">
                        <CreditCard className="h-3 w-3" />
                        {order.paymentStatus}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-falcon-text-secondary font-poppins">
                      <Calendar className="h-4 w-4" />
                      {order.orderDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Order
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Printer className="h-4 w-4 mr-2" />
                          Print Invoice
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Truck className="h-4 w-4 mr-2" />
                          Track Shipment
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
