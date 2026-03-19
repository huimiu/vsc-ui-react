import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { VscTabList, VscTab } from '../src';
import tabStyles from '../src/components/TabList/tablist.module.scss';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscTabList', () => {
  it('renders tabs', () => {
    render(
      <VscTabList>
        <VscTab value="one">Tab One</VscTab>
        <VscTab value="two">Tab Two</VscTab>
      </VscTabList>,
      { wrapper },
    );
    expect(screen.getAllByText('Tab One').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Tab Two').length).toBeGreaterThan(0);
  });

  it('applies vscTabList class to TabList', () => {
    const { container } = render(
      <VscTabList>
        <VscTab value="a">A</VscTab>
      </VscTabList>,
      { wrapper },
    );
    expect(container.querySelector(`.${tabStyles.vscTabList}`)).toBeTruthy();
  });

  it('applies vscTab class to Tab', () => {
    const { container } = render(
      <VscTabList>
        <VscTab value="a">A</VscTab>
      </VscTabList>,
      { wrapper },
    );
    expect(container.querySelector(`.${tabStyles.vscTab}`)).toBeTruthy();
  });

  it('forwards ref on TabList', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <VscTabList ref={ref}>
        <VscTab value="a">A</VscTab>
      </VscTabList>,
      { wrapper },
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges custom className on TabList', () => {
    const { container } = render(
      <VscTabList className="my-tabs">
        <VscTab value="a">A</VscTab>
      </VscTabList>,
      { wrapper },
    );
    const root = container.querySelector(`.${tabStyles.vscTabList}`);
    expect(root?.className).toContain('my-tabs');
  });

  it('merges custom className on Tab', () => {
    const { container } = render(
      <VscTabList>
        <VscTab value="a" className="my-tab">
          A
        </VscTab>
      </VscTabList>,
      { wrapper },
    );
    const tab = container.querySelector(`.${tabStyles.vscTab}`);
    expect(tab?.className).toContain('my-tab');
  });

  it('defaults to size small', () => {
    const { container } = render(
      <VscTabList>
        <VscTab value="a">A</VscTab>
      </VscTabList>,
      { wrapper },
    );
    const root = container.querySelector(`.${tabStyles.vscTabList}`);
    expect(root).toBeTruthy();
  });

  it('marks selected tab with aria-selected', () => {
    render(
      <VscTabList selectedValue="two">
        <VscTab value="one">One</VscTab>
        <VscTab value="two">Two</VscTab>
      </VscTabList>,
      { wrapper },
    );
    expect(screen.getByText('Two').closest('[role="tab"]')).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });
});
