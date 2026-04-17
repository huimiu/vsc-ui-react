import {
  makeResetStyles,
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';
import type { VscValidationState } from '../../types';

// ---------------------------------------------------------------------------
//  Base – monolithic class via makeResetStyles
// ---------------------------------------------------------------------------

const useBaseClassName = makeResetStyles({
  fontFamily: vscFontFamily,
  borderRadius: '2px',
  border: '1px solid var(--vscode-input-border)',
  boxShadow: 'none',
  boxSizing: 'border-box',
  backgroundColor: 'var(--vscode-input-background)',
  transition: 'none !important',

  '::after': {
    display: 'none !important' as 'none',
  },

  '& .fui-Textarea__textarea': {
    padding: '4px 6px',
    minHeight: '52px',
    fontSize: 'var(--fontSizeBase200, 12px)',
    fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
    lineHeight: 'var(--lineHeightBase200, 16px)',
    color: 'var(--vscode-input-foreground)',
    backgroundColor: 'transparent',
  },

  '& .fui-Textarea__textarea::placeholder': {
    color: 'var(--vscode-input-placeholderForeground)',
    opacity: 1,
  },

  '& .fui-Textarea__textarea:focus-visible': {
    outline: 'none',
  },

  ':hover': {
    borderColor: 'var(--vscode-input-border)',
  },

  ':focus-within': {
    borderColor: 'var(--vscode-focusBorder)',
    outline: 'none',
  },
});

// ---------------------------------------------------------------------------
//  Permutation styles via makeStyles
// ---------------------------------------------------------------------------

const useStyles = makeStyles({
  disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  readonly: {
    ...shorthands.borderColor('var(--vscode-input-border)'),
    backgroundColor: 'transparent',
    '& .fui-Textarea__textarea': {
      cursor: 'default',
    },
  },

  small: {
    '& .fui-Textarea__textarea': {
      ...shorthands.padding('2px', '4px'),
      fontSize: 'var(--fontSizeBase200, 12px)',
      lineHeight: 'var(--lineHeightBase200, 16px)',
    },
  },

  error: {
    ...shorthands.borderColor('var(--vscode-inputValidation-errorBorder)'),
    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-inputValidation-errorBorder)'),
    },
  },

  warning: {
    ...shorthands.borderColor('var(--vscode-inputValidation-warningBorder)'),
    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-inputValidation-warningBorder)'),
    },
  },

  info: {
    ...shorthands.borderColor('var(--vscode-inputValidation-infoBorder)'),
    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-inputValidation-infoBorder)'),
    },
  },
});

// ---------------------------------------------------------------------------
//  Exported hook
// ---------------------------------------------------------------------------

export interface UseTextareaStylesOptions {
  size?: 'small' | 'medium' | 'large';
  validationState?: VscValidationState;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}

export function useTextareaStyles(options: UseTextareaStylesOptions): string {
  const { size, validationState, disabled, readOnly, className } = options;

  const baseClassName = useBaseClassName();
  const classes = useStyles();

  return mergeClasses(
    baseClassName,
    size === 'small' && classes.small,
    validationState && classes[validationState],
    disabled && classes.disabled,
    readOnly && !disabled && classes.readonly,
    className,
  );
}
