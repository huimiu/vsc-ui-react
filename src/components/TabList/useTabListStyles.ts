import {
  makeStyles,
  mergeClasses,
} from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';

// ============================================================================
//  TAB LIST — container
// ============================================================================

const useTabListBaseStyles = makeStyles({
  root: {
  fontFamily: vscFontFamily,
  gap: '0',

  /* Horizontal indicator — inset 8px from tab edges */
  '&:not([aria-orientation="vertical"]) [role="tab"]::after': {
    position: 'absolute !important' as 'absolute',
    left: '8px !important' as '8px',
    right: '8px !important' as '8px',
    bottom: '0 !important' as '0',
    top: 'auto !important' as 'auto',
  },

  /* Vertical indicator — on the left edge */
  '&[aria-orientation="vertical"] [role="tab"][aria-selected="true"]::after': {
    content: '"" !important' as '""',
    display: 'block !important' as 'block',
    position: 'absolute !important' as 'absolute',
    left: '0 !important' as '0',
    top: '25% !important' as '25%',
    bottom: '25% !important' as '25%',
    width: '2px !important' as '2px',
    height: 'auto !important' as 'auto',
    right: 'auto !important' as 'auto',
    backgroundColor: 'var(--colorCompoundBrandStroke, #0078d4) !important' as 'inherit',
    borderRadius: 'var(--borderRadiusCircular, 9999px) !important' as '0',
    opacity: '1 !important' as '1',
    transform: 'none !important' as 'none',
  },
  },
});

const useTabListSizeStyles = makeStyles({
  small: {
    '& [role="tab"]': {
      height: '22px',
      minHeight: '22px',
      padding: '4px 6px !important' as '4px 6px',
      columnGap: '2px !important' as '2px',
    },
    '& [role="tab"]::after': {
      left: '6px !important' as '6px',
      right: '6px !important' as '6px',
    },
    '& [role="tab"] .fui-Tab__content': {
      fontSize: 'var(--fontSizeBase200, 12px)',
      fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
      lineHeight: 'var(--lineHeightBase200, 16px)',
      padding: '0 2px',
    },
    '& [role="tab"] .fui-Tab__content--reserved-space': {
      fontSize: 'var(--fontSizeBase200, 12px)',
      fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
      lineHeight: 'var(--lineHeightBase200, 16px)',
      padding: '0 2px',
    },
    '& [role="tab"] .fui-Tab__icon': {
      fontSize: '16px !important' as '16px',
      width: '16px !important' as '16px',
      height: '16px !important' as '16px',
    },
    '& [role="tab"] .fui-Tab__icon > svg': {
      width: '16px !important' as '16px',
      height: '16px !important' as '16px',
    },
    "& [role=\"tab\"][aria-selected='true'] .fui-Tab__content": {
      fontWeight: 'var(--fontWeightSemibold, 600)' as unknown as number,
    },
  },
});

// ============================================================================
//  TAB — individual tab button
// ============================================================================

const useTabBaseStyles = makeStyles({
  root: {
  fontFamily: vscFontFamily,
  height: '28px',
  minHeight: '28px',
  boxSizing: 'border-box',
  color: 'var(--vscode-tab-inactiveForeground)',
  padding: '4px 8px !important' as '4px 8px',
  borderRadius: '0',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  columnGap: '2px !important' as '2px',
  alignItems: 'center !important' as 'center',
  transition: 'none !important',

  '::after': {
    transition: 'none !important',
    animation: 'none !important',
  },

  '& .fui-Tab__content': {
    fontSize: 'var(--fontSizeBase300, 14px)',
    fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
    lineHeight: 'var(--lineHeightBase300, 20px)',
    padding: '0 2px',
  },

  '& .fui-Tab__content--reserved-space': {
    fontSize: 'var(--fontSizeBase300, 14px)',
    fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
    lineHeight: 'var(--lineHeightBase300, 20px)',
    padding: '0 2px',
  },

  '& .fui-Tab__icon': {
    fontSize: '20px !important' as '20px',
    width: '20px !important' as '20px',
    height: '20px !important' as '20px',
  },

  '& .fui-Tab__icon > svg': {
    width: '20px !important' as '20px',
    height: '20px !important' as '20px',
  },

  ':hover': {
    color: 'var(--vscode-tab-activeForeground)',
  },

  ':hover .fui-Tab__icon': {
    color: 'var(--vscode-tab-activeForeground) !important' as 'inherit',
  },

  "&[aria-selected='true']": {
    color: 'var(--vscode-tab-activeForeground)',
  },

  "&[aria-selected='true'] .fui-Tab__content": {
    fontWeight: 'var(--fontWeightSemibold, 600)' as unknown as number,
  },

  "&[aria-disabled='true'], &:disabled": {
    cursor: 'default',
    pointerEvents: 'none',
  },

  "&[aria-disabled='true'] .fui-Tab__content, &:disabled .fui-Tab__content": {
    color: 'var(--vscode-disabledForeground) !important' as 'inherit',
  },

  "&[aria-disabled='true'] .fui-Tab__content--reserved-space, &:disabled .fui-Tab__content--reserved-space": {
    color: 'var(--vscode-disabledForeground) !important' as 'inherit',
  },

  "&[aria-disabled='true'] .fui-Tab__icon, &:disabled .fui-Tab__icon": {
    color: 'var(--vscode-disabledForeground) !important' as 'inherit',
  },
  },
});

// ============================================================================
//  Exported hooks
// ============================================================================

export function useVscTabListStyles(options: {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}): string {
  const { size, className } = options;

  const base = useTabListBaseStyles();
  const sizeClasses = useTabListSizeStyles();

  return mergeClasses(
    base.root,
    size === 'small' && sizeClasses.small,
    className,
  );
}

export function useVscTabStyles(className?: string): string {
  const base = useTabBaseStyles();
  return mergeClasses(base.root, className);
}
