import {
  Field,
  mergeClasses,
  type FieldProps,
  Tooltip,
} from '@fluentui/react-components';
import { Info16Regular } from '@fluentui/react-icons';
import { forwardRef } from 'react';

import type { VscValidationState } from '../../types';
import { useFieldStyles } from './useFieldStyles';

export type VscFieldProps = Omit<FieldProps, 'label' | 'validationState'> & {
  /** Field label text. */
  label?: string;
  /** When provided, renders an info icon with a tooltip next to the label. */
  tooltipContent?: string;
  /** Applies VS Code validation styling via Fluent Field component. */
  validationState?: VscValidationState;
};

export const VscField = forwardRef<HTMLDivElement, VscFieldProps>(
  (
    { className, label, tooltipContent, required, validationState, ...rest },
    ref,
  ) => {
    const {
      rootClassName,
      validationMessageIconClassName,
      labelRowClassName,
      labelTextClassName,
      requiredIndicatorClassName,
      infoIconClassName,
    } = useFieldStyles({ validationState, className });

    const validationIconName =
      validationState === 'error'
        ? 'codicon-error'
        : validationState === 'warning'
          ? 'codicon-warning'
          : validationState === 'info'
            ? 'codicon-info'
            : undefined;

    const validationMessageIcon = validationIconName ? (
      <span
        className={mergeClasses(
          validationMessageIconClassName,
          'codicon',
          validationIconName,
        )}
        aria-hidden="true"
      />
    ) : undefined;

    const labelSlot = label ? (
      <span className={labelRowClassName}>
        <span className={labelTextClassName}>{label}</span>
        {required && <span className={requiredIndicatorClassName}>*</span>}
        {tooltipContent && (
          <Tooltip content={tooltipContent} relationship="description">
            <span
              className={infoIconClassName}
              role="img"
              aria-label={tooltipContent}
            >
              <Info16Regular />
            </span>
          </Tooltip>
        )}
      </span>
    ) : undefined;

    const fluentValidationState =
      validationState === 'info' ? undefined : validationState;

    return (
      <Field
        ref={ref}
        className={rootClassName}
        label={labelSlot}
        required={required}
        validationMessageIcon={validationMessageIcon}
        validationState={fluentValidationState}
        {...rest}
      />
    );
  },
);

VscField.displayName = 'VscField';
