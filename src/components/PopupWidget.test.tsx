import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PopupWidget } from './PopupWidget';
import { useForm, useWatch } from 'react-hook-form';
import type { FieldValues, UseFormRegister, UseFormHandleSubmit, Control, FormState } from 'react-hook-form';
import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

// Mock the react-hook-form module to track form interactions
jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: jest.fn(),
  useWatch: jest.fn(),
}));

// Mock @headlessui/react components
jest.mock('@headlessui/react', () => ({
  Disclosure: ({ children }: { children: (props: { open: boolean }) => React.ReactNode }) => {
    // Return the children with open state set to true to show the form
    return <div data-testid="disclosure">{children({ open: true })}</div>;
  },
  DisclosureButton: ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
    <button data-testid="disclosure-button" onClick={onClick}>
      {children}
    </button>
  ),
  DisclosurePanel: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="disclosure-panel">{children}</div>
  ),
  Transition: ({ children, show = true }: { children: React.ReactNode, show?: boolean }) => (
    show ? <div data-testid="transition">{children}</div> : null
  ),
}));

// Mock fetch API
global.fetch = jest.fn();

describe('PopupWidget', () => {
  const mockRegister: UseFormRegister<FieldValues> = jest.fn((name: string) => ({
    onChange: jest.fn(),
    onBlur: jest.fn(),
    name,
    ref: { current: null },
  })) as unknown as UseFormRegister<FieldValues>;

  const mockHandleSubmit: UseFormHandleSubmit<FieldValues> = jest.fn()
    .mockImplementation((onSubmit) => (e?: React.BaseSyntheticEvent) => {
      if (e) {
        e.preventDefault();
      }
      return onSubmit({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, this is a test message',
        apikey: 'YOUR_ACCESS_KEY_HERE',
        subject: 'John Doe sent a message from Nextly',
        from_name: 'Nextly Template',
        botcheck: undefined,
      }, e);
    });
  
  const mockReset = jest.fn();
  const mockErrors = {};
  const mockControl: Control<any> = {} as Control<any>;

  // Form state that can be updated during tests
  let formState = {
    errors: mockErrors,
    isSubmitSuccessful: false,
    isSubmitting: false,
    isDirty: false,
    isLoading: false,
    isSubmitted: false,
    isValidating: false,
    isValid: true,
    submitCount: 0,
    disabled: false,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
  };

  beforeEach(() => {
    jest.clearAllMocks();

    // Reset form state for each test
    formState = {
      errors: mockErrors,
      isSubmitSuccessful: false,
      isSubmitting: false,
      isDirty: false,
      isLoading: false,
      isSubmitted: false,
      isValidating: false,
      isValid: true,
      submitCount: 0,
      disabled: false,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
    };

    // Set up default mocks - return a complete UseFormReturn object
    (useForm as jest.MockedFunction<typeof useForm>).mockImplementation(() => ({
      register: mockRegister,
      handleSubmit: mockHandleSubmit,
      reset: mockReset,
      control: mockControl,
      get formState() {
        // Return the current formState which can be modified by tests
        return formState;
      },
      watch: jest.fn(),
      getValues: jest.fn(),
      getFieldState: jest.fn(),
      setError: jest.fn(),
      clearErrors: jest.fn(),
      setValue: jest.fn(),
      trigger: jest.fn(),
      unregister: jest.fn(),
      resetField: jest.fn(),
      setFocus: jest.fn(),
    }));

    (useWatch as jest.MockedFunction<typeof useWatch>).mockImplementation((options?: { name: string; defaultValue?: any }) => {
      if (options && options.name === 'name') return 'John Doe';
      return options?.defaultValue;
    });

    // Reset fetch mock
    (global.fetch as jest.Mock).mockClear();
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        success: true,
        message: 'Message sent successfully'
      })
    });
  });

  it('renders the initial popup widget correctly', () => {
    render(<PopupWidget />);
    
    // Check that the disclosure button is rendered
    const disclosureButton = screen.getByTestId('disclosure-button');
    expect(disclosureButton).toBeInTheDocument();
    
    // Check that the main form elements are visible
    expect(screen.getByText('How can we help?')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('you@company.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  it('shows the form when in normal state', () => {
    render(<PopupWidget />);
    
    // The form should be visible when not submitted
    expect(screen.getByText('How can we help?')).toBeInTheDocument();
    expect(screen.getByText('We usually respond in a few hours')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('you@company.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
    
    // Check that the form element is present (using querySelector instead of role)
    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  it('handles form submission with valid data', async () => {
    render(<PopupWidget />);
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      // Verify that the handleSubmit was called
      expect(mockHandleSubmit).toHaveBeenCalled();
    });
  });

  it('submits the form successfully', async () => {
    render(<PopupWidget />);
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.web3forms.com/submit',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: expect.stringContaining('John Doe') // The body should contain the form data
        })
      );
    });
  });

  it('shows success message after successful submission', async () => {
    // Mock fetch to return a successful response
    (global.fetch as jest.Mock)
      .mockClear()
      .mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          success: true,
          message: 'Message sent successfully'
        })
      }));

    render(<PopupWidget />);

    // Simulate form submission with valid data
    fireEvent.click(screen.getByText('Send Message'));

    // Update the form state after the fetch call to simulate isSubmitSuccessful changing to true
    await waitFor(() => {
      formState.isSubmitSuccessful = true;
      formState.isSubmitting = false;
    }, { timeout: 3000 });

    // Wait for the success message to appear
    await waitFor(() => {
      expect(screen.getAllByText('Message sent successfully')).toHaveLength(2); // Appears in h3 and p elements
    }, { timeout: 3000 }); // Increase timeout to ensure async operations complete
  });
  
  it('shows error message when API returns error', async () => {
    // Mock fetch to return an error response
    (global.fetch as jest.Mock)
      .mockClear()
      .mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          success: false,
          message: 'An error occurred'
        })
      }));

    render(<PopupWidget />);

    // Simulate form submission
    fireEvent.click(screen.getByText('Send Message'));

    // Update the form state after the fetch call to simulate isSubmitSuccessful changing to true and isSuccess to false
    await waitFor(() => {
      formState.isSubmitSuccessful = true;
      formState.isSubmitting = false;
    }, { timeout: 3000 });

    // Wait for error message to appear
    await waitFor(() => {
      expect(screen.getByText('Oops, Something went wrong!')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('shows loading state during form submission', () => {
    // Mock form with isSubmitting state
    (useForm as jest.MockedFunction<typeof useForm>).mockReturnValue({
      register: mockRegister,
      handleSubmit: mockHandleSubmit,
      reset: mockReset,
      control: mockControl,
      formState: {
        errors: mockErrors,
        isSubmitSuccessful: false,
        isSubmitting: true,  // This should trigger the loading state
        isDirty: false,
        isLoading: false,
        isSubmitted: false,
        isValidating: false,
        isValid: true,
        submitCount: 0,
        disabled: false,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
      },
      watch: jest.fn(),
      getValues: jest.fn(),
      getFieldState: jest.fn(),
      setError: jest.fn(),
      clearErrors: jest.fn(),
      setValue: jest.fn(),
      trigger: jest.fn(),
      unregister: jest.fn(),
      resetField: jest.fn(),
      setFocus: jest.fn(),
    });

    render(<PopupWidget />);

    // Check for loading spinner when isSubmitting is true
    const spinner = document.querySelector('svg.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('resets the form when "Go back" button is clicked after submission', async () => {
    // Mock fetch to return a successful response
    (global.fetch as jest.Mock)
      .mockClear()
      .mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          success: true,
          message: 'Message sent successfully'
        })
      }));

    render(<PopupWidget />);

    // Simulate form submission first to get the success message
    fireEvent.click(screen.getByText('Send Message'));

    // Update the form state after the fetch call to simulate isSubmitSuccessful changing to true
    await waitFor(() => {
      formState.isSubmitSuccessful = true;
      formState.isSubmitting = false;
    }, { timeout: 3000 });

    // Wait for the success message to appear
    await waitFor(() => {
      expect(screen.getAllByText('Message sent successfully')).toHaveLength(2); // Appears in h3 and p elements
    }, { timeout: 3000 });

    // Find and click the "Go back" button
    fireEvent.click(screen.getByText('Go back'));

    // Verify that the reset function was called
    expect(mockReset).toHaveBeenCalled();
  });

  it('validates form inputs', () => {
    // Mock form with validation errors
    (useForm as jest.MockedFunction<typeof useForm>).mockReturnValue({
      register: mockRegister,
      handleSubmit: mockHandleSubmit,
      reset: mockReset,
      control: mockControl,
      formState: {
        errors: {
          name: { message: 'Full name is required' } as FieldError,
          email: { message: 'Enter your email' } as FieldError,
          message: { message: 'Enter your Message' } as FieldError,
        },
        isSubmitSuccessful: false,
        isSubmitting: false,
        isDirty: false,
        isLoading: false,
        isSubmitted: false,
        isValidating: false,
        isValid: false,
        submitCount: 0,
        disabled: false,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
      },
      watch: jest.fn(),
      getValues: jest.fn(),
      getFieldState: jest.fn(),
      setError: jest.fn(),
      clearErrors: jest.fn(),
      setValue: jest.fn(),
      trigger: jest.fn(),
      unregister: jest.fn(),
      resetField: jest.fn(),
      setFocus: jest.fn(),
    });

    render(<PopupWidget />);

    // Check that error messages are displayed
    expect(screen.getByText('Full name is required')).toBeInTheDocument();
    expect(screen.getByText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText('Enter your Message')).toBeInTheDocument();
  });
});