import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import Body from "./03-Body";

describe("Body component", () => {
  it("Is image loaded correctly", () => {
    const alt = "A girl wearing some jewelry";

    render(<Body />);

    const imageElement = screen.getByAltText(alt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.complete).toBe(true);
  });

  it("Is button works correctly", async () => {
    const user = UserEvent.setup();

    render(<Body />);

    const button = screen.getByRole("button", { name: "Shop now" });

    await user.click(button);

    const shopContent = screen.getByText("");

    expect(shopContent).toBeInTheDocument();
  });
});
