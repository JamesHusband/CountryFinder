import React from "react";
import { Table } from "../../ui";

interface DataTableProps {
  columns: string[];
  data: string[][];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return <Table columns={columns} data={data} />;
};
