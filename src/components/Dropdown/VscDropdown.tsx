import {
  Dropdown,
  type DropdownProps,
  Combobox,
  type ComboboxProps,
  Listbox,
  type ListboxProps,
  Option,
  type OptionProps,
  OptionGroup,
  type OptionGroupProps,
} from '@fluentui/react-components';
import clsx from 'clsx';
import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';

import type { VscValidationState } from '../../types';
import styles from './dropdown.module.scss';

export type VscSelectionIndicator = 'none' | 'checkmark';

/* -------------------------------------------------------------------------- */
/*  Shared maps                                                               */
/* -------------------------------------------------------------------------- */

const sizeClassMap: Record<string, string | undefined> = {
  small: styles.vscSmall,
  medium: undefined,
  large: styles.vscLarge,
};

const validationClassMap: Record<VscValidationState, string> = {
  error: styles.vscError,
  warning: styles.vscWarning,
  info: styles.vscInfo,
};

const selectionIndicatorClassMap: Record<
  VscSelectionIndicator,
  string | undefined
> = {
  none: styles.vscSelectionIndicatorNone,
  checkmark: undefined,
};

/** Normalise Fluent's `listbox` slot (can be a string shorthand) into an object. */
function resolveListbox(listbox: unknown): Record<string, unknown> {
  return typeof listbox === 'object' && listbox !== null
    ? (listbox as Record<string, unknown>)
    : {};
}

/* -------------------------------------------------------------------------- */
/*  Trigger description helpers                                               */
/* -------------------------------------------------------------------------- */

/** Label portion inside a dropdown trigger with description. */
export type VscTriggerLabelProps = HTMLAttributes<HTMLSpanElement>;

export const VscTriggerLabel = ({
  className,
  ...rest
}: VscTriggerLabelProps) => (
  <span className={clsx(styles.vscTriggerLabel, className)} {...rest} />
);
VscTriggerLabel.displayName = 'VscTriggerLabel';

/** Secondary description beside the label in a dropdown trigger. */
export type VscTriggerDescriptionProps = HTMLAttributes<HTMLSpanElement>;

export const VscTriggerDescription = ({
  className,
  ...rest
}: VscTriggerDescriptionProps) => (
  <span className={clsx(styles.vscTriggerDescription, className)} {...rest} />
);
VscTriggerDescription.displayName = 'VscTriggerDescription';

/* -------------------------------------------------------------------------- */
/*  Dropdown                                                                  */
/* -------------------------------------------------------------------------- */

export type VscDropdownProps = DropdownProps & {
  validationState?: VscValidationState;
  readOnly?: boolean;
  /** Enable label+description layout in the collapsed trigger. */
  withDescription?: boolean;
  /** Controls whether options reserve space for a leading selection checkmark. */
  selectionIndicator?: VscSelectionIndicator;
};

export const VscDropdown = forwardRef<HTMLButtonElement, VscDropdownProps>(
  (
    {
      validationState,
      readOnly,
      withDescription,
      selectionIndicator = 'none',
      size,
      className,
      disabled,
      listbox,
      ...rest
    },
    ref,
  ) => {
    const listboxObj = resolveListbox(listbox);
    return (
      <Dropdown
        ref={ref}
        size={size}
        disabled={disabled}
        className={clsx(
          styles.vscDropdown,
          size && sizeClassMap[size],
          validationState && validationClassMap[validationState],
          disabled && styles.vscDisabled,
          readOnly && styles.vscReadonly,
          withDescription && styles.vscWithDescription,
          className,
        )}
        listbox={{
          ...listboxObj,
          className: clsx(
            styles.vscListbox,
            selectionIndicatorClassMap[selectionIndicator],
            listboxObj.className as string | undefined,
          ),
        }}
        {...rest}
      />
    );
  },
);
VscDropdown.displayName = 'VscDropdown';

/* -------------------------------------------------------------------------- */
/*  Combobox                                                                  */
/* -------------------------------------------------------------------------- */

export type VscComboboxProps = ComboboxProps & {
  validationState?: VscValidationState;
  readOnly?: boolean;
  /** Controls whether options reserve space for a leading selection checkmark. */
  selectionIndicator?: VscSelectionIndicator;
};

