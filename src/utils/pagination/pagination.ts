interface PaginationParams {
  page?: number;
  entries?: number;
}

export const updatePaginationURL = (params: PaginationParams) => {
  const url = new URL(window.location.href);

  if (params.page !== undefined) {
    if (params.page === 1) {
      url.searchParams.delete("page");
    } else {
      url.searchParams.set("page", params.page.toString());
    }
  }

  if (params.entries !== undefined) {
    if (params.entries === 10) {
      url.searchParams.delete("entries");
    } else {
      url.searchParams.set("entries", params.entries.toString());
    }
  }

  window.history.pushState({}, "", url.toString());
};

export const calculateTotalPages = (
  totalItems: number,
  entriesPerPage: number
): number => {
  return Math.ceil(totalItems / entriesPerPage);
};

export const getPaginatedData = <T>(
  data: T[],
  currentPage: number,
  entriesPerPage: number
): T[] => {
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  return data.slice(startIndex, endIndex);
};

export const getNextPage = (
  currentPage: number,
  totalPages: number
): number => {
  return Math.min(currentPage + 1, totalPages);
};

export const getPreviousPage = (currentPage: number): number => {
  return Math.max(currentPage - 1, 1);
};

export const canGoToNextPage = (
  currentPage: number,
  totalPages: number
): boolean => {
  return currentPage < totalPages;
};

export const canGoToPreviousPage = (currentPage: number): boolean => {
  return currentPage > 1;
};
