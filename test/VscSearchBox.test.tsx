import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { VscSearchBox } from '../src';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscSearchBox', () => {
  it('renders a search input', () => {
    const { container } = render(<VscSearchBox />, { wrapper });
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('applies style classes to root', () => {
    const { container } = render(<VscSearchBox />, { wrapper });
    expect(container.querySelector('.fui-Input')).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(<VscSearchBox ref={ref} />, { wrapper });
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('renders with medium size', () => {
    const { container } = render(<VscSearchBox size="medium" />, { wrapper });
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('renders with large size', () => {
    const { container } = render(<VscSearchBox size="large" />, { wrapper });
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('renders disabled state', () => {
    const { container } = render(<VscSearchBox disabled />, { wrapper });
    expect(container.querySelector('input')).toBeDisabled();
  });

  it('merges custom className', () => {
    const { container } = render(<VscSearchBox className="custom" />, { wrapper });
    expect(container.querySelector('.custom')).toBeTruthy();
  });
});
