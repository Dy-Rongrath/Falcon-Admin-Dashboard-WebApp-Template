import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  CreditCard,
  Truck,
  Shield,
  MapPin,
  User,
  Package,
  Tag,
  Gift,
  Lock,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variant?: {
    color?: string;
    size?: string;
  };
}

interface CheckoutForm {
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
  shipping: {
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
  };
  billing: {
    sameAsShipping: boolean;
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
  };
  payment: {
    method: "credit_card" | "paypal" | "apple_pay" | "google_pay";
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardName: string;
  };
  shipping_method: string;
  special_instructions: string;
  newsletter: boolean;
  terms: boolean;
}

const mockCartItems: CartItem[] = [
  {
    id: "1",
    name: "Apple iPhone 15 Pro Max",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=80&h=80&fit=crop",
    price: 1199.0,
    quantity: 1,
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
    price: 249.0,
    quantity: 1,
  },
];

const shippingMethods = [
  {
    id: "standard",
    name: "Standard Shipping",
    description: "5-7 business days",
    price: 0,
    estimated: "February 25-27",
  },
  {
    id: "express",
    name: "Express Shipping",
    description: "2-3 business days",
    price: 15.99,
    estimated: "February 20-22",
  },
  {
    id: "overnight",
    name: "Overnight Shipping",
    description: "Next business day",
    price: 29.99,
    estimated: "February 19",
  },
];

