import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Crown, X } from "lucide-react";
import { useState } from "react";

export default function UpgradePrompt() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <CardContent className="p-6 relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-6 w-6 p-0 text-white/70 hover:text-white hover:bg-white/10"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-3 w-3" />
        </Button>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-yellow-300" />
            <h3 className="text-lg font-semibold">Upgrade to Pro</h3>
          </div>

          <p className="text-blue-100 text-sm leading-relaxed">
            Unlock advanced features and get unlimited access to all premium
            components and templates.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span>Unlimited projects</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span>Priority support</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span>Advanced analytics</span>
            </div>
          </div>

          <div className="pt-2">
            <Button
              size="sm"
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium"
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
