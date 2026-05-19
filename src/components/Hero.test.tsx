import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

// Mock the image import
jest.mock('../../public/img/hero.png', () => ({
  __esModule: true,
  default: {
    src: '/img/hero.png',
    height: 617,
    width: 616,
  },
}));

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, ...props }: { src: string; alt: string; width: number; height: number }) => (
    <img src={src} alt={alt} width={width} height={height} data-testid="mock-image" {...props} />
  ),
}));

// Mock the Container component
jest.mock('@/components/Container', () => ({
  Container: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className} data-testid="container">
      {children}
    </div>
  ),
}));

describe('Hero Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the main heading correctly', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', {
      name: /Free Landing Page Template for startups/i
    });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('renders the description paragraph correctly', () => {
    render(<Hero />);

    const description = screen.getByText(
      /Nextly is a free landing page & marketing website template for startups and indie projects/i
    );

    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-xl');
  });

  it('renders both download and GitHub links', () => {
    render(<Hero />);

    const downloadLink = screen.getByRole('link', {
      name: /Download for Free/i
    });

    const githubLink = screen.getByRole('link', {
      name: /View on Github/i
    });

    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', 'https://web3templates.com/templates/nextly-landing-page-template-for-startups');
    expect(downloadLink).toHaveAttribute('target', '_blank');
    expect(downloadLink).toHaveClass('px-8', 'py-4', 'text-lg', 'font-medium', 'text-center', 'text-white', 'bg-indigo-600');

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/web3templates/nextly-template/');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  it('renders the GitHub icon within the GitHub link', () => {
    render(<Hero />);

    const githubLink = screen.getByRole('link', { name: /View on Github/i });
    const githubIcon = githubLink.querySelector('svg[role="img"]');

    expect(githubIcon).toBeInTheDocument();
    expect(githubIcon).toHaveAttribute('width', '24');
    expect(githubIcon).toHaveAttribute('height', '24');
  });

  it('renders the hero image', () => {
    render(<Hero />);

    const heroImage = screen.getByTestId('mock-image');

    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('alt', 'Hero Illustration');
    expect(heroImage).toHaveAttribute('width', '616');
    expect(heroImage).toHaveAttribute('height', '617');
    expect(heroImage).toHaveClass('object-cover');
  });

  it('renders the trust message with customer count', () => {
    render(<Hero />);

    // The trust message is split across elements, so we find the parent div
    const trustContainer = screen.getByText('Trusted by', { exact: false });
    expect(trustContainer).toBeInTheDocument();

    const customerCount = screen.getByText('2000+');
    expect(customerCount).toBeInTheDocument();
    expect(customerCount).toHaveClass('text-indigo-600');
  });

  it('renders the company logos as SVG elements', () => {
    render(<Hero />);

    // Find all containers that have text-gray-400 class
    // Using querySelector to find elements with specific class names
    const logoContainerDivs = document.querySelectorAll('div.text-gray-400, div.text-gray-400\\:dark\\:text-gray-400');

    // Based on the output, there should be 5 logo containers
    expect(logoContainerDivs).toHaveLength(5);

    // Each container should have an SVG child
    logoContainerDivs.forEach(container => {
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  it('renders the correct number of company logos', () => {
    render(<Hero />);

    // Find the container that has the logos
    const logoSection = screen.getByText('Trusted by', { exact: false }).closest('div');
    // The parent div of the trust message contains the logo section
    const logoContainers = document.querySelectorAll('div[class*="text-gray-400"]');
    expect(logoContainers).toHaveLength(5); // Each logo is in a div with text-gray-400 class
  });

  it('renders all Container components', () => {
    render(<Hero />);

    const containers = screen.getAllByTestId('container');
    expect(containers).toHaveLength(2); // There are 2 Container components in Hero
  });

  it('applies the correct classes to the main container', () => {
    render(<Hero />);

    const allContainers = screen.getAllByTestId('container');
    const firstContainer = allContainers[0]; // The first container is the main one with flex flex-wrap
    expect(firstContainer).toHaveClass('flex', 'flex-wrap');
  });

  it('should have the download link with correct styling', () => {
    render(<Hero />);

    const downloadLink = screen.getByRole('link', { name: /Download for Free/i });
    expect(downloadLink).toHaveClass('px-8', 'py-4', 'text-lg', 'font-medium', 'text-center', 'text-white', 'bg-indigo-600', 'rounded-md');
  });
});