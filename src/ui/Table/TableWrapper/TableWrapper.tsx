import React from "react";

interface TableWrapperProps {
  children: React.ReactNode;
}

export const TableWrapper: React.FC<TableWrapperProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">{children}</table>
    </div>
  );
};
