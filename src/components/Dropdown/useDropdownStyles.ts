import {
  makeResetStyles,
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components';

import { vscFontFamily } from '../../styles/tokens';
import type { VscValidationState } from '../../types';
import type { VscSelectionIndicator } from './VscDropdown';

// ---------------------------------------------------------------------------
//  Shared constants
// ---------------------------------------------------------------------------

const chevronDownSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z'/%3E%3C/svg%3E")`;

// ============================================================================
//  DROPDOWN — trigger
// ============================================================================

const useDropdownBaseClassName = makeResetStyles({
  fontFamily: vscFontFamily,
  height: '26px',
  minHeight: '26px',
  borderRadius: '2px',
  border: '1px solid var(--vscode-dropdown-border)',
  boxShadow: 'none',
  boxSizing: 'border-box',
  backgroundColor: 'var(--vscode-dropdown-background)',
  transition: 'none !important',

  '::after': {
    display: 'none !important' as 'none',
  },

  '& .fui-Dropdown__button': {
    padding: '4px 6px',
    fontSize: 'var(--fontSizeBase200, 12px)',
    fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
    lineHeight: 'var(--lineHeightBase200, 16px)',
    color: 'var(--vscode-dropdown-foreground)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    minHeight: 'unset',
  },

  '& .fui-Dropdown__button[data-placeholder]': {
    color: 'var(--vscode-input-placeholderForeground)',
  },

  '& .fui-Dropdown__expandIcon': {
    fontSize: '16px',
    width: '16px',
    height: '16px',
    color: 'var(--vscode-dropdown-foreground)',
    padding: '0 4px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .fui-Dropdown__expandIcon > svg': {
    display: 'none',
  },

  '& .fui-Dropdown__expandIcon::after': {
    content: '""',
    display: 'block',
    width: '16px',
    height: '16px',
    backgroundColor: 'currentColor',
    WebkitMaskImage: chevronDownSvg,
    maskImage: chevronDownSvg,
    WebkitMaskSize: '16px 16px',
    maskSize: '16px 16px',
  },

  ':hover': {
    borderColor: 'var(--vscode-dropdown-border)',
  },

  ':focus-within': {
    borderColor: 'var(--vscode-focusBorder)',
    outline: 'none',
  },
});

const useDropdownStyles = makeStyles({
  disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  readonly: {
    ...shorthands.borderColor('var(--vscode-dropdown-border)'),
    backgroundColor: 'transparent',
    '& .fui-Dropdown__button': {
      cursor: 'default',
    },
    '& .fui-Dropdown__expandIcon': {
      display: 'none' as 'none',
    },
  },

  small: {
    height: '24px',
    minHeight: '24px',
    '& .fui-Dropdown__button': {
      ...shorthands.padding('2px', '4px'),
      fontSize: 'var(--fontSizeBase200, 12px)',
      lineHeight: 'var(--lineHeightBase200, 16px)',
    },
    '& .fui-Dropdown__expandIcon': {
      fontSize: '14px',
      width: '14px',
      height: '14px',
    },
    '& .fui-Dropdown__expandIcon::after': {
      width: '14px',
      height: '14px',
      WebkitMaskSize: '14px 14px',
      maskSize: '14px 14px',
    },
  },

  large: {
    height: '28px',
    minHeight: '28px',
    '& .fui-Dropdown__button': {
      ...shorthands.padding('5px', '8px'),
    },
  },

  withDescription: {
    '& .fui-Dropdown__button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      flex: '1',
      minWidth: '0',
      gap: '0',
    },
  },

  error: {
    ...shorthands.borderColor('var(--vscode-inputValidation-errorBorder)'),
    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-inputValidation-errorBorder)'),
    },
  },

  warning: {
    ...shorthands.borderColor('var(--vscode-inputValidation-warningBorder)'),
    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-inputValidation-warningBorder)'),
    },
  },

  info: {
    ...shorthands.borderColor('var(--vscode-inputValidation-infoBorder)'),
    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-inputValidation-infoBorder)'),
    },
  },
});

// ============================================================================
//  COMBOBOX — trigger (editable input)
// ============================================================================

