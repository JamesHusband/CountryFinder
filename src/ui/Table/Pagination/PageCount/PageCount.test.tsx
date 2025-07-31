import { render, screen } from "@testing-library/react";
import { PageCount } from "./PageCount";

describe("PageCount", () => {
  it("renders page information correctly", () => {
    render(<PageCount currentPage={2} totalPages={5} />);

    expect(screen.getByText("Page 2 of 5")).toBeInTheDocument();
  });

  it("renders single page correctly", () => {
    render(<PageCount currentPage={1} totalPages={1} />);

    expect(screen.getByText("Page 1 of 1")).toBeInTheDocument();
  });

  it("renders last page correctly", () => {
    render(<PageCount currentPage={10} totalPages={10} />);

    expect(screen.getByText("Page 10 of 10")).toBeInTheDocument();
  });
});
