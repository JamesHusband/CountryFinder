import React from "react";

interface PageCountProps {
  currentPage: number;
  totalPages: number;
}

export const PageCount: React.FC<PageCountProps> = ({
  currentPage,
  totalPages,
}) => {
  return (
    <div className="text-sm text-gray-700">
      Page {currentPage} of {totalPages}
    </div>
  );
};
