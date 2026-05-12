import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { FluentProvider } from '@fluentui/react-components';

/* ── Global CSS ─────────────────────────────────────────────────── */
import '../.storybook-assets/theme-tokens.css';
import '../.storybook-assets/storybook.css';

import { darkTheme, lightTheme } from './themes';
import { DocsPage } from './DocsPage';
import { ThemeEffect } from './ThemeEffect';

/* ── FluentProvider decorator ───────────────────────────────────── */
const withFluent: Decorator = (Story, context) => {
  const scheme = (context.globals.scheme ?? 'dark') as 'dark' | 'light';
  const isDark = scheme === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <FluentProvider theme={theme}>
      <ThemeEffect isDark={isDark} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
          padding: '24px',
          boxSizing: 'border-box',
        }}
      >
        <Story />
      </div>
    </FluentProvider>
  );
};

const preview: Preview = {
  globalTypes: {
    scheme: {
      name: 'Color Scheme',
      description: 'Dark / Light mode',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    scheme: 'dark',
  },
  decorators: [withFluent],
  parameters: {
    layout: 'padded',
    backgrounds: { disable: true },
    controls: { disable: true },
    docs: {
      theme: themes.dark,
      page: DocsPage,
      story: { inline: true, height: 'auto' },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Design Language',
          ['Typography', 'Colors'],
          'Components',
        ],
      },
    },
  },
};

export default preview;
