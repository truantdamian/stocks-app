import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const urlQuery = new URL(request.url);
  const searchParams = new URLSearchParams(urlQuery.search);

  const symbol = searchParams.get("symbol");
  const code = searchParams.get("code");

  const url = `${process.env.API_URL}/stocks?symbol=${symbol}&mic_code=${code}`;
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);
  const { data } = await response.json();

  if (data && data.length > 0) {
    return NextResponse.json(data[0]);
  }

  return NextResponse.json({});
}
