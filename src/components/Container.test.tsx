import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  it('renders children correctly', () => {
    const testText = 'Test child content';
    render(
      <Container>
        <span>{testText}</span>
      </Container>
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('applies default classes correctly', () => {
    render(
      <Container>
        <div>Content</div>
      </Container>
    );

    const container = screen.getByText('Content').parentElement;
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('p-8');
    expect(container).toHaveClass('mx-auto');
    expect(container).toHaveClass('xl:px-0');
  });

  it('appends additional className to default classes', () => {
    render(
      <Container className="custom-class another-class">
        <div>Content</div>
      </Container>
    );

    const container = screen.getByText('Content').parentElement;
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('p-8');
    expect(container).toHaveClass('mx-auto');
    expect(container).toHaveClass('xl:px-0');
    expect(container).toHaveClass('custom-class');
    expect(container).toHaveClass('another-class');
  });

  it('works without className prop', () => {
    render(
      <Container>
        <div>Content</div>
      </Container>
    );

    const container = screen.getByText('Content').parentElement;
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('p-8');
    expect(container).toHaveClass('mx-auto');
    expect(container).toHaveClass('xl:px-0');
  });

  it('renders with empty className prop', () => {
    render(
      <Container className="">
        <div>Content</div>
      </Container>
    );

    const container = screen.getByText('Content').parentElement;
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('p-8');
    expect(container).toHaveClass('mx-auto');
    expect(container).toHaveClass('xl:px-0');
  });

  it('renders without extra spacing when className is undefined', () => {
    render(
      <Container className={undefined}>
        <div>Content</div>
      </Container>
    );

    const container = screen.getByText('Content').parentElement;
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('p-8');
    expect(container).toHaveClass('mx-auto');
    expect(container).toHaveClass('xl:px-0');
  });

  it('has correct structure with div element', () => {
    render(
      <Container>
        <div>Content</div>
      </Container>
    );

    const container = screen.getByText('Content').parentElement;
    expect(container?.tagName).toBe('DIV');
  });
});