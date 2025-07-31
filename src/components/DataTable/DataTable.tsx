import React, { useState, useMemo } from "react";
import { Table } from "../../ui";
import { useTableState } from "../../hooks";

export const DataTable: React.FC = () => {
  const ENTRIES_PER_PAGE_OPTIONS = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];

  const { columns, data } = useTableState();
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const totalPages = Math.ceil(data.length / entriesPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleEntriesPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newEntriesPerPage = Number(e.target.value);
    setEntriesPerPage(newEntriesPerPage);
    setCurrentPage(1);
  };

  const paginatedData = useMemo(() => {
    return data.slice(
      (currentPage - 1) * entriesPerPage,
      currentPage * entriesPerPage
    );
  }, [data, currentPage, entriesPerPage]);

  return (
    <Table
      columns={columns}
      data={paginatedData}
      currentPage={currentPage}
      totalPages={totalPages}
      entriesPerPage={entriesPerPage}
      entriesPerPageOptions={ENTRIES_PER_PAGE_OPTIONS}
      onPageChange={setCurrentPage}
      onEntriesPerPageChange={handleEntriesPerPageChange}
      onPreviousPage={goToPreviousPage}
      onNextPage={goToNextPage}
    />
  );
};
