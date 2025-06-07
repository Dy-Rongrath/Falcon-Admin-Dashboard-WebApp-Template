import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Grid3X3,
  Search,
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Star,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  Package,
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: "active" | "inactive" | "pending";
  lastLogin: string;
  joinDate: string;
  orders: number;
  spent: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  rating: number;
  status: "active" | "inactive" | "out_of_stock";
  image: string;
}

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: "completed" | "pending" | "cancelled" | "processing";
  date: string;
  paymentMethod: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    role: "Admin",
    status: "active",
    lastLogin: "2024-02-15",
    joinDate: "2023-01-15",
    orders: 45,
    spent: 2850.0,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    role: "Manager",
    status: "active",
    lastLogin: "2024-02-14",
    joinDate: "2023-03-22",
    orders: 32,
    spent: 1920.0,
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike.chen@example.com",
    avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    role: "User",
    status: "inactive",
    lastLogin: "2024-01-28",
    joinDate: "2023-06-10",
    orders: 18,
    spent: 890.0,
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    avatar: "${import.meta.env.BASE_URL}api/placeholder/32/32",
    role: "User",
    status: "pending",
    lastLogin: "Never",
    joinDate: "2024-02-12",
    orders: 0,
    spent: 0,
  },
];

const mockProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 14 Pro",
    category: "Electronics",
    price: 999.99,
    stock: 45,
    sales: 234,
    rating: 4.8,
    status: "active",
    image: "/api/placeholder/40/40",
  },
  {
    id: "2",
    name: "MacBook Air M2",
    category: "Electronics",
    price: 1199.99,
    stock: 23,
    sales: 156,
    rating: 4.9,
    status: "active",
    image: "/api/placeholder/40/40",
  },
  {
    id: "3",
    name: "AirPods Pro",
    category: "Electronics",
    price: 249.99,
    stock: 0,
    sales: 89,
    rating: 4.7,
    status: "out_of_stock",
    image: "/api/placeholder/40/40",
  },
];

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Smith",
    product: "iPhone 14 Pro",
    amount: 999.99,
    status: "completed",
    date: "2024-02-15",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    product: "MacBook Air M2",
    amount: 1199.99,
    status: "processing",
    date: "2024-02-14",
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-003",
    customer: "Mike Chen",
    product: "AirPods Pro",
    amount: 249.99,
    status: "pending",
    date: "2024-02-13",
    paymentMethod: "Bank Transfer",
  },
];

