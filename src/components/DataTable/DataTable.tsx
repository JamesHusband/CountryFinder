import React from "react";
import { Table, ItemCount } from "../../ui";
import { useTableState, usePagination } from "../../hooks";

export const DataTable: React.FC = () => {
  const { columns, data, entriesPerPageOptions } = useTableState();

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
        entriesPerPageOptions={entriesPerPageOptions}
        onPageChange={handlePageChange}
        onEntriesPerPageChange={onEntriesPerPageChange}
        onPreviousPage={goToPreviousPage}
        onNextPage={goToNextPage}
      />
    </div>
  );
};
