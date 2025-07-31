import { render, screen } from "@testing-library/react";
import { TableWrapper } from "./TableWrapper";

describe("TableWrapper", () => {
  it("renders children correctly", () => {
    render(
      <TableWrapper>
        <thead>
          <tr>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </TableWrapper>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders with table structure", () => {
    render(
      <TableWrapper>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </TableWrapper>
    );

    const table = screen.getByText("Test").closest("table");
    expect(table).toBeInTheDocument();
  });
});
