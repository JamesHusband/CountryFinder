import React from "react";
import { EntriesPerPage } from "./EntriesPerPage";
import { PageNavigation } from "./PageNavigation";
import { PageCount } from "./PageCount";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  entriesPerPage: number;
  entriesPerPageOptions: { value: number; label: string }[];
  onPageChange: (page: number) => void;
  onEntriesPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  entriesPerPage,
  entriesPerPageOptions,
  onPageChange,
  onEntriesPerPageChange,
  onPreviousPage,
  onNextPage,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
      <EntriesPerPage
        entriesPerPage={entriesPerPage}
        entriesPerPageOptions={entriesPerPageOptions}
        onEntriesPerPageChange={onEntriesPerPageChange}
      />

      <PageNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />

      <PageCount currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};
