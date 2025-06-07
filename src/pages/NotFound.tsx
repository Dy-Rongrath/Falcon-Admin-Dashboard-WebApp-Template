import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

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
    <div className="min-h-screen flex items-center justify-center bg-falcon-bg-light">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-6xl font-bold text-falcon-blue opacity-20 mb-4">
          404
        </div>
        <h1 className="text-4xl font-bold text-falcon-text-primary mb-4 font-poppins">
          Page Not Found
        </h1>
        <p className="text-xl text-falcon-text-secondary mb-8 font-poppins">
          Oops! The page you're looking for doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;