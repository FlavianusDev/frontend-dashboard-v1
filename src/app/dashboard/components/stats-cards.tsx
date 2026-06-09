import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

const stats = [
  { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: DollarSign, color: "text-emerald-500" },
  { title: "Users", value: "2,350", change: "+12.5%", icon: Users, color: "text-blue-500" },
  { title: "Orders", value: "573", change: "-4.3%", icon: ShoppingCart, color: "text-amber-500" },
  { title: "Growth", value: "23.4%", change: "+8.2%", icon: TrendingUp, color: "text-purple-500" },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => {
        const isNegative = stat.change.startsWith("-");
        return (
          <Card key={i} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className={`text-xs mt-1 ${isNegative ? "text-rose-500" : "text-emerald-500"}`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}