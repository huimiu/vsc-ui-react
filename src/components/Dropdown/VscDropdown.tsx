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
  mergeClasses,
} from '@fluentui/react-components';
import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';

import type { VscValidationState } from '../../types';
import {
  useVscDropdownStyles,
  useVscComboboxStyles,
  useVscListboxStyles,
  useVscOptionStyles,
  useVscOptionGroupStyles,
  useVscTriggerLabelStyles,
  useVscTriggerDescriptionStyles,
  useVscOptionSeparatorStyles,
} from './useDropdownStyles';

export type VscSelectionIndicator = 'none' | 'checkmark';

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
}: VscTriggerLabelProps) => {
  const mergedClass = useVscTriggerLabelStyles(className);
  return <span className={mergedClass} {...rest} />;
};
VscTriggerLabel.displayName = 'VscTriggerLabel';

/** Secondary description beside the label in a dropdown trigger. */
export type VscTriggerDescriptionProps = HTMLAttributes<HTMLSpanElement>;

export const VscTriggerDescription = ({
  className,
  ...rest
}: VscTriggerDescriptionProps) => {
  const mergedClass = useVscTriggerDescriptionStyles(className);
  return <span className={mergedClass} {...rest} />;
};
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
    const styles = useVscDropdownStyles({
      validationState,
      readOnly,
      withDescription,
      selectionIndicator,
      size,
      disabled,
      className,
      listboxClassName: listboxObj.className as string | undefined,
    });

    return (
      <Dropdown
        ref={ref}
        size={size}
        disabled={disabled}
        className={styles.rootClassName}
        listbox={{
          ...listboxObj,
          className: styles.listboxClassName,
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
    const styles = useVscComboboxStyles({
      validationState,
      readOnly,
      selectionIndicator,
      size,
      disabled,
      className,
      listboxClassName: listboxObj.className as string | undefined,
    });

    return (
      <Combobox
        ref={ref}
        size={size}
        disabled={disabled}
        className={styles.rootClassName}
        listbox={{
          ...listboxObj,
          className: styles.listboxClassName,
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
  ({ className, selectionIndicator = 'none', ...rest }, ref) => {
    const mergedClass = useVscListboxStyles({ selectionIndicator, className });

    return (
      <Listbox
        ref={ref}
        className={mergedClass}
        {...rest}
      />
    );
  },
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
    const optionStyles = useVscOptionStyles({ disabled, className });

    return (
      <Option
        ref={ref}
        text={text!}
        disabled={disabled}
        className={optionStyles.rootClassName}
        {...rest}
      >
        {icon && <span className={optionStyles.iconClassName}>{icon}</span>}
        <span className={optionStyles.labelClassName}>{children}</span>
        {resolvedSecondaryText && (
          <span className={optionStyles.detailClassName}>
            {resolvedSecondaryText}
          </span>
        )}
        {description && (
          <span
            className={mergeClasses(
              optionStyles.descriptionClassName,
              !!icon && optionStyles.descriptionWithIconClassName,
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
  ({ className, ...rest }, ref) => {
    const mergedClass = useVscOptionGroupStyles(className);

    return (
      <OptionGroup
        ref={ref}
        className={mergedClass}
        {...rest}
      />
    );
  },
);
VscOptionGroup.displayName = 'VscOptionGroup';

/* ---------- Option separator ---------- */

export type VscOptionSeparatorProps = HTMLAttributes<HTMLDivElement>;

export const VscOptionSeparator = forwardRef<
  HTMLDivElement,
  VscOptionSeparatorProps
>(({ className, ...rest }, ref) => {
  const mergedClass = useVscOptionSeparatorStyles(className);

  return (
    <div
      ref={ref}
      role="separator"
      aria-hidden="true"
      className={mergedClass}
      {...rest}
    />
  );
});
VscOptionSeparator.displayName = 'VscOptionSeparator';
