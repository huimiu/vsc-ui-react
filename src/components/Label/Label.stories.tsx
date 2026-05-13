import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { VscLabel } from '.';
import { Section, Row, Inline } from '../../stories/helpers/helpers';

const meta: Meta<typeof VscLabel> = {
  title: 'Components/Label',
  component: VscLabel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A standalone label with VS Code styling. Supports sizes, font weights, required indicator, and an optional info tooltip icon. For form fields, prefer `VscField` which includes a label automatically.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VscLabel>;

/* ── Default ─────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Default',
  render: () => (
    <>
      <Section title="Default Label">
        <Row>
          <VscLabel>Default label</VscLabel>
          <VscLabel disabled>Disabled label</VscLabel>
        </Row>
      </Section>
      <Section title="Sizes">
        <Row>
          <Inline label="Small">
            <VscLabel size="small">Small label</VscLabel>
          </Inline>
          <Inline label="Medium (default)">
            <VscLabel size="medium">Medium label</VscLabel>
          </Inline>
          <Inline label="Large">
            <VscLabel size="large">Large label</VscLabel>
          </Inline>
        </Row>
      </Section>
      <Section title="Weights">
        <Row>
          <Inline label="Regular">
            <VscLabel weight="regular">Regular weight</VscLabel>
          </Inline>
          <Inline label="Semibold">
            <VscLabel weight="semibold">Semibold weight</VscLabel>
          </Inline>
        </Row>
      </Section>
      <Section title="Required">
        <Row>
          <VscLabel required>Required field</VscLabel>
          <VscLabel required size="large" weight="semibold">
            Large required
          </VscLabel>
        </Row>
      </Section>
      <Section title="With Tooltip">
        <Row>
          <VscLabel tooltipContent="This provides additional context">
            Label with info
          </VscLabel>
          <VscLabel required tooltipContent="This field is mandatory">
            Required with tooltip
          </VscLabel>
        </Row>
      </Section>
    </>
  ),
};
