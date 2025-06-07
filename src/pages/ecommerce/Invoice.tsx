import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  Download,
  Printer,
  Mail,
  Copy,
  Eye,
  Edit,
  CheckCircle,
  Clock,
  AlertTriangle,
  Calendar,
  Building,
  Phone,
  MapPin,
  CreditCard,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface InvoiceDetail {
  id: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paidAmount: number;
  balanceDue: number;

  // Company Info
  company: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    email: string;
    website: string;
    logo?: string;
    taxId: string;
  };

  // Customer Info
  customer: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };

  items: InvoiceItem[];
  notes?: string;
  terms?: string;

  // Payment Info
  paymentMethod?: {
    type: string;
    details: string;
  };
  paymentDate?: string;

  // Timeline
  timeline: {
    id: string;
    event: string;
    date: string;
    description: string;
  }[];
}

const mockInvoice: InvoiceDetail = {
  id: "1",
  invoiceNumber: "INV-2024-001",
  date: "2024-02-15",
  dueDate: "2024-03-15",
  status: "paid",
  subtotal: 1448.0,
  tax: 115.84,
  discount: 50.0,
  total: 1513.84,
  paidAmount: 1513.84,
  balanceDue: 0.0,

  company: {
    name: "Falcon Tech Solutions",
    address: "123 Business Plaza",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "United States",
    phone: "+1 (555) 123-4567",
    email: "billing@falcontech.com",
    website: "www.falcontech.com",
    taxId: "12-3456789",
  },

  customer: {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 987-6543",
    company: "Tech Solutions Inc.",
    address: "456 Client Street",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    country: "United States",
  },

  items: [
    {
      id: "1",
      description: "Apple iPhone 15 Pro Max - 256GB Natural Titanium",
      quantity: 1,
      rate: 1199.0,
      amount: 1199.0,
    },
    {
      id: "2",
      description: "Apple AirPods Pro (2nd generation) with MagSafe Case",
      quantity: 1,
      rate: 249.0,
      amount: 249.0,
    },
  ],

  notes:
    "Thank you for your business! Payment is due within 30 days of invoice date.",
  terms:
    "Payment is due within 30 days. Late payments may be subject to a 1.5% monthly service charge.",

  paymentMethod: {
    type: "Credit Card",
    details: "Visa ending in 4242",
  },
  paymentDate: "2024-02-18",

  timeline: [
    {
      id: "1",
      event: "Invoice Created",
      date: "2024-02-15T09:00:00Z",
      description: "Invoice was created and saved as draft",
    },
    {
      id: "2",
      event: "Invoice Sent",
      date: "2024-02-15T10:30:00Z",
      description: "Invoice was sent to customer via email",
    },
    {
      id: "3",
      event: "Payment Received",
      date: "2024-02-18T14:20:00Z",
      description: "Full payment of $1,513.84 was received",
    },
    {
      id: "4",
      event: "Invoice Paid",
      date: "2024-02-18T14:25:00Z",
      description: "Invoice marked as paid",
    },
  ],
};

