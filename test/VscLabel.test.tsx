import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { VscLabel } from '../src';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscLabel', () => {
  it('renders a label element', () => {
    const { container } = render(<VscLabel>Username</VscLabel>, { wrapper });
    const label = container.querySelector('label');
    expect(label).toBeTruthy();
    expect(label?.textContent).toContain('Username');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLLabelElement>();
    render(<VscLabel ref={ref}>Ref</VscLabel>, { wrapper });
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it('merges custom className', () => {
    const { container } = render(
      <VscLabel className="my-label">Custom</VscLabel>,
      { wrapper },
    );
    expect(container.querySelector('.my-label')).toBeTruthy();
  });

  it('shows required indicator when required is true', () => {
    const { container } = render(<VscLabel required>Email</VscLabel>, {
      wrapper,
    });
    expect(container.textContent).toContain('*');
  });

  it('does not show required indicator when required is false', () => {
    const { container } = render(<VscLabel>Email</VscLabel>, { wrapper });
    const spans = container.querySelectorAll('span');
    const hasIndicator = Array.from(spans).some((el) => el.textContent === '*');
    expect(hasIndicator).toBe(false);
  });

  it('renders info tooltip icon when tooltipContent is provided', () => {
    const { container } = render(
      <VscLabel tooltipContent="Help text">Name</VscLabel>,
      { wrapper },
    );
    expect(
      container.querySelector('[role="img"][aria-label="Help text"]'),
    ).toBeTruthy();
  });

  it('does not render info icon when tooltipContent is not provided', () => {
    const { container } = render(<VscLabel>Name</VscLabel>, { wrapper });
    expect(container.querySelector('[role="img"]')).toBeFalsy();
  });

  it('applies different classes for different sizes', () => {
    const { container: c1 } = render(<VscLabel size="small">S</VscLabel>, {
      wrapper,
    });
    const { container: c2 } = render(<VscLabel size="large">L</VscLabel>, {
      wrapper,
    });
    const cls1 = c1.querySelector('label')?.className;
    const cls2 = c2.querySelector('label')?.className;
    expect(cls1).not.toBe(cls2);
  });

  it('applies different classes for different weights', () => {
    const { container: c1 } = render(<VscLabel weight="regular">R</VscLabel>, {
      wrapper,
    });
    const { container: c2 } = render(<VscLabel weight="semibold">B</VscLabel>, {
      wrapper,
    });
    const cls1 = c1.querySelector('label')?.className;
    const cls2 = c2.querySelector('label')?.className;
    expect(cls1).not.toBe(cls2);
  });

  it('applies disabled styling', () => {
    const { container: c1 } = render(<VscLabel disabled>Disabled</VscLabel>, {
      wrapper,
    });
    const { container: c2 } = render(<VscLabel>Enabled</VscLabel>, {
      wrapper,
    });
    const cls1 = c1.querySelector('label')?.className;
    const cls2 = c2.querySelector('label')?.className;
    expect(cls1).not.toBe(cls2);
  });
});
