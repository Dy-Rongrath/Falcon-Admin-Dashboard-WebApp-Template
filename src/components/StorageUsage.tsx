import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { HardDrive, Upload } from "lucide-react";

export default function StorageUsage() {
  const storageData = [
    { name: "Documents", used: 2.5, total: 10, color: "bg-blue-500" },
    { name: "Images", used: 4.2, total: 10, color: "bg-green-500" },
    { name: "Videos", used: 1.8, total: 10, color: "bg-orange-500" },
    { name: "Other", used: 0.9, total: 10, color: "bg-purple-500" },
  ];

  const totalUsed = storageData.reduce((sum, item) => sum + item.used, 0);
  const totalSpace = 25; // GB

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <HardDrive className="h-5 w-5" />
          Storage Usage
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Usage */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Total Used</span>
            <span className="text-sm font-medium text-slate-900">
              {totalUsed.toFixed(1)} GB of {totalSpace} GB
            </span>
          </div>
          <Progress value={(totalUsed / totalSpace) * 100} className="h-2" />
        </div>

        {/* Category Breakdown */}
        <div className="space-y-3">
          {storageData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                <span className="text-sm text-slate-600">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-slate-900">
                {item.used} GB
              </span>
            </div>
          ))}
        </div>

        {/* Upload Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </CardContent>
    </Card>
  );
}