const Invoice = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [invoice] = useState<InvoiceDetail>(mockInvoice);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "sent":
        return "bg-blue-100 text-blue-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4" />;
      case "sent":
        return <Mail className="h-4 w-4" />;
      case "draft":
        return <Edit className="h-4 w-4" />;
      case "overdue":
        return <AlertTriangle className="h-4 w-4" />;
      case "cancelled":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
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
      month: "long",
      day: "numeric",
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate PDF download
    console.log("Downloading invoice PDF...");
  };

  const handleSendEmail = () => {
    // Send email functionality
    console.log("Sending invoice via email...");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Hidden when printing */}
      <div className="print:hidden sticky top-0 bg-white border-b border-falcon-border-light z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/ecommerce/billing")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Billing
              </Button>
              <div>
                <h1 className="text-xl font-bold text-falcon-text-dark">
                  Invoice {invoice.invoiceNumber}
                </h1>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(invoice.status)}>
                    {getStatusIcon(invoice.status)}
                    <span className="ml-1 capitalize">{invoice.status}</span>
                  </Badge>
                  <span className="text-sm text-falcon-text-light">
                    Due {formatDate(invoice.dueDate)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={handleCopyLink}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Link
              </Button>
              <Button variant="outline" size="sm" onClick={handleSendEmail}>
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 print:px-0 print:py-0">
        <div className="bg-white">
          {/* Invoice Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-falcon-text-dark mb-2">
                {invoice.company.name}
              </h1>
              <div className="text-sm text-falcon-text-light space-y-1">
                <p>{invoice.company.address}</p>
                <p>
                  {invoice.company.city}, {invoice.company.state}{" "}
                  {invoice.company.zip}
                </p>
                <p>{invoice.company.country}</p>
                <p className="flex items-center mt-2">
                  <Phone className="h-4 w-4 mr-2" />
                  {invoice.company.phone}
                </p>
                <p>{invoice.company.email}</p>
                <p>{invoice.company.website}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-falcon-text-dark mb-1">
                INVOICE
              </div>
              <div className="text-lg font-semibold text-falcon-blue mb-4">
                {invoice.invoiceNumber}
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-end space-x-8">
                  <span className="text-falcon-text-light">Invoice Date:</span>
                  <span className="font-medium">
                    {formatDate(invoice.date)}
                  </span>
                </div>
                <div className="flex justify-end space-x-8">
                  <span className="text-falcon-text-light">Due Date:</span>
                  <span className="font-medium">
                    {formatDate(invoice.dueDate)}
                  </span>
                </div>
                {invoice.paymentDate && (
                  <div className="flex justify-end space-x-8">
                    <span className="text-falcon-text-light">Paid Date:</span>
                    <span className="font-medium text-green-600">
                      {formatDate(invoice.paymentDate)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bill To Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-falcon-text-dark mb-3">
                Bill To:
              </h3>
              <div className="text-sm space-y-1">
                <p className="font-medium text-falcon-text-dark">
                  {invoice.customer.name}
                </p>
                {invoice.customer.company && <p>{invoice.customer.company}</p>}
                <p>{invoice.customer.address}</p>
                <p>
                  {invoice.customer.city}, {invoice.customer.state}{" "}
                  {invoice.customer.zip}
                </p>
                <p>{invoice.customer.country}</p>
                <div className="mt-2 space-y-1">
                  <p>{invoice.customer.email}</p>
                  {invoice.customer.phone && <p>{invoice.customer.phone}</p>}
                </div>
              </div>
            </div>
            {invoice.paymentMethod && (
              <div>
                <h3 className="font-semibold text-falcon-text-dark mb-3">
                  Payment Method:
                </h3>
                <div className="text-sm space-y-1">
                  <p className="font-medium">{invoice.paymentMethod.type}</p>
                  <p>{invoice.paymentMethod.details}</p>
                  {invoice.paymentDate && (
                    <p className="text-green-600 font-medium">
                      Paid on {formatDate(invoice.paymentDate)}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Invoice Items */}
          <div className="mb-8">
            <Table>
              <TableHeader>
                <TableRow className="border-falcon-border-light">
                  <TableHead className="text-left">Description</TableHead>
                  <TableHead className="text-center">Qty</TableHead>
                  <TableHead className="text-right">Rate</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoice.items.map((item) => (
                  <TableRow
                    key={item.id}
                    className="border-falcon-border-light"
                  >
                    <TableCell className="py-4">
                      <div className="font-medium text-falcon-text-dark">
                        {item.description}
                      </div>
                    </TableCell>
                    <TableCell className="text-center py-4">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right py-4">
                      {formatCurrency(item.rate)}
                    </TableCell>
                    <TableCell className="text-right py-4 font-medium">
                      {formatCurrency(item.amount)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Invoice Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-80">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{formatCurrency(invoice.subtotal)}</span>
                </div>
                {invoice.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span>-{formatCurrency(invoice.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>{formatCurrency(invoice.tax)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>{formatCurrency(invoice.total)}</span>
                </div>
                {invoice.paidAmount > 0 && (
                  <>
                    <div className="flex justify-between text-green-600">
                      <span>Paid:</span>
                      <span>-{formatCurrency(invoice.paidAmount)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Balance Due:</span>
                      <span
                        className={
                          invoice.balanceDue > 0
                            ? "text-red-600"
                            : "text-green-600"
                        }
                      >
                        {formatCurrency(invoice.balanceDue)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Notes and Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {invoice.notes && (
              <div>
                <h3 className="font-semibold text-falcon-text-dark mb-2">
                  Notes:
                </h3>
                <p className="text-sm text-falcon-text-light">
                  {invoice.notes}
                </p>
              </div>
            )}
            {invoice.terms && (
              <div>
                <h3 className="font-semibold text-falcon-text-dark mb-2">
                  Terms & Conditions:
                </h3>
                <p className="text-sm text-falcon-text-light">
                  {invoice.terms}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-falcon-text-light border-t border-falcon-border-light pt-4">
            <p>
              {invoice.company.name} • Tax ID: {invoice.company.taxId}
            </p>
            <p>
              {invoice.company.address}, {invoice.company.city},{" "}
              {invoice.company.state} {invoice.company.zip}
            </p>
            <p>
              {invoice.company.phone} • {invoice.company.email} •{" "}
              {invoice.company.website}
            </p>
          </div>
        </div>
      </div>

      {/* Invoice Timeline - Hidden when printing */}
      <div className="print:hidden max-w-4xl mx-auto px-6 pb-8">
        <Card>
          <CardHeader>
            <CardTitle>Invoice Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {invoice.timeline.map((event, index) => (
                <div key={event.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-falcon-blue bg-opacity-10 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-falcon-blue rounded-full"></div>
                    </div>
                    {index < invoice.timeline.length - 1 && (
                      <div className="w-px h-8 bg-falcon-border-light ml-4 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-falcon-text-dark">
                        {event.event}
                      </h3>
                      <span className="text-sm text-falcon-text-light">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-falcon-text-light mt-1">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Invoice;
