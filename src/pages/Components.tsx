import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
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
  Palette,
  Download,
  Upload,
  Heart,
  Star,
  Bell,
  Settings,
  Search,
  Plus,
  Minus,
  ChevronDown,
  AlertTriangle,
  Info,
  CheckCircle,
  X,
} from "lucide-react";

export default function Components() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Palette className="h-6 w-6" />
            UI Components
          </h1>
          <p className="text-gray-600">
            Complete showcase of all available UI components
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Theme
        </Button>
      </div>

      {/* Component Sections */}
      <Tabs defaultValue="buttons" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="data">Data Display</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
        </TabsList>

        {/* Buttons */}
        <TabsContent value="buttons" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button States</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    With Icon
                  </Button>
                  <Button>Loading...</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Icon Buttons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button size="icon" variant="outline">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Forms */}
        <TabsContent value="forms" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Input Fields</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text">Text Input</Label>
                  <Input id="text" placeholder="Enter text..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Input</Label>
                  <Input id="email" type="email" placeholder="Enter email..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password Input</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="disabled">Disabled Input</Label>
                  <Input
                    id="disabled"
                    disabled
                    placeholder="Disabled input..."
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Textarea & Select</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="textarea">Textarea</Label>
                  <Textarea id="textarea" placeholder="Enter your message..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="select">Select</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Checkboxes & Switches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check1" />
                    <Label htmlFor="check1">Checkbox option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check2" defaultChecked />
                    <Label htmlFor="check2">Checkbox option 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check3" disabled />
                    <Label htmlFor="check3">Disabled checkbox</Label>
                  </div>
                </div>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="switch1" />
                    <Label htmlFor="switch1">Enable notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch2" defaultChecked />
                    <Label htmlFor="switch2">Auto-save changes</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sliders & Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Slider</Label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div className="space-y-2">
                  <Label>Range Slider</Label>
                  <Slider defaultValue={[25, 75]} max={100} step={1} />
                </div>
                <div className="space-y-2">
                  <Label>Progress Bar</Label>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <Label>Large Progress</Label>
                  <Progress value={85} className="h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Data Display */}
        <TabsContent value="data" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-700">
                    Custom Blue
                  </Badge>
                  <Badge className="bg-green-100 text-green-700">
                    Custom Green
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700">
                    Custom Purple
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-700">
                    Custom Orange
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`${import.meta.env.BASE_URL}placeholder.svg`} alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`${import.meta.env.BASE_URL}placeholder.svg`} alt="Avatar" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`${import.meta.env.BASE_URL}placeholder.svg`} alt="Avatar" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={`${import.meta.env.BASE_URL}placeholder.svg`} alt="Avatar" />
                    <AvatarFallback>SW</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarFallback className="rounded-lg bg-blue-100 text-blue-600">
                      A
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarFallback className="rounded-lg bg-green-100 text-green-600">
                      B
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 rounded-lg">
                    <AvatarFallback className="rounded-lg bg-purple-100 text-purple-600">
                      C
                    </AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Separators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Horizontal Separator
                  </p>
                  <div className="space-y-2">
                    <div>Section 1</div>
                    <Separator />
                    <div>Section 2</div>
                    <Separator />
                    <div>Section 3</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Vertical Separator
                  </p>
                  <div className="flex items-center space-x-4 h-8">
                    <div>Item 1</div>
                    <Separator orientation="vertical" />
                    <div>Item 2</div>
                    <Separator orientation="vertical" />
                    <div>Item 3</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progress Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Storage Used</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Task Completion</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Profile Setup</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Feedback */}
        <TabsContent value="feedback" className="space-y-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Info Alert</AlertTitle>
                  <AlertDescription>
                    This is an informational alert message.
                  </AlertDescription>
                </Alert>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Success Alert</AlertTitle>
                  <AlertDescription>
                    Your action was completed successfully.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error Alert</AlertTitle>
                  <AlertDescription>
                    There was an error processing your request.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Status Cards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Info className="h-4 w-4" />
                    <span className="font-medium">Information</span>
                  </div>
                  <p className="text-blue-600 text-sm mt-1">
                    This is additional information that might be helpful.
                  </p>
                </div>

                <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Success</span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    Operation completed successfully!
                  </p>
                </div>

                <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-700">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="font-medium">Warning</span>
                  </div>
                  <p className="text-yellow-600 text-sm mt-1">
                    Please review this action before proceeding.
                  </p>
                </div>

                <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2 text-red-700">
                    <X className="h-4 w-4" />
                    <span className="font-medium">Error</span>
                  </div>
                  <p className="text-red-600 text-sm mt-1">
                    An error occurred while processing your request.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Navigation */}
        <TabsContent value="navigation" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tab1">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="mt-4">
                    <p className="text-sm text-gray-600">Content for Tab 1</p>
                  </TabsContent>
                  <TabsContent value="tab2" className="mt-4">
                    <p className="text-sm text-gray-600">Content for Tab 2</p>
                  </TabsContent>
                  <TabsContent value="tab3" className="mt-4">
                    <p className="text-sm text-gray-600">Content for Tab 3</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Open Menu
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Layout */}
        <TabsContent value="layout" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Layouts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Simple Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      This is a simple card with header and content.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600">
                      Card with only content, no header.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grid Layouts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-gray-100 p-4 rounded text-center text-sm">
                    Grid 1
                  </div>
                  <div className="bg-gray-100 p-4 rounded text-center text-sm">
                    Grid 2
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-100 p-4 rounded text-center text-sm">
                    Grid 1
                  </div>
                  <div className="bg-gray-100 p-4 rounded text-center text-sm">
                    Grid 2
                  </div>
                  <div className="bg-gray-100 p-4 rounded text-center text-sm">
                    Grid 3
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
