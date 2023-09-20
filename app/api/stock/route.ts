import { NextResponse } from "next/server";

export async function GET() {
  const url = `${process.env.API_URL}/stocks`;

  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);

  const { data } = await response.json();

  return NextResponse.json(data);
}
