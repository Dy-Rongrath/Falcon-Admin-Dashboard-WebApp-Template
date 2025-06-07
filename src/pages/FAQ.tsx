import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  Lightbulb,
  Users,
  Settings,
  CreditCard,
  Shield,
  Zap,
  Globe,
  Code,
  Smartphone,
} from "lucide-react";

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  questions: {
    id: string;
    question: string;
    answer: string;
    tags?: string[];
  }[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Lightbulb,
    color: "text-falcon-blue",
    questions: [
      {
        id: "1",
        question: "How do I get started with Falcon?",
        answer:
          "Getting started with Falcon is easy! First, download the template files from your account dashboard. Then follow our comprehensive setup guide in the documentation. You'll have a running dashboard in under 10 minutes.",
        tags: ["setup", "installation"],
      },
      {
        id: "2",
        question: "What are the system requirements?",
        answer:
          "Falcon requires Node.js 16+ and a modern web browser. For development, we recommend VS Code with our recommended extensions. The built application works on all modern browsers including Chrome, Firefox, Safari, and Edge.",
        tags: ["requirements", "browser"],
      },
      {
        id: "3",
        question: "Can I use Falcon with my existing project?",
        answer:
          "Yes! Falcon is designed to be modular. You can integrate individual components or sections into your existing React application. Check our integration guide for detailed instructions.",
        tags: ["integration", "existing"],
      },
    ],
  },
  {
    id: "customization",
    title: "Customization",
    icon: Settings,
    color: "text-falcon-green",
    questions: [
      {
        id: "4",
        question: "How do I customize the theme colors?",
        answer:
          "Falcon uses CSS custom properties and Tailwind CSS for theming. You can customize colors by modifying the CSS variables in your theme file or updating the Tailwind configuration. All color changes will automatically apply across all components.",
        tags: ["theme", "colors", "css"],
      },
      {
        id: "5",
        question: "Can I add my own components?",
        answer:
          "Absolutely! Falcon is built with extensibility in mind. You can create custom components following our design system guidelines. All components use consistent styling patterns and are fully customizable.",
        tags: ["components", "custom"],
      },
      {
        id: "6",
        question: "How do I modify the sidebar navigation?",
        answer:
          "The sidebar navigation is configured through a simple JavaScript object. You can add, remove, or reorder menu items by modifying the navigation configuration file. Icons, labels, and routes are all customizable.",
        tags: ["navigation", "sidebar"],
      },
    ],
  },
  {
    id: "features",
    title: "Features & Functionality",
    icon: Zap,
    color: "text-falcon-orange",
    questions: [
      {
        id: "7",
        question: "What charts and visualizations are included?",
        answer:
          "Falcon includes comprehensive charting capabilities powered by Recharts. You get line charts, bar charts, pie charts, area charts, and more. All charts are responsive and support real-time data updates.",
        tags: ["charts", "visualization"],
      },
      {
        id: "8",
        question: "Is the dashboard responsive?",
        answer:
          "Yes! Falcon is fully responsive and works perfectly on desktop, tablet, and mobile devices. The layout automatically adapts to different screen sizes with touch-friendly interfaces for mobile users.",
        tags: ["responsive", "mobile"],
      },
      {
        id: "9",
        question: "Does it support dark mode?",
        answer:
          "Yes, Falcon includes a built-in dark mode toggle. The theme system automatically handles color schemes for all components, ensuring a consistent experience in both light and dark modes.",
        tags: ["dark mode", "theme"],
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Support",
    icon: Code,
    color: "text-purple-600",
    questions: [
      {
        id: "10",
        question: "What technologies does Falcon use?",
        answer:
          "Falcon is built with React 18, TypeScript, Tailwind CSS, and Radix UI components. It includes modern tools like Vite for fast development, React Router for navigation, and Recharts for data visualization.",
        tags: ["technology", "stack"],
      },
      {
        id: "11",
        question: "How do I deploy my Falcon application?",
        answer:
          "Falcon applications can be deployed to any static hosting service like Vercel, Netlify, or AWS S3. The build process creates optimized static files that can be served from any web server or CDN.",
        tags: ["deployment", "hosting"],
      },
      {
        id: "12",
        question: "Is TypeScript support included?",
        answer:
          "Yes! Falcon is built with TypeScript from the ground up. All components include proper type definitions, providing excellent IntelliSense support and compile-time error checking.",
        tags: ["typescript", "types"],
      },
    ],
  },
  {
    id: "licensing",
    title: "Licensing & Usage",
    icon: Shield,
    color: "text-red-600",
    questions: [
      {
        id: "13",
        question: "Can I use Falcon for commercial projects?",
        answer:
          "Yes! All Falcon licenses include commercial usage rights. You can use Falcon to build applications for clients, SaaS products, or any commercial venture. Check your specific license for details.",
        tags: ["commercial", "license"],
      },
      {
        id: "14",
        question: "Do you offer team licenses?",
        answer:
          "Yes, we offer team licenses for organizations. Team licenses include additional seats, priority support, and extended usage rights. Contact our sales team for custom pricing.",
        tags: ["team", "enterprise"],
      },
      {
        id: "15",
        question: "What's included with my purchase?",
        answer:
          "Your purchase includes the complete Falcon template, all source files, comprehensive documentation, 1 year of updates, and email support. Premium plans include additional features and priority support.",
        tags: ["purchase", "included"],
      },
    ],
  },
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredQuestions = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.tags?.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      ),
    }))
    .filter((category) => category.questions.length > 0);

  const displayCategories = selectedCategory
    ? filteredQuestions.filter((cat) => cat.id === selectedCategory)
    : filteredQuestions;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-falcon-text-primary font-poppins mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-falcon-text-secondary font-poppins mb-8 max-w-2xl mx-auto">
          Find answers to common questions about Falcon. Can't find what you're
          looking for? Contact our support team for personalized help.
        </p>

        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-falcon-text-muted" />
          <Input
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 bg-white border-falcon-border-light font-poppins"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className="font-poppins"
        >
          All Categories
        </Button>
        {faqCategories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="font-poppins"
          >
            <category.icon className="h-4 w-4 mr-2" />
            {category.title}
          </Button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqCategories.map((category) => (
          <Card
            key={category.id}
            className="border-falcon-border-light hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedCategory(category.id)}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-falcon-bg-light rounded-full flex items-center justify-center mx-auto mb-4">
                <category.icon className={`h-8 w-8 ${category.color}`} />
              </div>
              <h3 className="font-semibold text-falcon-text-primary font-poppins mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-falcon-text-secondary font-poppins mb-4">
                {category.questions.length} questions
              </p>
              <Badge variant="outline" className="text-xs">
                View All
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto">
        {displayCategories.map((category) => (
          <Card key={category.id} className="border-falcon-border-light mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-poppins text-falcon-text-primary">
                <category.icon className={`h-6 w-6 ${category.color}`} />
                {category.title}
                <Badge variant="secondary" className="ml-auto">
                  {category.questions.length} questions
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="space-y-2">
                {category.questions.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-falcon-border-light"
                  >
                    <AccordionTrigger className="text-left font-poppins text-falcon-text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-falcon-text-secondary font-poppins pt-2">
                      {faq.answer}
                      {faq.tags && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {faq.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Support */}
      <Card className="border-falcon-border-light bg-gradient-to-r from-falcon-bg-light to-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-falcon-text-primary font-poppins mb-4">
            Still Need Help?
          </h2>
          <p className="text-falcon-text-secondary font-poppins mb-6 max-w-2xl mx-auto">
            Our support team is here to help you succeed. Choose the best way to
            get in touch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="border-falcon-border-light hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-falcon-blue" />
                </div>
                <h3 className="font-semibold text-falcon-text-primary font-poppins mb-2">
                  Live Chat
                </h3>
                <p className="text-sm text-falcon-text-secondary font-poppins mb-4">
                  Get instant help from our team
                </p>
                <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-falcon-border-light hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-falcon-green" />
                </div>
                <h3 className="font-semibold text-falcon-text-primary font-poppins mb-2">
                  Email Support
                </h3>
                <p className="text-sm text-falcon-text-secondary font-poppins mb-4">
                  Send us a detailed message
                </p>
                <Button variant="outline" className="font-poppins">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="border-falcon-border-light hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-falcon-orange" />
                </div>
                <h3 className="font-semibold text-falcon-text-primary font-poppins mb-2">
                  Documentation
                </h3>
                <p className="text-sm text-falcon-text-secondary font-poppins mb-4">
                  Browse our complete guides
                </p>
                <Button variant="outline" className="font-poppins">
                  View Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
