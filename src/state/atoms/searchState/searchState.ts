import { atom } from "recoil";

export type SearchTypeValue =
  | "continent-currency"
  | "country-code"
  | "country-name";

export interface SearchType {
  id: string;
  value: SearchTypeValue;
  label: string;
}

export interface SearchState {
  searchType: SearchTypeValue;
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
      {
        id: "country-name",
        value: "country-name",
        label: "Search by Country Name",
      },
    ],
  },
});
