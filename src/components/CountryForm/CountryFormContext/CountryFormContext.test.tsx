import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CountryFormContext } from "./CountryFormContext";

vi.mock("formik", () => ({
  useFormikContext: () => ({
    values: {
      searchType: "continent-currency",
      continent: "",
      currency: "",
      countryCode: "",
      countryName: "",
    },
    setFieldValue: vi.fn(),
  }),
}));

vi.mock("../../../ui", () => ({
  Select: ({ id, placeholder }: { id: string; placeholder: string }) => (
    <select data-testid={`select-${id}`}>{placeholder}</select>
  ),
  TextField: ({ id, placeholder }: { id: string; placeholder: string }) => (
    <input data-testid={`input-${id}`} placeholder={placeholder} />
  ),
  Button: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <button data-testid="button" onClick={onClick}>
      {children}
    </button>
  ),
}));

vi.mock("../SearchTypes", () => ({
  SearchTypes: ({
    selectedType,
    onTypeChange,
  }: {
    selectedType: string;
    onTypeChange: (value: string) => void;
  }) => (
    <div
      data-testid="search-types"
      onClick={() => onTypeChange("country-code")}
    >
      {selectedType}
    </div>
  ),
}));

vi.mock("../../../hooks", () => ({
  useSearchState: () => ({
    updateSearchType: vi.fn(),
  }),
  useContinentOptions: () => ({
    options: [{ value: "Europe", label: "Europe" }],
  }),
  useCurrencyOptions: () => ({
    options: [{ value: "EUR", label: "EUR" }],
    updateOptionsByContinent: vi.fn(),
    updateOptions: vi.fn(),
  }),
  useFilterState: () => ({
    updateContinent: vi.fn(),
    updateCurrency: vi.fn(),
    updateCountryCode: vi.fn(),
    updateCountryName: vi.fn(),
  }),
  useDebouncedSearch: () => ({
    searchValue: "",
    handleSearchChange: vi.fn(),
  }),
  useTableState: () => ({
    countries: [],
  }),
}));

vi.mock("../../../utils/currencyFilter", () => ({
  extractUniqueCurrencies: () => ["EUR", "USD"],
}));

describe("CountryFormContext", () => {
  it("renders SearchTypes", () => {
    render(<CountryFormContext />);
    expect(screen.getByTestId("search-types")).toBeInTheDocument();
  });

  it("renders continent and currency selects for continent-currency search type", () => {
    render(<CountryFormContext />);
    expect(screen.getByTestId("select-continent")).toBeInTheDocument();
    expect(screen.getByTestId("select-currency")).toBeInTheDocument();
  });
});