const Checkout = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [processing, setProcessing] = useState(false);

  const [form, setForm] = useState<CheckoutForm>({
    customer: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
    shipping: {
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      phone: "",
    },
    billing: {
      sameAsShipping: true,
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      phone: "",
    },
    payment: {
      method: "credit_card",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
    },
    shipping_method: "standard",
    special_instructions: "",
    newsletter: false,
    terms: false,
  });

  const subtotal = mockCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const selectedShipping = shippingMethods.find(
    (method) => method.id === form.shipping_method,
  );
  const shippingCost = selectedShipping?.price || 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  const handleInputChange = (section: string, field: string, value: any) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof CheckoutForm],
        [field]: value,
      },
    }));
  };

  const handlePlaceOrder = async () => {
    setProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      setProcessing(false);
      navigate("/ecommerce/orders");
    }, 3000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const steps = [
    { id: 1, name: "Information", completed: currentStep > 1 },
    { id: 2, name: "Shipping", completed: currentStep > 2 },
    { id: 3, name: "Payment", completed: currentStep > 3 },
    { id: 4, name: "Review", completed: false },
  ];

  return (
    <div className="min-h-screen bg-falcon-bg-light">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/cart")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
            <h1 className="text-2xl font-bold text-falcon-text-dark">
              Checkout
            </h1>
          </div>
          <div className="flex items-center space-x-2 text-sm text-falcon-text-light">
            <Lock className="h-4 w-4" />
            <span>Secure Checkout</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed
                        ? "bg-falcon-green text-white"
                        : currentStep === step.id
                          ? "bg-falcon-blue text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`ml-2 text-sm ${
                      currentStep === step.id
                        ? "text-falcon-blue font-medium"
                        : "text-falcon-text-light"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-4 ${
                      step.completed ? "bg-falcon-green" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Customer Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.customer.email}
                      onChange={(e) =>
                        handleInputChange("customer", "email", e.target.value)
                      }
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={form.customer.firstName}
                        onChange={(e) =>
                          handleInputChange(
                            "customer",
                            "firstName",
                            e.target.value,
                          )
                        }
                        placeholder="First name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={form.customer.lastName}
                        onChange={(e) =>
                          handleInputChange(
                            "customer",
                            "lastName",
                            e.target.value,
                          )
                        }
                        placeholder="Last name"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.customer.phone}
                      onChange={(e) =>
                        handleInputChange("customer", "phone", e.target.value)
                      }
                      placeholder="+1 (555) 123-4567"
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={form.newsletter}
                      onCheckedChange={(checked) =>
                        setForm((prev) => ({
                          ...prev,
                          newsletter: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for updates and special offers
                    </Label>
                  </div>

                  <Button onClick={() => setCurrentStep(2)} className="w-full">
                    Continue to Shipping
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Shipping Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="shippingFirstName">First Name *</Label>
                        <Input
                          id="shippingFirstName"
                          value={form.shipping.firstName}
                          onChange={(e) =>
                            handleInputChange(
                              "shipping",
                              "firstName",
                              e.target.value,
                            )
                          }
                          placeholder="First name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="shippingLastName">Last Name *</Label>
                        <Input
                          id="shippingLastName"
                          value={form.shipping.lastName}
                          onChange={(e) =>
                            handleInputChange(
                              "shipping",
                              "lastName",
                              e.target.value,
                            )
                          }
                          placeholder="Last name"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        value={form.shipping.company}
                        onChange={(e) =>
                          handleInputChange(
                            "shipping",
                            "company",
                            e.target.value,
                          )
                        }
                        placeholder="Company name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address1">Address *</Label>
                      <Input
                        id="address1"
                        value={form.shipping.address1}
                        onChange={(e) =>
                          handleInputChange(
                            "shipping",
                            "address1",
                            e.target.value,
                          )
                        }
                        placeholder="Street address"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address2">
                        Apartment, suite, etc. (Optional)
                      </Label>
                      <Input
                        id="address2"
                        value={form.shipping.address2}
                        onChange={(e) =>
                          handleInputChange(
                            "shipping",
                            "address2",
                            e.target.value,
                          )
                        }
                        placeholder="Apartment, suite, unit, etc."
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={form.shipping.city}
                          onChange={(e) =>
                            handleInputChange(
                              "shipping",
                              "city",
                              e.target.value,
                            )
                          }
                          placeholder="City"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Select
                          value={form.shipping.state}
                          onValueChange={(value) =>
                            handleInputChange("shipping", "state", value)
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="State" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code *</Label>
                        <Input
                          id="zip"
                          value={form.shipping.zip}
                          onChange={(e) =>
                            handleInputChange("shipping", "zip", e.target.value)
                          }
                          placeholder="ZIP code"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="shippingPhone">Phone Number</Label>
                      <Input
                        id="shippingPhone"
                        type="tel"
                        value={form.shipping.phone}
                        onChange={(e) =>
                          handleInputChange("shipping", "phone", e.target.value)
                        }
                        placeholder="+1 (555) 123-4567"
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Shipping Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={form.shipping_method}
                      onValueChange={(value) =>
                        setForm((prev) => ({ ...prev, shipping_method: value }))
                      }
                      className="space-y-3"
                    >
                      {shippingMethods.map((method) => (
                        <div
                          key={method.id}
                          className="flex items-center space-x-3 p-3 border border-falcon-border-light rounded-lg"
                        >
                          <RadioGroupItem value={method.id} id={method.id} />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <Label
                                  htmlFor={method.id}
                                  className="font-medium text-falcon-text-dark"
                                >
                                  {method.name}
                                </Label>
                                <p className="text-sm text-falcon-text-light">
                                  {method.description}
                                </p>
                                <p className="text-sm text-falcon-text-light">
                                  Estimated delivery: {method.estimated}
                                </p>
                              </div>
                              <span className="font-medium text-falcon-text-dark">
                                {method.price === 0
                                  ? "FREE"
                                  : formatCurrency(method.price)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    className="flex-1"
                  >
                    Back to Information
                  </Button>
                  <Button onClick={() => setCurrentStep(3)} className="flex-1">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup
                      value={form.payment.method}
                      onValueChange={(value) =>
                        handleInputChange("payment", "method", value)
                      }
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-3 border border-falcon-border-light rounded-lg">
                        <RadioGroupItem value="credit_card" id="credit_card" />
                        <Label
                          htmlFor="credit_card"
                          className="flex items-center gap-2"
                        >
                          <CreditCard className="h-4 w-4" />
                          Credit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border border-falcon-border-light rounded-lg">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label
                          htmlFor="paypal"
                          className="flex items-center gap-2"
                        >
                          <div className="w-4 h-4 bg-blue-600 rounded"></div>
                          PayPal
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border border-falcon-border-light rounded-lg">
                        <RadioGroupItem value="apple_pay" id="apple_pay" />
                        <Label
                          htmlFor="apple_pay"
                          className="flex items-center gap-2"
                        >
                          <div className="w-4 h-4 bg-black rounded"></div>
                          Apple Pay
                        </Label>
                      </div>
                    </RadioGroup>

                    {form.payment.method === "credit_card" && (
                      <div className="space-y-4 pt-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            value={form.payment.cardNumber}
                            onChange={(e) =>
                              handleInputChange(
                                "payment",
                                "cardNumber",
                                e.target.value,
                              )
                            }
                            placeholder="1234 5678 9012 3456"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="cardName">Name on Card *</Label>
                          <Input
                            id="cardName"
                            value={form.payment.cardName}
                            onChange={(e) =>
                              handleInputChange(
                                "payment",
                                "cardName",
                                e.target.value,
                              )
                            }
                            placeholder="Full name as shown on card"
                            className="mt-1"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              value={form.payment.expiryDate}
                              onChange={(e) =>
                                handleInputChange(
                                  "payment",
                                  "expiryDate",
                                  e.target.value,
                                )
                              }
                              placeholder="MM/YY"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              value={form.payment.cvv}
                              onChange={(e) =>
                                handleInputChange(
                                  "payment",
                                  "cvv",
                                  e.target.value,
                                )
                              }
                              placeholder="123"
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Billing Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sameAsShipping"
                        checked={form.billing.sameAsShipping}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "billing",
                            "sameAsShipping",
                            checked,
                          )
                        }
                      />
                      <Label htmlFor="sameAsShipping">
                        Same as shipping address
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(2)}
                    className="flex-1"
                  >
                    Back to Shipping
                  </Button>
                  <Button onClick={() => setCurrentStep(4)} className="flex-1">
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Review</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="instructions">
                        Special Instructions (Optional)
                      </Label>
                      <Input
                        id="instructions"
                        value={form.special_instructions}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            special_instructions: e.target.value,
                          }))
                        }
                        placeholder="Any special delivery instructions..."
                        className="mt-1"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={form.terms}
                        onCheckedChange={(checked) =>
                          setForm((prev) => ({
                            ...prev,
                            terms: checked as boolean,
                          }))
                        }
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Button
                          variant="link"
                          className="h-auto p-0 text-falcon-blue"
                        >
                          Terms of Service
                        </Button>{" "}
                        and{" "}
                        <Button
                          variant="link"
                          className="h-auto p-0 text-falcon-blue"
                        >
                          Privacy Policy
                        </Button>
                      </Label>
                    </div>

                    <div className="p-4 bg-falcon-bg-light rounded-lg">
                      <div className="flex items-center space-x-2 text-sm text-falcon-text-light">
                        <Shield className="h-4 w-4" />
                        <span>
                          Your payment information is secure and encrypted
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(3)}
                    className="flex-1"
                  >
                    Back to Payment
                  </Button>
                  <Button
                    onClick={handlePlaceOrder}
                    disabled={!form.terms || processing}
                    className="flex-1"
                  >
                    {processing ? (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 animate-spin" />
                        Processing...
                      </div>
                    ) : (
                      `Place Order - ${formatCurrency(total)}`
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockCartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                        {item.quantity}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-falcon-text-dark text-sm">
                        {item.name}
                      </h4>
                      {item.variant && (
                        <p className="text-xs text-falcon-text-light">
                          {item.variant.color} / {item.variant.size}
                        </p>
                      )}
                    </div>
                    <span className="font-medium text-falcon-text-dark">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping:</span>
                    <span>
                      {shippingCost === 0
                        ? "FREE"
                        : formatCurrency(shippingCost)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax:</span>
                    <span>{formatCurrency(tax)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-falcon-green" />
                    <span>Secure 256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-falcon-blue" />
                    <span>Free returns within 30 days</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-falcon-orange" />
                    <span>2-year warranty included</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
