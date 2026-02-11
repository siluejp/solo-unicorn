import { NextResponse } from "next/server";

const getApiBaseUrl = () => {
  return process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
};

export async function POST() {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/top-access/`, {
      method: "POST",
      cache: "no-store"
    });

    const text = await response.text();
    return new NextResponse(text, {
      status: response.status,
      headers: {
        "content-type": response.headers.get("content-type") || "application/json"
      }
    });
  } catch {
    return NextResponse.json({ page: "top", count: null }, { status: 502 });
  }
}

export async function GET() {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/top-access/`, {
      method: "GET",
      cache: "no-store"
    });

    const text = await response.text();
    return new NextResponse(text, {
      status: response.status,
      headers: {
        "content-type": response.headers.get("content-type") || "application/json"
      }
    });
  } catch {
    return NextResponse.json({ page: "top", count: null }, { status: 502 });
  }
}
