import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useTheme } from 'next-themes';
import ThemeChanger from './DarkSwitch'; // The component is named ThemeChanger but exported as default from DarkSwitch.tsx

// Mock the next-themes module
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

// Helper to mock the component as mounted
const mockMountedComponent = () => {
  // Mock useState to return true (as if useEffect already ran)
  const useStateSpy = jest.spyOn(React, 'useState') as jest.MockedFunction<typeof React.useState>;
  useStateSpy.mockImplementation(((init: React.SetStateAction<boolean>): [boolean, React.Dispatch<React.SetStateAction<boolean>>] =>
    [true, jest.fn() as React.Dispatch<React.SetStateAction<boolean>>]) as any);

  return () => {
    useStateSpy.mockRestore();
  };
};

describe('ThemeChanger', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Set up the default mock for useTheme
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: jest.fn(),
      themes: ['light', 'dark'],
    });
  });

  it('renders light mode toggle when theme is light', () => {
    const setThemeMock = jest.fn();
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
      themes: ['light', 'dark'],
    });

    // Mock the component as mounted
    const restore = mockMountedComponent();

    render(<ThemeChanger />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // Check if the moon icon is present (for light theme)
    const circleElement = document.querySelector('circle');
    expect(circleElement).toBeInTheDocument();

    // Restore original useState
    restore();
  });

  it('renders dark mode toggle when theme is dark', () => {
    const setThemeMock = jest.fn();
    mockUseTheme.mockReturnValue({
      theme: 'dark',
      setTheme: setThemeMock,
      themes: ['light', 'dark'],
    });

    // Mock the component as mounted
    const restore = mockMountedComponent();

    render(<ThemeChanger />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // Check if the sun icon is present (for dark theme)
    const sunIcon = document.querySelector('path[d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"]');
    expect(sunIcon).toBeInTheDocument();

    // Restore original useState
    restore();
  });

  it('toggles theme from dark to light', () => {
    const mockSetTheme = jest.fn();
    mockUseTheme.mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme,
      themes: ['light', 'dark'],
    });

    // Mock the component as mounted
    const restore = mockMountedComponent();

    render(<ThemeChanger />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockSetTheme).toHaveBeenCalledWith('light');

    // Restore original useState
    restore();
  });

  it('toggles theme from light to dark', () => {
    const mockSetTheme = jest.fn();
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      themes: ['light', 'dark'],
    });

    // Mock the component as mounted
    const restore = mockMountedComponent();

    render(<ThemeChanger />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockSetTheme).toHaveBeenCalledWith('dark');

    // Restore original useState
    restore();
  });

  it('has proper screen reader text when theme is light', () => {
    const setThemeMock = jest.fn();
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
      themes: ['light', 'dark'],
    });

    // Mock the component as mounted
    const restore = mockMountedComponent();

    render(<ThemeChanger />);

    // Check for the screen reader text "Dark Mode" when current theme is light
    const srOnlyText = screen.getByText('Dark Mode');
    expect(srOnlyText).toBeInTheDocument();
    expect(srOnlyText).toHaveClass('sr-only');

    // Restore original useState
    restore();
  });

  it('has proper screen reader text when theme is dark', () => {
    const setThemeMock = jest.fn();
    mockUseTheme.mockReturnValue({
      theme: 'dark',
      setTheme: setThemeMock,
      themes: ['light', 'dark'],
    });

    // Mock the component as mounted
    const restore = mockMountedComponent();

    render(<ThemeChanger />);

    // Check for the screen reader text "Light Mode" when current theme is dark 
    const srOnlyText = screen.getByText('Light Mode');
    expect(srOnlyText).toBeInTheDocument();
    expect(srOnlyText).toHaveClass('sr-only');

    // Restore original useState
    restore();
  });

  it('applies correct CSS classes based on theme', () => {
    const mockSetTheme = jest.fn();

    // Test with light theme
    mockUseTheme.mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      themes: ['light', 'dark'],
    });

    // Mock the component as mounted
    const restore = mockMountedComponent();

    render(<ThemeChanger />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-gray-500');

    // Restore original useState
    restore();
  });
});