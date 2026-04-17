import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { VscSplitButton } from '../src';

describe('VscSplitButton', () => {
  it('renders with children text', () => {
    render(<VscSplitButton>Split</VscSplitButton>);
    const buttons = screen.getAllByRole('button');
    // SplitButton renders a primary action button and a menu button
    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent('Split');
  });

  it('renders with primary split appearance', () => {
    const { container } = render(
      <VscSplitButton appearance="primary">Primary</VscSplitButton>,
    );

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toBeTruthy();
  });

  it('renders with secondary split appearance by default', () => {
    const { container } = render(<VscSplitButton>Default</VscSplitButton>);

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toBeTruthy();
  });

  it('renders with outline split appearance', () => {
    const { container } = render(
      <VscSplitButton appearance="outline">Outline</VscSplitButton>,
    );

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toBeTruthy();
  });

  it('renders with subtle split appearance', () => {
    const { container } = render(
      <VscSplitButton appearance="subtle">Subtle</VscSplitButton>,
    );

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toBeTruthy();
  });

  it('renders with transparent split appearance', () => {
    const { container } = render(
      <VscSplitButton appearance="transparent">Transparent</VscSplitButton>,
    );

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toBeTruthy();
  });

  it('renders with small size', () => {
    const { container } = render(
      <VscSplitButton size="small">Small</VscSplitButton>,
    );

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toBeTruthy();
  });

  it('renders with compact size', () => {
    const { container } = render(
      <VscSplitButton size="compact">Compact</VscSplitButton>,
    );

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toBeTruthy();
  });

  it('renders icon-only split when icon provided without children', () => {
    const { container } = render(
      <VscSplitButton icon={<span aria-hidden="true">*</span>} />,
    );

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toBeTruthy();
  });

  it('renders with icon and children present', () => {
    const { container } = render(
      <VscSplitButton icon={<span>ico</span>}>With Text</VscSplitButton>,
    );

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toBeTruthy();
  });

  it('merges custom className with generated classes', () => {
    const { container } = render(
      <VscSplitButton appearance="primary" className="custom-class">
        Merge
      </VscSplitButton>,
    );

    const wrapper = container.firstElementChild!;
    expect(wrapper.className).toContain('custom-class');
  });

  it('forwards ref to underlying wrapper element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<VscSplitButton ref={ref}>Ref Test</VscSplitButton>);

    // SplitButton ref points to the wrapper div, not a button
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('passes disabled prop to underlying SplitButton', () => {
    const { container } = render(
      <VscSplitButton disabled>Disabled</VscSplitButton>,
    );

    // Fluent UI SplitButton applies aria-disabled or disabled attribute
    const buttons = container.querySelectorAll('button');
    const hasDisabledButton = Array.from(buttons).some(
      (btn) => btn.disabled || btn.getAttribute('aria-disabled') === 'true',
    );
    expect(hasDisabledButton).toBe(true);
  });
});
