import { atom } from "recoil";

export interface TableState {
  columns: string[];
  data: string[][];
}

export const tableState = atom<TableState>({
  key: "tableState",
  default: {
    columns: [],
    data: [],
  },
});
