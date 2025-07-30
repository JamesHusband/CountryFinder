import { atom } from "recoil";

interface SearchType {
  id: string;
  value: "continent-currency" | "country-code";
  label: string;
}

export interface SearchState {
  searchType: "continent-currency" | "country-code";
  searchTypes: SearchType[];
}

export const searchState = atom<SearchState>({
  key: "searchState",
  default: {
    searchType: "continent-currency",
    searchTypes: [
      {
        id: "continent-currency",
        value: "continent-currency",
        label: "Search by Continent and Currency",
      },
      {
        id: "country-code",
        value: "country-code",
        label: "Search by Country Code",
      },
    ],
  },
});
