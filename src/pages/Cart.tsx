import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Heart,
  Star,
  ArrowLeft,
  CreditCard,
  Truck,
  Shield,
  RotateCcw,
  Tag,
  Gift,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  color?: string;
  size?: string;
  brand: string;
}

interface PromoCode {
  code: string;
  discount: number;
  type: "percentage" | "fixed";
  description: string;
}

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Apple iPhone 15 Pro",
      description: "128GB, Natural Titanium",
      price: 999,
      originalPrice: 1099,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
      rating: 4.8,
      reviewCount: 1247,
      inStock: true,
      color: "Natural Titanium",
      size: "128GB",
      brand: "Apple",
    },
    {
      id: "2",
      name: "MacBook Air M3",
      description: "13-inch, 8GB RAM, 256GB SSD",
      price: 1299,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      rating: 4.9,
      reviewCount: 892,
      inStock: true,
      color: "Space Gray",
      size: "13-inch",
      brand: "Apple",
    },
    {
      id: "3",
      name: "AirPods Pro (2nd generation)",
      description: "With MagSafe Charging Case",
      price: 249,
      originalPrice: 279,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
      rating: 4.7,
      reviewCount: 2156,
      inStock: true,
      color: "White",
      brand: "Apple",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);

  const availablePromoCodes: PromoCode[] = [
    {
      code: "SAVE10",
      discount: 10,
      type: "percentage",
      description: "10% off your order",
    },
    {
      code: "WELCOME50",
      discount: 50,
      type: "fixed",
      description: "$50 off orders over $500",
    },
    {
      code: "FREESHIP",
      discount: 0,
      type: "fixed",
      description: "Free shipping",
    },
  ];

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    const promo = availablePromoCodes.find(
      (p) => p.code === promoCode.toUpperCase(),
    );
    if (promo) {
      setAppliedPromo(promo);
      setPromoCode("");
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 500 || appliedPromo?.code === "FREESHIP" ? 0 : 15;
  const tax = subtotal * 0.08; // 8% tax
  const promoDiscount = appliedPromo
    ? appliedPromo.type === "percentage"
      ? subtotal * (appliedPromo.discount / 100)
      : appliedPromo.discount
    : 0;
  const total = subtotal + shipping + tax - promoDiscount;

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="text-falcon-text-light hover:text-falcon-blue"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-falcon-text-dark">
              Shopping Cart
            </h1>
            <p className="text-falcon-text-light">
              {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-falcon-text-light">
          <ShoppingCart className="h-5 w-5" />
          <span className="font-medium">{itemCount} items</span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <ShoppingCart className="h-16 w-16 mx-auto text-falcon-text-light mb-4" />
            <h3 className="text-xl font-semibold text-falcon-text-dark mb-2">
              Your cart is empty
            </h3>
            <p className="text-falcon-text-light mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button onClick={() => navigate("/ecommerce/products")}>
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-falcon-text-dark mb-1">
                            {item.name}
                          </h3>
                          <p className="text-falcon-text-light text-sm mb-2">
                            {item.description}
                          </p>

                          {/* Product Details */}
                          <div className="flex items-center space-x-4 text-sm text-falcon-text-light mb-3">
                            <span>Brand: {item.brand}</span>
                            {item.color && <span>Color: {item.color}</span>}
                            {item.size && <span>Size: {item.size}</span>}
                          </div>

                          {/* Rating */}
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(item.rating)
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-falcon-text-light">
                              {item.rating} ({item.reviewCount} reviews)
                            </span>
                          </div>

                          {/* Stock Status */}
                          <Badge
                            variant={item.inStock ? "secondary" : "destructive"}
                            className="mb-3"
                          >
                            {item.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col items-end space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-falcon-text-light hover:text-red-500"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            {item.originalPrice && (
                              <span className="text-sm text-falcon-text-light line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                            <span className="text-lg font-bold text-falcon-text-dark">
                              ${item.price}
                            </span>
                          </div>
                          <div className="text-sm text-falcon-text-light">
                            Total: ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Tag className="h-5 w-5" />
                  <span>Promo Code</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!appliedPromo ? (
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={applyPromoCode} variant="outline">
                      Apply
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2">
                      <Gift className="h-4 w-4 text-green-600" />
                      <div>
                        <div className="font-medium text-green-800">
                          {appliedPromo.code}
                        </div>
                        <div className="text-sm text-green-600">
                          {appliedPromo.description}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removePromoCode}
                      className="text-green-600 hover:text-green-800"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                <div className="text-sm text-falcon-text-light">
                  Available codes: SAVE10, WELCOME50, FREESHIP
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedPromo.code})</span>
                    <span>-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full" size="lg">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Proceed to Checkout
                  </Button>

                  <div className="flex items-center justify-center space-x-4 text-sm text-falcon-text-light">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Truck className="h-4 w-4" />
                      <span>Free Returns</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Truck className="h-4 w-4 text-falcon-blue" />
                    <span className="font-medium">
                      Free shipping on orders over $500
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <RotateCcw className="h-4 w-4 text-falcon-green" />
                    <span className="font-medium">30-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-falcon-yellow" />
                    <span className="font-medium">
                      2-year warranty included
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
