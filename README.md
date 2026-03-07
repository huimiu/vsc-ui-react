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
    <VscButton appearance="primary" compact>
      Save
    </VscButton>
  );
}
```

## Components

- `VscButton` — VS Code styled button

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and publishing instructions.
