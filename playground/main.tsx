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
  VscMenuList,
  VscMenuItem,
  VscMenuItemCheckbox,
  VscTabList,
  VscTab,
} from '../src';
import type { VscValidationState } from '../src';

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: '16px 0',
  borderBottom: '1px solid var(--vscode-widget-border)',
};

const headerStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--vscode-descriptionForeground)',
};

const gridHeadStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--vscode-descriptionForeground)',
};

function Matrix({
  rows,
  columns,
  rowLabelWidth = 140,
  cellRender,
}: {
  rows: { key: string; label: string }[];
  columns: { key: string; label: string; className?: string }[];
  rowLabelWidth?: number;
  cellRender: (rowKey: string, columnKey: string) => React.ReactNode;
}) {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `${rowLabelWidth}px repeat(${columns.length}, 1fr)`,
    gap: 12,
    alignItems: 'center',
  };
  return (
    <div style={gridStyle}>
      <span />
      {columns.map((c) => (
        <span key={c.key} style={gridHeadStyle}>
          {c.label}
        </span>
      ))}
      {rows.map((r) => (
        <React.Fragment key={r.key}>
          <span style={gridHeadStyle}>{r.label}</span>
          {columns.map((c) => (
            <div key={c.key} className={c.className} style={{ display: 'flex' }}>
              {cellRender(r.key, c.key)}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

const BUTTON_COLUMNS = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover', className: 'vsc-force-hover' },
  { key: 'selected', label: 'Selected' },
  { key: 'disabled', label: 'Disabled' },
];

const INPUT_COLUMNS = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover', className: 'vsc-force-hover' },
  { key: 'focus', label: 'Focus', className: 'vsc-force-focus' },
  { key: 'disabled', label: 'Disabled' },
];

const BUTTON_ROWS = [
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'outline', label: 'Outline' },
  { key: 'subtle', label: 'Subtle' },
  { key: 'transparent', label: 'Transparent' },
];

const BUTTON_SIZE_ROWS = [
  { key: 'medium', label: 'Medium' },
  { key: 'small', label: 'Small' },
  { key: 'compact', label: 'Compact' },
];

const VALIDATION_ROWS = [
  { key: 'none', label: 'None' },
  { key: 'error', label: 'Error' },
  { key: 'warning', label: 'Warning' },
  { key: 'info', label: 'Info' },
];

type Appearance = 'primary' | 'outline' | 'subtle' | 'transparent' | undefined;
function appearanceFor(rowKey: string): Appearance {
  return rowKey === 'secondary' ? undefined : (rowKey as Appearance);
}

function validationFor(rowKey: string): VscValidationState | undefined {
  return rowKey === 'none' ? undefined : (rowKey as VscValidationState);
}

function ButtonSection() {
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscButton</h2>
      <Matrix
        rows={BUTTON_ROWS}
        columns={BUTTON_COLUMNS}
        cellRender={(row, col) => {
          const appearance = appearanceFor(row);
          const props: React.ComponentProps<typeof VscButton> & {
            'data-appearance'?: string;
          } = { appearance, 'data-appearance': appearance ?? 'secondary' };
          if (col === 'selected') props['aria-pressed'] = true;
          if (col === 'disabled') props.disabled = true;
          return (
            <VscButton {...props}>
              {BUTTON_ROWS.find((r) => r.key === row)!.label}
            </VscButton>
          );
        }}
      />
      <h3 style={headerStyle}>Sizes</h3>
      <Matrix
        rows={BUTTON_SIZE_ROWS}
        columns={BUTTON_COLUMNS}
        cellRender={(row, col) => {
          const size = row as 'medium' | 'small' | 'compact';
          const props: React.ComponentProps<typeof VscButton> & {
            'data-appearance'?: string;
          } = { appearance: 'primary', 'data-appearance': 'primary', size };
          if (col === 'selected') props['aria-pressed'] = true;
          if (col === 'disabled') props.disabled = true;
          return (
            <VscButton {...props}>
              {BUTTON_SIZE_ROWS.find((r) => r.key === row)!.label}
            </VscButton>
          );
        }}
      />
    </section>
  );
}

function MenuButtonSection() {
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscMenuButton</h2>
      <Matrix
        rows={BUTTON_ROWS}
        columns={BUTTON_COLUMNS}
        cellRender={(row, col) => {
          const appearance = appearanceFor(row);
          const props: React.ComponentProps<typeof VscMenuButton> & {
            'data-appearance'?: string;
          } = { appearance, 'data-appearance': appearance ?? 'secondary' };
          if (col === 'selected') props['aria-pressed'] = true;
          if (col === 'disabled') props.disabled = true;
          return <VscMenuButton {...props}>Menu</VscMenuButton>;
        }}
      />
    </section>
  );
}

function SplitButtonSection() {
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscSplitButton</h2>
      <Matrix
        rows={BUTTON_ROWS}
        columns={BUTTON_COLUMNS}
        cellRender={(row, col) => {
          const appearance = appearanceFor(row);
          const props: React.ComponentProps<typeof VscSplitButton> & {
            'data-appearance'?: string;
          } = { appearance, 'data-appearance': appearance ?? 'secondary' };
          if (col === 'selected') props['aria-pressed'] = true;
          if (col === 'disabled') props.disabled = true;
          return <VscSplitButton {...props}>Split</VscSplitButton>;
        }}
      />
    </section>
  );
}

function InputSection() {
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscInput</h2>
      <Matrix
        rows={VALIDATION_ROWS}
        columns={INPUT_COLUMNS}
        cellRender={(row, col) => (
          <VscInput
            placeholder="Input"
            disabled={col === 'disabled'}
            validationState={validationFor(row)}
          />
        )}
      />
    </section>
  );
}

