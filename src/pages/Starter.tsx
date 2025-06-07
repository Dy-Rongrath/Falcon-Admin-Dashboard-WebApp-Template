import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Rocket,
  Code,
  Download,
  Play,
  CheckCircle,
  ArrowRight,
  Book,
  Settings,
  Palette,
  Globe,
  Zap,
  Shield,
  Users,
  Heart,
  Star,
  Github,
  ExternalLink,
  Copy,
  Terminal,
  FolderOpen,
  FileText,
  Layers,
  Package,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react";

const Starter = () => {
  const quickStartSteps = [
    {
      title: "Clone Repository",
      description: "Get started by cloning the Falcon template repository",
      code: "git clone https://github.com/your-repo/falcon-react-template.git",
      icon: Github,
    },
    {
      title: "Install Dependencies",
      description: "Install all required packages using npm or yarn",
      code: "npm install\n# or\nyarn install",
      icon: Package,
    },
    {
      title: "Start Development",
      description: "Run the development server and start building",
      code: "npm run dev\n# or\nyarn dev",
      icon: Play,
    },
    {
      title: "Build for Production",
      description: "Create optimized production build",
      code: "npm run build\n# or\nyarn build",
      icon: Rocket,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed with lazy loading and code splitting",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Shield,
      title: "Type Safety",
      description: "Built with TypeScript for better development experience",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Palette,
      title: "Customizable Design",
      description: "Easy to customize with Tailwind CSS and design tokens",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Mobile-first approach with responsive components",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Built for teams with clear code structure and documentation",
      color: "bg-falcon-blue bg-opacity-10 text-falcon-blue",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Integrated state management and API handling",
      color: "bg-falcon-orange bg-opacity-10 text-falcon-orange",
    },
  ];

  const techStack = [
    {
      name: "React 18",
      description: "Latest React with concurrent features",
      icon: "⚛️",
    },
    { name: "TypeScript", description: "Type-safe development", icon: "🔷" },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: "🎨",
    },
    { name: "Vite", description: "Fast build tool and dev server", icon: "⚡" },
    { name: "React Router", description: "Client-side routing", icon: "🛤️" },
    {
      name: "Radix UI",
      description: "Accessible component primitives",
      icon: "🧩",
    },
    { name: "Lucide React", description: "Beautiful icon library", icon: "🎯" },
    {
      name: "Recharts",
      description: "Composable charting library",
      icon: "📊",
    },
  ];

  const folderStructure = [
    {
      name: "src/",
      type: "folder",
      children: [
        {
          name: "components/",
          type: "folder",
          description: "Reusable UI components",
        },
        { name: "pages/", type: "folder", description: "Application pages" },
        {
          name: "lib/",
          type: "folder",
          description: "Utility functions and helpers",
        },
        { name: "hooks/", type: "folder", description: "Custom React hooks" },
        {
          name: "types/",
          type: "folder",
          description: "TypeScript type definitions",
        },
        {
          name: "App.tsx",
          type: "file",
          description: "Main application component",
        },
        {
          name: "main.tsx",
          type: "file",
          description: "Application entry point",
        },
      ],
    },
    { name: "public/", type: "folder", description: "Static assets" },
    {
      name: "package.json",
      type: "file",
      description: "Project dependencies and scripts",
    },
    {
      name: "tailwind.config.ts",
      type: "file",
      description: "Tailwind CSS configuration",
    },
    {
      name: "vite.config.ts",
      type: "file",
      description: "Vite build configuration",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-falcon-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
          <Rocket className="h-8 w-8 text-falcon-blue" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-falcon-text-dark font-poppins">
            Welcome to Falcon
          </h1>
          <p className="text-lg text-falcon-text-light font-poppins mt-2">
            A modern, responsive admin dashboard template built with React and
            TypeScript
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90">
            <Play className="h-4 w-4 mr-2" />
            Get Started
          </Button>
          <Button variant="outline">
            <Github className="h-4 w-4 mr-2" />
            View on GitHub
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="h-6 w-6 text-falcon-green" />
            </div>
            <div className="text-2xl font-bold text-falcon-text-dark">4.9</div>
            <p className="text-sm text-falcon-text-light">Rating</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Download className="h-6 w-6 text-falcon-blue" />
            </div>
            <div className="text-2xl font-bold text-falcon-text-dark">10k+</div>
            <p className="text-sm text-falcon-text-light">Downloads</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-falcon-orange" />
            </div>
            <div className="text-2xl font-bold text-falcon-text-dark">2.5k</div>
            <p className="text-sm text-falcon-text-light">Developers</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-falcon-text-dark">95%</div>
            <p className="text-sm text-falcon-text-light">Satisfaction</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="quickstart" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="customization">Customization</TabsTrigger>
          <TabsTrigger value="deployment">Deployment</TabsTrigger>
        </TabsList>

        <TabsContent value="quickstart" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Quick Start Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {quickStartSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-falcon-blue" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-falcon-text-dark mb-1">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-sm text-falcon-text-light mb-3">
                          {step.description}
                        </p>
                        <div className="bg-gray-900 rounded-lg p-3 relative">
                          <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                            {step.code}
                          </pre>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 h-6 w-6 p-0 text-gray-400 hover:text-white"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 border border-falcon-border-light rounded-lg"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <div>
                      <div className="font-medium text-falcon-text-dark text-sm">
                        {tech.name}
                      </div>
                      <div className="text-xs text-falcon-text-light">
                        {tech.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-falcon-text-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-falcon-text-light">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Device Compatibility */}
          <Card>
            <CardHeader>
              <CardTitle>Device Compatibility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Monitor className="h-12 w-12 mx-auto text-falcon-blue mb-3" />
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    Desktop
                  </h3>
                  <p className="text-sm text-falcon-text-light">
                    Optimized for large screens with full feature set
                  </p>
                </div>
                <div className="text-center">
                  <Tablet className="h-12 w-12 mx-auto text-falcon-green mb-3" />
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    Tablet
                  </h3>
                  <p className="text-sm text-falcon-text-light">
                    Touch-friendly interface with adaptive layouts
                  </p>
                </div>
                <div className="text-center">
                  <Smartphone className="h-12 w-12 mx-auto text-falcon-orange mb-3" />
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    Mobile
                  </h3>
                  <p className="text-sm text-falcon-text-light">
                    Mobile-first design with collapsible navigation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="structure" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="h-5 w-5" />
                Project Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {folderStructure.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center space-x-2 py-1">
                      {item.type === "folder" ? (
                        <FolderOpen className="h-4 w-4 text-falcon-blue" />
                      ) : (
                        <FileText className="h-4 w-4 text-falcon-text-light" />
                      )}
                      <span className="font-mono text-sm text-falcon-text-dark">
                        {item.name}
                      </span>
                      {item.description && (
                        <span className="text-xs text-falcon-text-light">
                          - {item.description}
                        </span>
                      )}
                    </div>
                    {item.children && (
                      <div className="ml-6 space-y-1">
                        {item.children.map((child, childIndex) => (
                          <div
                            key={childIndex}
                            className="flex items-center space-x-2 py-1"
                          >
                            {child.type === "folder" ? (
                              <FolderOpen className="h-4 w-4 text-falcon-blue" />
                            ) : (
                              <FileText className="h-4 w-4 text-falcon-text-light" />
                            )}
                            <span className="font-mono text-sm text-falcon-text-dark">
                              {child.name}
                            </span>
                            {child.description && (
                              <span className="text-xs text-falcon-text-light">
                                - {child.description}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Architecture Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Architecture Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-falcon-border-light rounded-lg">
                  <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Layers className="h-6 w-6 text-falcon-blue" />
                  </div>
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    Component Layer
                  </h3>
                  <p className="text-sm text-falcon-text-light">
                    Reusable UI components built with React and TypeScript
                  </p>
                </div>
                <div className="text-center p-4 border border-falcon-border-light rounded-lg">
                  <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Database className="h-6 w-6 text-falcon-green" />
                  </div>
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    Data Layer
                  </h3>
                  <p className="text-sm text-falcon-text-light">
                    State management with React Query and local state
                  </p>
                </div>
                <div className="text-center p-4 border border-falcon-border-light rounded-lg">
                  <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Palette className="h-6 w-6 text-falcon-orange" />
                  </div>
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    Design System
                  </h3>
                  <p className="text-sm text-falcon-text-light">
                    Consistent design tokens and styling with Tailwind CSS
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Theme Customization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-falcon-text-light">
                Customize the look and feel of your application by modifying the
                design tokens in your configuration files.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                  {`// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'falcon-blue': '#2C7BE5',
        'falcon-green': '#00D27A',
        'falcon-orange': '#F5803E',
        // Add your custom colors
      }
    }
  }
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Configuration Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-falcon-text-dark mb-3">
                    Theme Settings
                  </h3>
                  <ul className="space-y-2 text-sm text-falcon-text-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-falcon-green" />
                      Custom color palette
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-falcon-green" />
                      Typography system
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-falcon-green" />
                      Spacing and sizing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-falcon-green" />
                      Border radius and shadows
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-falcon-text-dark mb-3">
                    Layout Options
                  </h3>
                  <ul className="space-y-2 text-sm text-falcon-text-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-falcon-green" />
                      Sidebar positioning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-falcon-green" />
                      Navigation styles
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-falcon-green" />
                      Header configuration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-falcon-green" />
                      Footer options
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deployment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                Deployment Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-falcon-border-light rounded-lg">
                  <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Cloud className="h-6 w-6 text-falcon-blue" />
                  </div>
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    Vercel
                  </h3>
                  <p className="text-sm text-falcon-text-light mb-3">
                    Deploy with zero configuration
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Deploy
                  </Button>
                </div>
                <div className="text-center p-4 border border-falcon-border-light rounded-lg">
                  <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Cloud className="h-6 w-6 text-falcon-green" />
                  </div>
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    Netlify
                  </h3>
                  <p className="text-sm text-falcon-text-light mb-3">
                    Continuous deployment from Git
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Deploy
                  </Button>
                </div>
                <div className="text-center p-4 border border-falcon-border-light rounded-lg">
                  <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Cloud className="h-6 w-6 text-falcon-orange" />
                  </div>
                  <h3 className="font-semibold text-falcon-text-dark mb-2">
                    AWS
                  </h3>
                  <p className="text-sm text-falcon-text-light mb-3">
                    Deploy to AWS S3 + CloudFront
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Deploy
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Build Commands</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-falcon-text-dark mb-2">
                  Production Build
                </h3>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-sm font-mono">
                    npm run build
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-falcon-text-dark mb-2">
                  Preview Build
                </h3>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-sm font-mono">
                    npm run preview
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-falcon-text-dark mb-2">
                  Type Check
                </h3>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-sm font-mono">
                    npm run type-check
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Starter;
