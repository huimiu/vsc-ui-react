import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchRegular } from '@fluentui/react-icons';
import { VscInput } from '.';
import { Section, Row, Inline } from '../../stories/helpers/helpers';

const meta: Meta<typeof VscInput> = {
  title: 'Components/Input',
  component: VscInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A single-line text input with VS Code styling. Supports validation states (error, warning), inline validation messages, icon slots via `contentBefore`/`contentAfter`, and three sizes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VscInput>;

/* ── Default ─────────────────────────────────────────────────────── */

export const Default: Story = {
  name: 'Default',
  render: () => (
    <>
      <Section title="Default Input">
        <Row>
          <VscInput placeholder="Enter a value..." />
          <VscInput placeholder="Disabled" disabled />
        </Row>
      </Section>
      <Section title="Sizes">
        <Row>
          <Inline label="Small">
            <VscInput size="small" placeholder="Small" />
          </Inline>
          <Inline label="Medium (default)">
            <VscInput placeholder="Medium" />
          </Inline>
          <Inline label="Large">
            <VscInput size="large" placeholder="Large" />
          </Inline>
        </Row>
      </Section>
    </>
  ),
};

/* ── With Icon ───────────────────────────────────────────────────── */

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => (
    <Section title="Input with Icon">
      <Row>
        <VscInput
          contentBefore={<SearchRegular />}
          withIcon
          placeholder="Filter by name..."
        />
      </Row>
    </Section>
  ),
};

/* ── Validation States ───────────────────────────────────────────── */

export const ValidationStates: Story = {
  name: 'Validation States',
  render: () => (
    <Section title="Validation States">
      <Row>
        <Inline label="Error">
          <VscInput validationState="error" defaultValue="bad-value" />
        </Inline>
        <Inline label="Warning">
          <VscInput validationState="warning" defaultValue="check this" />
        </Inline>
      </Row>
    </Section>
  ),
};

/* ── Validation with Message ─────────────────────────────────────── */

export const ValidationWithMessage: Story = {
  name: 'Validation with Message',
  render: () => (
    <Section
      title="Validation Messages"
      description="Validation state with a message box below the input."
    >
      <Row>
        <VscInput
          validationState="error"
          validationMessage="Port must be between 0 and 65535"
          defaultValue="-1"
        />
      </Row>
      <Row>
        <VscInput
          validationState="warning"
          validationMessage="This value may cause issues"
          defaultValue="8080"
        />
      </Row>
    </Section>
  ),
};
