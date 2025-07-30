import React from "react";

interface TableHeaderProps {
  columns: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead className="bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
      <tr>
        {columns.map((column, index) => (
          <th key={index} className="px-6 py-3 text-left">
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};
