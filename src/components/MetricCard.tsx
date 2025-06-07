import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  Cloud,
  Thermometer,
  PieChart,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  type?: "sales" | "orders" | "market" | "weather";
  className?: string;
}

export default function MetricCard({
  title,
  value,
  trend,
  type = "sales",
  className,
}: MetricCardProps) {
  const renderContent = () => {
    switch (type) {
      case "sales":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600 font-poppins">
                {title}
              </h3>
              {trend && (
                <Badge
                  variant="secondary"
                  className="bg-green-50 text-green-700 text-xs px-2 py-1 font-poppins border-0"
                >
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {trend}
                </Badge>
              )}
            </div>
            <div className="text-3xl font-bold text-gray-900 font-poppins">
              {value}
            </div>
            <div className="text-xs text-gray-500 font-poppins">
              Compared to last week
            </div>
          </div>
        );

      case "orders":
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-600 font-poppins">
              {title}
            </h3>
            <div className="text-3xl font-bold text-gray-900 font-poppins">
              {value}
            </div>
            <div className="flex items-center text-xs text-green-600 font-poppins">
              <TrendingUp className="h-3 w-3 mr-1" />
              +1.5% than yesterday
            </div>
          </div>
        );

      case "market":
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-600 font-poppins">
              {title}
            </h3>
            <div className="text-3xl font-bold text-gray-900 font-poppins">
              {value}
            </div>
            {/* Mini Pie Chart Representation */}
            <div className="h-16 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="relative">
                <PieChart className="w-12 h-12 text-blue-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case "weather":
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-600 font-poppins">
              {title}
            </h3>
            <div className="text-lg font-semibold text-gray-900 font-poppins">
              {value}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 font-poppins">
                  Mostly Cloudy
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Thermometer className="h-4 w-4 text-orange-500" />
                <span className="text-2xl font-bold text-gray-900 font-poppins">
                  31°
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-500 font-poppins">
              Real-feel 32°
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={cn("border-0 shadow-sm bg-white", className)}>
      <CardContent className="p-6">{renderContent()}</CardContent>
    </Card>
  );
}
