import React from "react";
import { Table } from "../../ui";
import { useTableState } from "../../hooks";

export const DataTable: React.FC = () => {
  const { columns, data } = useTableState();

  return <Table columns={columns} data={data} />;
};
