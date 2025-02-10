"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkshopDistribution } from "@/components/workshop-distribution";
import { Users, Home, UtensilsCrossed, Baby } from "lucide-react";

const stats = [
  {
    name: "Total Participants",
    value: "156",
    icon: Users,
    description: "Active registrations",
  },
  {
    name: "Room Bookings",
    value: "43",
    icon: Home,
    description: "Accommodation reservations",
  },
  {
    name: "Meal Plans",
    value: "128",
    icon: UtensilsCrossed,
    description: "Food service subscriptions",
  },
  {
    name: "Children",
    value: "24",
    icon: Baby,
    description: "Registered children",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  {stat.name}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Workshop Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <WorkshopDistribution />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Placeholder for recent registrations list */}
              <p className="text-sm text-muted-foreground">
                Loading recent registrations...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
