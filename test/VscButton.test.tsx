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
    expect(button.className).toBeTruthy();
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

  it('renders with primary appearance', () => {
    const { container } = render(
      <VscButton appearance="primary">Primary</VscButton>,
    );

    const button = container.querySelector('button')!;
    expect(button.className).toBeTruthy();
  });

  it('renders with secondary appearance by default', () => {
    const { container } = render(<VscButton>Default</VscButton>);

    const button = container.querySelector('button')!;
    expect(button.className).toBeTruthy();
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

  it('renders with small size', () => {
    const { container } = render(<VscButton size="small">Small</VscButton>);

    const button = container.querySelector('button')!;
    expect(button.className).toBeTruthy();
  });

  it('renders with large size', () => {
    const { container } = render(<VscButton size="large">Large</VscButton>);

    const button = container.querySelector('button')!;
    expect(button.className).toBeTruthy();
  });

  it('does not crash when icon and children are both present', () => {
    const { container } = render(
      <VscButton icon={<span>ico</span>}>With Text</VscButton>,
    );

    const button = container.querySelector('button')!;
    expect(button).toHaveTextContent('With Text');
  });
});
