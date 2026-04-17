import {
  makeResetStyles,
  makeStyles,
  mergeClasses,
} from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';

// ---------------------------------------------------------------------------
//  Base – monolithic class via makeResetStyles
// ---------------------------------------------------------------------------

const useBaseClassName = makeResetStyles({
  fontFamily: vscFontFamily,

  '& .fui-Label': {
    color: 'var(--vscode-foreground)',
    fontSize: 'var(--fontSizeBase200, 12px)',
    fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
    lineHeight: 'var(--lineHeightBase200, 16px)',
    paddingBottom: '4px',
  },

  '& .fui-Label__required': {
    display: 'none',
  },

  '& .fui-Field__validationMessage': {
    fontSize: 'var(--fontSizeBase200, 12px)',
    lineHeight: 'var(--lineHeightBase200, 16px)',
    paddingTop: '4px',
  },

  '& .fui-Field__hint': {
    color: 'var(--vscode-descriptionForeground)',
    fontSize: 'var(--fontSizeBase200, 12px)',
    lineHeight: 'var(--lineHeightBase200, 16px)',
    paddingTop: '4px',
  },
});

// ---------------------------------------------------------------------------
//  Sub-element styles via makeStyles
// ---------------------------------------------------------------------------

const useElementStyles = makeStyles({
  labelRow: {
    display: 'flex',
    alignItems: 'center',
  },

  labelText: {
    color: 'var(--vscode-foreground)',
    fontSize: 'var(--fontSizeBase200, 12px)',
    fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
    lineHeight: 'var(--lineHeightBase200, 16px)',
  },

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

export interface UseFieldStylesOptions {
  className?: string;
}

export function useFieldStyles(options: UseFieldStylesOptions) {
  const { className } = options;

  const baseClassName = useBaseClassName();
  const elements = useElementStyles();

  return {
    rootClassName: mergeClasses(baseClassName, className),
    labelRowClassName: elements.labelRow,
    labelTextClassName: elements.labelText,
    requiredIndicatorClassName: elements.requiredIndicator,
    infoIconClassName: elements.infoIcon,
  };
}
