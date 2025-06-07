import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Plus,
  Minus,
  Eye,
  Edit,
  Package,
  Truck,
  Shield,
  RotateCcw,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Calendar,
  TrendingUp,
  BarChart3,
  Users,
  DollarSign,
  Globe,
  Award,
  AlertTriangle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  verified_purchase: boolean;
  images?: string[];
}

interface ProductDetail {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  sku: string;
  stock: number;
  rating: number;
  reviewCount: number;
  images: string[];
  variants: {
    colors: { name: string; value: string; image?: string }[];
    sizes: { name: string; available: boolean }[];
  };
  specifications: { [key: string]: string };
  features: string[];
  shipping: {
    weight: string;
    dimensions: string;
    freeShipping: boolean;
    estimatedDelivery: string;
  };
  warranty: string;
  returnPolicy: string;
  tags: string[];
  isWishlisted: boolean;
  totalSold: number;
  views: number;
}

const mockProduct: ProductDetail = {
  id: "1",
  name: "Apple iPhone 15 Pro Max",
  description:
    "The most powerful iPhone ever. Featuring the groundbreaking A17 Pro chip, professional camera system, and titanium design. Experience the future of mobile technology with advanced features designed for professionals and enthusiasts alike.",
  price: 1199,
  originalPrice: 1299,
  category: "Smartphones",
  brand: "Apple",
  sku: "APL-IP15PM-256-NT",
  stock: 24,
  rating: 4.8,
  reviewCount: 1247,
  images: [
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop",
  ],
  variants: {
    colors: [
      { name: "Natural Titanium", value: "#8E8E93" },
      { name: "Blue Titanium", value: "#1D4ED8" },
      { name: "White Titanium", value: "#F8FAFC" },
      { name: "Black Titanium", value: "#1F2937" },
    ],
    sizes: [
      { name: "128GB", available: true },
      { name: "256GB", available: true },
      { name: "512GB", available: true },
      { name: "1TB", available: false },
    ],
  },
  specifications: {
    Display: "6.7-inch Super Retina XDR OLED",
    Processor: "A17 Pro chip with 6-core GPU",
    Storage: "256GB",
    Camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
    Battery: "Up to 29 hours video playback",
    Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
    "Operating System": "iOS 17",
    "Water Resistance": "IP68",
  },
  features: [
    "Action Button for quick access to camera and more",
    "48MP Main camera with 2x Telephoto",
    "Cinematic mode in 4K Dolby Vision at 30 fps",
    "Emergency SOS via satellite",
    "Crash Detection",
    "Dynamic Island",
    "Face ID for secure authentication",
    "MagSafe and Qi wireless charging",
  ],
  shipping: {
    weight: "221g",
    dimensions: "159.9 x 76.7 x 8.25 mm",
    freeShipping: true,
    estimatedDelivery: "2-3 business days",
  },
  warranty: "1-year limited warranty",
  returnPolicy: "30-day return policy",
  tags: ["flagship", "premium", "latest", "5g", "professional"],
  isWishlisted: false,
  totalSold: 15420,
  views: 89234,
};

