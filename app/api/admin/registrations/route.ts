import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "@/lib/db";
import { Registration } from "@/models/Registration";

export async function GET(request: Request) {
  try {
    const session = await getServerSession();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const workshop = searchParams.get("workshop") || "";
    const accommodation = searchParams.get("accommodation") || "";

    const query: any = {};

    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    if (workshop) {
      query["workshops.type"] = workshop;
    }

    if (accommodation) {
      query["accommodation.type"] = accommodation;
    }

    const skip = (page - 1) * limit;

    const [registrations, total] = await Promise.all([
      Registration.find(query)
        .sort({ registrationDate: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Registration.countDocuments(query),
    ]);

    return NextResponse.json({
      registrations,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectDB();

    const body = await request.json();
    const registration = await Registration.create(body);

    return NextResponse.json(registration);
  } catch (error) {
    console.error("Error creating registration:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
