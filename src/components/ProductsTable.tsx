import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  name: string;
  category: string;
  price: string;
  sales: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  image: string;
}

const products: Product[] = [
  {
    name: "iPhone 14 Pro",
    category: "Electronics",
    price: "$999",
    sales: 1250,
    status: "in-stock",
    image: "/placeholder.svg",
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: "$1199",
    sales: 950,
    status: "in-stock",
    image: "/placeholder.svg",
  },
  {
    name: "AirPods Pro",
    category: "Audio",
    price: "$249",
    sales: 750,
    status: "low-stock",
    image: "/placeholder.svg",
  },
  {
    name: "iPad Pro",
    category: "Tablets",
    price: "$799",
    sales: 680,
    status: "in-stock",
    image: "/placeholder.svg",
  },
  {
    name: "Apple Watch",
    category: "Wearables",
    price: "$399",
    sales: 540,
    status: "out-of-stock",
    image: "/placeholder.svg",
  },
];

export default function ProductsTable() {
  const getStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "in-stock":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            In Stock
          </Badge>
        );
      case "low-stock":
        return (
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
            Low Stock
          </Badge>
        );
      case "out-of-stock":
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            Out of Stock
          </Badge>
        );
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900">
          Best Selling Products
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-200">
              <TableHead className="text-slate-600 font-medium">
                Product
              </TableHead>
              <TableHead className="text-slate-600 font-medium">
                Category
              </TableHead>
              <TableHead className="text-slate-600 font-medium">
                Price
              </TableHead>
              <TableHead className="text-slate-600 font-medium">
                Sales
              </TableHead>
              <TableHead className="text-slate-600 font-medium">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index} className="border-slate-200">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={product.image} alt={product.name} />
                      <AvatarFallback className="bg-slate-100 text-slate-600 text-xs rounded-lg">
                        {product.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-slate-900">
                      {product.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-600">
                  {product.category}
                </TableCell>
                <TableCell className="font-medium text-slate-900">
                  {product.price}
                </TableCell>
                <TableCell className="text-slate-600">
                  {product.sales.toLocaleString()}
                </TableCell>
                <TableCell>{getStatusBadge(product.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
