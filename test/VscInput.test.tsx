import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { VscInput } from '../src';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscInput', () => {
  it('renders an input element', () => {
    const { container } = render(<VscInput />, { wrapper });
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('applies style classes to root', () => {
    const { container } = render(<VscInput />, { wrapper });
    expect(container.querySelector('.fui-Input')).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(<VscInput ref={ref} />, { wrapper });
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('renders with small size', () => {
    const { container } = render(<VscInput size="small" />, { wrapper });
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('renders with large size', () => {
    const { container } = render(<VscInput size="large" />, { wrapper });
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('renders with error validation state', () => {
    const { container } = render(<VscInput validationState="error" />, { wrapper });
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('renders with warning validation state', () => {
    const { container } = render(<VscInput validationState="warning" />, { wrapper });
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('renders disabled state', () => {
    const { container } = render(<VscInput disabled />, { wrapper });
    expect(container.querySelector('input')).toBeDisabled();
  });

  it('merges custom className', () => {
    const { container } = render(<VscInput className="my-custom" />, { wrapper });
    expect(container.querySelector('.my-custom')).toBeTruthy();
  });
});
