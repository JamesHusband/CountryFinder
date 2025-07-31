import React from "react";
import { PageButton } from "../PageButton";

interface PageNumbersProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PageNumbers: React.FC<PageNumbersProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
        const shouldShow =
          pageNum === 1 ||
          pageNum === totalPages ||
          (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);

        if (shouldShow) {
          return (
            <PageButton
              key={pageNum}
              pageNumber={pageNum}
              isActive={currentPage === pageNum}
              onClick={() => onPageChange(pageNum)}
            />
          );
        } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
          return (
            <span key={`ellipsis-${pageNum}`} className="px-2 text-gray-500">
              ...
            </span>
          );
        }
        return null;
      })}
    </div>
  );
};