export const VscCombobox = forwardRef<HTMLInputElement, VscComboboxProps>(
  (
    {
      validationState,
      readOnly,
      selectionIndicator = 'none',
      size,
      className,
      disabled,
      listbox,
      ...rest
    },
    ref,
  ) => {
    const listboxObj = resolveListbox(listbox);
    return (
      <Combobox
        ref={ref}
        size={size}
        disabled={disabled}
        className={clsx(
          styles.vscCombobox,
          size && sizeClassMap[size],
          validationState && validationClassMap[validationState],
          disabled && styles.vscDisabled,
          readOnly && styles.vscReadonly,
          className,
        )}
        listbox={{
          ...listboxObj,
          className: clsx(
            styles.vscListbox,
            selectionIndicatorClassMap[selectionIndicator],
            listboxObj.className as string | undefined,
          ),
        }}
        {...rest}
      />
    );
  },
);
VscCombobox.displayName = 'VscCombobox';

/* -------------------------------------------------------------------------- */
/*  Listbox (standalone)                                                      */
/* -------------------------------------------------------------------------- */

export type VscListboxProps = ListboxProps & {
  /** Controls whether options reserve space for a leading selection checkmark. */
  selectionIndicator?: VscSelectionIndicator;
};

export const VscListbox = forwardRef<HTMLDivElement, VscListboxProps>(
  ({ className, selectionIndicator = 'none', ...rest }, ref) => (
    <Listbox
      ref={ref}
      className={clsx(
        styles.vscListbox,
        selectionIndicatorClassMap[selectionIndicator],
        className,
      )}
      {...rest}
    />
  ),
);
VscListbox.displayName = 'VscListbox';

/* -------------------------------------------------------------------------- */
/*  Option                                                                    */
/* -------------------------------------------------------------------------- */

export type VscOptionProps = OptionProps & {
  /** Leading visual placed before the option label. */
  icon?: ReactNode;
  /** Inline secondary text (same line as label, dimmed). */
  secondaryText?: ReactNode;
  /** @deprecated use secondaryText instead. */
  detail?: ReactNode;
  /** Block description text (second line, dimmed). */
  description?: ReactNode;
};

export const VscOption = forwardRef<HTMLDivElement, VscOptionProps>(
  (
    {
      icon,
      secondaryText,
      detail,
      description,
      children,
      className,
      disabled,
      text,
      ...rest
    },
    ref,
  ) => {
    const resolvedSecondaryText = secondaryText ?? detail;

    return (
      <Option
        ref={ref}
        text={text!}
        disabled={disabled}
        className={clsx(
          styles.vscOption,
          disabled && styles.vscDisabled,
          className,
        )}
        {...rest}
      >
        {icon && <span className={styles.vscOptionIcon}>{icon}</span>}
        <span className={styles.vscOptionLabel}>{children}</span>
        {resolvedSecondaryText && (
          <span className={styles.vscOptionDetail}>
            {resolvedSecondaryText}
          </span>
        )}
        {description && (
          <span
            className={clsx(
              styles.vscOptionDescription,
              icon && styles.vscOptionDescriptionWithIcon,
            )}
          >
            {description}
          </span>
        )}
      </Option>
    );
  },
);
VscOption.displayName = 'VscOption';

/* -------------------------------------------------------------------------- */
/*  OptionGroup                                                               */
/* -------------------------------------------------------------------------- */

export type VscOptionGroupProps = OptionGroupProps;

export const VscOptionGroup = forwardRef<HTMLDivElement, VscOptionGroupProps>(
  ({ className, ...rest }, ref) => (
    <OptionGroup
      ref={ref}
      className={clsx(styles.vscOptionGroup, className)}
      {...rest}
    />
  ),
);
VscOptionGroup.displayName = 'VscOptionGroup';

/* ---------- Option separator ---------- */

export type VscOptionSeparatorProps = HTMLAttributes<HTMLDivElement>;

export const VscOptionSeparator = forwardRef<
  HTMLDivElement,
  VscOptionSeparatorProps
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    role="separator"
    aria-hidden="true"
    className={clsx(styles.vscOptionSeparator, className)}
    {...rest}
  />
));
VscOptionSeparator.displayName = 'VscOptionSeparator';
