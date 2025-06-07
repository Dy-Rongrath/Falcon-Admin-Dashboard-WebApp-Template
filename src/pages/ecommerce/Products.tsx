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
  Plus,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Star,
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Image as ImageIcon,
  Grid3X3,
  List,
} from "lucide-react";

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
  sku: string;
  dateAdded: string;
  trending: "up" | "down" | "stable";
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 14 Pro Max",
    category: "Electronics",
    price: 1099.99,
    stock: 45,
    sales: 234,
    rating: 4.8,
    status: "active",
    image: "/api/placeholder/64/64",
    sku: "IPH14PM-128-BLK",
    dateAdded: "2024-01-15",
    trending: "up",
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
    image: "/api/placeholder/64/64",
    sku: "MBA-M2-256-SLV",
    dateAdded: "2024-01-12",
    trending: "up",
  },
  {
    id: "3",
    name: "AirPods Pro 2nd Gen",
    category: "Electronics",
    price: 249.99,
    stock: 0,
    sales: 89,
    rating: 4.7,
    status: "out_of_stock",
    image: "/api/placeholder/64/64",
    sku: "APP-2ND-WHT",
    dateAdded: "2024-01-10",
    trending: "down",
  },
  {
    id: "4",
    name: 'iPad Pro 12.9"',
    category: "Electronics",
    price: 899.99,
    stock: 67,
    sales: 145,
    rating: 4.6,
    status: "active",
    image: "/api/placeholder/64/64",
    sku: "IPP-129-256-GRY",
    dateAdded: "2024-01-08",
    trending: "stable",
  },
  {
    id: "5",
    name: "Apple Watch Series 9",
    category: "Electronics",
    price: 399.99,
    stock: 34,
    sales: 78,
    rating: 4.5,
    status: "active",
    image: "/api/placeholder/64/64",
    sku: "AWS9-45-BLK",
    dateAdded: "2024-01-05",
    trending: "up",
  },
  {
    id: "6",
    name: "Mac Studio",
    category: "Electronics",
    price: 1999.99,
    stock: 12,
    sales: 23,
    rating: 4.9,
    status: "active",
    image: "/api/placeholder/64/64",
    sku: "MS-M2-512-SLV",
    dateAdded: "2024-01-03",
    trending: "stable",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-falcon-green bg-opacity-10 text-falcon-green";
    case "inactive":
      return "bg-gray-100 text-gray-700";
    case "out_of_stock":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getTrendingIcon = (trending: string) => {
  switch (trending) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-falcon-green" />;
    case "down":
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    default:
      return <div className="h-4 w-4 bg-gray-300 rounded-full"></div>;
  }
};

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || product.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalProducts = mockProducts.length;
  const activeProducts = mockProducts.filter(
    (p) => p.status === "active",
  ).length;
  const outOfStock = mockProducts.filter(
    (p) => p.status === "out_of_stock",
  ).length;
  const totalRevenue = mockProducts.reduce(
    (sum, product) => sum + product.price * product.sales,
    0,
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-primary font-poppins flex items-center gap-2">
            <Package className="h-6 w-6 text-falcon-blue" />
            Products
          </h1>
          <p className="text-falcon-text-secondary font-poppins">
            Manage your product inventory and catalog
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-poppins">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
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
                  Total Products
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {totalProducts}
                </p>
              </div>
              <div className="p-3 bg-falcon-blue bg-opacity-10 rounded-lg">
                <Package className="h-6 w-6 text-falcon-blue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Active Products
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {activeProducts}
                </p>
              </div>
              <div className="p-3 bg-falcon-green bg-opacity-10 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-falcon-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-falcon-border-light">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-falcon-text-secondary font-poppins">
                  Out of Stock
                </p>
                <p className="text-2xl font-bold text-falcon-text-primary font-poppins">
                  {outOfStock}
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <Package className="h-6 w-6 text-red-600" />
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
              </div>
              <div className="p-3 bg-falcon-orange bg-opacity-10 rounded-lg">
                <DollarSign className="h-6 w-6 text-falcon-orange" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Controls */}
      <Card className="bg-white border-falcon-border-light">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-muted" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-full sm:w-80 font-poppins"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Clothing">Clothing</SelectItem>
                  <SelectItem value="Books">Books</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="font-poppins"
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="font-poppins"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Table/Grid */}
      {viewMode === "list" ? (
        <Card className="bg-white border-falcon-border-light">
          <CardHeader>
            <CardTitle className="font-poppins text-falcon-text-primary">
              Products ({filteredProducts.length})
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
                  <TableHead className="font-poppins">Trend</TableHead>
                  <TableHead className="font-poppins">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={product.image} alt={product.name} />
                          <AvatarFallback>
                            <ImageIcon className="h-6 w-6" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-falcon-text-primary font-poppins">
                            {product.name}
                          </p>
                          <p className="text-sm text-falcon-text-muted font-poppins">
                            {product.sku}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-poppins text-falcon-text-secondary">
                      {product.category}
                    </TableCell>
                    <TableCell className="font-poppins text-falcon-text-primary font-medium">
                      ${product.price}
                    </TableCell>
                    <TableCell className="font-poppins">
                      <span
                        className={
                          product.stock === 0
                            ? "text-red-600"
                            : "text-falcon-text-primary"
                        }
                      >
                        {product.stock}
                      </span>
                    </TableCell>
                    <TableCell className="font-poppins text-falcon-text-primary">
                      {product.sales}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium font-poppins">
                          {product.rating}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(product.status)}>
                        {product.status.replace("_", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>{getTrendingIcon(product.trending)}</TableCell>
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-white border-falcon-border-light hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Avatar className="w-full h-32 rounded-lg">
                      <AvatarImage
                        src={product.image}
                        alt={product.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="rounded-lg">
                        <ImageIcon className="h-12 w-12" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute top-2 right-2">
                      <Badge className={getStatusColor(product.status)}>
                        {product.status.replace("_", " ")}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-falcon-text-primary font-poppins">
                      {product.name}
                    </h3>
                    <p className="text-sm text-falcon-text-muted font-poppins">
                      {product.sku}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-falcon-text-primary font-poppins">
                      ${product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium font-poppins">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-falcon-text-secondary font-poppins">
                      Stock: {product.stock}
                    </span>
                    <span className="text-falcon-text-secondary font-poppins">
                      Sales: {product.sales}
                    </span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="font-poppins"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
