import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { product: "iPhone 14", sales: 1250, revenue: 1248750 },
  { product: "MacBook Air", sales: 950, revenue: 1138050 },
  { product: "iPad Pro", sales: 750, revenue: 599250 },
  { product: "AirPods Pro", sales: 680, revenue: 169320 },
  { product: "Apple Watch", sales: 540, revenue: 215460 },
  { product: "iMac", sales: 320, revenue: 639680 },
  { product: "Mac Pro", sales: 180, revenue: 1079820 },
  { product: "Studio Display", sales: 150, revenue: 239850 },
];

export default function TopProductsChart() {
  return (
    <Card className="border-0 shadow-sm col-span-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Top Products Performance
        </CardTitle>
        <p className="text-sm text-slate-600">
          Sales and revenue comparison across product categories
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis
                dataKey="product"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
                angle={-45}
                textAnchor="end"
                height={80}
                type="category"
                interval={0}
              />
              <YAxis
                yAxisId="sales"
                orientation="left"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
                label={{ value: 'Units Sold', angle: -90, position: 'insideLeft' }}
                type="number"
                domain={['dataMin', 'dataMax']}
              />
              <YAxis
                yAxisId="revenue"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
                label={{ value: 'Revenue ($)', angle: 90, position: 'insideRight' }}
                type="number"
                domain={['dataMin', 'dataMax']}
              />
                  position: "insideLeft",
                }}
              />
              <YAxis
                yAxisId="revenue"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#64748b" }}
                label={{
                  value: "Revenue ($)",
                  angle: 90,
                  position: "insideRight",
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                formatter={(value, name) => [
                  name === "sales"
                    ? `${value} units`
                    : `$${value.toLocaleString()}`,
                  name === "sales" ? "Units Sold" : "Revenue",
                ]}
              />
              <Bar
                yAxisId="sales"
                dataKey="sales"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                name="sales"
              />
              <Bar
                yAxisId="revenue"
                dataKey="revenue"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
                name="revenue"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}