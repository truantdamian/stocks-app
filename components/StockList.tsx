import Link from "next/link";
import { Paginate } from "./ui/Paginate";

export const StockList = ({ data }) => {
  return (
    <>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Symbol
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left  text-gray-500 "
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left  text-gray-500 "
                    >
                      Currency
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 "
                    >
                      Type
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                    >
                      Exchange
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={`${item.symbol}-${item.mic_code}`}>
                      <td className="px-4 py-4 text-sm font-medium underline text-blue-500 hover:text-blue-600 whitespace-nowrap">
                        <Link
                          href={`detail?symbol=${item.symbol}&code=${item.mic_code}`}
                        >
                          {item.symbol}
                        </Link>
                      </td>
                      <td className="px-12 py-4 text-sm whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {item.currency}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {item.type}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {item.exchange}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
