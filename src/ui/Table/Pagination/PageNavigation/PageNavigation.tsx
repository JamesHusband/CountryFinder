import React from "react";
import { NavigationButton } from "./NavigationButton";
import { PageNumbers } from "./PageNumbers";

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <div className="flex items-center gap-2">
      <NavigationButton
        direction="previous"
        disabled={currentPage === 1}
        onClick={onPreviousPage}
      />

      <PageNumbers
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <NavigationButton
        direction="next"
        disabled={currentPage === totalPages}
        onClick={onNextPage}
      />
    </div>
  );
};
