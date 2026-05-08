import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';

// ---------------------------------------------------------------------------
//  Base – root override styles via makeStyles
// ---------------------------------------------------------------------------

const useBaseStyles = makeStyles({
  root: {
    fontFamily: vscFontFamily,
    transition: 'none',
    alignItems: 'center',

    '& .fui-Checkbox__indicator.fui-Checkbox__indicator': {
      ...shorthands.borderColor('var(--vscode-checkbox-border)'),
      ...shorthands.borderWidth('1px'),
      ...shorthands.borderRadius('2px'),
      backgroundColor: 'var(--vscode-checkbox-background)',
      color: 'var(--vscode-checkbox-foreground, var(--vscode-foreground))',
      boxShadow: 'none',
      transition: 'none',
      width: '16px',
      height: '16px',
      fontSize: '16px',
      margin: '0',
      marginInlineEnd: '6px',
    },

    '& input:checked ~ .fui-Checkbox__indicator.fui-Checkbox__indicator': {
      backgroundColor: 'var(--vscode-checkbox-selectBackground)',
      ...shorthands.borderColor(
        'var(--vscode-checkbox-selectBorder, var(--vscode-checkbox-border))',
      ),
      color: 'var(--vscode-checkbox-selectForeground, #242424)',
    },

    '& input:indeterminate ~ .fui-Checkbox__indicator.fui-Checkbox__indicator':
      {
        backgroundColor: 'var(--vscode-checkbox-background)',
        ...shorthands.borderColor(
          'var(--vscode-checkbox-selectBorder, var(--vscode-checkbox-border))',
        ),
        color: 'var(--vscode-checkbox-selectBackground)',
      },

    '& .fui-Checkbox__label': {
      fontFamily: vscFontFamily,
      fontSize: 'var(--fontSizeBase200, 12px)',
      lineHeight: 'var(--lineHeightBase200, 16px)',
      color: 'var(--vscode-foreground)',
      paddingTop: '0',
      paddingBottom: '0',
    },

    ':hover .fui-Checkbox__indicator.fui-Checkbox__indicator': {
      ...shorthands.borderColor('var(--vscode-checkbox-border)'),
      backgroundColor: 'var(--vscode-checkbox-background)',
    },

    ':hover input:checked ~ .fui-Checkbox__indicator.fui-Checkbox__indicator': {
      backgroundColor: 'var(--vscode-checkbox-selectBackground)',
      ...shorthands.borderColor(
        'var(--vscode-checkbox-selectBorder, var(--vscode-checkbox-border))',
      ),
    },

    ':hover input:indeterminate ~ .fui-Checkbox__indicator.fui-Checkbox__indicator':
      {
        backgroundColor: 'var(--vscode-checkbox-background)',
        ...shorthands.borderColor(
          'var(--vscode-checkbox-selectBorder, var(--vscode-checkbox-border))',
        ),
      },

    '&:focus-visible': {
      outlineStyle: 'solid',
      outlineWidth: '1px',
      outlineColor: 'var(--vscode-focusBorder)',
      outlineOffset: '6px',
      borderRadius: '4px',
    },

    '& input:focus-visible ~ .fui-Checkbox__indicator.fui-Checkbox__indicator':
      {
        outlineStyle: 'none',
      },

    '::after': {
      display: 'none' as const,
    },

    '::before': {
      display: 'none' as const,
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

  large: {
    '& .fui-Checkbox__indicator.fui-Checkbox__indicator': {
      width: '20px',
      height: '20px',
      fontSize: '20px',
      marginInlineEnd: '8px',
    },
  },
});

// ---------------------------------------------------------------------------
//  Exported hook
// ---------------------------------------------------------------------------

export interface UseCheckboxStylesOptions {
  size?: 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

export function useCheckboxStyles(options: UseCheckboxStylesOptions) {
  const { size, disabled, className } = options;
  const base = useBaseStyles();
  const classes = useStyles();

  const rootClassName = mergeClasses(
    base.root,
    size === 'large' && classes.large,
    disabled && classes.disabled,
    className,
  );

  return { rootClassName };
}