const useComboboxBaseClassName = makeResetStyles({
  fontFamily: vscFontFamily,
  height: '26px',
  minHeight: '26px',
  borderRadius: '2px',
  border: '1px solid var(--vscode-dropdown-border)',
  boxShadow: 'none',
  boxSizing: 'border-box',
  backgroundColor: 'var(--vscode-dropdown-background)',
  transition: 'none !important',

  '::after': {
    display: 'none !important' as 'none',
  },

  '& .fui-Combobox__input': {
    padding: '4px 6px',
    fontSize: 'var(--fontSizeBase200, 12px)',
    fontWeight: 'var(--fontWeightRegular, 400)' as unknown as number,
    lineHeight: 'var(--lineHeightBase200, 16px)',
    color: 'var(--vscode-dropdown-foreground)',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
  },

  '& .fui-Combobox__input::placeholder': {
    color: 'var(--vscode-input-placeholderForeground)',
    opacity: 1,
  },

  '& .fui-Combobox__expandIcon': {
    fontSize: '16px',
    width: '16px',
    height: '16px',
    color: 'var(--vscode-dropdown-foreground)',
    padding: '0 4px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .fui-Combobox__expandIcon > svg': {
    display: 'none',
  },

  '& .fui-Combobox__expandIcon::after': {
    content: '""',
    display: 'block',
    width: '16px',
    height: '16px',
    backgroundColor: 'currentColor',
    WebkitMaskImage: chevronDownSvg,
    maskImage: chevronDownSvg,
    WebkitMaskSize: '16px 16px',
    maskSize: '16px 16px',
  },

  ':hover': {
    borderColor: 'var(--vscode-dropdown-border)',
  },

  ':focus-within': {
    borderColor: 'var(--vscode-focusBorder)',
    outline: 'none',
  },
});

const useComboboxStyles = makeStyles({
  disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  readonly: {
    ...shorthands.borderColor('var(--vscode-dropdown-border)'),
    backgroundColor: 'transparent',
    '& .fui-Combobox__input': {
      cursor: 'default',
    },
    '& .fui-Combobox__expandIcon': {
      display: 'none' as 'none',
    },
  },

  small: {
    height: '24px',
    minHeight: '24px',
    '& .fui-Combobox__input': {
      ...shorthands.padding('2px', '4px'),
    },
    '& .fui-Combobox__expandIcon': {
      fontSize: '14px',
      width: '14px',
      height: '14px',
    },
    '& .fui-Combobox__expandIcon::after': {
      width: '14px',
      height: '14px',
      WebkitMaskSize: '14px 14px',
      maskSize: '14px 14px',
    },
  },

  large: {
    height: '28px',
    minHeight: '28px',
    '& .fui-Combobox__input': {
      ...shorthands.padding('5px', '8px'),
    },
  },

  error: {
    ...shorthands.borderColor('var(--vscode-inputValidation-errorBorder)'),
    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-inputValidation-errorBorder)'),
    },
  },

  warning: {
    ...shorthands.borderColor('var(--vscode-inputValidation-warningBorder)'),
    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-inputValidation-warningBorder)'),
    },
  },

  info: {
    ...shorthands.borderColor('var(--vscode-inputValidation-infoBorder)'),
    ':focus-within': {
      ...shorthands.borderColor('var(--vscode-inputValidation-infoBorder)'),
    },
  },
});

// ============================================================================
//  LISTBOX — popup container (shared by Dropdown + Combobox)
// ============================================================================

const useListboxBaseClassName = makeResetStyles({
  fontFamily: vscFontFamily,
  backgroundColor: 'var(--vscode-dropdown-listBackground)',
  border: '1px solid var(--vscode-dropdown-border)',
  borderRadius: '2px',
  boxShadow: 'none',
  boxSizing: 'border-box',
  padding: '2px',
  animation: 'none !important',
});

const useListboxStyles = makeStyles({
  selectionIndicatorNone: {
    '& .fui-Option__checkIcon': {
      display: 'none' as 'none',
    },
  },
});

// ============================================================================
//  OPTION — individual list item
// ============================================================================

