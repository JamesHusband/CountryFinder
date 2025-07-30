import { atom } from "recoil";

export interface ContinentOption {
  value: string;
  label: string;
}

export interface ContinentOptionsState {
  options: ContinentOption[];
  loading: boolean;
  error: string | null;
}

export const continentOptionsState = atom<ContinentOptionsState>({
  key: "continentOptionsState",
  default: {
    options: [],
    loading: false,
    error: null,
  },
});
