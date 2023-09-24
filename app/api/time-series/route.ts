import { NextRequest, NextResponse } from "next/server";

const mockData = {
  meta: {
    symbol: "TSLA",
    interval: "15min",
    currency: "USD",
    exchange_timezone: "America/New_York",
    exchange: "NASDAQ",
    mic_code: "XNGS",
    type: "Common Stock",
  },
  values: [
    {
      datetime: "2023-09-20 15:45:00",
      open: "262.85001",
      high: "264.80991",
      low: "262.46060",
      close: "262.48300",
      volume: "6619241",
    },
    {
      datetime: "2023-09-20 15:30:00",
      open: "267.02280",
      high: "267.13000",
      low: "262.79010",
      close: "262.83499",
      volume: "7430368",
    },
    {
      datetime: "2023-09-20 15:15:00",
      open: "267.74820",
      high: "268.29990",
      low: "266.10001",
      close: "267.01999",
      volume: "5330892",
    },
    {
      datetime: "2023-09-20 15:00:00",
      open: "270.32001",
      high: "271.00000",
      low: "267.59000",
      close: "267.76001",
      volume: "5049019",
    },
    {
      datetime: "2023-09-20 14:45:00",
      open: "272.10999",
      high: "272.32001",
      low: "269.85001",
      close: "270.38989",
      volume: "4944293",
    },
    {
      datetime: "2023-09-20 14:30:00",
      open: "271.72800",
      high: "273.54999",
      low: "271.06009",
      close: "272.13040",
      volume: "6990907",
    },
    {
      datetime: "2023-09-20 14:15:00",
      open: "270.64001",
      high: "272.12500",
      low: "270.32999",
      close: "271.67999",
      volume: "3826491",
    },
    {
      datetime: "2023-09-20 14:00:00",
      open: "271.29990",
      high: "271.42001",
      low: "269.20001",
      close: "270.67999",
      volume: "5582851",
    },
    {
      datetime: "2023-09-20 13:45:00",
      open: "271.12061",
      high: "271.73001",
      low: "270.57999",
      close: "271.26999",
      volume: "3154347",
    },
    {
      datetime: "2023-09-20 13:30:00",
      open: "271.59000",
      high: "272.26001",
      low: "266.50000",
      close: "271.14001",
      volume: "4031112",
    },
    {
      datetime: "2023-09-20 13:15:00",
      open: "271.15991",
      high: "273.92999",
      low: "270.94000",
      close: "271.57001",
      volume: "7965640",
    },
    {
      datetime: "2023-09-20 13:00:00",
      open: "268.28009",
      high: "271.42999",
      low: "268.01001",
      close: "271.13501",
      volume: "6758076",
    },
    {
      datetime: "2023-09-20 12:45:00",
      open: "267.99991",
      high: "268.42999",
      low: "267.28009",
      close: "268.29001",
      volume: "2092679",
    },
    {
      datetime: "2023-09-20 12:30:00",
      open: "268.02060",
      high: "268.14999",
      low: "267.66000",
      close: "267.99100",
      volume: "2175139",
    },
    {
      datetime: "2023-09-20 12:15:00",
      open: "267.48901",
      high: "268.07001",
      low: "267.34000",
      close: "268.02130",
      volume: "2406498",
    },
    {
      datetime: "2023-09-20 12:00:00",
      open: "267.08200",
      high: "267.48999",
      low: "266.76999",
      close: "267.48969",
      volume: "1710822",
    },
    {
      datetime: "2023-09-20 11:45:00",
      open: "266.62000",
      high: "267.14001",
      low: "266.59000",
      close: "267.07300",
      volume: "1999786",
    },
    {
      datetime: "2023-09-20 11:30:00",
      open: "265.83499",
      high: "266.73999",
      low: "265.62000",
      close: "266.60001",
      volume: "2488670",
    },
    {
      datetime: "2023-09-20 11:15:00",
      open: "266.73010",
      high: "266.85999",
      low: "265.46011",
      close: "265.85999",
      volume: "2915480",
    },
    {
      datetime: "2023-09-20 11:00:00",
      open: "266.83209",
      high: "267.19000",
      low: "266.39001",
      close: "266.75061",
      volume: "2532797",
    },
    {
      datetime: "2023-09-20 10:45:00",
      open: "267.92001",
      high: "267.92270",
      low: "266.50009",
      close: "266.83231",
      volume: "3200307",
    },
    {
      datetime: "2023-09-20 10:30:00",
      open: "267.54999",
      high: "268.14999",
      low: "267.25000",
      close: "267.91000",
      volume: "3106223",
    },
    {
      datetime: "2023-09-20 10:15:00",
      open: "267.37000",
      high: "268.38699",
      low: "266.95999",
      close: "267.56000",
      volume: "4365249",
    },
    {
      datetime: "2023-09-20 10:00:00",
      open: "267.13000",
      high: "268.60001",
      low: "266.47000",
      close: "267.34009",
      volume: "6165449",
    },
    {
      datetime: "2023-09-20 09:45:00",
      open: "267.47000",
      high: "267.98001",
      low: "265.82669",
      close: "267.07999",
      volume: "6416153",
    },
    {
      datetime: "2023-09-20 09:30:00",
      open: "267.04001",
      high: "268.37000",
      low: "265.31009",
      close: "267.42719",
      volume: "10139595",
    },
    {
      datetime: "2023-09-19 15:45:00",
      open: "266.39499",
      high: "266.79001",
      low: "266.33011",
      close: "266.45999",
      volume: "3254823",
    },
    {
      datetime: "2023-09-19 15:30:00",
      open: "266.20499",
      high: "266.53000",
      low: "265.62000",
      close: "266.39990",
      volume: "2533266",
    },
    {
      datetime: "2023-09-19 15:15:00",
      open: "265.63000",
      high: "266.34000",
      low: "265.39001",
      close: "266.20999",
      volume: "2635951",
    },
    {
      datetime: "2023-09-19 15:00:00",
      open: "265.66000",
      high: "266.23001",
      low: "265.22009",
      close: "265.62451",
      volume: "2667832",
    },
  ],
  status: "ok",
};

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
