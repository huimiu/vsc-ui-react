import React, { createRef } from 'react';
import { render } from '@testing-library/react';
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

  it('produces distinct classes for small size', () => {
    const { container: smallContainer } = render(<VscInput size="small" />, {
      wrapper,
    });
    const { container: defaultContainer } = render(<VscInput />, { wrapper });
    const smallRoot = smallContainer.querySelector('.fui-Input')!;
    const defaultRoot = defaultContainer.querySelector('.fui-Input')!;
    expect(smallRoot.className).not.toBe(defaultRoot.className);
  });

  it('produces distinct classes for large size', () => {
    const { container: largeContainer } = render(<VscInput size="large" />, {
      wrapper,
    });
    const { container: defaultContainer } = render(<VscInput />, { wrapper });
    const largeRoot = largeContainer.querySelector('.fui-Input')!;
    const defaultRoot = defaultContainer.querySelector('.fui-Input')!;
    expect(largeRoot.className).not.toBe(defaultRoot.className);
  });

  it('produces distinct classes for error validation state', () => {
    const { container: errorContainer } = render(
      <VscInput validationState="error" />,
      { wrapper },
    );
    const { container: defaultContainer } = render(<VscInput />, { wrapper });
    const errorRoot = errorContainer.querySelector('.fui-Input')!;
    const defaultRoot = defaultContainer.querySelector('.fui-Input')!;
    expect(errorRoot.className).not.toBe(defaultRoot.className);
  });

  it('produces distinct classes for warning validation state', () => {
    const { container: warningContainer } = render(
      <VscInput validationState="warning" />,
      { wrapper },
    );
    const { container: defaultContainer } = render(<VscInput />, { wrapper });
    const warningRoot = warningContainer.querySelector('.fui-Input')!;
    const defaultRoot = defaultContainer.querySelector('.fui-Input')!;
    expect(warningRoot.className).not.toBe(defaultRoot.className);
  });

  it('renders disabled state', () => {
    const { container } = render(<VscInput disabled />, { wrapper });
    expect(container.querySelector('input')).toBeDisabled();
  });

  it('merges custom className', () => {
    const { container } = render(<VscInput className="my-custom" />, {
      wrapper,
    });
    expect(container.querySelector('.my-custom')).toBeTruthy();
  });
});
