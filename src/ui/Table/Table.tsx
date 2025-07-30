import React from "react";
import { TableWrapper } from "./TableWrapper";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TableRow } from "./TableRow";

interface TableProps {
  columns: string[];
  data: string[][];
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <TableWrapper>
      <TableHeader columns={columns} />
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                {cell}
              </td>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};
