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
});
