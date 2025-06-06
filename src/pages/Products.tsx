import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Package,
  Star,
  TrendingUp,
  BarChart3,
  Users,
  ShoppingCart,
  Zap,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  rating: number;
  status: "active" | "draft" | "archived";
  image: string;
  createdAt: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const products: Product[] = [
  {
    id: "PROD-001",
    name: "Smart Wireless Earbuds Pro",
    category: "Electronics",
    price: 299,
    stock: 145,
    sales: 2850,
    rating: 4.8,
    status: "active",
    image: "/placeholder.svg",
    createdAt: "2024-01-28",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "PROD-002",
    name: "Ultra-HD Webcam",
    category: "Electronics",
    price: 199,
    stock: 89,
    sales: 1950,
    rating: 4.6,
    status: "active",
    image: "/placeholder.svg",
    createdAt: "2024-01-25",
    isNew: true,
  },
  {
    id: "PROD-003",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 599,
    stock: 23,
    sales: 890,
    rating: 4.9,
    status: "active",
    image: "/placeholder.svg",
    createdAt: "2024-01-20",
    isFeatured: true,
  },
  {
    id: "PROD-004",
    name: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 149,
    stock: 67,
    sales: 1450,
    rating: 4.7,
    status: "active",
    image: "/placeholder.svg",
    createdAt: "2024-01-15",
    isNew: true,
  },
  {
    id: "PROD-005",
    name: "Smart Home Security Camera",
    category: "Security",
    price: 249,
    stock: 0,
    sales: 750,
    rating: 4.5,
    status: "draft",
    image: "/placeholder.svg",
    createdAt: "2024-01-10",
  },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Active
          </Badge>
        );
      case "draft":
        return (
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
            Draft
          </Badge>
        );
      case "archived":
        return (
          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
            Archived
          </Badge>
        );
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: "Out of Stock", class: "text-red-600" };
    if (stock <= 25) return { text: "Low Stock", class: "text-orange-600" };
    return { text: "In Stock", class: "text-green-600" };
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const newProducts = products.filter((p) => p.isNew);
  const featuredProducts = products.filter((p) => p.isFeatured);
  const totalValue = products.reduce(
    (sum, product) => sum + product.price * product.stock,
    0,
  );
  const totalSales = products.reduce((sum, product) => sum + product.sales, 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Package className="h-6 w-6" />
            Products
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 ml-2">
              <Zap className="h-3 w-3 mr-1" />
              New
            </Badge>
          </h1>
          <p className="text-gray-600">
            Comprehensive product catalog and inventory management
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Package className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">
                  {products.length}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">
                    +{newProducts.length} new
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalSales.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+12.5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Featured Products</p>
                <p className="text-2xl font-bold text-gray-900">
                  {featuredProducts.length}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs text-gray-600">Top performers</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Inventory Value</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${totalValue.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+8.2%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="new">
            New Products ({newProducts.length})
          </TabsTrigger>
          <TabsTrigger value="featured">
            Featured ({featuredProducts.length})
          </TabsTrigger>
          <TabsTrigger value="lowstock">Low Stock</TabsTrigger>
        </TabsList>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-80"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter by Category
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                Showing {products.length} products
              </div>
            </div>
          </CardContent>
        </Card>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Products</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Sales</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => {
                    const stockStatus = getStockStatus(product.stock);
                    return (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 rounded-lg">
                              <AvatarImage
                                src={product.image}
                                alt={product.name}
                              />
                              <AvatarFallback className="bg-gray-100 text-gray-600 text-xs rounded-lg">
                                {product.name.substring(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-gray-900">
                                  {product.name}
                                </p>
                                {product.isNew && (
                                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs">
                                    New
                                  </Badge>
                                )}
                                {product.isFeatured && (
                                  <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 text-xs">
                                    Featured
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-500">
                                ID: {product.id}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {product.category}
                        </TableCell>
                        <TableCell className="font-medium">
                          ${product.price}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{product.stock} units</p>
                            <p className={`text-xs ${stockStatus.class}`}>
                              {stockStatus.text}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {product.sales.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {renderStars(product.rating)}
                            <span className="text-sm text-gray-600 ml-1">
                              ({product.rating})
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(product.status)}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                              >
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
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>New Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        <Package className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium text-gray-900">
                            {product.name}
                          </h3>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs">
                            New
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {product.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-gray-900">
                            ${product.price}
                          </p>
                          <div className="flex items-center gap-1">
                            {renderStars(product.rating)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="featured">
          <Card>
            <CardHeader>
              <CardTitle>Featured Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16 rounded-lg">
                          <AvatarImage src={product.image} alt={product.name} />
                          <AvatarFallback className="bg-gray-100 text-gray-600 rounded-lg">
                            {product.name.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-gray-900">
                              {product.name}
                            </h3>
                            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 text-xs">
                              Featured
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {product.category}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-xl font-bold text-gray-900">
                              ${product.price}
                            </p>
                            <div className="text-right">
                              <div className="flex items-center gap-1 mb-1">
                                {renderStars(product.rating)}
                              </div>
                              <p className="text-sm text-gray-600">
                                {product.sales} sold
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lowstock">
          <Card>
            <CardHeader>
              <CardTitle>Low Stock Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products
                  .filter((p) => p.stock <= 25)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 rounded-lg">
                          <AvatarImage src={product.image} alt={product.name} />
                          <AvatarFallback className="bg-gray-100 text-gray-600 text-xs rounded-lg">
                            {product.name.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {product.category}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-600">
                          {product.stock} units left
                        </p>
                        <Button size="sm" className="mt-1">
                          Restock
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
