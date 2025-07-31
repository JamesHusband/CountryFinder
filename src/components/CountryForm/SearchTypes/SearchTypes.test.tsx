import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SearchTypes } from "./SearchTypes";

vi.mock("../../../ui", () => ({
  Radio: ({
    id,
    label,
    checked,
    onChange,
  }: {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
  }) => (
    <div data-testid={`radio-${id}`} onClick={onChange}>
      <input type="radio" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </div>
  ),
}));

vi.mock("../../../hooks", () => ({
  useSearchState: () => ({
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
  }),
}));

describe("SearchTypes", () => {
  const mockOnTypeChange = vi.fn();

  beforeEach(() => {
    mockOnTypeChange.mockClear();
  });

  it("renders search type title", () => {
    render(
      <SearchTypes
        selectedType="continent-currency"
        onTypeChange={mockOnTypeChange}
      />
    );
    expect(screen.getByText("Search Type")).toBeInTheDocument();
  });

  it("renders all search type options", () => {
    render(
      <SearchTypes
        selectedType="continent-currency"
        onTypeChange={mockOnTypeChange}
      />
    );
    expect(screen.getByTestId("radio-continent-currency")).toBeInTheDocument();
    expect(screen.getByTestId("radio-country-code")).toBeInTheDocument();
    expect(screen.getByTestId("radio-country-name")).toBeInTheDocument();
  });

  it("displays correct labels", () => {
    render(
      <SearchTypes
        selectedType="continent-currency"
        onTypeChange={mockOnTypeChange}
      />
    );
    expect(
      screen.getByText("Search by Continent and Currency")
    ).toBeInTheDocument();
    expect(screen.getByText("Search by Country Code")).toBeInTheDocument();
    expect(screen.getByText("Search by Country Name")).toBeInTheDocument();
  });

  it("calls onTypeChange when radio is clicked", () => {
    render(
      <SearchTypes
        selectedType="continent-currency"
        onTypeChange={mockOnTypeChange}
      />
    );
    const countryCodeRadio = screen.getByTestId("radio-country-code");
    countryCodeRadio.click();
    expect(mockOnTypeChange).toHaveBeenCalledWith("country-code");
  });

  it("has correct container styling", () => {
    render(
      <SearchTypes
        selectedType="continent-currency"
        onTypeChange={mockOnTypeChange}
      />
    );
    const container = screen.getByText("Search Type").parentElement;
    expect(container).toHaveClass("mb-4");
  });
});
