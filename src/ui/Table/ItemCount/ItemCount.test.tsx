import { render, screen } from "@testing-library/react";
import { ItemCount } from "./ItemCount";

describe("ItemCount", () => {
  it("renders count with default label", () => {
    render(<ItemCount count={250} />);

    expect(screen.getByText("Total: 250 entries")).toBeInTheDocument();
  });

  it("renders count with custom label", () => {
    render(<ItemCount count={42} label="countries" />);

    expect(screen.getByText("Total: 42 countries")).toBeInTheDocument();
  });

  it("handles zero count", () => {
    render(<ItemCount count={0} />);

    expect(screen.getByText("Total: 0 entries")).toBeInTheDocument();
  });
});
