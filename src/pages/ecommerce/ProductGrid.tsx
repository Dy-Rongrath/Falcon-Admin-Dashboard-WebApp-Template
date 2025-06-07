import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  stock: number;
  status: "active" | "draft" | "archived";
  sold: number;
  inStock: boolean;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Apple iPhone 15 Pro Max",
    description:
      "The most powerful iPhone with titanium design, A17 Pro chip, and professional camera system.",
    price: 1199,
    originalPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
    category: "Smartphones",
    brand: "Apple",
    rating: 4.8,
    reviews: 1247,
    stock: 24,
    status: "active",
    sold: 156,
    inStock: true,
  },
  {
    id: "2",
    name: "MacBook Air M3",
    description:
      "13-inch MacBook Air with M3 chip, 8GB RAM, and 256GB SSD. Incredibly thin and light.",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
    category: "Laptops",
    brand: "Apple",
    rating: 4.9,
    reviews: 892,
    stock: 12,
    status: "active",
    sold: 89,
    inStock: true,
  },
  {
    id: "3",
    name: "AirPods Pro (2nd generation)",
    description:
      "Active Noise Cancellation, Adaptive Transparency, and Spatial Audio with MagSafe Case.",
    price: 249,
    originalPrice: 279,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
    category: "Audio",
    brand: "Apple",
    rating: 4.7,
    reviews: 2156,
    stock: 45,
    status: "active",
    sold: 234,
    inStock: true,
  },
  {
    id: "4",
    name: "Samsung Galaxy S24 Ultra",
    description:
      "Premium Android smartphone with S Pen, 200MP camera, and titanium frame.",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop",
    category: "Smartphones",
    brand: "Samsung",
    rating: 4.6,
    reviews: 678,
    stock: 18,
    status: "active",
    sold: 67,
    inStock: true,
  },
  {
    id: "5",
    name: "Sony WH-1000XM5",
    description:
      "Premium wireless noise canceling headphones with 30-hour battery life.",
    price: 349,
    originalPrice: 399,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
    category: "Audio",
    brand: "Sony",
    rating: 4.5,
    reviews: 1089,
    stock: 0,
    status: "active",
    sold: 145,
    inStock: false,
  },
  {
    id: "6",
    name: "Apple Watch Series 9",
    description:
      "Advanced health features, Always-On Retina display, and powerful S9 chip.",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop",
    category: "Wearables",
    brand: "Apple",
    rating: 4.4,
    reviews: 456,
    stock: 32,
    status: "active",
    sold: 78,
    inStock: true,
  },
  {
    id: "7",
    name: "Microsoft Surface Laptop 5",
    description:
      "13.5-inch touchscreen laptop with 12th Gen Intel Core processors.",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    category: "Laptops",
    brand: "Microsoft",
    rating: 4.3,
    reviews: 234,
    stock: 8,
    status: "draft",
    sold: 23,
    inStock: true,
  },
  {
    id: "8",
    name: "Google Pixel 8 Pro",
    description:
      "AI-powered photography, Magic Eraser, and pure Android experience.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "Smartphones",
    brand: "Google",
    rating: 4.5,
    reviews: 567,
    stock: 21,
    status: "active",
    sold: 89,
    inStock: true,
  },
];

const ProductGrid = () => {
  const navigate = useNavigate();
  const [products] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const categories = ["all", "Smartphones", "Laptops", "Audio", "Wearables"];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.id.localeCompare(a.id);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
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

  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.status === "active").length;
  const outOfStock = products.filter((p) => !p.inStock).length;
  const draftProducts = products.filter((p) => p.status === "draft").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
            <Package className="h-6 w-6 text-falcon-blue" />
            Product Grid
          </h1>
          <p className="text-falcon-text-light font-poppins">
            Browse products in an elegant grid layout
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => navigate("/ecommerce/products")}
            className="font-poppins"
          >
            <List className="h-4 w-4 mr-2" />
            List View
          </Button>
          <Button variant="outline" className="font-poppins">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button
            className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins"
            onClick={() => navigate("/ecommerce/add-product")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-falcon-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Total Products
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {totalProducts}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-falcon-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Active
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {activeProducts}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Out of Stock
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {outOfStock}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Edit className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Draft
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {draftProducts}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-falcon-text-light h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name A-Z</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden"
            onClick={() => navigate(`/ecommerce/products/${product.id}`)}
          >
            <div className="relative">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Overlay Actions */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex flex-col space-y-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to wishlist
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/ecommerce/products/${product.id}`);
                    }}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-2 left-2">
                <Badge className={getStatusColor(product.status)}>
                  {product.status}
                </Badge>
              </div>

              {/* Discount Badge */}
              {product.originalPrice && (
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-red-500 text-white">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100,
                    )}
                    % OFF
                  </Badge>
                </div>
              )}

              {/* Stock Status */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-white">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>

            <CardContent className="p-4 space-y-3">
              {/* Product Info */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() =>
                          navigate(`/ecommerce/products/${product.id}`)
                        }
                      >
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
                </div>

                <h3 className="font-semibold text-falcon-text-dark text-sm line-clamp-2 mb-1">
                  {product.name}
                </h3>

                <p className="text-xs text-falcon-text-light line-clamp-2 mb-2">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="text-xs text-falcon-text-light ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <span className="text-xs text-falcon-text-light">
                  {product.sold} sold
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-falcon-text-dark">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-falcon-text-light line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <span className="text-xs text-falcon-text-light">
                  Stock: {product.stock}
                </span>
              </div>

              {/* Action Button */}
              <Button
                className="w-full bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to cart logic
                }}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-16 w-16 mx-auto text-falcon-text-light mb-4" />
          <h3 className="text-xl font-semibold text-falcon-text-dark mb-2">
            No products found
          </h3>
          <p className="text-falcon-text-light mb-6">
            Try adjusting your search or filter criteria
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
