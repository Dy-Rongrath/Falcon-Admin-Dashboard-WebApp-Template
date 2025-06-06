import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  Download,
  MoreHorizontal,
  Eye,
  Edit,
  Send,
  Copy,
  FileText,
  DollarSign,
  Calendar,
  Users,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

interface Invoice {
  id: string;
  number: string;
  client: {
    name: string;
    email: string;
    avatar: string;
  };
  amount: number;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  dueDate: string;
  createdDate: string;
  items: number;
  currency: string;
}

const invoices: Invoice[] = [
  {
    id: "1",
    number: "INV-001",
    client: {
      name: "Acme Corporation",
      email: "billing@acme.com",
      avatar: "/placeholder.svg",
    },
    amount: 5240.0,
    status: "paid",
    dueDate: "2024-02-15",
    createdDate: "2024-01-15",
    items: 5,
    currency: "USD",
  },
  {
    id: "2",
    number: "INV-002",
    client: {
      name: "TechStart Inc",
      email: "finance@techstart.com",
      avatar: "/placeholder.svg",
    },
    amount: 3450.0,
    status: "sent",
    dueDate: "2024-02-10",
    createdDate: "2024-01-25",
    items: 3,
    currency: "USD",
  },
  {
    id: "3",
    number: "INV-003",
    client: {
      name: "Global Solutions",
      email: "accounts@global.com",
      avatar: "/placeholder.svg",
    },
    amount: 7890.0,
    status: "overdue",
    dueDate: "2024-01-30",
    createdDate: "2024-01-05",
    items: 8,
    currency: "USD",
  },
  {
    id: "4",
    number: "INV-004",
    client: {
      name: "StartupCo",
      email: "billing@startup.co",
      avatar: "/placeholder.svg",
    },
    amount: 2100.0,
    status: "draft",
    dueDate: "2024-02-20",
    createdDate: "2024-01-28",
    items: 2,
    currency: "USD",
  },
  {
    id: "5",
    number: "INV-005",
    client: {
      name: "Enterprise Ltd",
      email: "payments@enterprise.com",
      avatar: "/placeholder.svg",
    },
    amount: 12500.0,
    status: "sent",
    dueDate: "2024-02-25",
    createdDate: "2024-01-20",
    items: 12,
    currency: "USD",
  },
];

export default function Invoices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const getStatusBadge = (status: Invoice["status"]) => {
    switch (status) {
      case "draft":
        return (
          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
            Draft
          </Badge>
        );
      case "sent":
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            Sent
          </Badge>
        );
      case "paid":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Paid
          </Badge>
        );
      case "overdue":
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            Overdue
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
            Cancelled
          </Badge>
        );
    }
  };

  const getStatusIcon = (status: Invoice["status"]) => {
    switch (status) {
      case "draft":
        return <Edit className="h-4 w-4 text-gray-500" />;
      case "sent":
        return <Send className="h-4 w-4 text-blue-500" />;
      case "paid":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "cancelled":
        return <XCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const totalAmount = invoices.reduce(
    (sum, invoice) => sum + invoice.amount,
    0,
  );
  const paidAmount = invoices
    .filter((i) => i.status === "paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0);
  const pendingAmount = invoices
    .filter((i) => i.status === "sent")
    .reduce((sum, invoice) => sum + invoice.amount, 0);
  const overdueCount = invoices.filter((i) => i.status === "overdue").length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Invoices & Billing
          </h1>
          <p className="text-gray-600">
            Manage invoices, payments, and billing
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Invoice
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(totalAmount, "USD")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Paid Amount</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(paidAmount, "USD")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Amount</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(pendingAmount, "USD")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Overdue Invoices</p>
                <p className="text-2xl font-bold text-gray-900">
                  {overdueCount}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Management */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Invoices</TabsTrigger>
          <TabsTrigger value="draft">
            Draft ({invoices.filter((i) => i.status === "draft").length})
          </TabsTrigger>
          <TabsTrigger value="sent">
            Sent ({invoices.filter((i) => i.status === "sent").length})
          </TabsTrigger>
          <TabsTrigger value="paid">
            Paid ({invoices.filter((i) => i.status === "paid").length})
          </TabsTrigger>
          <TabsTrigger value="overdue">Overdue ({overdueCount})</TabsTrigger>
        </TabsList>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search invoices..."
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
              <div className="text-sm text-gray-600">
                Showing {invoices.length} invoices
              </div>
            </div>
          </CardContent>
        </Card>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(invoice.status)}
                          <div>
                            <p className="font-medium text-gray-900">
                              {invoice.number}
                            </p>
                            <p className="text-sm text-gray-500">
                              {invoice.items} items
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={invoice.client.avatar}
                              alt={invoice.client.name}
                            />
                            <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                              {invoice.client.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">
                              {invoice.client.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {invoice.client.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {formatCurrency(invoice.amount, invoice.currency)}
                      </TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell className="text-gray-600">
                        {formatDate(invoice.dueDate)}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {formatDate(invoice.createdDate)}
                      </TableCell>
                      <TableCell>
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
                              View Invoice
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Invoice
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Send className="h-4 w-4 mr-2" />
                              Send Invoice
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download PDF
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="h-4 w-4 mr-2" />
                              Duplicate
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue">
          <div className="space-y-4">
            {invoices
              .filter((i) => i.status === "overdue")
              .map((invoice) => (
                <Card key={invoice.id} className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <AlertCircle className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {invoice.number}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {invoice.client.name}
                          </p>
                          <p className="text-sm text-red-600 font-medium">
                            Overdue since {formatDate(invoice.dueDate)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(invoice.amount, invoice.currency)}
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline">
                            Send Reminder
                          </Button>
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Mark as Paid
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="draft">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {invoices
              .filter((i) => i.status === "draft")
              .map((invoice) => (
                <Card key={invoice.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">
                          {invoice.number}
                        </h3>
                        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                          Draft
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Client</p>
                        <p className="font-medium">{invoice.client.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Amount</p>
                        <p className="text-xl font-bold text-gray-900">
                          {formatCurrency(invoice.amount, invoice.currency)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Send className="h-4 w-4 mr-1" />
                          Send
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="sent">
          <div className="space-y-4">
            {invoices
              .filter((i) => i.status === "sent")
              .map((invoice) => (
                <Card
                  key={invoice.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={invoice.client.avatar}
                            alt={invoice.client.name}
                          />
                          <AvatarFallback className="bg-gray-100 text-gray-600">
                            {invoice.client.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {invoice.number}
                          </h3>
                          <p className="text-gray-600">{invoice.client.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-3 w-3 text-gray-400" />
                            <span className="text-sm text-gray-500">
                              Due {formatDate(invoice.dueDate)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(invoice.amount, invoice.currency)}
                        </p>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mt-2">
                          Sent
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="paid">
          <div className="space-y-4">
            {invoices
              .filter((i) => i.status === "paid")
              .map((invoice) => (
                <Card key={invoice.id} className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {invoice.number}
                          </h3>
                          <p className="text-gray-600">{invoice.client.name}</p>
                          <p className="text-sm text-green-600 font-medium">
                            Paid on {formatDate(invoice.dueDate)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(invoice.amount, invoice.currency)}
                        </p>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mt-2">
                          Paid
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
