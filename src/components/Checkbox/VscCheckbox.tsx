import { Checkbox, type CheckboxProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import { useCheckboxStyles } from './useCheckboxStyles';

export type VscCheckboxProps = CheckboxProps;

export const VscCheckbox = forwardRef<HTMLInputElement, VscCheckboxProps>(
  ({ size, className, disabled, ...rest }, ref) => {
    const { rootClassName } = useCheckboxStyles({ size, disabled, className });

    return (
      <Checkbox
        ref={ref}
        size={size}
        disabled={disabled}
        className={rootClassName}
        {...rest}
      />
    );
  },
);

VscCheckbox.displayName = 'VscCheckbox';
