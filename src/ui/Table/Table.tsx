import React from "react";
import { TableWrapper } from "./TableWrapper";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TableRow } from "./TableRow";
import { Pagination } from "./Pagination";

interface TableProps {
  columns: string[];
  data: string[][];
  currentPage: number;
  totalPages: number;
  entriesPerPage: number;
  entriesPerPageOptions: { value: number; label: string }[];
  onPageChange: (page: number) => void;
  onEntriesPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  currentPage,
  totalPages,
  entriesPerPage,
  entriesPerPageOptions,
  onPageChange,
  onEntriesPerPageChange,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <div>
      <TableWrapper>
        <TableHeader columns={columns} />
        <TableBody>
          {data.map((row: string[], rowIndex: number) => (
            <TableRow key={rowIndex}>
              {row.map((cell: string, cellIndex: number) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        entriesPerPage={entriesPerPage}
        entriesPerPageOptions={entriesPerPageOptions}
        onPageChange={onPageChange}
        onEntriesPerPageChange={onEntriesPerPageChange}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    </div>
  );
};
