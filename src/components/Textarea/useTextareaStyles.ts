import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';
import type { VscInputValidationState } from '../../types';

// ---------------------------------------------------------------------------
//  Base – root override styles via makeStyles
// ---------------------------------------------------------------------------

const useBaseStyles = makeStyles({
  root: {
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
      ...shorthands.borderColor('var(--vscode-input-border)'),
    },

    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-focusBorder)'),
      outline: 'none',
    },
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

  error: {
    ...shorthands.borderColor(
      'var(--vscode-inputValidation-errorBorder) !important',
    ),
    ':hover': {
      ...shorthands.borderColor(
        'var(--vscode-inputValidation-errorBorder) !important',
      ),
    },
    ':focus-within': {
      ...shorthands.borderColor(
        'var(--vscode-inputValidation-errorBorder) !important',
      ),
    },
  },

  warning: {
    ...shorthands.borderColor(
      'var(--vscode-inputValidation-warningBorder) !important',
    ),
    ':hover': {
      ...shorthands.borderColor(
        'var(--vscode-inputValidation-warningBorder) !important',
      ),
    },
    ':focus-within': {
      ...shorthands.borderColor(
        'var(--vscode-inputValidation-warningBorder) !important',
      ),
    },
  },
});

// ---------------------------------------------------------------------------
//  Exported hook
// ---------------------------------------------------------------------------

export interface UseTextareaStylesOptions {
  validationState?: VscInputValidationState;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}

export function useTextareaStyles(options: UseTextareaStylesOptions): string {
  const { validationState, disabled, readOnly, className } = options;

  const effectiveValidationState =
    disabled || readOnly ? undefined : validationState;

  const base = useBaseStyles();
  const classes = useStyles();

  return mergeClasses(
    base.root,
    effectiveValidationState && classes[effectiveValidationState],
    disabled && classes.disabled,
    readOnly && !disabled && classes.readonly,
    className,
  );
}
