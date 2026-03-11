import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import {
  Menu,
  MenuTrigger,
  VscMenuPopover,
  VscMenuList,
  VscMenuItem,
  VscMenuDivider,
  VscMenuGroup,
  VscMenuGroupHeader,
} from '../src';
import styles from '../src/components/Menu/menu.module.scss';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscMenuPopover', () => {
  it('applies vscMenuPopover class', () => {
    const { container } = render(
      <Menu open>
        <MenuTrigger>
          <button>Open</button>
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            <VscMenuItem>Item</VscMenuItem>
          </VscMenuList>
        </VscMenuPopover>
      </Menu>,
      { wrapper },
    );
    expect(
      container.querySelector(`.${styles.vscMenuPopover}`) ??
        document.querySelector(`.${styles.vscMenuPopover}`),
    ).toBeTruthy();
  });
});

describe('VscMenuList', () => {
  it('renders a menu role element', () => {
    const { baseElement } = render(
      <Menu open>
        <MenuTrigger>
          <button>Open</button>
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            <VscMenuItem>Alpha</VscMenuItem>
          </VscMenuList>
        </VscMenuPopover>
      </Menu>,
      { wrapper },
    );
    // Menu portals to body; use baseElement
    expect(baseElement.querySelector(`.${styles.vscMenuList}`)).toBeTruthy();
  });
});

describe('VscMenuItem', () => {
  it('renders a menuitem', () => {
    render(
      <Menu open>
        <MenuTrigger>
          <button>Open</button>
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            <VscMenuItem>Action</VscMenuItem>
          </VscMenuList>
        </VscMenuPopover>
      </Menu>,
      { wrapper },
    );
    expect(
      screen.getByRole('menuitem', { name: 'Action' }),
    ).toBeInTheDocument();
  });

  it('applies accent class', () => {
    const { baseElement } = render(
      <Menu open>
        <MenuTrigger>
          <button>Open</button>
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            <VscMenuItem accent>Accent</VscMenuItem>
          </VscMenuList>
        </VscMenuPopover>
      </Menu>,
      { wrapper },
    );
    expect(baseElement.querySelector(`.${styles.vscAccent}`)).toBeTruthy();
  });

  it('applies indented class', () => {
    const { baseElement } = render(
      <Menu open>
        <MenuTrigger>
          <button>Open</button>
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            <VscMenuItem indented>Indented</VscMenuItem>
          </VscMenuList>
        </VscMenuPopover>
      </Menu>,
      { wrapper },
    );
    expect(baseElement.querySelector(`.${styles.vscIndented}`)).toBeTruthy();
  });
});

describe('VscMenuDivider', () => {
  it('renders a divider', () => {
    const { baseElement } = render(
      <Menu open>
        <MenuTrigger>
          <button>Open</button>
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            <VscMenuItem>A</VscMenuItem>
            <VscMenuDivider />
            <VscMenuItem>B</VscMenuItem>
          </VscMenuList>
        </VscMenuPopover>
      </Menu>,
      { wrapper },
    );
    expect(baseElement.querySelector(`.${styles.vscMenuDivider}`)).toBeTruthy();
  });
});

describe('VscMenuGroup', () => {
  it('renders a group', () => {
    render(
      <Menu open>
        <MenuTrigger>
          <button>Open</button>
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            <VscMenuGroup>
              <VscMenuGroupHeader>Section</VscMenuGroupHeader>
              <VscMenuItem>Item</VscMenuItem>
            </VscMenuGroup>
          </VscMenuList>
        </VscMenuPopover>
      </Menu>,
      { wrapper },
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });
});

describe('VscMenuGroupHeader', () => {
  it('applies vscMenuGroupHeader class', () => {
    const { baseElement } = render(
      <Menu open>
        <MenuTrigger>
          <button>Open</button>
        </MenuTrigger>
        <VscMenuPopover>
          <VscMenuList>
            <VscMenuGroup>
              <VscMenuGroupHeader>Header</VscMenuGroupHeader>
              <VscMenuItem>Item</VscMenuItem>
            </VscMenuGroup>
          </VscMenuList>
        </VscMenuPopover>
      </Menu>,
      { wrapper },
    );
    expect(
      baseElement.querySelector(`.${styles.vscMenuGroupHeader}`),
    ).toBeTruthy();
  });
});
