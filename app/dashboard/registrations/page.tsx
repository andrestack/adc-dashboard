"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRegistrations } from "@/hooks/use-registrations";
import { format } from "date-fns";

export default function RegistrationsPage() {
  const [search, setSearch] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useRegistrations({
    search,
    workshop,
    page,
    limit: 10,
  });

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleWorkshopFilter = (value: string) => {
    setWorkshop(value);
    setPage(1);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Registrations</CardTitle>
          <CardDescription>
            View and manage workshop registrations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Input
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="max-w-sm"
            />
            <Select value={workshop} onValueChange={handleWorkshopFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by workshop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Workshops</SelectItem>
                <SelectItem value="Djembe">Djembe</SelectItem>
                <SelectItem value="Dance">Dance</SelectItem>
                <SelectItem value="Balafon">Balafon</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Workshops</TableHead>
                  <TableHead>Accommodation</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead>Registration Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : data?.registrations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      No registrations found
                    </TableCell>
                  </TableRow>
                ) : (
                  data?.registrations.map((registration) => (
                    <TableRow key={registration._id}>
                      <TableCell>{registration.fullName}</TableCell>
                      <TableCell>{registration.email}</TableCell>
                      <TableCell>
                        {registration.workshops
                          .map((w) => `${w.type} (${w.level})`)
                          .join(", ")}
                      </TableCell>
                      <TableCell>
                        {registration.accommodation.type} (
                        {registration.accommodation.nights} nights)
                      </TableCell>
                      <TableCell>{registration.payment.status}</TableCell>
                      <TableCell>
                        {format(new Date(registration.registrationDate), "PPP")}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {data && data.totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <Button
                variant="outline"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => setPage(page + 1)}
                disabled={page === data.totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
