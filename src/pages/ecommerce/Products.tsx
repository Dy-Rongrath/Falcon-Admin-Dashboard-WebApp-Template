import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Star,
  Package,
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
}

const products: Product[] = [
  {
    id: "1",
    name: "iPhone 14 Pro Max",
    category: "Electronics",
    price: 1099,
    stock: 45,
    sales: 1250,
    rating: 4.8,
    status: "active",
    image: "/placeholder.svg",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "MacBook Air M2",
    category: "Computers",
    price: 1199,
    stock: 23,
    sales: 950,
    rating: 4.9,
    status: "active",
    image: "/placeholder.svg",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    name: "AirPods Pro 2nd Gen",
    category: "Audio",
    price: 249,
    stock: 0,
    sales: 750,
    rating: 4.7,
    status: "active",
    image: "/placeholder.svg",
    createdAt: "2024-01-05",
  },
  {
    id: "4",
    name: 'iPad Pro 12.9"',
    category: "Tablets",
    price: 799,
    stock: 67,
    sales: 680,
    rating: 4.6,
    status: "active",
    image: "/placeholder.svg",
    createdAt: "2024-01-20",
  },
  {
    id: "5",
    name: "Apple Watch Series 9",
    category: "Wearables",
    price: 399,
    stock: 12,
    sales: 540,
    rating: 4.5,
    status: "draft",
    image: "/placeholder.svg",
    createdAt: "2024-01-25",
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
    if (stock <= 20) return { text: "Low Stock", class: "text-orange-600" };
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

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Package className="h-6 w-6" />
            Products
          </h1>
          <p className="text-gray-600">
            Manage your product inventory and catalog
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

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
                Filter
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              Showing {products.length} of {products.length} products
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
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
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
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
    </div>
  );
}