const useOptionBaseClassName = makeResetStyles({
  minHeight: '22px',
  padding: '2px 8px',
  fontSize: 'var(--fontSizeBase200, 12px)',
  lineHeight: 'var(--lineHeightBase200, 16px)',
  color: 'var(--vscode-dropdown-foreground)',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  borderRadius: '2px',
  transition: 'none !important',
  cursor: 'pointer',

  "&:hover:not([aria-selected='true']):not(.fui-Option--selected)": {
    backgroundColor: 'var(--vscode-list-hoverBackground)',
    color: 'var(--vscode-list-hoverForeground, var(--vscode-dropdown-foreground))',
  },

  '&:focus, &:focus-visible, &:focus-within': {
    backgroundColor: 'var(--vscode-list-activeSelectionBackground, var(--vscode-list-hoverBackground))',
    color: 'var(--vscode-list-activeSelectionForeground, var(--vscode-dropdown-foreground))',
  },

  "&[aria-selected='true'], &.fui-Option--selected": {
    backgroundColor: 'var(--vscode-list-activeSelectionBackground, var(--vscode-list-hoverBackground))',
    color: 'var(--vscode-list-activeSelectionForeground, var(--vscode-dropdown-foreground))',
  },

  '& .fui-Option__checkIcon': {
    color: 'var(--vscode-dropdown-foreground)',
    fontSize: '14px',
    width: '14px',
    height: '14px',
    marginRight: '4px',
  },
});

