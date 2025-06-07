import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000, target: 3500 },
  { name: "Feb", sales: 3000, target: 3200 },
  { name: "Mar", sales: 5000, target: 4000 },
  { name: "Apr", sales: 4500, target: 4200 },
  { name: "May", sales: 6000, target: 5000 },
  { name: "Jun", sales: 5500, target: 5200 },
  { name: "Jul", sales: 7000, target: 6000 },
];

export default function SalesChart() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900">
          Total Sales
        </CardTitle>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-slate-600">Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-slate-600">Target</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              reverseStackOrder={false}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
                horizontal={true}
                vertical={true}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#64748b" }}
                type="category"
                interval="preserveStartEnd"
                allowDataOverflow={false}
                allowDecimals={true}
                allowDuplicatedCategory={true}
                scale="auto"
                tickCount={undefined}
                minTickGap={5}
                mirror={false}
                reversed={false}
                hide={false}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#64748b" }}
                type="number"
                domain={["dataMin", "dataMax"]}
                allowDataOverflow={false}
                allowDecimals={true}
                allowDuplicatedCategory={true}
                scale="auto"
                tickCount={undefined}
                minTickGap={5}
                mirror={false}
                reversed={false}
                hide={false}
                orientation="left"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                cursor={true}
                shared={false}
                trigger="hover"
                animationDuration={0}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
                connectNulls={true}
                legendType="line"
                hide={false}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#f97316"
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#f97316", strokeWidth: 2 }}
                connectNulls={true}
                legendType="line"
                hide={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