export default function Tables() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "completed":
        return "bg-falcon-green bg-opacity-10 text-falcon-green";
      case "pending":
      case "processing":
        return "bg-falcon-orange bg-opacity-10 text-falcon-orange";
      case "inactive":
      case "cancelled":
        return "bg-red-100 text-red-700";
      case "out_of_stock":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
      case "completed":
        return <CheckCircle className="h-3 w-3" />;
      case "pending":
      case "processing":
        return <Clock className="h-3 w-3" />;
      case "inactive":
      case "cancelled":
        return <XCircle className="h-3 w-3" />;
      default:
        return <AlertCircle className="h-3 w-3" />;
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(mockUsers.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers((prev) => [...prev, userId]);
    } else {
      setSelectedUsers((prev) => prev.filter((id) => id !== userId));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-primary font-poppins flex items-center gap-2">
            <Grid3X3 className="h-6 w-6 text-falcon-blue" />
            Tables
          </h1>
          <p className="text-falcon-text-secondary font-poppins">
            Advanced data tables with sorting, filtering, and pagination
          </p>
        </div>
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-falcon-bg-light">
          <TabsTrigger value="users" className="font-poppins">
            Users Table
          </TabsTrigger>
          <TabsTrigger value="products" className="font-poppins">
            Products
          </TabsTrigger>
          <TabsTrigger value="orders" className="font-poppins">
            Orders
          </TabsTrigger>
          <TabsTrigger value="advanced" className="font-poppins">
            Advanced
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          {/* Table Controls */}
          <Card className="border-falcon-border-light">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex gap-2 flex-1">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-muted" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 font-poppins"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="font-poppins">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" className="font-poppins">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Users Table */}
          <Card className="border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Users ({mockUsers.length})
                {selectedUsers.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedUsers.length} selected
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedUsers.length === mockUsers.length}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead className="font-poppins">User</TableHead>
                    <TableHead className="font-poppins">Role</TableHead>
                    <TableHead className="font-poppins">Status</TableHead>
                    <TableHead className="font-poppins">Last Login</TableHead>
                    <TableHead className="font-poppins">Orders</TableHead>
                    <TableHead className="font-poppins">Total Spent</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedUsers.includes(user.id)}
                          onCheckedChange={(checked) =>
                            handleSelectUser(user.id, checked as boolean)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="text-xs">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-falcon-text-primary font-poppins">
                              {user.name}
                            </div>
                            <div className="text-sm text-falcon-text-muted font-poppins">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-poppins">
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(user.status)}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(user.status)}
                            {user.status}
                          </div>
                        </Badge>
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-secondary">
                        {user.lastLogin}
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-primary">
                        {user.orders}
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-primary font-medium">
                        ${user.spent.toLocaleString()}
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
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
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
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card className="border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Products Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-poppins">Product</TableHead>
                    <TableHead className="font-poppins">Category</TableHead>
                    <TableHead className="font-poppins">Price</TableHead>
                    <TableHead className="font-poppins">Stock</TableHead>
                    <TableHead className="font-poppins">Sales</TableHead>
                    <TableHead className="font-poppins">Rating</TableHead>
                    <TableHead className="font-poppins">Status</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10 rounded-lg">
                            <AvatarImage
                              src={product.image}
                              alt={product.name}
                            />
                            <AvatarFallback className="rounded-lg">
                              <Package className="h-5 w-5" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="font-medium text-falcon-text-primary font-poppins">
                            {product.name}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-secondary">
                        {product.category}
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-primary font-medium">
                        ${product.price}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "font-poppins",
                              product.stock === 0
                                ? "text-red-600"
                                : "text-falcon-text-primary",
                            )}
                          >
                            {product.stock}
                          </span>
                          {product.stock < 10 && product.stock > 0 && (
                            <Badge variant="outline" className="text-xs">
                              Low
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-primary">
                        {product.sales}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-poppins text-falcon-text-primary">
                            {product.rating}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(product.status)}>
                          {getStatusIcon(product.status)}
                          <span className="ml-1">
                            {product.status.replace("_", " ")}
                          </span>
                        </Badge>
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
                              Edit Product
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
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
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <Card className="border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-poppins">Order ID</TableHead>
                    <TableHead className="font-poppins">Customer</TableHead>
                    <TableHead className="font-poppins">Product</TableHead>
                    <TableHead className="font-poppins">Amount</TableHead>
                    <TableHead className="font-poppins">Status</TableHead>
                    <TableHead className="font-poppins">Date</TableHead>
                    <TableHead className="font-poppins">Payment</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium text-falcon-blue font-poppins">
                        {order.id}
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-primary">
                        {order.customer}
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-secondary">
                        {order.product}
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-primary font-medium">
                        ${order.amount.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1">{order.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-secondary">
                        {order.date}
                      </TableCell>
                      <TableCell className="font-poppins text-falcon-text-secondary">
                        {order.paymentMethod}
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
                              View Order
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Order
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download Invoice
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
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card className="border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Advanced Table Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-falcon-text-secondary font-poppins">
                  This section showcases advanced table features like:
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-falcon-text-secondary font-poppins">
                  <li>Row selection with checkboxes</li>
                  <li>Advanced filtering and search</li>
                  <li>Sortable columns</li>
                  <li>Pagination controls</li>
                  <li>Bulk actions</li>
                  <li>Responsive design</li>
                  <li>Export functionality</li>
                  <li>Status indicators and badges</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
