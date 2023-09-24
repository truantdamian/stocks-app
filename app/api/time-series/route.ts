import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const options = {
    method: "GET",
  };

  const urlQuery = new URL(request.url);
  const searchParams = new URLSearchParams(urlQuery.search);

  const symbol = searchParams.get("symbol");
  const interval = searchParams.get("interval");
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");

  const url = `${process.env.API_URL}/time_series?symbol=${symbol}&interval=${interval}&start_date=${start_date}&end_date=${end_date}&apikey=${process.env.TWELVE_API_KEY}`;

  const response = await fetch(url, options);
  const result = await response.json();

  return NextResponse.json(result);
}