const useOptionStyles = makeStyles({
  disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  icon: {
    width: '16px',
    height: '16px',
    marginRight: '6px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'inherit',
    flexShrink: 0,
    '& > svg': {
      width: '16px',
      height: '16px',
    },
    '& .codicon': {
      fontSize: '16px',
      lineHeight: '16px',
    },
  },

  label: {
    flex: '0 1 auto',
    minWidth: '0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  detail: {
    color: 'var(--vscode-descriptionForeground)',
    opacity: 0.7,
    fontSize: 'var(--fontSizeBase200, 12px)',
    lineHeight: 'var(--lineHeightBase200, 16px)',
    paddingLeft: '6px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  description: {
    color: 'var(--vscode-descriptionForeground)',
    opacity: 0.7,
    fontSize: 'var(--fontSizeBase200, 12px)',
    lineHeight: 'var(--lineHeightBase200, 16px)',
    display: 'block',
    marginTop: '1px',
    width: '100%',
    flexBasis: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  descriptionWithIcon: {
    flexBasis: 'calc(100% - 22px)',
    width: 'calc(100% - 22px)',
    marginLeft: '22px',
  },
});

// ============================================================================
//  OPTION GROUP
// ============================================================================

const useOptionGroupBaseClassName = makeResetStyles({
  '& .fui-OptionGroup__label': {
    fontSize: 'var(--fontSizeBase200, 12px)',
    lineHeight: 'var(--lineHeightBase200, 16px)',
    fontWeight: 600 as unknown as number,
    color: 'var(--vscode-descriptionForeground)',
    padding: '4px 6px',
  },

  '& + &::before': {
    content: '""',
    display: 'block',
    height: '1px',
    backgroundColor: 'var(--vscode-menu-separatorBackground)',
    margin: '2px 0',
  },
});

// ============================================================================
//  TRIGGER LABEL / DESCRIPTION
// ============================================================================

const useTriggerLabelBaseClassName = makeResetStyles({
  color: 'inherit',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flex: '0 0 auto',
  maxWidth: '100%',
});

const useTriggerDescriptionBaseClassName = makeResetStyles({
  color: 'var(--vscode-descriptionForeground)',
  opacity: 0.7,
  fontSize: '0.9em',
  whiteSpace: 'nowrap',
  marginLeft: '0.5em',
  flex: '0 0 auto',
});

// ============================================================================
//  OPTION SEPARATOR
// ============================================================================

const useOptionSeparatorBaseClassName = makeResetStyles({
  position: 'relative',
  cursor: 'default',
  pointerEvents: 'none',
  boxSizing: 'border-box',

  '::after': {
    content: '""',
    position: 'absolute',
    left: '0',
    right: '0',
    top: '50%',
    height: '1px',
    backgroundColor: 'var(--vscode-menu-separatorBackground)',
  },
});

// ============================================================================
//  Exported hooks
// ============================================================================

export interface UseVscDropdownStylesOptions {
  validationState?: VscValidationState;
  readOnly?: boolean;
  withDescription?: boolean;
  selectionIndicator?: VscSelectionIndicator;
  size?: string;
  disabled?: boolean;
  className?: string;
  listboxClassName?: string;
}

export function useVscDropdownStyles(options: UseVscDropdownStylesOptions) {
  const {
    validationState,
    readOnly,
    withDescription,
    selectionIndicator = 'none',
    size,
    disabled,
    className,
    listboxClassName,
  } = options;

  const baseClassName = useDropdownBaseClassName();
  const classes = useDropdownStyles();
  const listboxBase = useListboxBaseClassName();
  const listboxClasses = useListboxStyles();

  return {
    rootClassName: mergeClasses(
      baseClassName,
      size === 'small' && classes.small,
      size === 'large' && classes.large,
      validationState === 'error' && classes.error,
      validationState === 'warning' && classes.warning,
      validationState === 'info' && classes.info,
      disabled && classes.disabled,
      readOnly && classes.readonly,
      withDescription && classes.withDescription,
      className,
    ),
    listboxClassName: mergeClasses(
      listboxBase,
      selectionIndicator === 'none' && listboxClasses.selectionIndicatorNone,
      listboxClassName,
    ),
  };
}

export interface UseVscComboboxStylesOptions {
  validationState?: VscValidationState;
  readOnly?: boolean;
  selectionIndicator?: VscSelectionIndicator;
  size?: string;
  disabled?: boolean;
  className?: string;
  listboxClassName?: string;
}

export function useVscComboboxStyles(options: UseVscComboboxStylesOptions) {
  const {
    validationState,
    readOnly,
    selectionIndicator = 'none',
    size,
    disabled,
    className,
    listboxClassName,
  } = options;

  const baseClassName = useComboboxBaseClassName();
  const classes = useComboboxStyles();
  const listboxBase = useListboxBaseClassName();
  const listboxClasses = useListboxStyles();

  return {
    rootClassName: mergeClasses(
      baseClassName,
      size === 'small' && classes.small,
      size === 'large' && classes.large,
      validationState === 'error' && classes.error,
      validationState === 'warning' && classes.warning,
      validationState === 'info' && classes.info,
      disabled && classes.disabled,
      readOnly && classes.readonly,
      className,
    ),
    listboxClassName: mergeClasses(
      listboxBase,
      selectionIndicator === 'none' && listboxClasses.selectionIndicatorNone,
      listboxClassName,
    ),
  };
}

export function useVscListboxStyles(options: {
  selectionIndicator?: VscSelectionIndicator;
  className?: string;
}): string {
  const { selectionIndicator = 'none', className } = options;

  const baseClassName = useListboxBaseClassName();
  const classes = useListboxStyles();

  return mergeClasses(
    baseClassName,
    selectionIndicator === 'none' && classes.selectionIndicatorNone,
    className,
  );
}

export interface UseVscOptionStylesOptions {
  icon?: boolean;
  disabled?: boolean;
  hasDescription?: boolean;
  hasIcon?: boolean;
  className?: string;
}

export function useVscOptionStyles(options: UseVscOptionStylesOptions) {
  const { disabled, className } = options;

  const baseClassName = useOptionBaseClassName();
  const classes = useOptionStyles();

  return {
    rootClassName: mergeClasses(
      baseClassName,
      disabled && classes.disabled,
      className,
    ),
    iconClassName: classes.icon,
    labelClassName: classes.label,
    detailClassName: classes.detail,
    descriptionClassName: classes.description,
    descriptionWithIconClassName: classes.descriptionWithIcon,
  };
}

export function useVscOptionGroupStyles(className?: string): string {
  const baseClassName = useOptionGroupBaseClassName();
  return mergeClasses(baseClassName, className);
}

export function useVscTriggerLabelStyles(className?: string): string {
  const baseClassName = useTriggerLabelBaseClassName();
  return mergeClasses(baseClassName, className);
}

export function useVscTriggerDescriptionStyles(className?: string): string {
  const baseClassName = useTriggerDescriptionBaseClassName();
  return mergeClasses(baseClassName, className);
}

export function useVscOptionSeparatorStyles(className?: string): string {
  const baseClassName = useOptionSeparatorBaseClassName();
  return mergeClasses(baseClassName, className);
}
