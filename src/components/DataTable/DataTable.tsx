import React from "react";
import { Table, ItemCount } from "../../ui";
import { useTableState, usePagination } from "../../hooks";

const ENTRIES_PER_PAGE_OPTIONS = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
];

export const DataTable: React.FC = () => {
  const { columns, data } = useTableState();

  const {
    currentPage,
    entriesPerPage,
    totalPages,
    paginatedData,
    goToNextPage,
    goToPreviousPage,
    handlePageChange,
    handleEntriesPerPageChange,
  } = usePagination({ data });

  const onEntriesPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newEntriesPerPage = Number(e.target.value);
    handleEntriesPerPageChange(newEntriesPerPage);
  };

  return (
    <div className="space-y-4">
      <ItemCount count={data.length} />
      <Table
        columns={columns}
        data={paginatedData}
        currentPage={currentPage}
        totalPages={totalPages}
        entriesPerPage={entriesPerPage}
        entriesPerPageOptions={ENTRIES_PER_PAGE_OPTIONS}
        onPageChange={handlePageChange}
        onEntriesPerPageChange={onEntriesPerPageChange}
        onPreviousPage={goToPreviousPage}
        onNextPage={goToNextPage}
      />
    </div>
  );
};
