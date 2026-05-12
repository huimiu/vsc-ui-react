import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VscTextarea } from '.';
import { Section, Row, Inline } from '../../stories/helpers';

const meta: Meta<typeof VscTextarea> = {
  title: 'Components/Textarea',
  component: VscTextarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VscTextarea>;

/* ── Default ─────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Default',
  render: () => (
    <>
      <Section title="Textarea" description="Multi-line text input.">
        <Row>
          <VscTextarea
            placeholder="Describe your issue..."
            rows={4}
            style={{ minWidth: 320 }}
          />
          <VscTextarea
            disabled
            defaultValue="This field is disabled"
            rows={4}
            style={{ minWidth: 320 }}
          />
        </Row>
      </Section>
      <Section title="Read-only">
        <Row>
          <VscTextarea
            readOnly
            defaultValue="This content is read-only and cannot be edited."
            rows={3}
            style={{ minWidth: 320 }}
          />
        </Row>
      </Section>
    </>
  ),
};

/* ── Validation States ───────────────────────────────────────────── */

export const ValidationStates: Story = {
  name: 'Validation States',
  render: () => (
    <Section title="Validation States">
      <Row>
        <Inline label="Error">
          <VscTextarea
            validationState="error"
            defaultValue="Invalid content"
            rows={3}
            style={{ minWidth: 240 }}
          />
        </Inline>
        <Inline label="Warning">
          <VscTextarea
            validationState="warning"
            defaultValue="Check this content"
            rows={3}
            style={{ minWidth: 240 }}
          />
        </Inline>
      </Row>
    </Section>
  ),
};

/* ── Resizable ───────────────────────────────────────────────────── */

export const Resizable: Story = {
  name: 'Resizable',
  render: () => (
    <Section title="Resize Behavior">
      <Row>
        <Inline label="Vertical">
          <VscTextarea
            resize="vertical"
            placeholder="Resizable vertically"
            rows={3}
            style={{ minWidth: 280 }}
          />
        </Inline>
        <Inline label="Both">
          <VscTextarea
            resize="both"
            placeholder="Resizable both directions"
            rows={3}
            style={{ minWidth: 280 }}
          />
        </Inline>
      </Row>
    </Section>
  ),
};
