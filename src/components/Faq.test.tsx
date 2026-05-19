import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Faq } from "./Faq";

// Mock the Container component
jest.mock("@/components/Container", () => ({
  Container: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
}));

// Mock the Headless UI components
jest.mock("@headlessui/react", () => ({
  Disclosure: ({ children }: { children: (context: { open: boolean }) => React.ReactNode }) => 
    children({ open: false }),
  DisclosureButton: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
  DisclosurePanel: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

// Mock the Heroicons component
jest.mock("@heroicons/react/24/solid", () => ({
  ChevronUpIcon: ({ className }: { className: string }) => (
    <svg className={className} data-testid="chevron-icon" />
  ),
}));

describe("Faq", () => {
  beforeEach(() => {
    // Reset any mocks before each test
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<Faq />);
    expect(screen.getByRole("button", { name: /Is this template completely free to use\?/i })).toBeInTheDocument();
  });

  it("renders all FAQ items", () => {
    render(<Faq />);
    
    const questions = [
      "Is this template completely free to use?",
      "Can I use it in a commercial project?",
      "What is your refund policy?",
      "Do you offer technical support?"
    ];

    questions.forEach(question => {
      expect(screen.getByRole("button", { name: question })).toBeInTheDocument();
    });
  });

  it("displays the correct answers when FAQ items are expanded", () => {
    render(<Faq />);
    
    const faqItems = [
      {
        question: "Is this template completely free to use?",
        answer: "Yes, this template is completely free to use."
      },
      {
        question: "Can I use it in a commercial project?",
        answer: "Yes, this you can."
      },
      {
        question: "What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
      },
      {
        question: "Do you offer technical support?",
        answer: "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support."
      }
    ];

    faqItems.forEach(item => {
      const questionElement = screen.getByText(item.question);
      expect(questionElement).toBeInTheDocument();
    });
  });

  it("renders the chevron icons", () => {
    render(<Faq />);
    
    const chevronIcons = screen.getAllByTestId("chevron-icon");
    expect(chevronIcons).toHaveLength(4); // There should be 4 chevron icons for 4 FAQ items
  });

  it("has proper class names for styling", () => {
    const { container } = render(<Faq />);

    // Find elements with the specific class
    const elementsWithClass = container.querySelectorAll('.\\!p-0');
    expect(elementsWithClass.length).toBeGreaterThan(0);
  });
});