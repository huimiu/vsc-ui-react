import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { VscCheckbox } from '.';
import { Section, Row, Inline } from '../../stories/helpers/helpers';

const meta: Meta<typeof VscCheckbox> = {
  title: 'Components/Checkbox',
  component: VscCheckbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox with VS Code styling. Supports three sizes, mixed/indeterminate state, and optional label text.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VscCheckbox>;

/* ── Default ─────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Default',
  render: () => (
    <>
      <Section title="Default Checkbox">
        <Row>
          <VscCheckbox label="Unchecked" />
          <VscCheckbox label="Checked" defaultChecked />
          <VscCheckbox label="Disabled" disabled />
          <VscCheckbox label="Disabled checked" disabled defaultChecked />
        </Row>
      </Section>
      <Section title="Sizes">
        <Row>
          <Inline label="Small">
            <VscCheckbox size="small" label="Small" defaultChecked />
          </Inline>
          <Inline label="Medium (default)">
            <VscCheckbox label="Medium" defaultChecked />
          </Inline>
          <Inline label="Large">
            <VscCheckbox size="large" label="Large" defaultChecked />
          </Inline>
        </Row>
      </Section>
      <Section title="Mixed / Indeterminate">
        <Row>
          <VscCheckbox label="Indeterminate" checked="mixed" />
        </Row>
      </Section>
      <Section title="Without Label">
        <Row>
          <VscCheckbox aria-label="Standalone checkbox" />
          <VscCheckbox aria-label="Standalone checked" defaultChecked />
        </Row>
      </Section>
    </>
  ),
};
