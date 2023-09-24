import { SearchForm } from "components/SearchForm";
import { StockList } from "components/StockList";
import { Paginate } from "components/ui/Paginate";

import { Suspense } from "react";

export default async function Page({ searchParams }) {
  const { page = "", symbol = "", name = "" } = searchParams;

  const response = await fetch(
    `http://localhost:3000/api/stock?symbol=${symbol}&name=${name}&page=${page}`
  );

  const { paginatedData, backPage, nextPage, currentPage, totalPages } =
    await response.json();

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="container px-4 mx-auto">
          <div>
            <SearchForm name={name} symbol={symbol} />
          </div>
          <Suspense fallback={<div>cargando...</div>}>
            <StockList data={paginatedData} />
          </Suspense>
          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            backPage={backPage}
            nextPage={nextPage}
            url={`?symbol=${symbol}&name=${name}&page=`}
          />
        </div>
      </div>
    </>
  );
}
