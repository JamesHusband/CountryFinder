import React from "react";

interface PageButtonProps {
  pageNumber: number;
  isActive: boolean;
  onClick: () => void;
}

export const PageButton: React.FC<PageButtonProps> = ({
  pageNumber,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
        isActive
          ? "bg-gray-200 text-gray-700"
          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
      }`}
      style={{ cursor: "pointer" }}
    >
      {pageNumber}
    </button>
  );
};
