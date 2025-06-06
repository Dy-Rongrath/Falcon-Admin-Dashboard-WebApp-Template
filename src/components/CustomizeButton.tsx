import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import { useState } from "react";

export default function CustomizeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <Button
        size="lg"
        className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 p-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Settings2
          className={`h-5 w-5 text-white transition-transform duration-200 ${
            isHovered ? "rotate-90" : ""
          }`}
        />
      </Button>

      {isHovered && (
        <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
          Customize Dashboard
          <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-l-4 border-l-slate-900 border-y-4 border-y-transparent"></div>
        </div>
      )}
    </div>
  );
}
