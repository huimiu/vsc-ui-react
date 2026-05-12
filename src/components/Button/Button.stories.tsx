import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  AddRegular,
  ArrowSyncRegular,
  EditRegular,
  FolderOpenRegular,
  InfoRegular,
  PlayRegular,
} from '@fluentui/react-icons';
import { VscButton } from '.';
import { VscSplitButton } from '.';
import { VscMenuButton } from '.';
import {
  Menu,
  MenuTrigger,
  VscMenuPopover,
  VscMenuList,
  VscMenuItem,
} from '../Menu';
import { Section, Row, Inline } from '../../stories/helpers';

const meta: Meta<typeof VscButton> = {
  title: 'Components/Button',
  component: VscButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VscButton>;

/* ── Standard Buttons ────────────────────────────────────────────── */

export const AllAppearances: Story = {
  name: 'All Appearances',
  render: () => (
    <Section
      title="Button Appearances"
      description="All five button appearances at default size."
    >
      <Row>
        <VscButton appearance="primary">Primary</VscButton>
        <VscButton appearance="secondary">Secondary</VscButton>
        <VscButton appearance="outline">Outline</VscButton>
        <VscButton appearance="subtle">Subtle</VscButton>
        <VscButton appearance="transparent">Transparent</VscButton>
      </Row>
    </Section>
  ),
};

/* ── Sizes ───────────────────────────────────────────────────────── */

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <>
      <Section title="Medium (default)">
        <Row>
          <VscButton appearance="primary">Medium</VscButton>
          <VscButton appearance="secondary">Medium</VscButton>
        </Row>
      </Section>
      <Section title="Small">
        <Row>
          <VscButton appearance="primary" size="small">
            Small
          </VscButton>
          <VscButton appearance="secondary" size="small">
            Small
          </VscButton>
        </Row>
      </Section>
      <Section title="Compact">
        <Row>
          <VscButton appearance="primary" size="compact">
            Compact
          </VscButton>
          <VscButton appearance="secondary" size="compact">
            Compact
          </VscButton>
        </Row>
      </Section>
    </>
  ),
};

/* ── Icon + Text ─────────────────────────────────────────────────── */

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <Section title="Icon + Text" description="Buttons with leading icons.">
      <Row>
        <VscButton appearance="primary" icon={<AddRegular />}>
          New File
        </VscButton>
        <VscButton appearance="secondary" icon={<FolderOpenRegular />}>
          Open Folder
        </VscButton>
        <VscButton appearance="outline" icon={<InfoRegular />}>
          Info
        </VscButton>
        <VscButton appearance="subtle" icon={<EditRegular />}>
          Edit
        </VscButton>
        <VscButton appearance="transparent" icon={<ArrowSyncRegular />}>
          Refresh
        </VscButton>
      </Row>
    </Section>
  ),
};

/* ── Icon Only ───────────────────────────────────────────────────── */

export const IconOnly: Story = {
  name: 'Icon Only',
  render: () => (
    <Section title="Icon-Only Buttons">
      <Row>
        <Inline label="Primary">
          <VscButton
            appearance="primary"
            icon={<AddRegular />}
            aria-label="Add"
          />
        </Inline>
        <Inline label="Secondary">
          <VscButton
            appearance="secondary"
            icon={<FolderOpenRegular />}
            aria-label="Open folder"
          />
        </Inline>
        <Inline label="Subtle">
          <VscButton
            appearance="subtle"
            icon={<EditRegular />}
            aria-label="Edit"
          />
        </Inline>
        <Inline label="Transparent">
          <VscButton
            appearance="transparent"
            icon={<ArrowSyncRegular />}
            aria-label="Refresh"
          />
        </Inline>
      </Row>
    </Section>
  ),
};

/* ── Disabled ────────────────────────────────────────────────────── */

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <Section title="Disabled Buttons">
      <Row>
        <VscButton appearance="primary" disabled>
          Primary
        </VscButton>
        <VscButton appearance="secondary" disabled>
          Secondary
        </VscButton>
        <VscButton appearance="outline" disabled>
          Outline
        </VscButton>
        <VscButton appearance="subtle" disabled>
          Subtle
        </VscButton>
        <VscButton appearance="transparent" disabled>
          Transparent
        </VscButton>
      </Row>
    </Section>
  ),
};

/* ── Split Button ────────────────────────────────────────────────── */

export const SplitButtons: Story = {
  name: 'Split Button',
  render: () => (
    <Section
      title="Split Buttons"
      description="A primary action with a dropdown trigger for secondary actions."
    >
      <Row>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            {(triggerProps) => (
              <VscSplitButton
                appearance="primary"
                icon={<PlayRegular />}
                menuButton={triggerProps}
              >
                Run
              </VscSplitButton>
            )}
          </MenuTrigger>
          <VscMenuPopover>
            <VscMenuList>
              <VscMenuItem>Run Without Debugging</VscMenuItem>
              <VscMenuItem>Run With Profiling</VscMenuItem>
            </VscMenuList>
          </VscMenuPopover>
        </Menu>

        <Menu>
          <MenuTrigger disableButtonEnhancement>
            {(triggerProps) => (
              <VscSplitButton
                appearance="secondary"
                icon={<FolderOpenRegular />}
                menuButton={triggerProps}
              >
                Open
              </VscSplitButton>
            )}
          </MenuTrigger>
          <VscMenuPopover>
            <VscMenuList>
              <VscMenuItem>Open File</VscMenuItem>
              <VscMenuItem>Open Folder</VscMenuItem>
            </VscMenuList>
          </VscMenuPopover>
        </Menu>
      </Row>
    </Section>
  ),
};

/* ── Menu Button ─────────────────────────────────────────────────── */

export const MenuButtons: Story = {
  name: 'Menu Button',
  render: () => (
    <Section
      title="Menu Buttons"
      description="A button that opens a menu — shows a chevron indicator."
    >
      <Row>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <VscMenuButton appearance="primary">Actions</VscMenuButton>
          </MenuTrigger>
          <VscMenuPopover>
            <VscMenuList>
              <VscMenuItem>Action One</VscMenuItem>
              <VscMenuItem>Action Two</VscMenuItem>
            </VscMenuList>
          </VscMenuPopover>
        </Menu>

        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <VscMenuButton appearance="secondary" icon={<FolderOpenRegular />}>
              Open Recent
            </VscMenuButton>
          </MenuTrigger>
          <VscMenuPopover>
            <VscMenuList>
              <VscMenuItem>project-alpha</VscMenuItem>
              <VscMenuItem>project-beta</VscMenuItem>
            </VscMenuList>
          </VscMenuPopover>
        </Menu>
      </Row>
    </Section>
  ),
};
