import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Cloud, Thermometer } from "lucide-react";

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
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-falcon-text-secondary font-poppins">
                {title}
              </h3>
              {trend && (
                <Badge
                  variant="secondary"
                  className={cn(
                    "text-xs px-2 py-1 font-poppins",
                    trend.startsWith("+")
                      ? "bg-falcon-green bg-opacity-10 text-falcon-green"
                      : "bg-red-100 text-red-700",
                  )}
                >
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {trend}
                </Badge>
              )}
            </div>
            <div className="text-2xl font-semibold text-falcon-text-primary font-poppins">
              {value}
            </div>
            <div className="text-xs text-falcon-text-muted font-poppins">
              Compared to last week
            </div>
          </div>
        );

      case "orders":
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-falcon-text-secondary font-poppins">
              {title}
            </h3>
            <div className="text-2xl font-semibold text-falcon-text-primary font-poppins">
              {value}
            </div>
            <div className="flex items-center text-xs text-falcon-green font-poppins">
              <TrendingUp className="h-3 w-3 mr-1" />
              +1.5% than yesterday
            </div>
          </div>
        );

      case "market":
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-falcon-text-secondary font-poppins">
              {title}
            </h3>
            <div className="text-2xl font-semibold text-falcon-text-primary font-poppins">
              {value}
            </div>
            <div className="h-16 bg-falcon-bg-light rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-falcon-blue rounded-full"></div>
              </div>
            </div>
          </div>
        );

      case "weather":
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-falcon-text-secondary font-poppins">
              {title}
            </h3>
            <div className="text-2xl font-semibold text-falcon-text-primary font-poppins">
              {value}
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-falcon-text-muted" />
              <span className="text-xs text-falcon-text-muted font-poppins">
                New York City
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-falcon-orange" />
              <span className="text-sm text-falcon-text-primary font-poppins">
                31°C
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={cn("p-0 border-0 shadow-sm bg-white", className)}>
      <CardContent className="p-6">{renderContent()}</CardContent>
    </Card>
  );
}
