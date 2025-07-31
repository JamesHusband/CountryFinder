import { render, screen } from "@testing-library/react";
import { Status } from "./Status";

describe("Status", () => {
  it("renders loading state correctly", () => {
    render(<Status type="loading" message="Loading data..." />);

    expect(screen.getByText("Loading data...")).toBeInTheDocument();
    expect(screen.getByText("Loading data...")).toHaveClass(
      "text-lg",
      "text-gray-600"
    );
  });

  it("renders error state correctly", () => {
    const error = new Error("Network error");
    render(<Status type="error" message="Failed to load" error={error} />);

    expect(screen.getByText("Failed to load")).toBeInTheDocument();
    expect(screen.getByText("Network error")).toBeInTheDocument();
    expect(screen.getByText("Failed to load")).toHaveClass(
      "text-lg",
      "text-red-600"
    );
  });

  it("renders with default messages when not provided", () => {
    render(<Status type="loading" />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    render(<Status type="error" />);
    expect(screen.getByText("An error occurred")).toBeInTheDocument();
  });
});
