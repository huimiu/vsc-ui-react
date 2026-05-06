import { makeStyles, mergeClasses } from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';

// ---------------------------------------------------------------------------
//  Base – root override styles via makeStyles
// ---------------------------------------------------------------------------

const useBaseStyles = makeStyles({
  root: {
    fontFamily: vscFontFamily,
    color: 'var(--vscode-foreground)',
    cursor: 'default',
    display: 'inline-flex',
    alignItems: 'center',
    columnGap: '2px',
    transition: 'none',
  },
});

// ---------------------------------------------------------------------------
//  Size permutations
// ---------------------------------------------------------------------------

const useSizeStyles = makeStyles({
  small: {
    fontSize: '11px',
    lineHeight: '14px',
  },
  medium: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  large: {
    fontSize: '14px',
    lineHeight: '20px',
  },
});

// ---------------------------------------------------------------------------
//  Weight permutations
// ---------------------------------------------------------------------------

const useWeightStyles = makeStyles({
  regular: {
    fontWeight: 400,
  },
  semibold: {
    fontWeight: 600,
  },
});

// ---------------------------------------------------------------------------
//  State permutations
// ---------------------------------------------------------------------------

const useStateStyles = makeStyles({
  disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
});

// ---------------------------------------------------------------------------
//  Sub-element styles
// ---------------------------------------------------------------------------

const useElementStyles = makeStyles({
  requiredIndicator: {
    color: 'var(--vscode-errorForeground)',
    marginLeft: '2px',
  },
  infoIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '4px',
    color: 'var(--vscode-descriptionForeground)',
    cursor: 'help',
    '& > svg': {
      width: '14px',
      height: '14px',
    },
  },
});

// ---------------------------------------------------------------------------
//  Exported hook
// ---------------------------------------------------------------------------

export interface UseLabelStylesOptions {
  size?: 'small' | 'medium' | 'large';
  weight?: 'regular' | 'semibold';
  disabled?: boolean;
  className?: string;
}

export function useLabelStyles(options: UseLabelStylesOptions) {
  const { size = 'medium', weight = 'regular', disabled, className } = options;

  const base = useBaseStyles();
  const sizes = useSizeStyles();
  const weights = useWeightStyles();
  const states = useStateStyles();
  const elements = useElementStyles();

  const rootClassName = mergeClasses(
    base.root,
    sizes[size],
    weights[weight],
    disabled && states.disabled,
    className,
  );

  return {
    rootClassName,
    requiredIndicatorClassName: elements.requiredIndicator,
    infoIconClassName: elements.infoIcon,
  };
}
