"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Registration = {
  id: string
  fullName: string
  email: string
  workshops: string[]
  accommodationType: string
  foodType: string
  childrenCount: number
  paymentMade: boolean
}

export const columns: ColumnDef<Registration>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "workshops",
    header: "Workshops",
    cell: ({ row }) => {
      const workshops = row.getValue("workshops") as string[]
      return (
        <div className="space-y-1">
          {workshops.map((workshop, index) => (
            <Badge key={index} variant="secondary" className="mr-1">
              {workshop}
            </Badge>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: "accommodationType",
    header: "Accommodation",
  },
  {
    accessorKey: "foodType",
    header: "Food",
  },
  {
    accessorKey: "childrenCount",
    header: "Children",
  },
  {
    accessorKey: "paymentMade",
    header: "Payment",
    cell: ({ row }) => (
      <Badge variant={row.original.paymentMade ? "default" : "destructive"}>
        {row.original.paymentMade ? "Paid" : "Pending"}
      </Badge>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const registration = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(registration.id)}>
              Copy registration ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit registration</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

