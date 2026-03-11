import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { VscTextarea } from '../src';
import styles from '../src/components/Textarea/textarea.module.scss';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscTextarea', () => {
  it('renders a textarea element', () => {
    render(<VscTextarea />, { wrapper });
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('applies vscBase class', () => {
    const { container } = render(<VscTextarea />, { wrapper });
    expect(container.querySelector(`.${styles.vscBase}`)).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<VscTextarea ref={ref} />, { wrapper });
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('applies error validation class', () => {
    const { container } = render(<VscTextarea validationState="error" />, {
      wrapper,
    });
    expect(container.querySelector(`.${styles.vscError}`)).toBeTruthy();
  });

  it('applies disabled class', () => {
    const { container } = render(<VscTextarea disabled />, { wrapper });
    expect(container.querySelector(`.${styles.vscDisabled}`)).toBeTruthy();
  });

  it('merges custom className', () => {
    const { container } = render(<VscTextarea className="custom" />, {
      wrapper,
    });
    const root = container.querySelector(`.${styles.vscBase}`);
    expect(root?.className).toContain('custom');
  });
});
