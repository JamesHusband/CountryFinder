import { render, screen } from "@testing-library/react";
import { TableBody } from "./TableBody";

describe("TableBody", () => {
  it("renders children correctly", () => {
    render(
      <TableBody>
        <tr data-testid="test-row">
          <td>Test Cell</td>
        </tr>
      </TableBody>
    );

    expect(screen.getByTestId("test-row")).toBeInTheDocument();
    expect(screen.getByText("Test Cell")).toBeInTheDocument();
  });
});
