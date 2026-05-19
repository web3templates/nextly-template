import React from "react";
import { render, screen } from "@testing-library/react";
import { Testimonials } from "./Testimonials";

// Mock image imports
jest.mock("../../public/img/user1.jpg", () => ({
  __esModule: true,
  default: {
    src: "/img/user1.jpg",
    width: 40,
    height: 40,
  },
}));

jest.mock("../../public/img/user2.jpg", () => ({
  __esModule: true,
  default: {
    src: "/img/user2.jpg",
    width: 40,
    height: 40,
  },
}));

jest.mock("../../public/img/user3.jpg", () => ({
  __esModule: true,
  default: {
    src: "/img/user3.jpg",
    width: 40,
    height: 40,
  },
}));

// Mock the next/image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
    <img src={src} alt={alt} width={width} height={height} data-testid="mock-image" />
  ),
}));

// Mock the Container component
jest.mock("@/components/Container", () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
}));

describe("Testimonials", () => {
  beforeEach(() => {
    // Reset any potential module mocks
    jest.clearAllMocks();
  });

  it("renders the component without crashing", () => {
    render(<Testimonials />);
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  it("renders all three testimonials", () => {
    render(<Testimonials />);
    const testimonialDivs = screen.getAllByRole("generic", { hidden: true }); // generic role for div elements
    // Count the number of testimonial containers (div with bg-gray-100 class styling)
    const testimonialContainers = screen.getAllByText(/Share a real|Make sure you only|This is an/);
    expect(testimonialContainers).toHaveLength(3);
  });

  it("renders the correct testimonial quotes", () => {
    render(<Testimonials />);

    // Use queryByText with exact matching or use container to check for partial text
    const container = screen.getByTestId("container");

    expect(container).toHaveTextContent(/Share a real testimonial that hits some of your benefits/);
    expect(container).toHaveTextContent(/Make sure you only pick the right sentence/);
    expect(container).toHaveTextContent(/This is an awesome landing page template/);
  });

  it("renders the highlighted text (Mark component) in testimonials", () => {
    render(<Testimonials />);

    const markElements = screen.getAllByText(/testimonial|right sentence|awesome/);
    expect(markElements).toHaveLength(3); // Each testimonial has one highlighted word

    // Check that the mark elements are present with the correct content
    expect(screen.getByText('testimonial')).toBeInTheDocument();
    expect(screen.getByText('right sentence')).toBeInTheDocument();
    expect(screen.getByText('awesome')).toBeInTheDocument();
  });

  it("renders avatars with correct names and titles", () => {
    render(<Testimonials />);
    
    const sarahElement = screen.getByText("Sarah Steiner");
    const dylanElement = screen.getByText("Dylan Ambrose");
    const gabrielleElement = screen.getByText("Gabrielle Winn");
    
    expect(sarahElement).toBeInTheDocument();
    expect(dylanElement).toBeInTheDocument();
    expect(gabrielleElement).toBeInTheDocument();
    
    const vpSalesElement = screen.getByText("VP Sales at Google");
    const leadMarketerElement = screen.getByText("Lead marketer at Netflix");
    const cofounderElement = screen.getByText("Co-founder of Acme Inc");
    
    expect(vpSalesElement).toBeInTheDocument();
    expect(leadMarketerElement).toBeInTheDocument();
    expect(cofounderElement).toBeInTheDocument();
  });

  it("renders avatar images with correct alt text", () => {
    render(<Testimonials />);
    
    // All images should have alt="Avatar" based on the component code
    const images = screen.getAllByTestId("mock-image");
    expect(images).toHaveLength(3);
    
    images.forEach(img => {
      expect(img).toHaveAttribute("alt", "Avatar");
    });
  });

  it("renders the correct grid structure", () => {
    render(<Testimonials />);
    
    // Check for the main grid container
    const gridContainer = screen.getByTestId("container");
    expect(gridContainer.firstElementChild).toHaveClass("grid");
    expect(gridContainer.firstElementChild).toHaveClass("gap-10");
  });

  it("applies correct CSS classes for responsive layout", () => {
    render(<Testimonials />);
    
    const gridContainer = screen.getByTestId("container");
    const gridClasses = gridContainer.firstElementChild?.className;
    
    expect(gridClasses).toContain("grid");
    expect(gridClasses).toContain("gap-10");
    // Check for responsive grid classes
    expect(gridClasses).toContain("lg:grid-cols-2");
    expect(gridClasses).toContain("xl:grid-cols-3");
  });

  it("renders testimonial background styling", () => {
    render(<Testimonials />);
    
    const testimonialContainers = screen.getAllByText(/Share a real|Make sure you only|This is an/);
    // Check that each testimonial container has the expected classes
    testimonialContainers.forEach(container => {
      // The parent div of the text contains the styling classes
      const parentContainer = container.closest('div');
      expect(parentContainer).toHaveClass('bg-gray-100');
      expect(parentContainer).toHaveClass('rounded-2xl');
      expect(parentContainer).toHaveClass('dark:bg-trueGray-800');
    });
  });
});