import React, { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { VscButton } from '../src';

describe('VscButton', () => {
  it('renders and forwards click events', () => {
    const onClick = vi.fn();

    render(<VscButton onClick={onClick}>Run</VscButton>);
    fireEvent.click(screen.getByRole('button', { name: 'Run' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with appearance and compact icon-only states', () => {
    const { container } = render(
      <VscButton
        appearance="outline"
        size="compact"
        icon={<span aria-hidden="true">*</span>}
      />,
    );

    const button = container.querySelector('button')!;
    // Griffel produces dynamic class names; verify the element rendered with classes
    // and the class output differs from a default button
    expect(button.className).toBeTruthy();
    const { container: defaultContainer } = render(<VscButton>Default</VscButton>);
    const defaultButton = defaultContainer.querySelector('button')!;
    expect(button.className).not.toBe(defaultButton.className);
  });

  it('forwards ref to underlying button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<VscButton ref={ref}>Ref Test</VscButton>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('renders disabled state correctly', () => {
    render(<VscButton disabled>Disabled</VscButton>);
    const button = screen.getByRole('button', { name: 'Disabled' });

    expect(button).toBeDisabled();
  });

  it('produces distinct classes for primary vs secondary appearance', () => {
    const { container: primaryContainer } = render(
      <VscButton appearance="primary">Primary</VscButton>,
    );
    const { container: secondaryContainer } = render(
      <VscButton appearance="secondary">Secondary</VscButton>,
    );

    const primaryBtn = primaryContainer.querySelector('button')!;
    const secondaryBtn = secondaryContainer.querySelector('button')!;
    expect(primaryBtn.className).not.toBe(secondaryBtn.className);
  });

  it('applies secondary appearance by default', () => {
    const { container: defaultContainer } = render(<VscButton>Default</VscButton>);
    const { container: secondaryContainer } = render(
      <VscButton appearance="secondary">Secondary</VscButton>,
    );

    const defaultBtn = defaultContainer.querySelector('button')!;
    const secondaryBtn = secondaryContainer.querySelector('button')!;
    expect(defaultBtn.className).toBe(secondaryBtn.className);
  });

  it('merges custom className with generated classes', () => {
    const { container } = render(
      <VscButton appearance="primary" className="custom-class">
        Merge
      </VscButton>,
    );

    const button = container.querySelector('button')!;
    expect(button.className).toContain('custom-class');
  });

  it('produces distinct classes for small vs default size', () => {
    const { container: smallContainer } = render(<VscButton size="small">Small</VscButton>);
    const { container: defaultContainer } = render(<VscButton>Default</VscButton>);

    const smallBtn = smallContainer.querySelector('button')!;
    const defaultBtn = defaultContainer.querySelector('button')!;
    expect(smallBtn.className).not.toBe(defaultBtn.className);
  });

  it('produces distinct classes for large vs default size', () => {
    const { container: largeContainer } = render(<VscButton size="large">Large</VscButton>);
    const { container: defaultContainer } = render(<VscButton>Default</VscButton>);

    const largeBtn = largeContainer.querySelector('button')!;
    const defaultBtn = defaultContainer.querySelector('button')!;
    expect(largeBtn.className).not.toBe(defaultBtn.className);
  });

  it('does not crash when icon and children are both present', () => {
    const { container } = render(
      <VscButton icon={<span>ico</span>}>With Text</VscButton>,
    );

    const button = container.querySelector('button')!;
    expect(button).toHaveTextContent('With Text');
  });
});
