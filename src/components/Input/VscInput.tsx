import { Input, type InputProps } from '@fluentui/react-components';
import { forwardRef, type ReactNode } from 'react';

import type { VscInputValidationState } from '../../types';
import { useInputStyles } from './useInputStyles';

export type VscInputProps = InputProps & {
  /** Applies VS Code validation border color. */
  validationState?: VscInputValidationState;
  /** Applies search-style icon coloring for contentBefore / contentAfter. */
  withIcon?: boolean;
  /** Message rendered in a coloured box below the input. Requires validationState. */
  validationMessage?: ReactNode;
};

export const VscInput = forwardRef<HTMLInputElement, VscInputProps>(
  (
    {
      validationState,
      validationMessage,
      withIcon,
      size,
      className,
      disabled,
      readOnly,
      ...rest
    },
    ref,
  ) => {
    const { rootClassName, wrapperClassName, validationMsgClassName } =
      useInputStyles({
        size,
        validationState,
        withIcon,
        disabled,
        readOnly,
        className,
      });

    const input = (
      <Input
        ref={ref}
        size={size}
        disabled={disabled}
        readOnly={readOnly}
        className={rootClassName}
        data-validation-state={validationState}
        {...rest}
      />
    );

    if (validationState && validationMessage && validationMsgClassName) {
      return (
        <div className={wrapperClassName}>
          {input}
          <div className={validationMsgClassName}>{validationMessage}</div>
        </div>
      );
    }

    return input;
  },
);

VscInput.displayName = 'VscInput';
