import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
} from '@fluentui/react-components';

import {
  VscButton,
  VscMenuButton,
  VscSplitButton,
  VscInput,
  VscTextarea,
  VscField,
  VscSearchBox,
  VscDropdown,
  VscOption,
} from '../src';

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '16px 0',
  borderBottom: '1px solid var(--vscode-widget-border)',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  alignItems: 'center',
};

const headerStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--vscode-descriptionForeground)',
};

function Playground() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  React.useEffect(() => {
    document.documentElement.classList.toggle('theme-light', theme === 'light');
    document.documentElement.classList.toggle('theme-dark', theme === 'dark');
  }, [theme]);

  return (
    <FluentProvider theme={theme === 'dark' ? webDarkTheme : webLightTheme}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 32 }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 20 }}>vsc-ui-react playground</h1>
            <p
              style={{
                margin: '4px 0 0',
                color: 'var(--vscode-descriptionForeground)',
                fontSize: 12,
              }}
            >
              Live preview of components using real makeStyles output. Edit
              source under <code>src/</code> and HMR will update this page.
            </p>
          </div>
          <label style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={theme === 'light'}
              onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
            />
            Light mode
          </label>
        </header>

        <section style={sectionStyle}>
          <h2 style={headerStyle}>VscButton</h2>
          <div style={rowStyle}>
            <VscButton appearance="primary">Primary</VscButton>
            <VscButton>Secondary</VscButton>
            <VscButton appearance="outline">Outline</VscButton>
            <VscButton appearance="subtle">Subtle</VscButton>
            <VscButton appearance="transparent">Transparent</VscButton>
            <VscButton disabled>Disabled</VscButton>
          </div>
          <div style={rowStyle}>
            <VscButton appearance="primary" size="small">
              Small
            </VscButton>
            <VscButton size="small">Small secondary</VscButton>
            <VscButton appearance="primary" size="compact">
              Compact
            </VscButton>
            <VscButton size="compact">Compact secondary</VscButton>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={headerStyle}>VscMenuButton / VscSplitButton</h2>
          <div style={rowStyle}>
            <VscMenuButton appearance="primary">Menu primary</VscMenuButton>
            <VscMenuButton>Menu secondary</VscMenuButton>
            <VscSplitButton appearance="primary">Split primary</VscSplitButton>
            <VscSplitButton>Split secondary</VscSplitButton>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={headerStyle}>VscInput / VscTextarea / VscSearchBox</h2>
          <div style={rowStyle}>
            <VscInput placeholder="Input" />
            <VscInput placeholder="Disabled" disabled />
            <VscSearchBox placeholder="Search" />
          </div>
          <VscTextarea placeholder="Textarea" rows={3} />
        </section>

        <section style={sectionStyle}>
          <h2 style={headerStyle}>VscField</h2>
          <VscField label="Label" hint="A short hint">
            <VscInput placeholder="With field" />
          </VscField>
          <VscField label="Error" validationState="error" validationMessage="Required">
            <VscInput defaultValue="" />
          </VscField>
        </section>

        <section style={sectionStyle}>
          <h2 style={headerStyle}>VscDropdown</h2>
          <div style={rowStyle}>
            <VscDropdown placeholder="Pick an option">
              <VscOption value="one">One</VscOption>
              <VscOption value="two">Two</VscOption>
              <VscOption value="three">Three</VscOption>
            </VscDropdown>
          </div>
        </section>
      </div>
    </FluentProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
);
