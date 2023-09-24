import { getPaginatedData } from "library/manageData";
import { getStoredData, storeData } from "library/redisClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const stockKey = "DATA_STOCK";
  const url = `${process.env.API_URL}/stocks`;
  const options = {
    method: "GET",
  };

  const urlQuery = new URL(request.url);
  const searchParams = new URLSearchParams(urlQuery.search);

  const symbol = searchParams.get("symbol");

  const name = searchParams.get("name");

  const pageQuery = parseInt(searchParams.get("page"));

  const page = isNaN(pageQuery) ? 1 : pageQuery;

  let storedData = await getStoredData(stockKey);

  if (!storedData) {
    const response = await fetch(url, options);
    const result = await response.text();
    storedData = await storeData(stockKey, result);
  }

  const dataJson = JSON.parse(storedData);

  const { data } = dataJson;

  const filteredData = data.filter(
    (x) =>
      (x.symbol.toLowerCase().startsWith(symbol.toLowerCase()) ||
        symbol === "") &&
      (x.name.toLowerCase().includes(name.toLowerCase()) || name === "")
  );

  if (page === -1) {
    return NextResponse.json(filteredData);
  }

  const result = getPaginatedData(filteredData, page, 10);

  return NextResponse.json(result);
}
