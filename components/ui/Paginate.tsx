export const Paginate = ({
  backPage,
  nextPage,
  currentPage,
  totalPages,
  url,
}) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <a
        href={`${url}${backPage}`}
        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>

        <span>Anterior</span>
      </a>
      <div className="items-center hidden md:flex gap-x-3">
        {currentPage} de {totalPages}
      </div>

      <a
        href={`${url}${nextPage}`}
        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
      >
        <span>Siguiente</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:-scale-x-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
};
