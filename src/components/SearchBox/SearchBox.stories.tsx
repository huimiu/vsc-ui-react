import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VscSearchBox } from '.';
import { Section, Row, Inline } from '../../stories/helpers';

const meta: Meta<typeof VscSearchBox> = {
  title: 'Components/SearchBox',
  component: VscSearchBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VscSearchBox>;

/* ── Default ─────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Default',
  render: () => (
    <Section
      title="SearchBox"
      description="A search input with built-in search icon and dismiss action."
    >
      <Row>
        <VscSearchBox placeholder="Search settings" />
        <VscSearchBox placeholder="Disabled" disabled />
      </Row>
    </Section>
  ),
};

/* ── Size Variants ───────────────────────────────────────────────── */

export const SizeVariants: Story = {
  name: 'Size Variants',
  render: () => (
    <Section title="Size Variants">
      <Row>
        <Inline label="Small (default)">
          <VscSearchBox placeholder="Search..." />
        </Inline>
        <Inline label="Medium">
          <VscSearchBox size="medium" placeholder="Search..." />
        </Inline>
        <Inline label="Large">
          <VscSearchBox size="large" placeholder="Search everything..." />
        </Inline>
      </Row>
    </Section>
  ),
};
