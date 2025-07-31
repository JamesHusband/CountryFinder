import { atom } from "recoil";

export interface FilterState {
  continent: string;
  currency: string;
  countryCode: string;
  countryName: string;
}

export const filterState = atom<FilterState>({
  key: "filterState",
  default: {
    continent: "",
    currency: "",
    countryCode: "",
    countryName: "",
  },
});
