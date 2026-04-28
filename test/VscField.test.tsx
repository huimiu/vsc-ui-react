import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  FluentProvider,
  webLightTheme,
  Input,
} from '@fluentui/react-components';
import { VscField } from '../src';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscField', () => {
  it('renders a field with label', () => {
    const { container } = render(
      <VscField label="Username">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(container.querySelector('.fui-Field')).toBeTruthy();
  });

  it('applies style classes to root', () => {
    const { container } = render(
      <VscField label="Test">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(container.querySelector('.fui-Field')).toBeTruthy();
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
    expect(container.querySelector('.my-field')).toBeTruthy();
  });

  it('shows required indicator when required is true', () => {
    const { container } = render(
      <VscField label="Email" required>
        <Input />
      </VscField>,
      { wrapper },
    );
    // Our custom label row renders the * indicator
    const labelRow = container.querySelector('.fui-Field .fui-Label span');
    expect(labelRow?.textContent).toContain('*');
  });

  it('does not show required indicator when required is false', () => {
    const { container } = render(
      <VscField label="Email">
        <Input />
      </VscField>,
      { wrapper },
    );
    // Without required, there should be no * in our custom label
    const label = container.querySelector('.fui-Label');
    const spans = label?.querySelectorAll('span span');
    const hasOurIndicator = Array.from(spans || []).some(
      (el) => el.textContent === '*',
    );
    expect(hasOurIndicator).toBe(false);
  });

  it('renders info tooltip icon when tooltipContent is provided', () => {
    const { container } = render(
      <VscField label="Name" tooltipContent="Enter your full name">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(
      container.querySelector(
        '[role="img"][aria-label="Enter your full name"]',
      ),
    ).toBeTruthy();
  });

  it('does not render info icon when tooltipContent is not provided', () => {
    const { container } = render(
      <VscField label="Name">
        <Input />
      </VscField>,
      { wrapper },
    );
    expect(container.querySelector('[role="img"]')).toBeFalsy();
  });

  it('renders label row with all elements', () => {
    const { container } = render(
      <VscField label="Field" required tooltipContent="Help text">
        <Input />
      </VscField>,
      { wrapper },
    );
    const label = container.querySelector('.fui-Label');
    expect(label).toBeTruthy();
    expect(label?.textContent).toContain('Field');
    expect(label?.textContent).toContain('*');
    expect(
      container.querySelector('[role="img"][aria-label="Help text"]'),
    ).toBeTruthy();
  });
});
