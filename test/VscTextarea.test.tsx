import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { VscTextarea } from '../src';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscTextarea', () => {
  it('renders a textarea element', () => {
    const { container } = render(<VscTextarea />, { wrapper });
    expect(container.querySelector('textarea')).toBeInTheDocument();
  });

  it('applies style classes to root', () => {
    const { container } = render(<VscTextarea />, { wrapper });
    expect(container.querySelector('.fui-Textarea')).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<VscTextarea ref={ref} />, { wrapper });
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('produces distinct classes for error validation state', () => {
    const { container: errorContainer } = render(<VscTextarea validationState="error" />, { wrapper });
    const { container: defaultContainer } = render(<VscTextarea />, { wrapper });
    const errorRoot = errorContainer.querySelector('.fui-Textarea')!;
    const defaultRoot = defaultContainer.querySelector('.fui-Textarea')!;
    expect(errorRoot.className).not.toBe(defaultRoot.className);
  });

  it('renders disabled textarea with disabled attribute', () => {
    const { container } = render(<VscTextarea disabled />, { wrapper });
    expect(container.querySelector('textarea')).toBeDisabled();
  });

  it('merges custom className', () => {
    const { container } = render(<VscTextarea className="custom" />, { wrapper });
    expect(container.querySelector('.custom')).toBeTruthy();
  });
});
