import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const workshops = [
  {
    name: "Djembe Advanced",
    participants: [
      { name: "John Doe", email: "john@example.com" },
      { name: "Jane Smith", email: "jane@example.com" },
    ],
  },
  {
    name: "Djembe Intermediate",
    participants: [
      { name: "Alice Johnson", email: "alice@example.com" },
      { name: "Bob Williams", email: "bob@example.com" },
    ],
  },
  {
    name: "Dance",
    participants: [
      { name: "Charlie Brown", email: "charlie@example.com" },
      { name: "Diana Davis", email: "diana@example.com" },
    ],
  },
  {
    name: "Balafon",
    participants: [
      { name: "Eva Green", email: "eva@example.com" },
      { name: "Frank White", email: "frank@example.com" },
    ],
  },
]

export default function WorkshopsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Workshops</h1>
      {workshops.map((workshop) => (
        <Card key={workshop.name} className="w-full">
          <CardHeader>
            <CardTitle>{workshop.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workshop.participants.map((participant, index) => (
                  <TableRow key={index}>
                    <TableCell>{participant.name}</TableCell>
                    <TableCell>{participant.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

