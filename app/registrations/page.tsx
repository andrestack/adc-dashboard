import { DataTable } from "@/components/data-table"
import { columns } from "./columns"

async function getData() {
  // Fetch data from your API here
  return [
    {
      id: "1",
      fullName: "John Doe",
      email: "john@example.com",
      workshops: ["Djembe Advanced", "Dance"],
      accommodationType: "tent",
      foodType: "full",
      childrenCount: 2,
      paymentMade: true,
    },
    // Add more mock data here
  ]
}

export default async function RegistrationsPage() {
  const data = await getData()

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Registrations</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

