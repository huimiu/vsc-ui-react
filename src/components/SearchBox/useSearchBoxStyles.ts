import {
  makeResetStyles,
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';

// ---------------------------------------------------------------------------
//  Base – monolithic class via makeResetStyles
// ---------------------------------------------------------------------------

const useBaseClassName = makeResetStyles({
  fontFamily: vscFontFamily,
  height: '24px',
  minHeight: '24px',
  padding: '0 8px',
  borderRadius: '2px',
  border: '1px solid var(--vscode-input-border)',
  backgroundColor: 'var(--vscode-input-background)',
  boxShadow: 'none',
  boxSizing: 'border-box',
  transition: 'none !important',

  '::after': {
    display: 'none !important' as 'none',
  },

  '& .fui-Input__input': {
    alignSelf: 'center',
    padding: '0',
    height: 'auto',
    boxSizing: 'border-box',
    fontSize: 'var(--fontSizeBase200, 12px)',
    lineHeight: 'var(--lineHeightBase200, 16px)',
    color: 'var(--vscode-input-foreground)',
    backgroundColor: 'transparent',
  },

  '& .fui-Input__input::placeholder': {
    color: 'var(--vscode-input-placeholderForeground)',
    opacity: 1,
  },

  '& .fui-Input__contentBefore': {
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--vscode-input-placeholderForeground)',
    fontSize: '14px',
    lineHeight: '1',
    width: '14px',
    height: '14px',
    marginRight: '6px',
    padding: '0',
  },

  '& .fui-Input__contentAfter': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: '14px',
    lineHeight: '1',
    width: '14px',
    height: '14px',
    marginLeft: '6px',
    padding: '0',
    color: 'var(--vscode-input-foreground)',
    cursor: 'pointer',
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
    ...shorthands.borderColor('transparent'),
    backgroundColor: 'transparent',
    '& .fui-Input__input': {
      cursor: 'default',
    },
  },

  medium: {
    height: '26px',
    minHeight: '26px',
    '& .fui-Input__input': {
      ...shorthands.padding('0'),
    },
    '& .fui-Input__contentBefore': {
      fontSize: '16px',
      width: '16px',
      height: '16px',
      marginRight: '8px',
      ...shorthands.padding('0'),
    },
    '& .fui-Input__contentAfter': {
      fontSize: '16px',
      width: '16px',
      height: '16px',
      marginRight: '0',
      marginLeft: '8px',
      ...shorthands.padding('0'),
    },
  },

  large: {
    height: '28px',
    minHeight: '28px',
    '& .fui-Input__input': {
      ...shorthands.padding('0'),
    },
    '& .fui-Input__contentBefore': {
      fontSize: '16px',
      width: '16px',
      height: '16px',
      marginRight: '8px',
      ...shorthands.padding('0'),
    },
    '& .fui-Input__contentAfter': {
      fontSize: '16px',
      width: '16px',
      height: '16px',
      marginRight: '0',
      marginLeft: '8px',
      ...shorthands.padding('0'),
    },
  },
});

// ---------------------------------------------------------------------------
//  Exported hook
// ---------------------------------------------------------------------------

export interface UseSearchBoxStylesOptions {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}

export function useSearchBoxStyles(options: UseSearchBoxStylesOptions): string {
  const { size = 'small', disabled, readOnly, className } = options;

  const baseClassName = useBaseClassName();
  const classes = useStyles();

  return mergeClasses(
    baseClassName,
    size === 'medium' && classes.medium,
    size === 'large' && classes.large,
    disabled && classes.disabled,
    readOnly && classes.readonly,
    className,
  );
}
