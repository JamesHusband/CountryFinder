import { atom } from "recoil";
import type { Country } from "../../../types";

export interface TableState {
  columns: string[];
  data: string[][];
  countries: Country[];
  entriesPerPageOptions: { value: number; label: string }[];
}

export const tableState = atom<TableState>({
  key: "tableState",
  default: {
    columns: [],
    data: [],
    countries: [],
    entriesPerPageOptions: [
      { value: 10, label: "10" },
      { value: 20, label: "20" },
      { value: 50, label: "50" },
      { value: 100, label: "100" },
    ],
  },
});
