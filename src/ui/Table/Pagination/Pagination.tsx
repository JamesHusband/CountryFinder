import React from "react";

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
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">Show</span>
        <select
          value={entriesPerPage}
          onChange={onEntriesPerPageChange}
          className="border border-gray-300 rounded px-2 py-1 text-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors cursor-pointer"
        >
          {entriesPerPageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="text-sm text-gray-700">entries</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500 rounded transition-colors"
          style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
        >
          ‹
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => {
              const shouldShow =
                pageNum === 1 ||
                pageNum === totalPages ||
                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);

              if (shouldShow) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                      currentPage === pageNum
                        ? "bg-gray-200 text-gray-700"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    {pageNum}
                  </button>
                );
              } else if (
                pageNum === currentPage - 2 ||
                pageNum === currentPage + 2
              ) {
                return (
                  <span
                    key={`ellipsis-${pageNum}`}
                    className="px-2 text-gray-500"
                  >
                    ...
                  </span>
                );
              }
              return null;
            }
          )}
        </div>

        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500 rounded transition-colors"
          style={{
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          ›
        </button>
      </div>

      <div className="text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};
