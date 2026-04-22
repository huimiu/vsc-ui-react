import {
  makeStyles,
  mergeClasses,
  typographyStyles,
} from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';

// ---------------------------------------------------------------------------
//  Base – root override styles via makeStyles
// ---------------------------------------------------------------------------

const useBaseStyles = makeStyles({
  root: {
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
      ...typographyStyles.caption2,
      paddingTop: '0',
      paddingLeft: '0',
      marginTop: '2px',
      display: 'flex',
      alignItems: 'center',
      columnGap: '2px',
    },

    '& .fui-Field__validationMessageIcon': {
      width: '12px',
      height: '12px',
      fontSize: '12px',
      lineHeight: '12px',
      flexShrink: 0,
      marginLeft: '0',
      marginRight: '0',
    },

    '& .fui-Field__validationMessageIcon::before': {
      fontSize: '12px',
      lineHeight: '12px',
    },

    '& .fui-Field__hint': {
      color: 'var(--vscode-descriptionForeground)',
      ...typographyStyles.caption2,
      paddingTop: '0',
      paddingLeft: '0',
      marginTop: '2px',
    },
  },
});

// ---------------------------------------------------------------------------
//  Sub-element styles via makeStyles
// ---------------------------------------------------------------------------

const useElementStyles = makeStyles({
  validationError: {
    '& .fui-Field__validationMessage, & .fui-Field__validationMessageIcon': {
      color:
        'var(--vscode-errorForeground, var(--vscode-inputValidation-errorForeground))',
    },
  },

  validationWarning: {
    '& .fui-Field__validationMessage, & .fui-Field__validationMessageIcon': {
      color:
        'var(--vscode-editorWarning-foreground, var(--vscode-inputValidation-warningForeground))',
    },
  },

  validationInfo: {
    '& .fui-Field__validationMessage, & .fui-Field__validationMessageIcon': {
      color:
        'var(--vscode-editorInfo-foreground, var(--vscode-inputValidation-infoForeground))',
    },
  },

  validationMessageIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12px',
    height: '12px',
    fontSize: '12px',
    lineHeight: '12px',
    flexShrink: 0,
    marginLeft: '0',
    marginRight: '0',
    '&.codicon': {
      fontSize: '12px',
      lineHeight: '12px',
    },
  },

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
  validationState?: 'error' | 'warning' | 'info';
  className?: string;
}

export function useFieldStyles(options: UseFieldStylesOptions) {
  const { validationState, className } = options;

  const base = useBaseStyles();
  const elements = useElementStyles();

  return {
    rootClassName: mergeClasses(
      base.root,
      validationState === 'error' && elements.validationError,
      validationState === 'warning' && elements.validationWarning,
      validationState === 'info' && elements.validationInfo,
      className,
    ),
    validationMessageIconClassName: elements.validationMessageIcon,
    labelRowClassName: elements.labelRow,
    labelTextClassName: elements.labelText,
    requiredIndicatorClassName: elements.requiredIndicator,
    infoIconClassName: elements.infoIcon,
  };
}
