import React from 'react';
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

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('VscMenuPopover', () => {
  it('renders popover with style classes', () => {
    render(
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
    // Menu portals to body; check it renders
    expect(screen.getByRole('menuitem', { name: 'Item' })).toBeInTheDocument();
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
    expect(baseElement.querySelector('[role="menu"]')).toBeTruthy();
  });
});

describe('VscMenuItem', () => {
  it('renders a menuitem', () => {
    const { baseElement } = render(
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
    expect(baseElement.querySelector('[role="menuitem"]')).toBeTruthy();
  });

  it('renders with accent prop', () => {
    render(
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
    expect(
      screen.getByRole('menuitem', { name: 'Accent' }),
    ).toBeInTheDocument();
  });

  it('renders with indented prop', () => {
    render(
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
    expect(
      screen.getByRole('menuitem', { name: 'Indented' }),
    ).toBeInTheDocument();
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
    expect(
      baseElement.querySelector('[role="separator"]') ??
        baseElement.querySelector('.fui-MenuDivider'),
    ).toBeTruthy();
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
  it('renders group header text', () => {
    render(
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
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
