import React, { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { VscButton } from '../src';
import buttonStyles from '../src/components/Button/button.module.scss';

describe('VscButton', () => {
  it('renders and forwards click events', () => {
    const onClick = vi.fn();

    render(<VscButton onClick={onClick}>Run</VscButton>);
    fireEvent.click(screen.getByRole('button', { name: 'Run' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies mapped override classes for appearance and compact icon-only states', () => {
    const { container } = render(
      <VscButton
        appearance="outline"
        size="compact"
        icon={<span aria-hidden="true">*</span>}
      />,
    );

    const button = container.querySelector('button')!;
    expect(button.className).toContain(buttonStyles.vscodeOutline);
    expect(button.className).toContain(buttonStyles.vscodeCompact);
    expect(button.className).toContain(buttonStyles.vscodeIconOnly);
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

  it('applies primary appearance class', () => {
    const { container } = render(
      <VscButton appearance="primary">Primary</VscButton>,
    );

    const button = container.querySelector('button')!;
    expect(button.className).toContain(buttonStyles.vscodePrimary);
  });

  it('applies secondary appearance class by default', () => {
    const { container } = render(<VscButton>Default</VscButton>);

    const button = container.querySelector('button')!;
    expect(button.className).toContain(buttonStyles.vscodeSecondary);
  });

  it('merges custom className with override classes', () => {
    const { container } = render(
      <VscButton appearance="primary" className="custom-class">
        Merge
      </VscButton>,
    );

    const button = container.querySelector('button')!;
    expect(button.className).toContain(buttonStyles.vscodePrimary);
    expect(button.className).toContain('custom-class');
  });

  it('applies small size class', () => {
    const { container } = render(<VscButton size="small">Small</VscButton>);

    const button = container.querySelector('button')!;
    expect(button.className).toContain(buttonStyles.vscodeSmall);
  });

  it('applies large size class', () => {
    const { container } = render(<VscButton size="large">Large</VscButton>);

    const button = container.querySelector('button')!;
    expect(button.className).toContain(buttonStyles.vscodeLarge);
  });

  it('does not apply icon-only class when children are present', () => {
    const { container } = render(
      <VscButton icon={<span>ico</span>}>With Text</VscButton>,
    );

    const button = container.querySelector('button')!;
    expect(button.className).not.toContain(buttonStyles.vscodeIconOnly);
  });
});
