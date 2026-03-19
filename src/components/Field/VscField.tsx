import { Field, type FieldProps, Tooltip } from '@fluentui/react-components';
import { Info16Regular } from '@fluentui/react-icons';
import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './field.module.scss';

export type VscFieldProps = Omit<FieldProps, 'label'> & {
  /** Field label text. */
  label?: string;
  /** When provided, renders an info icon with a tooltip next to the label. */
  tooltipContent?: string;
};

export const VscField = forwardRef<HTMLDivElement, VscFieldProps>(
  ({ className, label, tooltipContent, required, ...rest }, ref) => {
    const labelSlot = label ? (
      <span className={styles.labelRow}>
        <span className={styles.labelText}>{label}</span>
        {required && <span className={styles.requiredIndicator}>*</span>}
        {tooltipContent && (
          <Tooltip content={tooltipContent} relationship="description">
            <span
              className={styles.infoIcon}
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
        className={clsx(styles.vscBase, className)}
        label={labelSlot}
        required={required}
        {...rest}
      />
    );
  },
);

VscField.displayName = 'VscField';
