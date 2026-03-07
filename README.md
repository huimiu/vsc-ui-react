# vsc-ui-react

VS Code styled Fluent UI components for React. Wraps Fluent UI v9 components and applies VS Code theme-based styling through bundled CSS modules.

## Install

```bash
npm install vsc-ui-react
```

> `@fluentui/react-components`, `react`, and `react-dom` are peer dependencies and will be installed automatically (npm v7+).

## Usage

```tsx
import { VscButton } from 'vsc-ui-react';

export function Example() {
  return (
    <VscButton appearance='primary' compact>
      Save
    </VscButton>
  );
}
```

## Components

- `VscButton` — VS Code styled button

## Release checklist

1. Update `version` in `package.json`.
2. Run `npm run test`, `npm run build`, and `npm run typecheck`.
3. Publish with `npm publish`.
