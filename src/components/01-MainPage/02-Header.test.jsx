import { render, screen } from "@testing-library/react";
import Header from "./02-Header";

describe("Header Component", () => {
  it("render correct heading", () => {
    render(<Header />);
    const header = screen.getByText("Jewelery Hell");
    const home = screen.getByText("Home");
    const store = screen.getByText("Store");
    const about = screen.getByText("About");
    expect(header).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(store).toBeInTheDocument();
    expect(about).toBeInTheDocument();
  });
});