const mockReviews: Review[] = [
  {
    id: "1",
    user: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face",
      verified: true,
    },
    rating: 5,
    title: "Absolutely amazing phone!",
    content:
      "This is by far the best iPhone I've ever owned. The camera quality is incredible, and the performance is smooth as butter. The titanium build feels premium and sturdy. Highly recommend for anyone looking for a flagship phone.",
    date: "2024-02-15",
    helpful: 23,
    verified_purchase: true,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    ],
  },
  {
    id: "2",
    user: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      verified: false,
    },
    rating: 4,
    title: "Great phone, but expensive",
    content:
      "The phone is fantastic with excellent build quality and performance. The camera is outstanding for photography. However, the price point is quite high. Overall, a solid purchase if you can afford it.",
    date: "2024-02-10",
    helpful: 15,
    verified_purchase: true,
  },
  {
    id: "3",
    user: {
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      verified: true,
    },
    rating: 5,
    title: "Perfect for professional photography",
    content:
      "As a professional photographer, I'm impressed with the camera capabilities. The 48MP main camera and improved low-light performance make this perfect for content creation. The action button is also a nice touch.",
    date: "2024-02-08",
    helpful: 31,
    verified_purchase: true,
  },
];

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(mockProduct.isWishlisted);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log("Added to cart:", {
      product: mockProduct,
      color: mockProduct.variants.colors[selectedColor],
      size: mockProduct.variants.sizes[selectedSize],
      quantity,
    });
  };

  const handleBuyNow = () => {
    // Direct checkout logic
    navigate("/ecommerce/checkout");
  };

  const renderStars = (rating: number, size = "w-4 h-4") => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${size} ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-falcon-text-light">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/ecommerce/products")}
          className="p-0 h-auto font-normal"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Button>
        <span>/</span>
        <span>{mockProduct.category}</span>
        <span>/</span>
        <span className="text-falcon-text-dark">{mockProduct.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img
                  src={mockProduct.images[selectedImage]}
                  alt={mockProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white bg-opacity-90 hover:bg-white"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart
                      className={`h-4 w-4 ${isWishlisted ? "text-red-500 fill-current" : ""}`}
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white bg-opacity-90 hover:bg-white"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white bg-opacity-90 hover:bg-white"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2">
            {mockProduct.images.map((image, index) => (
              <div
                key={index}
                className={`aspect-square cursor-pointer rounded-lg overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-falcon-blue"
                    : "border-falcon-border-light"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${mockProduct.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline">{mockProduct.category}</Badge>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-falcon-text-light" />
                <span className="text-sm text-falcon-text-light">
                  {mockProduct.views.toLocaleString()} views
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-falcon-text-dark mb-2">
              {mockProduct.name}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {renderStars(mockProduct.rating)}
                <span className="text-sm text-falcon-text-light ml-1">
                  ({mockProduct.reviewCount} reviews)
                </span>
              </div>
              <div className="text-sm text-falcon-text-light">
                {mockProduct.totalSold.toLocaleString()} sold
              </div>
            </div>
            <p className="text-falcon-text-light mb-4">
              {mockProduct.description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-falcon-text-dark">
              ${mockProduct.price}
            </span>
            {mockProduct.originalPrice && (
              <span className="text-lg text-falcon-text-light line-through">
                ${mockProduct.originalPrice}
              </span>
            )}
            {mockProduct.originalPrice && (
              <Badge className="bg-red-100 text-red-800">
                Save ${mockProduct.originalPrice - mockProduct.price}
              </Badge>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center space-x-2">
            <Package className="h-4 w-4 text-falcon-green" />
            <span className="text-sm text-falcon-green font-medium">
              {mockProduct.stock} in stock
            </span>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold text-falcon-text-dark mb-3">
              Color: {mockProduct.variants.colors[selectedColor].name}
            </h3>
            <div className="flex space-x-2">
              {mockProduct.variants.colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-lg border-2 ${
                    selectedColor === index
                      ? "border-falcon-blue ring-2 ring-falcon-blue ring-opacity-30"
                      : "border-falcon-border-light"
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(index)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold text-falcon-text-dark mb-3">
              Storage: {mockProduct.variants.sizes[selectedSize].name}
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {mockProduct.variants.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`p-3 text-sm border rounded-lg ${
                    !size.available
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : selectedSize === index
                        ? "border-falcon-blue bg-falcon-blue bg-opacity-10 text-falcon-blue"
                        : "border-falcon-border-light hover:border-falcon-blue"
                  }`}
                  onClick={() => size.available && setSelectedSize(index)}
                  disabled={!size.available}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold text-falcon-text-dark mb-3">
              Quantity
            </h3>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setQuantity(Math.min(mockProduct.stock, quantity + 1))
                }
                disabled={quantity >= mockProduct.stock}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90"
              onClick={handleBuyNow}
            >
              Buy Now - ${(mockProduct.price * quantity).toLocaleString()}
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>

          {/* Key Features */}
          <Card>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-falcon-green" />
                  <span>Free shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-falcon-blue" />
                  <span>{mockProduct.warranty}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="h-4 w-4 text-falcon-orange" />
                  <span>{mockProduct.returnPolicy}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-purple-600" />
                  <span>Authorized seller</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="specifications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="reviews">
            Reviews ({mockProduct.reviewCount})
          </TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications">
          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(mockProduct.specifications).map(
                  ([key, value]) => (
                    <div key={key} className="flex justify-between items-start">
                      <span className="font-medium text-falcon-text-dark">
                        {key}:
                      </span>
                      <span className="text-falcon-text-light text-right">
                        {value}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-falcon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-falcon-text-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="space-y-6">
            {/* Review Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-falcon-text-dark mb-2">
                      {mockProduct.rating}
                    </div>
                    <div className="flex justify-center mb-2">
                      {renderStars(mockProduct.rating, "w-5 h-5")}
                    </div>
                    <div className="text-sm text-falcon-text-light">
                      Based on {mockProduct.reviewCount} reviews
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <span className="text-sm w-8">{rating}★</span>
                        <Progress
                          value={rating >= 4 ? 80 : rating === 3 ? 15 : 5}
                          className="flex-1 h-2"
                        />
                        <span className="text-sm text-falcon-text-light w-12">
                          {rating >= 4 ? "80%" : rating === 3 ? "15%" : "5%"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            <div className="space-y-4">
              {mockReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src={review.user.avatar}
                          alt={review.user.name}
                        />
                        <AvatarFallback>
                          {review.user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium text-falcon-text-dark">
                            {review.user.name}
                          </span>
                          {review.user.verified && (
                            <Badge className="bg-falcon-blue text-white text-xs">
                              Verified
                            </Badge>
                          )}
                          {review.verified_purchase && (
                            <Badge variant="outline" className="text-xs">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          {renderStars(review.rating)}
                          <span className="text-sm text-falcon-text-light">
                            {review.date}
                          </span>
                        </div>
                        <h4 className="font-medium text-falcon-text-dark mb-2">
                          {review.title}
                        </h4>
                        <p className="text-falcon-text-light mb-3">
                          {review.content}
                        </p>
                        {review.images && review.images.length > 0 && (
                          <div className="flex space-x-2 mb-3">
                            {review.images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt="Review"
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                        )}
                        <div className="flex items-center space-x-4 text-sm">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto"
                          >
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            Helpful ({review.helpful})
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto"
                          >
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>Shipping & Returns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-falcon-text-dark mb-3">
                  Shipping Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">Weight:</span>
                    <span className="ml-2 text-falcon-text-light">
                      {mockProduct.shipping.weight}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Dimensions:</span>
                    <span className="ml-2 text-falcon-text-light">
                      {mockProduct.shipping.dimensions}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Delivery:</span>
                    <span className="ml-2 text-falcon-text-light">
                      {mockProduct.shipping.estimatedDelivery}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Shipping Cost:</span>
                    <span className="ml-2 text-falcon-green font-medium">
                      {mockProduct.shipping.freeShipping ? "FREE" : "$15.99"}
                    </span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-falcon-text-dark mb-3">
                  Return Policy
                </h3>
                <div className="space-y-2 text-falcon-text-light">
                  <p>• {mockProduct.returnPolicy}</p>
                  <p>• Items must be in original packaging and condition</p>
                  <p>• Free return shipping for defective items</p>
                  <p>• Refund processed within 5-7 business days</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-falcon-text-dark mb-3">
                  Warranty
                </h3>
                <p className="text-falcon-text-light">{mockProduct.warranty}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetails;
