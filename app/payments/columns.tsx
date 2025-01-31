"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export type Payment = {
  id: string
  fullName: string
  email: string
  amount: number
  status: "pending" | "paid" | "failed"
  date: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row, table }) => {
      const amount = Number.parseFloat(row.getValue("amount"))
      return (
        <Input
          type="number"
          value={amount}
          onChange={(e) => {
            const onAmountChange = table.options.meta?.onAmountChange as
              | ((id: string, amount: string) => void)
              | undefined
            if (onAmountChange) {
              onAmountChange(row.original.id, e.target.value)
            }
          }}
          className="w-24"
        />
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge variant={status === "paid" ? "default" : status === "pending" ? "secondary" : "destructive"}>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
]

