import { Label, type LabelProps, Tooltip } from '@fluentui/react-components';
import { Info16Regular } from '@fluentui/react-icons';
import { forwardRef } from 'react';

import { useLabelStyles } from './useLabelStyles';

export type VscLabelProps = Omit<LabelProps, 'size' | 'weight'> & {
  /** Label size. */
  size?: 'small' | 'medium' | 'large';
  /** Font weight of the label text. */
  weight?: 'regular' | 'semibold';
  /** When true, the label is visually disabled. */
  disabled?: boolean;
  /** When provided, renders an info icon with a tooltip next to the label. */
  tooltipContent?: string;
};

export const VscLabel = forwardRef<HTMLLabelElement, VscLabelProps>(
  (
    {
      size,
      weight,
      disabled,
      required,
      tooltipContent,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const { rootClassName, requiredIndicatorClassName, infoIconClassName } =
      useLabelStyles({ size, weight, disabled, className });

    return (
      <Label ref={ref} className={rootClassName} required={false} {...rest}>
        {children}
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
      </Label>
    );
  },
);

VscLabel.displayName = 'VscLabel';
