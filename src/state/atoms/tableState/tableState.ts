import { atom } from "recoil";
import type { Country } from "../../../types";

export interface TableState {
  columns: string[];
  data: string[][];
  countries: Country[];
}

export const tableState = atom<TableState>({
  key: "tableState",
  default: {
    columns: [],
    data: [],
    countries: [],
  },
});
