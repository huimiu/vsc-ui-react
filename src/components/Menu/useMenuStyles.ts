import { makeStyles, mergeClasses } from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';

// ---------------------------------------------------------------------------
//  Shared constants
// ---------------------------------------------------------------------------

const chevronRightSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.618 4.357-4.358z'/%3E%3C/svg%3E")`;

// ============================================================================
//  MENU POPOVER
// ============================================================================

const useMenuPopoverBaseStyles = makeStyles({
  root: {
    fontFamily: vscFontFamily,
    backgroundColor: 'var(--vscode-menu-background)',
    border: '1px solid var(--vscode-menu-border)',
    borderRadius: '5px',
    boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.36)',
    boxSizing: 'border-box',
    padding: '4px 0',
    animation: 'none',
    transition: 'none',
  },
});

// ============================================================================
//  MENU LIST
// ============================================================================

const useMenuListBaseStyles = makeStyles({
  root: {
    fontFamily: vscFontFamily,
    backgroundColor: 'transparent',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
  },
});

// ============================================================================
//  MENU ITEM — base (shared by MenuItem, MenuItemCheckbox, MenuItemRadio)
// ============================================================================

const useMenuItemBaseStyles = makeStyles({
  root: {
    margin: '0 2px',
    padding: '6px 10px',
    minHeight: '28px',
    gap: '4px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: 'transparent',
    color: 'var(--vscode-menu-foreground)',
    transition: 'none',
    cursor: 'pointer',

    '::after': {
      display: 'none' as 'none',
    },

    '& .fui-MenuItem__icon': {
      width: '16px',
      height: '16px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--vscode-menu-foreground)',
    },

    '& .fui-MenuItem__content': {
      fontSize: 'var(--fontSizeBase200, 12px)',
      fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
      lineHeight: 'var(--lineHeightBase200, 16px)',
      color: 'var(--vscode-menu-foreground)',
      flex: '1 0 0',
      minWidth: '0',
    },

    '& .fui-MenuItem__secondaryContent': {
      fontSize: 'var(--fontSizeBase200, 12px)',
      fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
      lineHeight: 'var(--lineHeightBase200, 16px)',
      color: 'var(--vscode-descriptionForeground)',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      marginLeft: 'auto',
      paddingLeft: '16px',
    },

    '& .fui-MenuItem__submenuIndicator': {
      width: '16px',
      height: '16px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--vscode-menu-foreground)',
      fontSize: 0,
    },

    '& .fui-MenuItem__submenuIndicator svg': {
      display: 'none' as 'none',
    },

    '& .fui-MenuItem__submenuIndicator::after': {
      content: '""',
      display: 'block',
      width: '16px',
      height: '16px',
      backgroundColor: 'currentColor',
      WebkitMaskImage: chevronRightSvg,
      maskImage: chevronRightSvg,
      WebkitMaskSize: '16px 16px',
      maskSize: '16px 16px',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
    },

    '&:hover, &[data-focused="true"], &:focus': {
      backgroundColor: 'var(--vscode-menu-selectionBackground)',
      outline: 'none',
    },

    '&:hover .fui-MenuItem__content, &[data-focused="true"] .fui-MenuItem__content, &:focus .fui-MenuItem__content':
      {
        color: 'var(--vscode-menu-selectionForeground)',
      },

    '&:hover .fui-MenuItem__secondaryContent, &[data-focused="true"] .fui-MenuItem__secondaryContent, &:focus .fui-MenuItem__secondaryContent':
      {
        color: 'var(--vscode-menu-selectionForeground)',
      },

    '&:hover .fui-MenuItem__icon, &[data-focused="true"] .fui-MenuItem__icon, &:focus .fui-MenuItem__icon':
      {
        color: 'var(--vscode-menu-selectionForeground)',
      },

    '&:hover .fui-MenuItem__submenuIndicator, &[data-focused="true"] .fui-MenuItem__submenuIndicator, &:focus .fui-MenuItem__submenuIndicator':
      {
        color: 'var(--vscode-menu-selectionForeground)',
      },
  },
});

// ---------------------------------------------------------------------------
//  MenuItem variants
// ---------------------------------------------------------------------------

const useMenuItemVariants = makeStyles({
  disabled: {
    opacity: 0.5,
    cursor: 'default',
    pointerEvents: 'none',
  },

  accent: {
    '& .fui-MenuItem__content': {
      color: 'var(--vscode-textLink-foreground)',
    },
    '&:hover .fui-MenuItem__content, &[data-focused="true"] .fui-MenuItem__content, &:focus .fui-MenuItem__content':
      {
        color: 'var(--vscode-menu-selectionForeground)',
      },
  },

  indented: {
    '& .fui-MenuItem__content': {
      paddingLeft: '20px',
    },
  },
});

