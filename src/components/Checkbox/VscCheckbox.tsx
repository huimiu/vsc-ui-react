import { Checkbox, type CheckboxProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import { useCheckboxStyles } from './useCheckboxStyles';

export type VscCheckboxProps = Omit<CheckboxProps, 'size'> & {
  size?: 'small' | 'medium' | 'large';
};

export const VscCheckbox = forwardRef<HTMLInputElement, VscCheckboxProps>(
  ({ size, className, disabled, ...rest }, ref) => {
    const { rootClassName } = useCheckboxStyles({ size, disabled, className });
    const fluentSize = size === 'small' ? 'medium' : size;

    return (
      <Checkbox
        ref={ref}
        size={fluentSize}
        disabled={disabled}
        className={rootClassName}
        {...rest}
      />
    );
  },
);

VscCheckbox.displayName = 'VscCheckbox';
