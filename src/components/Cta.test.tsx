import React from "react";
import { render, screen } from "@testing-library/react";
import { Cta } from "./Cta";

describe("Cta", () => {
  it("renders the component correctly", () => {
    render(<Cta />);

    // Check that the main content container with expected classes is present
    const container = screen.getByText("Ready to try-out this template?").closest("div");
    expect(container).toBeInTheDocument();
  });

  it("renders the heading text correctly", () => {
    render(<Cta />);

    const heading = screen.getByText("Ready to try-out this template?");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H2");
  });

  it("renders the description text correctly", () => {
    render(<Cta />);

    const description = screen.getByText("Don't let your visitors see a poor landing.");
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe("P");
  });

  it("renders the call-to-action link with correct text", () => {
    render(<Cta />);

    const link = screen.getByRole("link", { name: "Download for Free" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com/web3templates");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener");
  });

  it("has correct styling classes applied to outer container", () => {
    render(<Cta />);

    // Find the outer container that has the flex, flex-wrap, items-center classes
    const outerContainer = screen.getByText("Ready to try-out this template?").closest("div");
    // Navigate up to find the actual outer container with the flex classes
    const parentContainer = outerContainer?.parentElement;
    expect(parentContainer).toHaveClass("flex", "flex-wrap", "items-center");
  });
});