// ---------------------------------------------------------------------------
//  MenuItemCheckbox variants
// ---------------------------------------------------------------------------

const useCheckboxStyles = makeStyles({
  root: {
    '& .fui-MenuItem__icon': {
      color: 'var(--vscode-menu-foreground)',
      opacity: 0,
    },
    "&[aria-checked='true'] .fui-MenuItem__icon": {
      opacity: 1,
      color: 'var(--vscode-menu-foreground)',
    },
    "&[aria-checked='true']:hover .fui-MenuItem__icon, &[aria-checked='true'][data-focused='true'] .fui-MenuItem__icon, &[aria-checked='true']:focus .fui-MenuItem__icon":
      {
        color: 'var(--vscode-menu-selectionForeground)',
      },
  },
});

// ---------------------------------------------------------------------------
//  MenuItemRadio variants
// ---------------------------------------------------------------------------

const useRadioStyles = makeStyles({
  root: {
    '& .fui-MenuItem__icon': {
      color: 'var(--vscode-menu-foreground)',
      opacity: 0,
    },
    "&[aria-checked='true'] .fui-MenuItem__icon": {
      opacity: 1,
      color: 'var(--vscode-menu-foreground)',
    },
    "&[aria-checked='true']:hover .fui-MenuItem__icon, &[aria-checked='true'][data-focused='true'] .fui-MenuItem__icon, &[aria-checked='true']:focus .fui-MenuItem__icon":
      {
        color: 'var(--vscode-menu-selectionForeground)',
      },
  },
});

// ============================================================================
//  MENU DIVIDER
// ============================================================================

const useMenuDividerBaseStyles = makeStyles({
  root: {
    margin: '2px 8px',
    height: '1px',
    minHeight: '1px',
    backgroundColor: 'var(--vscode-menu-separatorBackground)',
    border: 'none',
    flexShrink: 0,
  },
});

// ============================================================================
//  MENU GROUP
// ============================================================================

const useMenuGroupBaseStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',

    '& + &::before': {
      content: '""',
      display: 'block',
      height: '1px',
      backgroundColor: 'var(--vscode-menu-separatorBackground)',
      margin: '2px 8px',
    },
  },
});

// ============================================================================
//  MENU GROUP HEADER
// ============================================================================

const useMenuGroupHeaderBaseStyles = makeStyles({
  root: {
    margin: '0 2px',
    padding: '6px 10px',
    minHeight: '28px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'var(--fontSizeBase200, 12px)',
    fontWeight: 'var(--fontWeightSemibold, 600)' as unknown as number,
    lineHeight: 'var(--lineHeightBase200, 16px)',
    color: 'var(--vscode-menu-foreground)',
  },
});

// ============================================================================
//  Exported hooks
// ============================================================================

export function useVscMenuPopoverStyles(className?: string): string {
  const base = useMenuPopoverBaseStyles();
  return mergeClasses(base.root, className);
}

export function useVscMenuListStyles(className?: string): string {
  const base = useMenuListBaseStyles();
  return mergeClasses(base.root, className);
}

export interface UseVscMenuItemStylesOptions {
  accent?: boolean;
  indented?: boolean;
  disabled?: boolean;
  className?: string;
}

export function useVscMenuItemStyles(
  options: UseVscMenuItemStylesOptions,
): string {
  const { accent, indented, disabled, className } = options;

  const base = useMenuItemBaseStyles();
  const variants = useMenuItemVariants();

  return mergeClasses(
    base.root,
    accent && variants.accent,
    indented && variants.indented,
    disabled && variants.disabled,
    className,
  );
}

export function useVscMenuItemCheckboxStyles(options: {
  disabled?: boolean;
  className?: string;
}): string {
  const { disabled, className } = options;

  const base = useMenuItemBaseStyles();
  const variants = useMenuItemVariants();
  const checkbox = useCheckboxStyles();

  return mergeClasses(
    base.root,
    checkbox.root,
    disabled && variants.disabled,
    className,
  );
}

export function useVscMenuItemRadioStyles(options: {
  disabled?: boolean;
  className?: string;
}): string {
  const { disabled, className } = options;

  const base = useMenuItemBaseStyles();
  const variants = useMenuItemVariants();
  const radio = useRadioStyles();

  return mergeClasses(
    base.root,
    radio.root,
    disabled && variants.disabled,
    className,
  );
}

export function useVscMenuDividerStyles(className?: string): string {
  const base = useMenuDividerBaseStyles();
  return mergeClasses(base.root, className);
}

export function useVscMenuGroupStyles(className?: string): string {
  const base = useMenuGroupBaseStyles();
  return mergeClasses(base.root, className);
}

export function useVscMenuGroupHeaderStyles(className?: string): string {
  const base = useMenuGroupHeaderBaseStyles();
  return mergeClasses(base.root, className);
}
