import React from "react";
import { render, screen } from "@testing-library/react";
import { Benefits } from "./Benefits";

// Mock the Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // Extract only the attributes we want to pass to the img element
    const { src, width, height, alt, className, placeholder, blurDataURL, ...rest } = props;
    return (
      <img
        src={typeof src === 'string' ? src : (src?.src || '')}
        width={width}
        height={height}
        alt={alt}
        className={className}
        data-testid="mock-image"
        {...rest}
      />
    );
  },
}));

// Mock the Container component
jest.mock("./Container", () => ({
  Container: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className} data-testid="container">
      {children}
    </div>
  ),
}));

describe("Benefits", () => {
  const mockData = {
    title: "Test Title",
    desc: "Test Description",
    image: {
      src: "/test-image.jpg",
      width: 500,
      height: 500,
    },
    bullets: [
      {
        title: "Bullet 1",
        desc: "Bullet description 1",
        icon: <div data-testid="icon-1">Icon1</div>,
      },
      {
        title: "Bullet 2",
        desc: "Bullet description 2",
        icon: <div data-testid="icon-2">Icon2</div>,
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with all elements", () => {
    render(<Benefits data={mockData} />);

    // Check if the title is rendered
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText("Test Description")).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByTestId("mock-image")).toBeInTheDocument();

    // Check if bullets are rendered
    expect(screen.getByText("Bullet 1")).toBeInTheDocument();
    expect(screen.getByText("Bullet description 1")).toBeInTheDocument();
    expect(screen.getByText("Bullet 2")).toBeInTheDocument();
    expect(screen.getByText("Bullet description 2")).toBeInTheDocument();

    // Check if icons are rendered within the bullets
    expect(screen.getByTestId("icon-1")).toBeInTheDocument();
    expect(screen.getByTestId("icon-2")).toBeInTheDocument();
  });

  it("renders correctly with imgPos='right' prop", () => {
    render(<Benefits data={mockData} imgPos="right" />);

    const container = screen.getByTestId("container");
    expect(container).toHaveClass("flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap");

    // Check if the image container has the correct order class
    const imageContainer = screen.getByTestId("mock-image").closest("div");
    expect(imageContainer).toBeInTheDocument();
  });

  it("renders correctly with default imgPos", () => {
    render(<Benefits data={mockData} imgPos="left" />);

    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("text-3xl");
  });

  it("handles empty bullets array gracefully", () => {
    const dataWithoutBullets = {
      ...mockData,
      bullets: [],
    };

    render(<Benefits data={dataWithoutBullets} />);

    // Title and description should still render
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();

    // No bullet items should be rendered
    expect(screen.queryByText("Bullet 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Bullet description 1")).not.toBeInTheDocument();
  });

  it("renders all bullet items with correct content", () => {
    render(<Benefits data={mockData} />);

    // Check that all bullet titles are rendered
    mockData.bullets.forEach(bullet => {
      expect(screen.getByText(bullet.title)).toBeInTheDocument();
      expect(screen.getByText(bullet.desc)).toBeInTheDocument();
    });
  });

  it("applies correct CSS classes to the layout", () => {
    render(<Benefits data={mockData} />);

    const container = screen.getByTestId("container");
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("flex-wrap");
    expect(container).toHaveClass("mb-20");
    expect(container).toHaveClass("lg:gap-10");
    expect(container).toHaveClass("lg:flex-nowrap");
  });

  it("passes correct props to the Image component", () => {
    render(<Benefits data={mockData} />);

    const image = screen.getByTestId("mock-image");
    expect(image).toHaveAttribute("src", "/test-image.jpg");
    expect(image).toHaveAttribute("width", "521");
    expect(image).toHaveAttribute("height", "521");
    expect(image).toHaveAttribute("alt", "Benefits");
  });

  it("renders with correct default imgPos behavior", () => {
    render(<Benefits data={mockData} />);

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();

    // Title should be present
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});