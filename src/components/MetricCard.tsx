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
              <h3 className="text-sm font-medium text-slate-600">{title}</h3>
              {trend && (
                <Badge
                  variant="secondary"
                  className={cn(
                    "text-xs px-2 py-1",
                    trend.startsWith("+")
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700",
                  )}
                >
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {trend}
                </Badge>
              )}
            </div>
            <div className="text-2xl font-semibold text-slate-900">{value}</div>
            <div className="text-xs text-slate-500">Compared to last week</div>
          </div>
        );

      case "orders":
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-slate-600">{title}</h3>
            <div className="text-2xl font-semibold text-slate-900">{value}</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +1.5% than yesterday
            </div>
          </div>
        );

      case "market":
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-slate-600">{title}</h3>
            <div className="text-2xl font-semibold text-slate-900">{value}</div>
            <div className="h-16 bg-slate-50 rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        );

      case "weather":
        return (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-slate-600">{title}</h3>
            <div className="text-2xl font-semibold text-slate-900">{value}</div>
            <div className="flex items-center gap-2">
              <Cloud className="h-4 w-4 text-slate-400" />
              <span className="text-xs text-slate-500">New York City</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-slate-700">31°C</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={cn("p-0 border-0 shadow-sm", className)}>
      <CardContent className="p-6">{renderContent()}</CardContent>
    </Card>
  );
}
