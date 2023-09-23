export const getPaginatedData = (
  data: any[],
  currentPage: number,
  itemPerPage: number
) => {
  const totalPages = getTotalPages(data, itemPerPage);
  const totalItems = data.length;

  const start = (currentPage - 1) * itemPerPage;
  const end =
    start + itemPerPage > totalItems ? totalItems : start + itemPerPage;

  const nextPage =
    currentPage + 1 <= totalPages ? currentPage + 1 : currentPage;

  const backPage = currentPage - 1 <= 0 ? currentPage : currentPage - 1;

  return {
    paginatedData: data.slice(start, end),
    currentPage,
    backPage,
    nextPage,
    totalPages,
    totalItems,
  };
};

const getTotalPages = (data: any[], itemPerPage: number) => {
  if (data.length === 0) return 0;

  return data.length <= itemPerPage ? 1 : Math.ceil(data.length / itemPerPage);
};
