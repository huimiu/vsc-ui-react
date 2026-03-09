import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { VscSearchBox } from '../src';
import styles from '../src/components/SearchBox/searchbox.module.scss';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscSearchBox', () => {
  it('renders a search input', () => {
    render(<VscSearchBox />, { wrapper });
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('applies vscBase class', () => {
    const { container } = render(<VscSearchBox />, { wrapper });
    expect(container.querySelector(`.${styles.vscBase}`)).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(<VscSearchBox ref={ref} />, { wrapper });
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies medium size class', () => {
    const { container } = render(<VscSearchBox size="medium" />, { wrapper });
    expect(container.querySelector(`.${styles.vscMedium}`)).toBeTruthy();
  });

  it('applies large size class', () => {
    const { container } = render(<VscSearchBox size="large" />, { wrapper });
    expect(container.querySelector(`.${styles.vscLarge}`)).toBeTruthy();
  });

  it('renders disabled state', () => {
    const { container } = render(<VscSearchBox disabled />, { wrapper });
    expect(container.querySelector(`.${styles.vscDisabled}`)).toBeTruthy();
  });

  it('merges custom className', () => {
    const { container } = render(<VscSearchBox className="custom" />, {
      wrapper,
    });
    const root = container.querySelector(`.${styles.vscBase}`);
    expect(root?.className).toContain('custom');
  });
});
