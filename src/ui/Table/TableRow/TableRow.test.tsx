import { render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";

describe("TableRow", () => {
  it("renders children correctly", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td data-testid="test-cell">Test Cell</td>
            <td>Another Cell</td>
          </TableRow>
        </tbody>
      </table>
    );

    expect(screen.getByTestId("test-cell")).toBeInTheDocument();
    expect(screen.getByText("Test Cell")).toBeInTheDocument();
    expect(screen.getByText("Another Cell")).toBeInTheDocument();
  });

  it("renders row with single cell", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Single Cell</td>
          </TableRow>
        </tbody>
      </table>
    );

    expect(screen.getByText("Single Cell")).toBeInTheDocument();
  });
});
