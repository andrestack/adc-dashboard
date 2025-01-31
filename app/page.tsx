import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { OverviewChart } from "@/components/overview-chart"
import { RecentRegistrations } from "@/components/recent-registrations"

export default function Home() {
  const workshopData = [
    { name: "Djembe Advanced", participants: 15 },
    { name: "Djembe Intermediate", participants: 20 },
    { name: "Dance", participants: 25 },
    { name: "Balafon", participants: 10 },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,678</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Placeholder Card</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Placeholder</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Registration Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentRegistrations />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {workshopData.map((workshop) => (
          <Card key={workshop.name}>
            <CardHeader>
              <CardTitle>{workshop.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{workshop.participants}</div>
              <p className="text-xs text-muted-foreground">Participants</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

