import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

const accommodations = [
  {
    type: "tent",
    price: 10, // Price per night
    occupancy: 75,
    participants: [
      { name: "John Doe", nights: 3 },
      { name: "Jane Smith", nights: 5 },
      { name: "Alice Johnson", nights: 4 },
    ],
  },
  {
    type: "family-room",
    price: 150, // Price for 5 nights
    occupancy: 60,
    participants: [{ name: "Bob Williams" }, { name: "Carol Davis" }],
  },
  {
    type: "single-room",
    price: 100, // Price for 5 nights
    occupancy: 80,
    participants: [{ name: "Eve Brown" }, { name: "Frank White" }],
  },
]

export default function AccommodationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Accommodation</h1>
      {accommodations.map((accommodation) => (
        <Card key={accommodation.type}>
          <CardHeader>
            <CardTitle className="capitalize">{accommodation.type}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p>
                  Price: ${accommodation.price} {accommodation.type === "tent" ? "per night" : "for 5 nights"}
                </p>
                <div className="mt-2">
                  <p>Occupancy: {accommodation.occupancy}%</p>
                  <Progress value={accommodation.occupancy} className="mt-2" />
                </div>
              </div>
              <div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      {accommodation.type === "tent" && <TableHead>Nights</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accommodation.participants.map((participant, index) => (
                      <TableRow key={index}>
                        <TableCell>{participant.name}</TableCell>
                        {accommodation.type === "tent" && <TableCell>{participant.nights}</TableCell>}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

