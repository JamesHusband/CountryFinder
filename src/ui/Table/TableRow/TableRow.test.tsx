import { render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";

describe("TableRow", () => {
  it("renders children correctly", () => {
    render(
      <TableRow>
        <td data-testid="test-cell">Test Cell</td>
        <td>Another Cell</td>
      </TableRow>
    );

    expect(screen.getByTestId("test-cell")).toBeInTheDocument();
    expect(screen.getByText("Test Cell")).toBeInTheDocument();
    expect(screen.getByText("Another Cell")).toBeInTheDocument();
  });

  it("renders row with single cell", () => {
    render(
      <TableRow>
        <td>Single Cell</td>
      </TableRow>
    );

    expect(screen.getByText("Single Cell")).toBeInTheDocument();
  });
});
