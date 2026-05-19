import React from "react";
import { render, screen } from "@testing-library/react";
import { SectionTitle } from "./SectionTitle";

describe("SectionTitle", () => {
  it("renders without any props", () => {
    render(<SectionTitle />);

    // Should render an empty container with flex classes
    const elements = document.querySelectorAll('.flex.w-full.flex-col.mt-4');
    expect(elements).toHaveLength(1);
  });

  it("renders with preTitle only", () => {
    const preTitle = "Test PreTitle";
    render(<SectionTitle preTitle={preTitle} />);

    expect(screen.getByText(preTitle)).toBeInTheDocument();
    expect(screen.getByText(preTitle).classList).toContain("uppercase");
    expect(screen.getByText(preTitle).classList).toContain("text-indigo-600");
  });

  it("renders with title only", () => {
    const title = "Test Title";
    render(<SectionTitle title={title} />);

    const titleElement = screen.getByRole("heading", { level: 2, name: title });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("text-3xl");
    expect(titleElement).toHaveClass("font-bold");
  });

  it("renders with children only", () => {
    const childrenText = "Test children content";
    render(<SectionTitle>{childrenText}</SectionTitle>);

    expect(screen.getByText(childrenText)).toBeInTheDocument();
    expect(screen.getByText(childrenText)).toHaveClass("text-lg");
    expect(screen.getByText(childrenText)).toHaveClass("text-gray-500");
  });

  it("renders with all props", () => {
    const preTitle = "Test PreTitle";
    const title = "Test Title";
    const childrenText = "Test children";

    render(
      <SectionTitle preTitle={preTitle} title={title}>
        {childrenText}
      </SectionTitle>
    );

    expect(screen.getByText(preTitle)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: title })).toBeInTheDocument();
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it("applies center alignment by default", () => {
    render(<SectionTitle title="Test Title" />);

    // Find the container div with flex classes
    const elements = document.querySelectorAll('.flex.w-full.flex-col.mt-4');
    expect(elements).toHaveLength(1);
    expect(elements[0]).toHaveClass("items-center");
    expect(elements[0]).toHaveClass("justify-center");
    expect(elements[0]).toHaveClass("text-center");
  });

  it("applies left alignment when specified", () => {
    render(<SectionTitle title="Test Title" align="left" />);

    // Find the container div with flex classes but without centering classes
    const elements = document.querySelectorAll('.flex.w-full.flex-col.mt-4');
    expect(elements).toHaveLength(1);
    expect(elements[0]).not.toHaveClass("items-center");
    expect(elements[0]).not.toHaveClass("justify-center");
    expect(elements[0]).not.toHaveClass("text-center");
  });
});