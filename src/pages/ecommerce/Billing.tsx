import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CreditCard,
  DollarSign,
  FileText,
  Download,
  Eye,
  MoreHorizontal,
  Plus,
  Calendar,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  RefreshCw,
  Filter,
  Search,
  Mail,
  Printer,
} from "lucide-react";

interface PaymentMethod {
  id: string;
  type: "credit_card" | "bank_account" | "paypal";
  brand?: string;
  last4: string;
  expiryDate?: string;
  isDefault: boolean;
  status: "active" | "expired" | "suspended";
}

interface Transaction {
  id: string;
  type: "payment" | "refund" | "chargeback" | "fee";
  amount: number;
  status: "completed" | "pending" | "failed" | "cancelled";
  date: string;
  orderId?: string;
  paymentMethod: string;
  description: string;
  fee: number;
}

interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  amount: number;
  status: "paid" | "pending" | "overdue" | "cancelled";
  customerId: string;
  customerName: string;
  items: {
    description: string;
    quantity: number;
    rate: number;
    amount: number;
  }[];
}

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "credit_card",
    brand: "Visa",
    last4: "4242",
    expiryDate: "12/26",
    isDefault: true,
    status: "active",
  },
  {
    id: "2",
    type: "credit_card",
    brand: "Mastercard",
    last4: "8888",
    expiryDate: "08/25",
    isDefault: false,
    status: "active",
  },
  {
    id: "3",
    type: "bank_account",
    last4: "1234",
    isDefault: false,
    status: "active",
  },
];

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "payment",
    amount: 1513.84,
    status: "completed",
    date: "2024-02-15T10:30:00Z",
    orderId: "ORD-2024-001",
    paymentMethod: "Visa •••• 4242",
    description: "Order payment",
    fee: 45.42,
  },
  {
    id: "2",
    type: "payment",
    amount: 299.99,
    status: "completed",
    date: "2024-02-10T14:20:00Z",
    orderId: "ORD-2024-002",
    paymentMethod: "Mastercard •••• 8888",
    description: "Order payment",
    fee: 9.0,
  },
  {
    id: "3",
    type: "refund",
    amount: -156.5,
    status: "completed",
    date: "2024-02-08T09:15:00Z",
    orderId: "ORD-2024-003",
    paymentMethod: "Visa •••• 4242",
    description: "Order refund",
    fee: 0,
  },
];

const mockInvoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-2024-001",
    date: "2024-02-15",
    dueDate: "2024-03-15",
    amount: 1513.84,
    status: "paid",
    customerId: "1",
    customerName: "Sarah Johnson",
    items: [
      {
        description: "Apple iPhone 15 Pro Max",
        quantity: 1,
        rate: 1199.0,
        amount: 1199.0,
      },
      {
        description: "Apple AirPods Pro",
        quantity: 1,
        rate: 249.0,
        amount: 249.0,
      },
    ],
  },
  {
    id: "2",
    invoiceNumber: "INV-2024-002",
    date: "2024-02-10",
    dueDate: "2024-03-10",
    amount: 299.99,
    status: "paid",
    customerId: "2",
    customerName: "Michael Chen",
    items: [
      {
        description: "Wireless Headphones",
        quantity: 1,
        rate: 299.99,
        amount: 299.99,
      },
    ],
  },
  {
    id: "3",
    invoiceNumber: "INV-2024-003",
    date: "2024-02-08",
    dueDate: "2024-03-08",
    amount: 756.5,
    status: "pending",
    customerId: "3",
    customerName: "Emily Rodriguez",
    items: [
      { description: "Smart Watch", quantity: 2, rate: 378.25, amount: 756.5 },
    ],
  },
];

