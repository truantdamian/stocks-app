export const getPaginatedData = (
  data: any[],
  currentPage: number,
  itemPerPage: number
) => {
  const totalPages = getTotalPages(data, itemPerPage);
  const totalItems = data.length;

  if (totalItems <= 0 || totalItems <= itemPerPage) {
    return { paginatedData: data, currentPage, totalPages, totalItems };
  }

  const start = (currentPage - 1) * itemPerPage;
  const end =
    start + itemPerPage > totalItems ? totalItems : start + itemPerPage;

  return {
    paginatedData: data.slice(start, end),
    currentPage,
    totalPages,
    totalItems,
  };
};

const getTotalPages = (data: any[], itemPerPage: number) => {
  if (data.length === 0) return 0;

  return data.length <= itemPerPage ? 1 : Math.ceil(data.length / itemPerPage);
};
