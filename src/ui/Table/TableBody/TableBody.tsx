import React from "react";

interface TableBodyProps {
  children: React.ReactNode;
}

export const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-900">
      {children}
    </tbody>
  );
};
