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

/* -------------------------------------------------------------------------- */
/*  Shared maps                                                               */
/* -------------------------------------------------------------------------- */

const sizeClassMap: Record<string, string> = {
  small: styles.vscSmall,
  medium: '',
  large: styles.vscLarge,
};

const validationClassMap: Record<VscValidationState, string> = {
  error: styles.vscError,
  warning: styles.vscWarning,
  info: styles.vscInfo,
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
};

export const VscDropdown = forwardRef<HTMLButtonElement, VscDropdownProps>(
  (
    {
      validationState,
      readOnly,
      withDescription,
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
          className: clsx(styles.vscListbox, listboxObj.className as string),
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
};

export const VscCombobox = forwardRef<HTMLInputElement, VscComboboxProps>(
  (
    { validationState, readOnly, size, className, disabled, listbox, ...rest },
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
          className: clsx(styles.vscListbox, listboxObj.className as string),
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

export type VscListboxProps = ListboxProps;

export const VscListbox = forwardRef<HTMLDivElement, VscListboxProps>(
  ({ className, ...rest }, ref) => (
    <Listbox
      ref={ref}
      className={clsx(styles.vscListbox, className)}
      {...rest}
    />
  ),
);
VscListbox.displayName = 'VscListbox';

/* -------------------------------------------------------------------------- */
/*  Option                                                                    */
/* -------------------------------------------------------------------------- */

export type VscOptionProps = OptionProps & {
  /** Inline secondary text (same line as label, dimmed). */
  detail?: ReactNode;
  /** Block description text (second line, dimmed). */
  description?: ReactNode;
};

export const VscOption = forwardRef<HTMLDivElement, VscOptionProps>(
  (
    { detail, description, children, className, disabled, text, ...rest },
    ref,
  ) => {
    const fluentProps: Record<string, unknown> = {
      ...rest,
      ref,
      text,
      disabled,
      className: clsx(
        styles.vscOption,
        description && styles.vscWithDescription,
        disabled && styles.vscDisabled,
        className,
      ),
    };

    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Option {...(fluentProps as any)}>
        {children}
        {detail && <span className={styles.vscOptionDetail}>{detail}</span>}
        {description && (
          <span className={styles.vscOptionDescription}>{description}</span>
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
