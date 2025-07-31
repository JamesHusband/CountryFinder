import { useState, useMemo } from "react";
import {
  updatePaginationURL,
  calculateTotalPages,
  getPaginatedData,
  getNextPage,
  getPreviousPage,
} from "../../utils/pagination";

interface UsePaginationOptions<T> {
  data: T[];
  initialPage?: number;
  initialEntriesPerPage?: number;
}

export const usePagination = <T>({
  data,
  initialPage = 1,
  initialEntriesPerPage = 10,
}: UsePaginationOptions<T>) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [entriesPerPage, setEntriesPerPage] = useState(initialEntriesPerPage);

  const totalPages = calculateTotalPages(data.length, entriesPerPage);

  const goToNextPage = () => {
    const nextPage = getNextPage(currentPage, totalPages);
    setCurrentPage(nextPage);
    updatePaginationURL({ page: nextPage });
  };

  const goToPreviousPage = () => {
    const prevPage = getPreviousPage(currentPage);
    setCurrentPage(prevPage);
    updatePaginationURL({ page: prevPage });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updatePaginationURL({ page });
  };

  const handleEntriesPerPageChange = (newEntriesPerPage: number) => {
    setEntriesPerPage(newEntriesPerPage);
    setCurrentPage(1);
    updatePaginationURL({ entries: newEntriesPerPage, page: 1 });
  };

  const paginatedData = useMemo(() => {
    return getPaginatedData(data, currentPage, entriesPerPage);
  }, [data, currentPage, entriesPerPage]);

  return {
    currentPage,
    entriesPerPage,
    totalPages,
    paginatedData,
    goToNextPage,
    goToPreviousPage,
    handlePageChange,
    handleEntriesPerPageChange,
  };
};
