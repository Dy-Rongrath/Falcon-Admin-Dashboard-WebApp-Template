import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  RefreshCw,
  Mail,
  MessageCircle,
  AlertTriangle,
  Server,
  Clock,
  ArrowLeft,
  Bug,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Error500() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-falcon-bg-light flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          {/* 500 Illustration */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-red-500 opacity-20 font-poppins">
              500
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center">
                <Server className="h-16 w-16 text-red-500" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-falcon-text-primary font-poppins mb-4">
            Internal Server Error
          </h1>
          <p className="text-lg text-falcon-text-secondary font-poppins mb-8 max-w-2xl mx-auto">
            We're experiencing some technical difficulties on our end. Our team
            has been notified and is working to resolve the issue as quickly as
            possible.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => window.location.reload()}
              className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90 font-poppins"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="font-poppins"
            >
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="font-poppins"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>

        {/* Error Details */}
        <Card className="border-falcon-border-light mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-falcon-text-primary font-poppins mb-4 text-center">
              What happened?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-medium text-falcon-text-primary font-poppins mb-2">
                  Server Error
                </h3>
                <p className="text-sm text-falcon-text-secondary font-poppins">
                  Our servers encountered an unexpected condition that prevented
                  it from fulfilling the request.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-falcon-blue" />
                </div>
                <h3 className="font-medium text-falcon-text-primary font-poppins mb-2">
                  We're On It
                </h3>
                <p className="text-sm text-falcon-text-secondary font-poppins">
                  Our technical team has been automatically notified and is
                  working to resolve this issue.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-falcon-green" />
                </div>
                <h3 className="font-medium text-falcon-text-primary font-poppins mb-2">
                  Try Later
                </h3>
                <p className="text-sm text-falcon-text-secondary font-poppins">
                  Please try refreshing the page in a few minutes. Most issues
                  are resolved quickly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-falcon-border-light">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-falcon-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bug className="h-8 w-8 text-falcon-orange" />
              </div>
              <h3 className="text-lg font-semibold text-falcon-text-primary font-poppins mb-2">
                Report This Error
              </h3>
              <p className="text-falcon-text-secondary font-poppins mb-4">
                Help us improve by reporting what you were trying to do when
                this error occurred.
              </p>
              <Button variant="outline" className="font-poppins">
                <Bug className="mr-2 h-4 w-4" />
                Report Bug
              </Button>
            </CardContent>
          </Card>

          <Card className="border-falcon-border-light">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-falcon-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-falcon-green" />
              </div>
              <h3 className="text-lg font-semibold text-falcon-text-primary font-poppins mb-2">
                Contact Support
              </h3>
              <p className="text-falcon-text-secondary font-poppins mb-4">
                Need immediate assistance? Our support team is available to help
                you.
              </p>
              <Button variant="outline" className="font-poppins">
                <MessageCircle className="mr-2 h-4 w-4" />
                Get Help
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <Card className="border-falcon-border-light bg-gray-50">
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold text-falcon-text-primary font-poppins mb-4">
              Technical Details (for developers)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-poppins">
              <div>
                <span className="text-falcon-text-muted">Error Code:</span>
                <span className="text-falcon-text-primary ml-2">HTTP 500</span>
              </div>
              <div>
                <span className="text-falcon-text-muted">Timestamp:</span>
                <span className="text-falcon-text-primary ml-2">
                  {new Date().toISOString()}
                </span>
              </div>
              <div>
                <span className="text-falcon-text-muted">Request ID:</span>
                <span className="text-falcon-text-primary ml-2">
                  req_{Math.random().toString(36).substr(2, 9)}
                </span>
              </div>
              <div>
                <span className="text-falcon-text-muted">Status:</span>
                <span className="text-red-600 ml-2">Internal Server Error</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-falcon-text-muted font-poppins">
          <p>If this problem persists, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
}
