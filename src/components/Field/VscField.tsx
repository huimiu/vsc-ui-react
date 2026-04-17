import { Field, type FieldProps, Tooltip } from '@fluentui/react-components';
import { Info16Regular } from '@fluentui/react-icons';
import { forwardRef } from 'react';

import { useFieldStyles } from './useFieldStyles';

export type VscFieldProps = Omit<FieldProps, 'label'> & {
  /** Field label text. */
  label?: string;
  /** When provided, renders an info icon with a tooltip next to the label. */
  tooltipContent?: string;
};

export const VscField = forwardRef<HTMLDivElement, VscFieldProps>(
  ({ className, label, tooltipContent, required, ...rest }, ref) => {
    const {
      rootClassName,
      labelRowClassName,
      labelTextClassName,
      requiredIndicatorClassName,
      infoIconClassName,
    } = useFieldStyles({ className });

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

    return (
      <Field
        ref={ref}
        className={rootClassName}
        label={labelSlot}
        required={required}
        {...rest}
      />
    );
  },
);

VscField.displayName = 'VscField';
