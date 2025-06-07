import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  BarChart3,
  Globe,
  Smartphone,
  Clock,
  HeartHandshake,
  Award,
  TrendingUp,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-falcon-bg-light to-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-falcon-blue bg-opacity-10 text-falcon-blue border-falcon-blue border-opacity-20">
            <Zap className="h-3 w-3 mr-1" />
            New Features Available
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-falcon-text-primary font-poppins mb-6">
            The Ultimate
            <span className="bg-gradient-to-r from-falcon-blue to-falcon-light-blue bg-clip-text text-transparent">
              {" "}
              Admin Dashboard
            </span>
          </h1>

          <p className="text-xl text-falcon-text-secondary font-poppins mb-8 max-w-2xl mx-auto">
            Build faster, scale smarter, and deliver exceptional user
            experiences with Falcon - the most comprehensive React admin
            dashboard template.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="font-poppins">
              View Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-falcon-text-muted font-poppins">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-falcon-green" />
              No credit card required
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-falcon-green" />
              14-day free trial
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-falcon-green" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-falcon-text-primary font-poppins mb-4">
              Why Choose Falcon?
            </h2>
            <p className="text-lg text-falcon-text-secondary font-poppins max-w-2xl mx-auto">
              Everything you need to build modern, scalable, and beautiful admin
              dashboards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-falcon-border-light hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-falcon-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-falcon-blue" />
                </div>
                <h3 className="text-xl font-semibold text-falcon-text-primary font-poppins mb-4">
                  Advanced Analytics
                </h3>
                <p className="text-falcon-text-secondary font-poppins">
                  Comprehensive analytics dashboard with real-time data
                  visualization and insights
                </p>
              </CardContent>
            </Card>

            <Card className="border-falcon-border-light hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-falcon-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-falcon-green" />
                </div>
                <h3 className="text-xl font-semibold text-falcon-text-primary font-poppins mb-4">
                  User Management
                </h3>
                <p className="text-falcon-text-secondary font-poppins">
                  Complete user and team management with roles, permissions, and
                  collaboration tools
                </p>
              </CardContent>
            </Card>

            <Card className="border-falcon-border-light hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-falcon-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-falcon-orange" />
                </div>
                <h3 className="text-xl font-semibold text-falcon-text-primary font-poppins mb-4">
                  Enterprise Security
                </h3>
                <p className="text-falcon-text-secondary font-poppins">
                  Bank-level security with authentication, authorization, and
                  data protection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-falcon-bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-falcon-blue font-poppins mb-2">
                50K+
              </div>
              <div className="text-falcon-text-secondary font-poppins">
                Active Users
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-falcon-green font-poppins mb-2">
                99.9%
              </div>
              <div className="text-falcon-text-secondary font-poppins">
                Uptime
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-falcon-orange font-poppins mb-2">
                25+
              </div>
              <div className="text-falcon-text-secondary font-poppins">
                Components
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 font-poppins mb-2">
                4.9★
              </div>
              <div className="text-falcon-text-secondary font-poppins">
                User Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-falcon-text-primary font-poppins mb-4">
              Trusted by Developers
            </h2>
            <p className="text-lg text-falcon-text-secondary font-poppins">
              See what our community has to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-falcon-border-light">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-falcon-text-secondary font-poppins mb-4">
                  "Falcon has transformed how we build admin interfaces. The
                  components are beautiful and the developer experience is
                  outstanding."
                </p>
                <div className="font-semibold text-falcon-text-primary font-poppins">
                  Sarah Johnson
                </div>
                <div className="text-sm text-falcon-text-muted font-poppins">
                  Lead Developer at TechCorp
                </div>
              </CardContent>
            </Card>

            <Card className="border-falcon-border-light">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-falcon-text-secondary font-poppins mb-4">
                  "The analytics dashboard is incredible. We launched our admin
                  panel 3x faster than expected with Falcon."
                </p>
                <div className="font-semibold text-falcon-text-primary font-poppins">
                  Michael Chen
                </div>
                <div className="text-sm text-falcon-text-muted font-poppins">
                  CTO at StartupXYZ
                </div>
              </CardContent>
            </Card>

            <Card className="border-falcon-border-light">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-falcon-text-secondary font-poppins mb-4">
                  "Best admin template I've ever used. Clean code, great
                  documentation, and excellent support team."
                </p>
                <div className="font-semibold text-falcon-text-primary font-poppins">
                  Emily Rodriguez
                </div>
                <div className="text-sm text-falcon-text-muted font-poppins">
                  Frontend Architect at Enterprise Inc
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-falcon-blue to-falcon-light-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-poppins">
            Join thousands of developers building amazing admin dashboards with
            Falcon
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex rounded-lg overflow-hidden bg-white">
              <Input
                placeholder="Enter your email"
                className="border-0 bg-transparent text-falcon-text-primary placeholder:text-falcon-text-muted font-poppins"
              />
              <Button className="bg-falcon-orange hover:bg-falcon-orange hover:bg-opacity-90 font-poppins">
                Get Started
              </Button>
            </div>
          </div>

          <p className="text-sm opacity-75 font-poppins">
            Start your free trial today. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-falcon-text-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold font-poppins mb-4">Falcon</h3>
              <p className="text-gray-300 font-poppins mb-4">
                The ultimate admin dashboard template for modern web
                applications.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white"
                >
                  <Users className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold font-poppins mb-4">Product</h4>
              <div className="space-y-2 text-gray-300 font-poppins">
                <div>Features</div>
                <div>Pricing</div>
                <div>Documentation</div>
                <div>Support</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold font-poppins mb-4">Company</h4>
              <div className="space-y-2 text-gray-300 font-poppins">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold font-poppins mb-4">Legal</h4>
              <div className="space-y-2 text-gray-300 font-poppins">
                <div>Privacy</div>
                <div>Terms</div>
                <div>Security</div>
                <div>Compliance</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 font-poppins">
            <p>&copy; 2024 Falcon Dashboard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
