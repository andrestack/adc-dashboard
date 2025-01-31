import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentRegistrations() {
  const registrations = [
    { name: "John Doe", email: "john@example.com", workshop: "Workshop A" },
    { name: "Jane Smith", email: "jane@example.com", workshop: "Workshop B" },
    { name: "Bob Johnson", email: "bob@example.com", workshop: "Workshop C" },
    { name: "Alice Brown", email: "alice@example.com", workshop: "Workshop D" },
    { name: "Charlie Davis", email: "charlie@example.com", workshop: "Workshop E" },
  ]

  return (
    <div className="space-y-8">
      {registrations.map((registration, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{registration.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{registration.name}</p>
            <p className="text-sm text-muted-foreground">{registration.email}</p>
          </div>
          <div className="ml-auto font-medium">{registration.workshop}</div>
        </div>
      ))}
    </div>
  )
}

