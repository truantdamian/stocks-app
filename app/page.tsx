import Link from "next/link";
import { Suspense } from "react";

export default async function Page({ searchParams }) {
  const { page } = searchParams;

  const response = await fetch(`http://localhost:3000/api/stock?page=${page}`);

  const { paginatedData, totalPages, currentPage } = await response.json();

  const nextPage =
    currentPage + 1 <= totalPages ? currentPage + 1 : currentPage;

  const backPage = currentPage - 1 <= 0 ? currentPage : currentPage - 1;

  return (
    <>
      <Suspense fallback={<div>cargando...</div>}>
        <>
          {paginatedData.map((data) => (
            <p key={`${data.symbol}-${data.mic_code}`}>
              <Link href={`detail?symbol=${data.symbol}&code=${data.mic_code}`}>
                {data.symbol}
              </Link>
              - {data.name} - {data.currency} - {data.type} -{data.exchange}
            </p>
          ))}
        </>
      </Suspense>
      <div>
        <Link href={`?page=${backPage}`}>Anterior</Link>-
        <Link href={`?page=${nextPage}`}>Siguiente</Link>
        {currentPage} de {totalPages}
      </div>
    </>
  );
}
