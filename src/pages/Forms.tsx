import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  FileText,
  Calendar as CalendarIcon,
  Upload,
  Save,
  Eye,
  EyeOff,
  Star,
  Heart,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  CreditCard,
  Shield,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function Forms() {
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState<Date>();
  const [rating, setRating] = useState(0);
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchValues, setSwitchValues] = useState({
    notifications: true,
    marketing: false,
    security: true,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
    category: "",
    priority: "",
    budget: "",
    timeline: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const StarRating = ({
    rating,
    onRatingChange,
  }: {
    rating: number;
    onRatingChange: (rating: number) => void;
  }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className="transition-colors"
          >
            <Star
              className={cn(
                "h-5 w-5",
                star <= rating
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300",
              )}
            />
          </button>
        ))}
        <span className="ml-2 text-sm text-falcon-text-muted font-poppins">
          {rating}/5
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-primary font-poppins flex items-center gap-2">
            <FileText className="h-6 w-6 text-falcon-blue" />
            Forms
          </h1>
          <p className="text-falcon-text-secondary font-poppins">
            Comprehensive form components and layouts for all your needs
          </p>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-falcon-bg-light">
          <TabsTrigger value="basic" className="font-poppins">
            Basic Forms
          </TabsTrigger>
          <TabsTrigger value="advanced" className="font-poppins">
            Advanced
          </TabsTrigger>
          <TabsTrigger value="validation" className="font-poppins">
            Validation
          </TabsTrigger>
          <TabsTrigger value="layouts" className="font-poppins">
            Layouts
          </TabsTrigger>
          <TabsTrigger value="examples" className="font-poppins">
            Examples
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic Input Elements */}
            <Card className="border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Basic Input Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text-input" className="font-poppins">
                    Text Input
                  </Label>
                  <Input
                    id="text-input"
                    placeholder="Enter text..."
                    className="font-poppins"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-input" className="font-poppins">
                    Email Input
                  </Label>
                  <Input
                    id="email-input"
                    type="email"
                    placeholder="Enter email..."
                    className="font-poppins"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-input" className="font-poppins">
                    Password Input
                  </Label>
                  <div className="relative">
                    <Input
                      id="password-input"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password..."
                      className="font-poppins pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="textarea" className="font-poppins">
                    Textarea
                  </Label>
                  <Textarea
                    id="textarea"
                    placeholder="Enter message..."
                    rows={3}
                    className="font-poppins"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Selection Elements */}
            <Card className="border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Selection Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-poppins">Select Dropdown</Label>
                  <Select>
                    <SelectTrigger className="font-poppins">
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">Radio Group</Label>
                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="r1" />
                      <Label htmlFor="r1" className="font-poppins">
                        Option 1
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="r2" />
                      <Label htmlFor="r2" className="font-poppins">
                        Option 2
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option3" id="r3" />
                      <Label htmlFor="r3" className="font-poppins">
                        Option 3
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">Checkboxes</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="check1" />
                      <Label htmlFor="check1" className="font-poppins">
                        Subscribe to newsletter
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="check2" />
                      <Label htmlFor="check2" className="font-poppins">
                        Accept terms and conditions
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="check3" />
                      <Label htmlFor="check3" className="font-poppins">
                        Receive marketing emails
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Elements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Interactive Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="font-poppins">Switches</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications" className="font-poppins">
                        Email Notifications
                      </Label>
                      <Switch
                        id="notifications"
                        checked={switchValues.notifications}
                        onCheckedChange={(checked) =>
                          setSwitchValues((prev) => ({
                            ...prev,
                            notifications: checked,
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketing" className="font-poppins">
                        Marketing Emails
                      </Label>
                      <Switch
                        id="marketing"
                        checked={switchValues.marketing}
                        onCheckedChange={(checked) =>
                          setSwitchValues((prev) => ({
                            ...prev,
                            marketing: checked,
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="security" className="font-poppins">
                        Security Alerts
                      </Label>
                      <Switch
                        id="security"
                        checked={switchValues.security}
                        onCheckedChange={(checked) =>
                          setSwitchValues((prev) => ({
                            ...prev,
                            security: checked,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">Slider</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-sm text-falcon-text-muted font-poppins">
                    Value: {sliderValue[0]}%
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">Star Rating</Label>
                  <StarRating rating={rating} onRatingChange={setRating} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Date & File Inputs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-poppins">Date Picker</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-poppins"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">File Upload</Label>
                  <div className="border-2 border-dashed border-falcon-border-light rounded-lg p-6 text-center">
                    <Upload className="h-10 w-10 text-falcon-text-muted mx-auto mb-2" />
                    <p className="text-sm text-falcon-text-muted font-poppins mb-2">
                      Drop files here or click to browse
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-poppins"
                    >
                      Choose Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="validation" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Form Validation States
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-poppins text-falcon-green">
                    Valid Input
                  </Label>
                  <div className="relative">
                    <Input
                      className="border-falcon-green focus:ring-falcon-green font-poppins"
                      placeholder="john@example.com"
                      defaultValue="john@example.com"
                    />
                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-green" />
                  </div>
                  <p className="text-sm text-falcon-green font-poppins">
                    Email is valid
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins text-red-600">
                    Invalid Input
                  </Label>
                  <div className="relative">
                    <Input
                      className="border-red-500 focus:ring-red-500 font-poppins"
                      placeholder="Enter email..."
                      defaultValue="invalid-email"
                    />
                    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-sm text-red-600 font-poppins">
                    Please enter a valid email address
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins text-falcon-orange">
                    Warning Input
                  </Label>
                  <div className="relative">
                    <Input
                      className="border-falcon-orange focus:ring-falcon-orange font-poppins"
                      placeholder="Enter password..."
                      type="password"
                      defaultValue="weak"
                    />
                    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-orange" />
                  </div>
                  <p className="text-sm text-falcon-orange font-poppins">
                    Password strength: Weak
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins text-falcon-blue">
                    Info Input
                  </Label>
                  <div className="relative">
                    <Input
                      className="border-falcon-blue focus:ring-falcon-blue font-poppins"
                      placeholder="Enter username..."
                      defaultValue="john_doe"
                    />
                    <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-blue" />
                  </div>
                  <p className="text-sm text-falcon-blue font-poppins">
                    Username is available
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-falcon-border-light">
              <CardHeader>
                <CardTitle className="font-poppins text-falcon-text-primary">
                  Input Sizes & Variants
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-poppins">Small Input</Label>
                  <Input
                    className="h-8 text-sm font-poppins"
                    placeholder="Small input..."
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">Default Input</Label>
                  <Input
                    className="font-poppins"
                    placeholder="Default input..."
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">Large Input</Label>
                  <Input
                    className="h-12 text-lg font-poppins"
                    placeholder="Large input..."
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">Disabled Input</Label>
                  <Input
                    disabled
                    className="font-poppins"
                    placeholder="Disabled input..."
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">Readonly Input</Label>
                  <Input
                    readOnly
                    className="font-poppins"
                    value="Read-only value"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          {/* Contact Form Example */}
          <Card className="border-falcon-border-light">
            <CardHeader>
              <CardTitle className="font-poppins text-falcon-text-primary">
                Contact Form Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-poppins">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="font-poppins"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-poppins">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="font-poppins"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-poppins">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="font-poppins"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-poppins">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="font-poppins"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="font-poppins">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="font-poppins"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-poppins">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="font-poppins"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="font-poppins">
                    I agree to the terms and conditions
                  </Label>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="font-poppins"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
