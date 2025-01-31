import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

const foodOptions = [
  {
    type: "full",
    price: 30,
    popularity: 60,
    participants: [
      { name: "John Doe", days: 5 },
      { name: "Jane Smith", days: 3 },
      { name: "Alice Johnson", days: 4 },
    ],
  },
  {
    type: "single",
    price: 20,
    popularity: 40,
    participants: [
      { name: "Bob Williams", days: 2 },
      { name: "Charlie Brown", days: 5 },
      { name: "Diana Davis", days: 1 },
    ],
  },
]

export default function FoodPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Food Options</h1>
      {foodOptions.map((option) => (
        <Card key={option.type}>
          <CardHeader>
            <CardTitle className="capitalize">{option.type} Meal Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p>Price per day: ${option.price}</p>
                <div className="mt-2">
                  <p>Popularity: {option.popularity}%</p>
                  <Progress value={option.popularity} className="mt-2" />
                </div>
              </div>
              <div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Participant</TableHead>
                      <TableHead>Days</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {option.participants.map((participant, index) => (
                      <TableRow key={index}>
                        <TableCell>{participant.name}</TableCell>
                        <TableCell>{participant.days}</TableCell>
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

