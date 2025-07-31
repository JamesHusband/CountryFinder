import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CountryForm } from "./CountryForm";

vi.mock("formik", () => ({
  Formik: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="formik">{children}</div>
  ),
  Form: ({ children }: { children: React.ReactNode }) => (
    <form data-testid="form">{children}</form>
  ),
}));

vi.mock("./CountryFormContext", () => ({
  CountryFormContext: () => (
    <div data-testid="country-form-context">CountryFormContext</div>
  ),
}));

vi.mock("../../hooks", () => ({
  useSearchState: () => ({
    searchType: "continent-currency",
  }),
  useFilterState: () => ({
    continent: "",
    currency: "",
    countryCode: "",
  }),
}));

describe("CountryForm", () => {
  it("renders form container", () => {
    render(<CountryForm />);
    expect(screen.getByTestId("formik")).toBeInTheDocument();
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it("renders CountryFormContext", () => {
    render(<CountryForm />);
    expect(screen.getByTestId("country-form-context")).toBeInTheDocument();
  });

  it("has correct styling classes", () => {
    render(<CountryForm />);
    const container = screen.getByTestId("formik").parentElement;
    expect(container).toHaveClass("bg-white", "p-6", "rounded-lg", "shadow-md");
  });
});
