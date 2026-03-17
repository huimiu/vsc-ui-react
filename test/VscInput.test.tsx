import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { VscInput } from '../src';
import inputStyles from '../src/components/Input/input.module.scss';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscInput', () => {
  it('renders an input element', () => {
    render(<VscInput />, { wrapper });
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('applies vscBase class', () => {
    const { container } = render(<VscInput />, { wrapper });
    const root = container.querySelector(`.${inputStyles.vscBase}`);
    expect(root).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(<VscInput ref={ref} />, { wrapper });
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies small size class', () => {
    const { container } = render(<VscInput size="small" />, { wrapper });
    expect(container.querySelector(`.${inputStyles.vscSmall}`)).toBeTruthy();
  });

  it('applies large size class', () => {
    const { container } = render(<VscInput size="large" />, { wrapper });
    expect(container.querySelector(`.${inputStyles.vscLarge}`)).toBeTruthy();
  });

  it('applies error validation class', () => {
    const { container } = render(<VscInput validationState="error" />, {
      wrapper,
    });
    expect(container.querySelector(`.${inputStyles.vscError}`)).toBeTruthy();
  });

  it('applies warning validation class', () => {
    const { container } = render(<VscInput validationState="warning" />, {
      wrapper,
    });
    expect(container.querySelector(`.${inputStyles.vscWarning}`)).toBeTruthy();
  });

  it('applies disabled class', () => {
    const { container } = render(<VscInput disabled />, { wrapper });
    expect(container.querySelector(`.${inputStyles.vscDisabled}`)).toBeTruthy();
  });

  it('merges custom className', () => {
    const { container } = render(<VscInput className="my-custom" />, {
      wrapper,
    });
    const root = container.querySelector(`.${inputStyles.vscBase}`);
    expect(root?.className).toContain('my-custom');
  });
});
