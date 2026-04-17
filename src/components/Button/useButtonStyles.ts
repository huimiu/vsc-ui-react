import {
  makeResetStyles,
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components';

/**
 * VS Code font-family fallback, matching the `_tokens.scss` mixin.
 */
const vscFontFamily =
  'var(--vscode-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif)';

// ---------------------------------------------------------------------------
//  Base – single monolithic class via makeResetStyles (avoids CSS‑rule explosion)
// ---------------------------------------------------------------------------

const useBaseClassName = makeResetStyles({
  fontFamily: vscFontFamily,
  height: '28px',
  minHeight: '28px',
  minWidth: 'auto',
  paddingTop: '4px',
  paddingRight: '8px',
  paddingBottom: '4px',
  paddingLeft: '8px',
  borderRadius: '4px',
  gap: '4px',
  fontSize: 'var(--fontSizeBase300, 14px)',
  fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
  lineHeight: 'var(--lineHeightBase300, 20px)',
  boxShadow: 'none',

  ':focus-visible': {
    outlineStyle: 'solid',
    outlineWidth: '1px',
    outlineColor: 'var(--vscode-focusBorder)',
    outlineOffset: '2px',
  },

  "[aria-pressed='true']": {
    outlineStyle: 'solid',
    outlineWidth: '1px',
    outlineColor: 'var(--vscode-focusBorder)',
    outlineOffset: '2px',
  },

  ':disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  "[aria-disabled='true']": {
    opacity: 0.4,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
});

// ---------------------------------------------------------------------------
//  Appearance permutations – atomic classes via makeStyles
// ---------------------------------------------------------------------------

const useAppearanceStyles = makeStyles({
  primary: {
    ...shorthands.borderWidth('1px'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderColor('var(--vscode-button-border)'),
    backgroundColor: 'var(--vscode-button-background)',
    color: 'var(--vscode-button-foreground)',

    ':hover': {
      backgroundColor: 'var(--vscode-button-hoverBackground)',
      color: 'var(--vscode-button-foreground)',
      ...shorthands.borderColor('var(--vscode-button-border)'),
    },
  },

  secondary: {
    ...shorthands.borderWidth('1px'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderColor('var(--vscode-button-border)'),
    backgroundColor: 'var(--vscode-button-secondaryBackground)',
    color: 'var(--vscode-button-secondaryForeground)',

    ':hover': {
      backgroundColor: 'var(--vscode-button-secondaryHoverBackground)',
      color: 'var(--vscode-button-secondaryForeground)',
      ...shorthands.borderColor('var(--vscode-button-border)'),
    },
  },

  outline: {
    ...shorthands.borderWidth('1px'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderColor('var(--vscode-button-border)'),
    backgroundColor: 'transparent',
    color: 'var(--vscode-button-secondaryForeground)',

    ':hover': {
      backgroundColor: 'var(--vscode-button-secondaryHoverBackground)',
      color: 'var(--vscode-button-secondaryForeground)',
      ...shorthands.borderColor('var(--vscode-button-border)'),
    },
  },

  subtle: {
    ...shorthands.borderWidth('1px'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderColor('transparent'),
    backgroundColor: 'transparent',
    color: 'var(--vscode-foreground)',

    ':hover': {
      backgroundColor: 'var(--vscode-button-secondaryHoverBackground)',
      color: 'var(--vscode-foreground)',
      ...shorthands.borderColor('var(--vscode-button-border)'),
    },
  },

  transparent: {
    ...shorthands.borderWidth('0'),
    ...shorthands.borderStyle('none'),
    ...shorthands.borderColor('transparent'),
    backgroundColor: 'transparent',
    color: 'var(--vscode-foreground)',

    ':hover': {
      backgroundColor: 'transparent',
      color: 'var(--vscode-textLink-foreground)',
    },
  },
});

// ---------------------------------------------------------------------------
//  Size permutations
// ---------------------------------------------------------------------------

const useSizeStyles = makeStyles({
  small: {
    height: '22px',
    minHeight: '22px',
    paddingTop: '3px',
    paddingRight: '6px',
    paddingBottom: '3px',
    paddingLeft: '6px',
    gap: '3px',
    fontSize: 'var(--fontSizeBase200, 12px)',
    lineHeight: 'var(--lineHeightBase200, 16px)',
  },

  compact: {
    height: '15px',
    minHeight: '15px',
    paddingTop: '0',
    paddingRight: '4px',
    paddingBottom: '0',
    paddingLeft: '4px',
    gap: '2px',
    fontSize: 'var(--fontSizeBase100, 10px)',
    lineHeight: 'var(--lineHeightBase100, 14px)',
  },

  large: {
    /* Fluent large – no VS Code override beyond base */
  },

  medium: {
    /* default – no overrides needed */
  },
});

// ---------------------------------------------------------------------------
//  Icon‑only modifier
// ---------------------------------------------------------------------------

const useIconOnlyStyles = makeStyles({
  base: {
    width: '28px',
    height: '28px',
    minWidth: '28px',
    minHeight: '28px',
    padding: '6px',
  },

  small: {
    width: '22px',
    height: '22px',
    minWidth: '22px',
    minHeight: '22px',
    padding: '3px',
  },

  compact: {
    width: '15px',
    height: '15px',
    minWidth: '15px',
    minHeight: '15px',
    padding: '0',
  },
});

// ---------------------------------------------------------------------------
//  Default-size text buttons get min-width: 60px
// ---------------------------------------------------------------------------

const useMinWidthStyle = makeStyles({
  defaultSizeText: {
    minWidth: '60px',
  },
});

// ---------------------------------------------------------------------------
//  Exported hook
// ---------------------------------------------------------------------------

export type VscButtonSize = 'small' | 'medium' | 'large' | 'compact';
type ButtonAppearance = 'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent';

export interface UseButtonStylesOptions {
  appearance?: ButtonAppearance;
  size?: VscButtonSize;
  iconOnly?: boolean;
  className?: string; 
}

export function useButtonStylesHook(options: UseButtonStylesOptions): string {
  const {
    appearance = 'secondary',
    size,
    iconOnly = false,
    className,
  } = options;

  const baseClassName = useBaseClassName();
  const appearanceClasses = useAppearanceStyles();
  const sizeClasses = useSizeStyles();
  const iconOnlyClasses = useIconOnlyStyles();
  const minWidthClasses = useMinWidthStyle();

  const isDefaultSizeText = !iconOnly && (!size || size === 'medium');

  return mergeClasses(
    baseClassName,
    appearanceClasses[appearance],
    size && sizeClasses[size],
    iconOnly && iconOnlyClasses.base,
    iconOnly && size === 'small' && iconOnlyClasses.small,
    iconOnly && size === 'compact' && iconOnlyClasses.compact,
    isDefaultSizeText && minWidthClasses.defaultSizeText,
    className,
  );
}
