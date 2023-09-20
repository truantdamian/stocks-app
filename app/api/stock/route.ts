import { NextResponse } from "next/server";
import { getStoredData, storeData } from "../../../library/redisClient";

export async function GET() {
  const stockKey = "DATA_STOCK";
  const url = `${process.env.API_URL}/stocks`;
  const options = {
    method: "GET",
  };

  let storedData = await getStoredData(stockKey);

  if (!storedData) {
    const response = await fetch(url, options);
    const result = await response.text();
    storedData = await storeData(stockKey, result);
  }

  const dataJson = JSON.parse(storedData);

  const { data } = dataJson;

  return NextResponse.json(data);
}
