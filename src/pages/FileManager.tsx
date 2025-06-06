import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Filter,
  Plus,
  Upload,
  Download,
  MoreHorizontal,
  Folder,
  File,
  Image,
  FileText,
  Video,
  Music,
  Archive,
  Grid3X3,
  List,
  Star,
  Share2,
  Trash2,
  Eye,
  Edit,
  Copy,
  Move,
  FolderPlus,
  HardDrive,
} from "lucide-react";

interface FileItem {
  id: string;
  name: string;
  type:
    | "folder"
    | "image"
    | "document"
    | "video"
    | "audio"
    | "archive"
    | "other";
  size?: string;
  modified: string;
  owner: string;
  shared: boolean;
  starred: boolean;
  thumbnail?: string;
}

const files: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    modified: "2024-01-28",
    owner: "John Doe",
    shared: false,
    starred: false,
  },
  {
    id: "2",
    name: "Images",
    type: "folder",
    modified: "2024-01-27",
    owner: "John Doe",
    shared: true,
    starred: true,
  },
  {
    id: "3",
    name: "Project Proposal.pdf",
    type: "document",
    size: "2.4 MB",
    modified: "2024-01-26",
    owner: "Jane Smith",
    shared: true,
    starred: false,
  },
  {
    id: "4",
    name: "Marketing Video.mp4",
    type: "video",
    size: "125.8 MB",
    modified: "2024-01-25",
    owner: "Mike Johnson",
    shared: false,
    starred: true,
  },
  {
    id: "5",
    name: "Dashboard Screenshot.png",
    type: "image",
    size: "1.2 MB",
    modified: "2024-01-24",
    owner: "Sarah Wilson",
    shared: true,
    starred: false,
  },
  {
    id: "6",
    name: "Backup Files.zip",
    type: "archive",
    size: "45.7 MB",
    modified: "2024-01-23",
    owner: "David Brown",
    shared: false,
    starred: false,
  },
  {
    id: "7",
    name: "Meeting Audio.mp3",
    type: "audio",
    size: "15.3 MB",
    modified: "2024-01-22",
    owner: "Lisa Anderson",
    shared: true,
    starred: false,
  },
  {
    id: "8",
    name: "Spreadsheet Data.xlsx",
    type: "document",
    size: "876 KB",
    modified: "2024-01-21",
    owner: "Robert Wilson",
    shared: false,
    starred: true,
  },
];

export default function FileManager() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const getFileIcon = (type: FileItem["type"]) => {
    switch (type) {
      case "folder":
        return <Folder className="h-8 w-8 text-blue-500" />;
      case "image":
        return <Image className="h-8 w-8 text-green-500" />;
      case "document":
        return <FileText className="h-8 w-8 text-red-500" />;
      case "video":
        return <Video className="h-8 w-8 text-purple-500" />;
      case "audio":
        return <Music className="h-8 w-8 text-orange-500" />;
      case "archive":
        return <Archive className="h-8 w-8 text-yellow-500" />;
      default:
        return <File className="h-8 w-8 text-gray-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleFileSelect = (fileId: string) => {
    setSelectedFiles((prev) =>
      prev.includes(fileId)
        ? prev.filter((id) => id !== fileId)
        : [...prev, fileId],
    );
  };

  const storageUsed = 75; // percentage

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <HardDrive className="h-6 w-6" />
            File Manager
          </h1>
          <p className="text-gray-600">Manage your files and folders</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FolderPlus className="h-4 w-4 mr-2" />
            New Folder
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </Button>
        </div>
      </div>

      {/* Storage Info & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search files and folders..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-80"
                    />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <HardDrive className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Storage</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Used</span>
                  <span>{storageUsed}%</span>
                </div>
                <Progress value={storageUsed} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>15.2 GB used</span>
                  <span>20 GB total</span>
                </div>
              </div>
              <Button size="sm" className="w-full">
                Upgrade Storage
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* File Explorer */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="starred">Starred</TabsTrigger>
          <TabsTrigger value="trash">Trash</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {/* Action Bar */}
          {selectedFiles.length > 0 && (
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {selectedFiles.length} item(s) selected
                  </span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button size="sm" variant="outline">
                      <Move className="h-4 w-4 mr-1" />
                      Move
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Files Display */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {files.map((file) => (
                <Card
                  key={file.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedFiles.includes(file.id)
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                  onClick={() => handleFileSelect(file.id)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 flex justify-center">
                          {getFileIcon(file.type)}
                        </div>
                        <div className="flex items-center gap-1">
                          {file.starred && (
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          )}
                          {file.shared && (
                            <Share2 className="h-3 w-3 text-blue-500" />
                          )}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p
                          className="text-sm font-medium text-gray-900 truncate"
                          title={file.name}
                        >
                          {file.name}
                        </p>
                        {file.size && (
                          <p className="text-xs text-gray-500">{file.size}</p>
                        )}
                        <p className="text-xs text-gray-400">
                          {formatDate(file.modified)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-700">
                          <input
                            type="checkbox"
                            className="rounded"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedFiles(files.map((f) => f.id));
                              } else {
                                setSelectedFiles([]);
                              }
                            }}
                          />
                        </th>
                        <th className="text-left p-4 font-medium text-gray-700">
                          Name
                        </th>
                        <th className="text-left p-4 font-medium text-gray-700">
                          Size
                        </th>
                        <th className="text-left p-4 font-medium text-gray-700">
                          Modified
                        </th>
                        <th className="text-left p-4 font-medium text-gray-700">
                          Owner
                        </th>
                        <th className="text-left p-4 font-medium text-gray-700">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {files.map((file) => (
                        <tr key={file.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <input
                              type="checkbox"
                              className="rounded"
                              checked={selectedFiles.includes(file.id)}
                              onChange={() => handleFileSelect(file.id)}
                            />
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              {getFileIcon(file.type)}
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{file.name}</span>
                                {file.starred && (
                                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                )}
                                {file.shared && (
                                  <Share2 className="h-3 w-3 text-blue-500" />
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-gray-600">
                            {file.size || "—"}
                          </td>
                          <td className="p-4 text-gray-600">
                            {formatDate(file.modified)}
                          </td>
                          <td className="p-4 text-gray-600">{file.owner}</td>
                          <td className="p-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="h-4 w-4 mr-2" />
                                  Preview
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Rename
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Copy className="h-4 w-4 mr-2" />
                                  Copy Link
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Share2 className="h-4 w-4 mr-2" />
                                  Share
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle>Recently Modified Files</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files.slice(0, 5).map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                  >
                    {getFileIcon(file.type)}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">
                        Modified {formatDate(file.modified)} by {file.owner}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shared">
          <Card>
            <CardHeader>
              <CardTitle>Shared Files</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files
                  .filter((f) => f.shared)
                  .map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                    >
                      {getFileIcon(file.type)}
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          Shared by {file.owner}
                        </p>
                      </div>
                      <Badge variant="secondary">Shared</Badge>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="starred">
          <Card>
            <CardHeader>
              <CardTitle>Starred Files</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files
                  .filter((f) => f.starred)
                  .map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                    >
                      {getFileIcon(file.type)}
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          Modified {formatDate(file.modified)}
                        </p>
                      </div>
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trash">
          <Card>
            <CardHeader>
              <CardTitle>Trash</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Trash2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Trash is empty</p>
                <p className="text-sm text-gray-400">
                  Deleted files will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
