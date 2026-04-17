import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components';

const vscFontFamily =
  'var(--vscode-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif)';

// ---------------------------------------------------------------------------
//  Base – shared structural styles for MenuButton
// ---------------------------------------------------------------------------

const useBaseStyles = makeStyles({
  root: {
  fontFamily: vscFontFamily,
  height: '28px',
  minHeight: '28px',
  paddingTop: '4px',
  paddingRight: '8px',
  paddingBottom: '4px',
  paddingLeft: '8px',
  borderRadius: '4px',
  fontSize: 'var(--fontSizeBase300, 14px)',
  fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
  lineHeight: 'var(--lineHeightBase300, 20px)',
  gap: '4px',
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
  },
});

// ---------------------------------------------------------------------------
//  Appearance permutations
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
});

// ---------------------------------------------------------------------------
//  Icon‑only modifier
// ---------------------------------------------------------------------------

const useIconOnlyStyles = makeStyles({
  base: {
    width: 'auto',
    minWidth: '28px',
    height: '28px',
    minHeight: '28px',
    ...shorthands.padding('6px'),
    gap: '2px',
  },

  small: {
    minWidth: '22px',
    height: '22px',
    minHeight: '22px',
    ...shorthands.padding('4px'),
  },

  compact: {
    minWidth: '15px',
    height: '15px',
    minHeight: '15px',
    paddingTop: '1.5px',
    paddingRight: '1.5px',
    paddingBottom: '1.5px',
    paddingLeft: '1.5px',
  },
});

// ---------------------------------------------------------------------------
//  Exported hook
// ---------------------------------------------------------------------------

type MenuButtonAppearance = 'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent';
type MenuButtonSize = 'small' | 'medium' | 'large' | 'compact';

export interface UseMenuButtonStylesOptions {
  appearance?: MenuButtonAppearance;
  size?: MenuButtonSize;
  iconOnly?: boolean;
  className?: string;
}

export function useMenuButtonStylesHook(options: UseMenuButtonStylesOptions): string {
  const {
    appearance = 'secondary',
    size,
    iconOnly = false,
    className,
  } = options;

  const base = useBaseStyles();
  const appearanceClasses = useAppearanceStyles();
  const sizeClasses = useSizeStyles();
  const iconOnlyClasses = useIconOnlyStyles();

  return mergeClasses(
    base.root,
    appearanceClasses[appearance],
    (size === 'small' || size === 'compact') && sizeClasses[size],
    iconOnly && iconOnlyClasses.base,
    iconOnly && size === 'small' && iconOnlyClasses.small,
    iconOnly && size === 'compact' && iconOnlyClasses.compact,
    className,
  );
}
