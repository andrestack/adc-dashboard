import { useQuery } from "@tanstack/react-query";

interface RegistrationFilters {
  page?: number;
  limit?: number;
  search?: string;
  workshop?: string;
  accommodation?: string;
}

interface Registration {
  _id: string;
  fullName: string;
  email: string;
  workshops: Array<{
    type: string;
    level: string;
  }>;
  accommodation: {
    type: string;
    nights: number;
    checkIn?: Date;
    checkOut?: Date;
  };
  food: {
    plan: string;
    days: number;
    specialRequirements?: string;
  };
  children: Array<{
    ageGroup: string;
    quantity: number;
  }>;
  payment: {
    status: string;
    amount: number;
    currency: string;
    transactionId?: string;
    paidAt?: Date;
  };
  registrationDate: Date;
  status: string;
  notes?: string;
}

interface RegistrationsResponse {
  registrations: Registration[];
  total: number;
  page: number;
  totalPages: number;
}

async function fetchRegistrations(
  filters: RegistrationFilters
): Promise<RegistrationsResponse> {
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());
  if (filters.limit) params.append("limit", filters.limit.toString());
  if (filters.search) params.append("search", filters.search);
  if (filters.workshop) params.append("workshop", filters.workshop);
  if (filters.accommodation)
    params.append("accommodation", filters.accommodation);

  const response = await fetch(`/api/admin/registrations?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch registrations");
  }

  return response.json();
}

export function useRegistrations(filters: RegistrationFilters = {}) {
  return useQuery({
    queryKey: ["registrations", filters],
    queryFn: () => fetchRegistrations(filters),
  });
}

export type { Registration, RegistrationFilters, RegistrationsResponse };
