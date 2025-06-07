import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Home,
  Search,
  ArrowLeft,
  Mail,
  MessageCircle,
  RefreshCw,
  MapPin,
  Clock,
  AlertTriangle,
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Error404() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
    }
  };

  const popularPages = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Products", path: "/ecommerce/products", icon: Package },
    { name: "Orders", path: "/ecommerce/orders", icon: ShoppingCart },
    { name: "Users", path: "/users", icon: Users },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  // Fix: Use navigate instead of window.location
  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-falcon-bg-light flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-falcon-blue opacity-20 font-poppins">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-falcon-blue bg-opacity-10 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-16 w-16 text-falcon-blue" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-falcon-text-primary font-poppins mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-falcon-text-secondary font-poppins mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons - Fixed */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleGoBack}
              variant="outline"
              className="font-poppins"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            <Button
              onClick={handleGoHome}
              className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins"
            >
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
              className="font-poppins"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Page
            </Button>
          </div>
        </div>

        {/* Search Section */}
        <Card className="border-falcon-border-light mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-falcon-text-primary font-poppins mb-4 text-center">
              Search for what you need
            </h2>
            <form
              onSubmit={handleSearch}
              className="flex gap-2 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-falcon-text-muted" />
                <Input
                  placeholder="Search pages, features, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 font-poppins"
                />
              </div>
              <Button
                type="submit"
                className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins"
              >
                Search
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Popular Pages - Fixed */}
        <Card className="border-falcon-border-light mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-falcon-text-primary font-poppins mb-6 text-center">
              Popular Pages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {popularPages.map((page) => (
                <Button
                  key={page.path}
                  variant="outline"
                  onClick={() => navigate(page.path)}
                  className="h-auto p-4 flex flex-col items-center gap-2 font-poppins hover:bg-falcon-bg-light"
                >
                  <page.icon className="h-6 w-6 text-falcon-blue" />
                  <span className="text-sm">{page.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-falcon-border-light">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-falcon-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-falcon-green" />
              </div>
              <h3 className="text-lg font-semibold text-falcon-text-primary font-poppins mb-2">
                Need Help?
              </h3>
              <p className="text-falcon-text-secondary font-poppins mb-4">
                Our support team is here to assist you with any questions or
                issues.
              </p>
              <Button
                variant="outline"
                className="font-poppins"
                onClick={() => navigate("/support")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </CardContent>
          </Card>

          <Card className="border-falcon-border-light">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-falcon-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-falcon-orange" />
              </div>
              <h3 className="text-lg font-semibold text-falcon-text-primary font-poppins mb-2">
                Report an Issue
              </h3>
              <p className="text-falcon-text-secondary font-poppins mb-4">
                Found a broken link or experiencing technical difficulties? Let
                us know.
              </p>
              <Button
                variant="outline"
                className="font-poppins"
                onClick={() => navigate("/support/report")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Report Issue
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8 text-sm text-falcon-text-muted font-poppins">
          <p>Error Code: 404 | Page Not Found</p>
          <p className="flex items-center justify-center gap-2 mt-2">
            <Clock className="h-4 w-4" />
            {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}