function TextareaSection() {
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscTextarea</h2>
      <Matrix
        rows={VALIDATION_ROWS}
        columns={INPUT_COLUMNS}
        cellRender={(row, col) => (
          <VscTextarea
            placeholder="Textarea"
            rows={2}
            disabled={col === 'disabled'}
            validationState={validationFor(row)}
          />
        )}
      />
    </section>
  );
}

function SearchBoxSection() {
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscSearchBox</h2>
      <Matrix
        rows={[{ key: 'default', label: 'Default' }]}
        columns={INPUT_COLUMNS}
        rowLabelWidth={100}
        cellRender={(_row, col) => (
          <VscSearchBox placeholder="Search" disabled={col === 'disabled'} />
        )}
      />
    </section>
  );
}

function DropdownSection() {
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscDropdown</h2>
      <Matrix
        rows={[{ key: 'default', label: 'Default' }]}
        columns={INPUT_COLUMNS}
        rowLabelWidth={100}
        cellRender={(_row, col) => (
          <VscDropdown placeholder="Pick one" disabled={col === 'disabled'}>
            <VscOption value="one">One</VscOption>
            <VscOption value="two">Two</VscOption>
          </VscDropdown>
        )}
      />
    </section>
  );
}

function FieldSection() {
  const fieldRows = [
    { key: 'none', label: 'None' },
    { key: 'error', label: 'Error' },
    { key: 'warning', label: 'Warning' },
    { key: 'success', label: 'Success' },
  ];
  type FieldValidation = 'error' | 'warning' | 'success' | undefined;
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscField</h2>
      <Matrix
        rows={fieldRows}
        rowLabelWidth={100}
        columns={[{ key: 'field', label: 'Field' }]}
        cellRender={(row) => (
          <VscField
            label="Label"
            hint={row === 'none' ? 'A short hint' : undefined}
            validationState={row === 'none' ? undefined : (row as FieldValidation)}
            validationMessage={row === 'none' ? undefined : `${row} message`}
          >
            <VscInput placeholder="With field" />
          </VscField>
        )}
      />
    </section>
  );
}

function MenuSection() {
  const itemRows = [
    { key: 'default', label: 'Default' },
    { key: 'accent', label: 'Accent' },
    { key: 'checkbox', label: 'Checkbox' },
  ];
  const itemCols = [
    { key: 'default', label: 'Default' },
    { key: 'hover', label: 'Hover' },
    { key: 'selected', label: 'Selected' },
    { key: 'disabled', label: 'Disabled' },
  ];
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscMenuList / VscMenuItem</h2>
      <Matrix
        rows={itemRows}
        columns={itemCols}
        cellRender={(row, col) => {
          const disabled = col === 'disabled';
          const focused = col === 'hover' || col === 'selected';
          if (row === 'checkbox') {
            return (
              <VscMenuList style={{ minWidth: 160 }}>
                <VscMenuItemCheckbox
                  name="demo"
                  value="x"
                  disabled={disabled}
                  data-focused={focused ? 'true' : undefined}
                  aria-checked={col === 'selected' ? true : undefined}
                >
                  Checkbox
                </VscMenuItemCheckbox>
              </VscMenuList>
            );
          }
          return (
            <VscMenuList style={{ minWidth: 160 }}>
              <VscMenuItem
                accent={row === 'accent'}
                disabled={disabled}
                data-focused={focused ? 'true' : undefined}
              >
                {row === 'accent' ? 'Accent item' : 'Menu item'}
              </VscMenuItem>
            </VscMenuList>
          );
        }}
      />
    </section>
  );
}

function TabListSection() {
  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>VscTabList</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '140px 1fr',
          gap: 12,
          alignItems: 'center',
        }}
      >
        <span style={gridHeadStyle}>Horizontal</span>
        <VscTabList defaultSelectedValue="selected">
          <VscTab value="default">Default</VscTab>
          <span className="vsc-force-hover" style={{ display: 'inline-flex' }}>
            <VscTab value="hover">Hover</VscTab>
          </span>
          <VscTab value="selected">Selected</VscTab>
          <VscTab value="disabled" disabled>Disabled</VscTab>
        </VscTabList>

        <span style={gridHeadStyle}>Small</span>
        <VscTabList defaultSelectedValue="selected" size="small">
          <VscTab value="default">Default</VscTab>
          <span className="vsc-force-hover" style={{ display: 'inline-flex' }}>
            <VscTab value="hover">Hover</VscTab>
          </span>
          <VscTab value="selected">Selected</VscTab>
          <VscTab value="disabled" disabled>Disabled</VscTab>
        </VscTabList>

        <span style={gridHeadStyle}>Vertical</span>
        <VscTabList defaultSelectedValue="selected" vertical>
          <VscTab value="default">Default</VscTab>
          <span className="vsc-force-hover" style={{ display: 'inline-flex' }}>
            <VscTab value="hover">Hover</VscTab>
          </span>
          <VscTab value="selected">Selected</VscTab>
          <VscTab value="disabled" disabled>Disabled</VscTab>
        </VscTabList>
      </div>
    </section>
  );
}

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
              State matrix for each component. Each row is a variant; each
              column is an interaction state (Hover / Focus / Selected /
              Disabled simulated statically).
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

        <ButtonSection />
        <MenuButtonSection />
        <SplitButtonSection />
        <InputSection />
        <TextareaSection />
        <SearchBoxSection />
        <DropdownSection />
        <FieldSection />
        <MenuSection />
        <TabListSection />
      </div>
    </FluentProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
);
