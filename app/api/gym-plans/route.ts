import { NextResponse } from "next/server";

const PUBLIC_GYM_PLANS_URL =
  "https://portal.substats.app/api/gyms/public/gym-plans/";

export async function GET() {
  try {
    const response = await fetch(PUBLIC_GYM_PLANS_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to load gym plans." },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Unable to reach gym plans service." },
      { status: 502 },
    );
  }
}
