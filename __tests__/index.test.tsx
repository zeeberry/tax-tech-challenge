import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders restaurant name", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Cafe Camellia")).toBeInTheDocument();
  });

  it("renders reserve button", () => {
    const { getByRole } = render(<Home />);

    expect(getByRole("button", { name: /Reserve/i })).toBeInTheDocument();
  });
});
