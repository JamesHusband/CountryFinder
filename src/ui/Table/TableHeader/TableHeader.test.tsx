import { render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";

describe("TableHeader", () => {
  it("renders columns correctly", () => {
    const columns = ["Name", "Code", "Continent", "Currency"];

    render(
      <table>
        <TableHeader columns={columns} />
      </table>
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Continent")).toBeInTheDocument();
    expect(screen.getByText("Currency")).toBeInTheDocument();
  });

  it("renders empty columns array", () => {
    render(
      <table>
        <TableHeader columns={[]} />
      </table>
    );

    const thead = screen.getByRole("rowgroup");
    expect(thead).toBeInTheDocument();
  });
});
