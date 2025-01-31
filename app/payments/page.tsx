"use client"

import { useState, useEffect } from "react"
import { DataTable } from "@/components/data-table"
import { columns } from "./columns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Payment = {
  id: string
  fullName: string
  email: string
  amount: number
  status: "pending" | "paid" | "failed"
  date: string
}

async function getData(): Promise<Payment[]> {
  // In a real application, this would be an API call
  return [
    {
      id: "1",
      fullName: "John Doe",
      email: "john@example.com",
      amount: 0,
      status: "pending",
      date: "2023-06-01",
    },
    {
      id: "2",
      fullName: "Jane Smith",
      email: "jane@example.com",
      amount: 0,
      status: "pending",
      date: "2023-06-02",
    },
    // Add more mock data here
  ]
}

export default function PaymentsPage() {
  const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    async function fetchData() {
      const initialData = await getData()
      setData(initialData)
    }
    fetchData()
  }, [])

  const handleAmountChange = (id: string, amount: string) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, amount: Number.parseFloat(amount) || 0 } : item)),
    )
  }

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log("Saving updated payment data:", data)
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Payments</h1>
      <Card>
        <CardHeader>
          <CardTitle>Payment Management</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} onAmountChange={handleAmountChange} />
          <Button onClick={handleSave} className="mt-4">
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

