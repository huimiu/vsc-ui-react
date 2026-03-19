import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  FluentProvider,
  webLightTheme,
  Input,
} from '@fluentui/react-components';
import { VscField } from '../src';
import styles from '../src/components/Field/field.module.scss';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscField', () => {
  it('renders a field with label', () => {
    render(
      <VscField label="Username">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('applies vscBase class', () => {
    const { container } = render(
      <VscField label="Test">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(container.querySelector(`.${styles.vscBase}`)).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <VscField ref={ref} label="Ref">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges custom className', () => {
    const { container } = render(
      <VscField label="Custom" className="my-field">
        <Input />
      </VscField>,
      { wrapper },
    );
    const root = container.querySelector(`.${styles.vscBase}`);
    expect(root?.className).toContain('my-field');
  });

  it('shows required indicator when required is true', () => {
    const { container } = render(
      <VscField label="Email" required>
        <Input />
      </VscField>,
      { wrapper },
    );
    const indicator = container.querySelector(`.${styles.requiredIndicator}`);
    expect(indicator).toBeTruthy();
    expect(indicator?.textContent).toBe('*');
  });

  it('does not show required indicator when required is false', () => {
    const { container } = render(
      <VscField label="Email">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(
      container.querySelector(`.${styles.requiredIndicator}`),
    ).not.toBeTruthy();
  });

  it('renders info tooltip icon when tooltipContent is provided', () => {
    render(
      <VscField label="Name" tooltipContent="Enter your full name">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(
      screen.getByRole('img', { name: 'Enter your full name' }),
    ).toBeInTheDocument();
  });

  it('does not render info icon when tooltipContent is not provided', () => {
    const { container } = render(
      <VscField label="Name">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(container.querySelector(`.${styles.infoIcon}`)).not.toBeTruthy();
  });

  it('renders label row with all elements', () => {
    const { container } = render(
      <VscField label="Field" required tooltipContent="Help text">
        <Input />
      </VscField>,
      { wrapper },
    );
    const labelRow = container.querySelector(`.${styles.labelRow}`);
    expect(labelRow).toBeTruthy();
    expect(labelRow?.querySelector(`.${styles.labelText}`)).toBeTruthy();
    expect(
      labelRow?.querySelector(`.${styles.requiredIndicator}`),
    ).toBeTruthy();
    expect(labelRow?.querySelector(`.${styles.infoIcon}`)).toBeTruthy();
  });
});
