import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText, Download, Share2, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface SharedFile {
  name: string;
  size: string;
  sharedBy: string;
  sharedAt: string;
  type: "pdf" | "doc" | "xls" | "ppt";
  avatar: string;
}

const files: SharedFile[] = [
  {
    name: "Annual Report 2024.pdf",
    size: "2.4 MB",
    sharedBy: "John Doe",
    sharedAt: "2 hours ago",
    type: "pdf",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
  },
  {
    name: "Marketing Strategy.ppt",
    size: "5.1 MB",
    sharedBy: "Jane Smith",
    sharedAt: "5 hours ago",
    type: "ppt",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
  },
  {
    name: "Financial Data.xls",
    size: "1.8 MB",
    sharedBy: "Mike Johnson",
    sharedAt: "1 day ago",
    type: "xls",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
  },
  {
    name: "Project Proposal.doc",
    size: "890 KB",
    sharedBy: "Sarah Wilson",
    sharedAt: "2 days ago",
    type: "doc",
    avatar: `${import.meta.env.BASE_URL}placeholder.svg`,
  },
];

export default function SharedFiles() {
  const getFileIcon = (type: SharedFile["type"]) => {
    const iconClass = "h-8 w-8 p-1.5 rounded-lg";
    switch (type) {
      case "pdf":
        return (
          <div className={cn(iconClass, "bg-red-100 text-red-600")}>
            <FileText className="h-full w-full" />
          </div>
        );
      case "doc":
        return (
          <div className={cn(iconClass, "bg-blue-100 text-blue-600")}>
            <FileText className="h-full w-full" />
          </div>
        );
      case "xls":
        return (
          <div className={cn(iconClass, "bg-green-100 text-green-600")}>
            <FileText className="h-full w-full" />
          </div>
        );
      case "ppt":
        return (
          <div className={cn(iconClass, "bg-orange-100 text-orange-600")}>
            <FileText className="h-full w-full" />
          </div>
        );
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <Share2 className="h-5 w-5" />
          Shared Files
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            {getFileIcon(file.type)}

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                {file.name}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{file.size}</span>
                <span>•</span>
                <span>Shared by {file.sharedBy}</span>
                <span>•</span>
                <span>{file.sharedAt}</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Download className="h-4 w-4 text-slate-400" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4 text-slate-400" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
