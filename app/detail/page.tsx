import { GraphicDashboard } from "components/GraphicDashboard";

export default async function Page({ searchParams }) {
  const { symbol, code } = searchParams;

  const response = await fetch(
    `http://localhost:3000/api/stock/detail?symbol=${symbol}&code=${code}`
  );

  const data = await response.json();

  return (
    <>
      <div className="flex flex-col gap-10 container m-auto">
        <div className="grid w-full  grid-cols-1 gap-8 mx-auto">
          <div className="p-6 rounded-lg bg-blue-50 ">
            <div>
              <h3 className="font-medium text-gray-700 ">{data.name}</h3>
              <p className="mt-2 text-gray-500 ">
                {data.symbol} {data.currency}
              </p>
            </div>
          </div>
        </div>

        <GraphicDashboard symbol={symbol} />
      </div>
    </>
  );
}
