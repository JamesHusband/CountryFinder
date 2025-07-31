import { atom } from "recoil";

export interface CurrencyOption {
  value: string;
  label: string;
}

export interface CurrencyOptionsState {
  options: CurrencyOption[];
  loading: boolean;
  error: string | null;
}

export const currencyOptionsState = atom<CurrencyOptionsState>({
  key: "currencyOptionsState",
  default: {
    options: [],
    loading: false,
    error: null,
  },
});
