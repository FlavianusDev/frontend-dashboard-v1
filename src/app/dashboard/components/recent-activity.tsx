import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  { name: "Olivia Martin", action: "Paid $450 for Premium", time: "2 minutes ago", avatar: "OM" },
  { name: "Jackson Lee", action: "Updated profile picture", time: "10 minutes ago", avatar: "JL" },
  { name: "Isabella Nguyen", action: "Subscribed to Enterprise", time: "45 minutes ago", avatar: "IN" },
];

export function RecentActivity() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>{activity.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">{activity.name}</p>
              <p className="text-sm text-zinc-400">{activity.action}</p>
            </div>
            <p className="text-xs text-zinc-500">{activity.time}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}