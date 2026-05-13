import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { VscField } from '.';
import { VscInput } from '../Input';
import { VscTextarea } from '../Textarea';
import { VscDropdown, VscOption } from '../Dropdown';
import { Section } from '../../stories/helpers/helpers';

const meta: Meta<typeof VscField> = {
  title: 'Components/Field',
  component: VscField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A form field wrapper that provides a label, optional info tooltip, required indicator, and validation message for any child input. Pairs with `VscInput`, `VscTextarea`, and `VscDropdown`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VscField>;

/* ── Default ─────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Default',
  render: () => (
    <Section
      title="Field"
      description="Wraps an input with a label and optional validation message."
    >
      <div style={{ maxWidth: 360 }}>
        <VscField label="Workspace Name" required style={{ marginBottom: 16 }}>
          <VscInput placeholder="my-workspace" />
        </VscField>
        <VscField label="Description" style={{ marginBottom: 16 }}>
          <VscTextarea placeholder="Optional description..." rows={3} />
        </VscField>
        <VscField
          label="Port"
          validationState="error"
          validationMessage="Port must be between 0 and 65535"
        >
          <VscInput validationState="error" defaultValue="-1" />
        </VscField>
      </div>
    </Section>
  ),
};

/* ── With Tooltip ────────────────────────────────────────────────── */

export const WithTooltip: Story = {
  name: 'With Tooltip',
  render: () => (
    <Section
      title="Field with Tooltip"
      description="An info icon next to the label shows a tooltip on hover."
    >
      <div style={{ maxWidth: 360 }}>
        <VscField
          label="Editor: Font Size"
          tooltipContent="Controls the font size in pixels."
        >
          <VscInput type="number" defaultValue="14" style={{ width: 80 }} />
        </VscField>
      </div>
    </Section>
  ),
};

/* ── Full Example ────────────────────────────────────────────────── */

export const SettingsForm: Story = {
  name: 'Full Example — Settings Form',
  render: () => (
    <Section
      title="Settings Form"
      description="A realistic form combining multiple input types."
    >
      <div style={{ width: '100%', maxWidth: 640 }}>
        <VscField
          label="Editor: Font Family"
          tooltipContent="Controls the font family. Accepts a comma-separated list."
          style={{ marginBottom: 16 }}
        >
          <VscInput defaultValue="'Cascadia Code', 'Fira Code', monospace" />
        </VscField>
        <VscField label="Editor: Font Size" style={{ marginBottom: 16 }}>
          <VscInput type="number" defaultValue="14" style={{ width: 80 }} />
        </VscField>
        <VscField label="Color Theme" style={{ marginBottom: 16 }}>
          <VscDropdown defaultValue="Dark+ (default dark)">
            <VscOption text="Dark+ (default dark)">
              Dark+ (default dark)
            </VscOption>
            <VscOption text="Light+ (default light)">
              Light+ (default light)
            </VscOption>
            <VscOption text="Monokai">Monokai</VscOption>
          </VscDropdown>
        </VscField>
        <VscField label="Terminal: Shell Args">
          <VscTextarea defaultValue="--login" rows={2} />
        </VscField>
      </div>
    </Section>
  ),
};
