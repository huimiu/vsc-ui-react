import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import {
  VscDropdown,
  VscCombobox,
  VscOption,
  VscOptionGroup,
  VscListbox,
} from '../src';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscDropdown', () => {
  it('renders a combobox trigger', () => {
    render(
      <VscDropdown>
        <VscOption text="One">One</VscOption>
      </VscDropdown>,
      { wrapper },
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('applies style classes to root', () => {
    const { container } = render(
      <VscDropdown>
        <VscOption text="A">A</VscOption>
      </VscDropdown>,
      { wrapper },
    );
    expect(container.querySelector('.fui-Dropdown')).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLButtonElement>();
    render(
      <VscDropdown ref={ref}>
        <VscOption text="A">A</VscOption>
      </VscDropdown>,
      { wrapper },
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('renders with validation state', () => {
    const { container } = render(
      <VscDropdown validationState="error">
        <VscOption text="A">A</VscOption>
      </VscDropdown>,
      { wrapper },
    );
    expect(container.querySelector('.fui-Dropdown')).toBeTruthy();
  });

  it('merges custom className', () => {
    const { container } = render(
      <VscDropdown className="custom">
        <VscOption text="A">A</VscOption>
      </VscDropdown>,
      { wrapper },
    );
    expect(container.querySelector('.custom')).toBeTruthy();
  });

  it('renders open dropdown with listbox', () => {
    render(
      <VscDropdown open>
        <VscOption text="A">A</VscOption>
      </VscDropdown>,
      { wrapper },
    );

    const listboxes = screen.getAllByRole('listbox');
    expect(listboxes.length).toBeGreaterThan(0);
  });

  it('renders open dropdown with checkmark selection indicator', () => {
    render(
      <VscDropdown open selectionIndicator="checkmark">
        <VscOption text="A">A</VscOption>
      </VscDropdown>,
      { wrapper },
    );

    const listboxes = screen.getAllByRole('listbox');
    expect(listboxes.length).toBeGreaterThan(0);
  });
});

describe('VscCombobox', () => {
  it('renders a combobox', () => {
    const { container } = render(
      <VscCombobox>
        <VscOption text="A">A</VscOption>
      </VscCombobox>,
      { wrapper },
    );
    expect(container.querySelector('input[role="combobox"]')).toBeTruthy();
  });

  it('applies style classes to root', () => {
    const { container } = render(
      <VscCombobox>
        <VscOption text="A">A</VscOption>
      </VscCombobox>,
      { wrapper },
    );
    expect(container.querySelector('.fui-Combobox')).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(
      <VscCombobox ref={ref}>
        <VscOption text="A">A</VscOption>
      </VscCombobox>,
      { wrapper },
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

describe('VscOption', () => {
  it('renders option text', () => {
    render(
      <VscListbox>
        <VscOption text="Hello">Hello</VscOption>
      </VscListbox>,
      { wrapper },
    );
    expect(screen.getByRole('option', { name: 'Hello' })).toBeInTheDocument();
  });

  it('applies style classes to option', () => {
    const { container } = render(
      <VscListbox>
        <VscOption text="X">X</VscOption>
      </VscListbox>,
      { wrapper },
    );
    const option = screen.getByRole('option', { name: 'X' });
    expect(option.className).toBeTruthy();
  });

  it('renders a leading icon when provided', () => {
    render(
      <VscListbox>
        <VscOption text="Hello" icon={<span data-testid="option-icon">*</span>}>
          Hello
        </VscOption>
      </VscListbox>,
      { wrapper },
    );

    expect(screen.getByTestId('option-icon')).toBeInTheDocument();
  });

  it('supports icon and description together', () => {
    render(
      <VscListbox>
        <VscOption
          text="Hello"
          icon={<span aria-hidden="true">*</span>}
          description="More detail"
        >
          Hello
        </VscOption>
      </VscListbox>,
      { wrapper },
    );

    expect(screen.getByText('More detail')).toBeInTheDocument();
  });

  it('prefers secondaryText over the deprecated detail alias', () => {
    render(
      <VscListbox>
        <VscOption text="Hello" secondaryText="Preferred" detail="Fallback">
          Hello
        </VscOption>
      </VscListbox>,
      { wrapper },
    );

    expect(screen.getByText('Preferred')).toBeInTheDocument();
    expect(screen.queryByText('Fallback')).not.toBeInTheDocument();
  });
});

describe('VscOptionGroup', () => {
  it('renders option group with label', () => {
    render(
      <VscListbox>
        <VscOptionGroup label="Group 1">
          <VscOption text="A">A</VscOption>
        </VscOptionGroup>
      </VscListbox>,
      { wrapper },
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('applies style classes to OptionGroup', () => {
    const { container } = render(
      <VscListbox>
        <VscOptionGroup label="G">
          <VscOption text="A">A</VscOption>
        </VscOptionGroup>
      </VscListbox>,
      { wrapper },
    );
    const group = container.querySelector('[role="group"]');
    expect(group).toBeTruthy();
  });
});

describe('VscListbox', () => {
  it('renders a listbox', () => {
    const { container } = render(
      <VscListbox>
        <VscOption text="A">A</VscOption>
      </VscListbox>,
      { wrapper },
    );
    expect(container.querySelector('[role="listbox"]')).toBeTruthy();
  });

  it('applies style classes to listbox', () => {
    const { container } = render(
      <VscListbox>
        <VscOption text="A">A</VscOption>
      </VscListbox>,
      { wrapper },
    );
    const listbox = container.querySelector('[role="listbox"]');
    expect(listbox?.className).toBeTruthy();
  });

  it('renders with default selection indicator', () => {
    const { container } = render(
      <VscListbox>
        <VscOption text="A">A</VscOption>
      </VscListbox>,
      { wrapper },
    );
    expect(container.querySelector('[role="listbox"]')).toBeTruthy();
  });

  it('allows opting into the checkmark gutter', () => {
    const { container } = render(
      <VscListbox selectionIndicator="checkmark">
        <VscOption text="A">A</VscOption>
      </VscListbox>,
      { wrapper },
    );
    expect(container.querySelector('[role="listbox"]')).toBeTruthy();
  });
});
