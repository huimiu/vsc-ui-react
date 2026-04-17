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

  it('produces distinct classes for primary vs secondary appearance', () => {
    const { container: primaryContainer } = render(
      <VscSplitButton appearance="primary">Primary</VscSplitButton>,
    );
    const { container: secondaryContainer } = render(
      <VscSplitButton appearance="secondary">Secondary</VscSplitButton>,
    );

    const primaryWrapper = primaryContainer.firstElementChild!;
    const secondaryWrapper = secondaryContainer.firstElementChild!;
    expect(primaryWrapper.className).not.toBe(secondaryWrapper.className);
  });

  it('applies secondary split appearance by default', () => {
    const { container: defaultContainer } = render(<VscSplitButton>Default</VscSplitButton>);
    const { container: secondaryContainer } = render(
      <VscSplitButton appearance="secondary">Secondary</VscSplitButton>,
    );

    const defaultWrapper = defaultContainer.firstElementChild!;
    const secondaryWrapper = secondaryContainer.firstElementChild!;
    expect(defaultWrapper.className).toBe(secondaryWrapper.className);
  });

  it('produces distinct classes for outline appearance', () => {
    const { container: outlineContainer } = render(
      <VscSplitButton appearance="outline">Outline</VscSplitButton>,
    );
    const { container: defaultContainer } = render(<VscSplitButton>Default</VscSplitButton>);

    expect(outlineContainer.firstElementChild!.className).not.toBe(
      defaultContainer.firstElementChild!.className,
    );
  });

  it('produces distinct classes for subtle appearance', () => {
    const { container: subtleContainer } = render(
      <VscSplitButton appearance="subtle">Subtle</VscSplitButton>,
    );
    const { container: defaultContainer } = render(<VscSplitButton>Default</VscSplitButton>);

    expect(subtleContainer.firstElementChild!.className).not.toBe(
      defaultContainer.firstElementChild!.className,
    );
  });

  it('produces distinct classes for transparent appearance', () => {
    const { container: transparentContainer } = render(
      <VscSplitButton appearance="transparent">Transparent</VscSplitButton>,
    );
    const { container: defaultContainer } = render(<VscSplitButton>Default</VscSplitButton>);

    expect(transparentContainer.firstElementChild!.className).not.toBe(
      defaultContainer.firstElementChild!.className,
    );
  });

  it('produces distinct classes for small size', () => {
    const { container: smallContainer } = render(
      <VscSplitButton size="small">Small</VscSplitButton>,
    );
    const { container: defaultContainer } = render(<VscSplitButton>Default</VscSplitButton>);

    expect(smallContainer.firstElementChild!.className).not.toBe(
      defaultContainer.firstElementChild!.className,
    );
  });

  it('produces distinct classes for compact size', () => {
    const { container: compactContainer } = render(
      <VscSplitButton size="compact">Compact</VscSplitButton>,
    );
    const { container: defaultContainer } = render(<VscSplitButton>Default</VscSplitButton>);

    expect(compactContainer.firstElementChild!.className).not.toBe(
      defaultContainer.firstElementChild!.className,
    );
  });

  it('produces distinct classes for icon-only vs text', () => {
    const { container: iconOnlyContainer } = render(
      <VscSplitButton icon={<span aria-hidden="true">*</span>} />,
    );
    const { container: textContainer } = render(<VscSplitButton>Text</VscSplitButton>);

    expect(iconOnlyContainer.firstElementChild!.className).not.toBe(
      textContainer.firstElementChild!.className,
    );
  });

  it('does not apply icon-only classes when children are present', () => {
    const { container: withTextContainer } = render(
      <VscSplitButton icon={<span>ico</span>}>With Text</VscSplitButton>,
    );
    const { container: textOnlyContainer } = render(
      <VscSplitButton>With Text</VscSplitButton>,
    );

    // When children are present, icon-only classes should not apply,
    // so the class output should match a text-only button
    expect(withTextContainer.firstElementChild!.className).toBe(
      textOnlyContainer.firstElementChild!.className,
    );
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
