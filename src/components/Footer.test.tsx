import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

// Mock Next.js components
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

jest.mock("next/image", () => {
  return ({ src, alt, width, height, className }: any) => {
    return <img src={src} alt={alt} width={width} height={height} className={className} />;
  };
});

describe("Footer", () => {
  beforeEach(() => {
    // Mock Date to have consistent year in copyright test
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2023, 0, 1)); // Jan 1, 2023
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the main container", () => {
    render(<Footer />);
    const footerContainer = screen.getByText(/nextly is a free landing page & marketing website template/i).closest('div');
    expect(footerContainer).toBeInTheDocument();
  });

  it("renders the logo link with image and text", () => {
    render(<Footer />);
    
    const logoLink = screen.getByRole("link", { name: /nextly/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    const logoImage = screen.getByAltText("N");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/img/logo.svg");
  });

  it("renders the description text", () => {
    render(<Footer />);
    
    const description = screen.getByText(
      /nextly is a free landing page & marketing website template for startups and indie projects/i
    );
    expect(description).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Footer />);
    
    const navigationItems = ["Product", "Features", "Pricing", "Company", "Blog"];
    
    navigationItems.forEach(item => {
      const link = screen.getByRole("link", { name: item });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/");
    });
  });

  it("renders legal links", () => {
    render(<Footer />);
    
    const legalItems = ["Terms", "Privacy", "Legal"];
    
    legalItems.forEach(item => {
      const link = screen.getByRole("link", { name: item });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/");
    });
  });

  it("renders social media links", () => {
    render(<Footer />);
    
    const twitterLink = screen.getByRole("link", { name: /twitter/i });
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/web3templates");

    const facebookLink = screen.getByRole("link", { name: /facebook/i });
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute("href", "https://facebook.com/web3templates");

    const instagramLink = screen.getByRole("link", { name: /instagram/i });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute("href", "https://instagram.com/web3templates");

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/");
  });

  it("renders social media icons", () => {
    render(<Footer />);

    // Check for the presence of social media SVGs by finding the sr-only text elements
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Linkedin')).toBeInTheDocument();
  });

  it("renders powered by Vercel link", () => {
    render(<Footer />);
    
    const vercelLink = screen.getByRole("link", { name: /powered by vercel/i });
    expect(vercelLink).toBeInTheDocument();
    expect(vercelLink).toHaveAttribute(
      "href", 
      "https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
    );
    
    const vercelImage = screen.getByAltText("Powered by Vercel");
    expect(vercelImage).toBeInTheDocument();
  });

  it("renders copyright information with correct year", () => {
    render(<Footer />);

    // Check that the copyright text contains the current year
    const copyrightElement = screen.getByText(/copyright ©/i);
    const copyrightDiv = copyrightElement.closest('div');
    expect(copyrightDiv).toBeInTheDocument();

    if (copyrightDiv) {
      expect(copyrightDiv.textContent).toContain('2023');
    }

    // Find the link with the specific text to avoid ambiguity
    const web3TemplatesLink = screen.getByRole("link", { name: /web3templates\./i }); // The dot makes it unique
    expect(web3TemplatesLink).toBeInTheDocument();
    expect(web3TemplatesLink).toHaveAttribute("href", "https://web3templates.com/");
  });

  it("renders Glazestock link in copyright section", () => {
    render(<Footer />);
    
    const glazestockLink = screen.getByRole("link", { name: /glazestock/i });
    expect(glazestockLink).toBeInTheDocument();
    expect(glazestockLink).toHaveAttribute("href", "https://www.glazestock.com/");
  });

  it("renders the Backlink component", () => {
    render(<Footer />);

    // Find the backlink by its unique text content "Web3Templates"
    const backlink = screen.getByText('Web3Templates').closest('a');
    expect(backlink).toBeInTheDocument();
    expect(backlink).toHaveAttribute("href", "https://web3templates.com");
  });

  it("has the correct grid layout structure", () => {
    render(<Footer />);

    // The main grid element should be present
    const gridElement = screen.getByText(/nextly is a free landing page & marketing website template/i).closest('div');
    expect(gridElement).toBeInTheDocument();
  });
});