const Billing = () => {
  const [paymentMethods, setPaymentMethods] =
    useState<PaymentMethod[]>(mockPaymentMethods);
  const [transactions] = useState<Transaction[]>(mockTransactions);
  const [invoices] = useState<Invoice[]>(mockInvoices);
  const [selectedPeriod, setSelectedPeriod] = useState("30");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "paid":
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
      case "overdue":
      case "expired":
        return "bg-red-100 text-red-800";
      case "cancelled":
      case "suspended":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "payment":
        return "text-green-600";
      case "refund":
        return "text-red-600";
      case "chargeback":
        return "text-orange-600";
      case "fee":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const totalRevenue = transactions
    .filter((t) => t.type === "payment" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalRefunds = Math.abs(
    transactions
      .filter((t) => t.type === "refund" && t.status === "completed")
      .reduce((sum, t) => sum + t.amount, 0),
  );

  const totalFees = transactions
    .filter((t) => t.status === "completed")
    .reduce((sum, t) => sum + t.fee, 0);

  const pendingAmount = invoices
    .filter((i) => i.status === "pending")
    .reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-falcon-text-dark font-poppins flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-falcon-blue" />
            Billing & Payments
          </h1>
          <p className="text-falcon-text-light font-poppins">
            Manage your payment methods, transactions, and invoices
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            Add Payment Method
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-green bg-opacity-10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-falcon-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {formatCurrency(totalRevenue)}
                </p>
                <p className="text-xs text-falcon-green">
                  +12.5% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-falcon-orange" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Total Refunds
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {formatCurrency(totalRefunds)}
                </p>
                <p className="text-xs text-falcon-orange">
                  -2.1% from last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-falcon-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-falcon-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Processing Fees
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {formatCurrency(totalFees)}
                </p>
                <p className="text-xs text-falcon-text-light">2.9% avg rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-falcon-text-light">
                  Pending
                </p>
                <p className="text-2xl font-bold text-falcon-text-dark">
                  {formatCurrency(pendingAmount)}
                </p>
                <p className="text-xs text-yellow-600">2 invoices</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.slice(0, 5).map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            transaction.type === "payment"
                              ? "bg-green-100"
                              : transaction.type === "refund"
                                ? "bg-red-100"
                                : "bg-gray-100"
                          }`}
                        >
                          {transaction.type === "payment" ? (
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          ) : transaction.type === "refund" ? (
                            <TrendingDown className="h-4 w-4 text-red-600" />
                          ) : (
                            <DollarSign className="h-4 w-4 text-gray-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-falcon-text-dark text-sm">
                            {transaction.description}
                          </p>
                          <p className="text-xs text-falcon-text-light">
                            {transaction.paymentMethod} •{" "}
                            {formatDate(transaction.date)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-medium ${getTypeColor(transaction.type)}`}
                        >
                          {transaction.amount > 0 ? "+" : ""}
                          {formatCurrency(transaction.amount)}
                        </div>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Outstanding Invoices */}
            <Card>
              <CardHeader>
                <CardTitle>Outstanding Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices
                    .filter((i) => i.status !== "paid")
                    .map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium text-falcon-text-dark text-sm">
                            {invoice.invoiceNumber}
                          </p>
                          <p className="text-xs text-falcon-text-light">
                            {invoice.customerName} • Due{" "}
                            {formatDate(invoice.dueDate)}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-falcon-text-dark">
                            {formatCurrency(invoice.amount)}
                          </div>
                          <Badge className={getStatusColor(invoice.status)}>
                            {invoice.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  {invoices.filter((i) => i.status !== "paid").length === 0 && (
                    <div className="text-center py-4">
                      <CheckCircle className="h-8 w-8 mx-auto text-green-500 mb-2" />
                      <p className="text-sm text-falcon-text-light">
                        All invoices are paid!
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Transaction History</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Fee</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{formatDate(transaction.date)}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {transaction.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">
                            {transaction.description}
                          </p>
                          {transaction.orderId && (
                            <p className="text-sm text-falcon-text-light">
                              {transaction.orderId}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{transaction.paymentMethod}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell
                        className={`text-right font-medium ${getTypeColor(transaction.type)}`}
                      >
                        {transaction.amount > 0 ? "+" : ""}
                        {formatCurrency(transaction.amount)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(transaction.fee)}
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
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download Receipt
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Process Refund
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

        <TabsContent value="invoices" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Invoices</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button
                    size="sm"
                    className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Invoice
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">
                        {invoice.invoiceNumber}
                      </TableCell>
                      <TableCell>{invoice.customerName}</TableCell>
                      <TableCell>{formatDate(invoice.date)}</TableCell>
                      <TableCell>{formatDate(invoice.dueDate)}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(invoice.status)}>
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {formatCurrency(invoice.amount)}
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
                              <Download className="h-4 w-4 mr-2" />
                              Download PDF
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="h-4 w-4 mr-2" />
                              Send Email
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Printer className="h-4 w-4 mr-2" />
                              Print
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

        <TabsContent value="payment-methods" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Payment Methods</CardTitle>
                <Button
                  size="sm"
                  className="bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-4 border border-falcon-border-light rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-falcon-text-dark">
                            {method.type === "credit_card"
                              ? method.brand
                              : "Bank Account"}{" "}
                            ••••{method.last4}
                          </span>
                          {method.isDefault && (
                            <Badge variant="outline">Default</Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-falcon-text-light">
                          {method.expiryDate && (
                            <span>Expires {method.expiryDate}</span>
                          )}
                          <Badge className={getStatusColor(method.status)}>
                            {method.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
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
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Set as Default
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Remove Method
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select defaultValue="USD">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                  <Input
                    id="tax-rate"
                    type="number"
                    defaultValue="8.25"
                    className="mt-1"
                    step="0.01"
                  />
                </div>

                <div>
                  <Label htmlFor="payment-terms">Payment Terms (days)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-falcon-text-dark">
                      Payment Received
                    </p>
                    <p className="text-sm text-falcon-text-light">
                      Get notified when payments are received
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-falcon-text-dark">
                      Failed Payments
                    </p>
                    <p className="text-sm text-falcon-text-light">
                      Get notified when payments fail
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-falcon-text-dark">
                      Invoice Overdue
                    </p>
                    <p className="text-sm text-falcon-text-light">
                      Get notified when invoices are overdue
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Billing;
