export default async function Page({ searchParams }) {
  const { symbol, code } = searchParams;

  const response = await fetch(
    `http://localhost:3000/api/stock/detail?symbol=${symbol}&code=${code}`
  );

  const data = await response.json();

  return (
    <>
      <p>{data.name}</p>
    </>
  );
}
