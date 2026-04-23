import { Textarea, type TextareaProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import type { VscInputValidationState } from '../../types';
import { useTextareaStyles } from './useTextareaStyles';

export type VscTextareaProps = TextareaProps & {
  /** Applies VS Code validation border color. */
  validationState?: VscInputValidationState;
};

export const VscTextarea = forwardRef<HTMLTextAreaElement, VscTextareaProps>(
  ({ validationState, className, disabled, readOnly, ...rest }, ref) => {
    const mergedClass = useTextareaStyles({
      validationState,
      disabled,
      readOnly,
      className,
    });

    return (
      <Textarea
        ref={ref}
        disabled={disabled}
        readOnly={readOnly}
        className={mergedClass}
        data-validation-state={validationState}
        {...rest}
      />
    );
  },
);

VscTextarea.displayName = 'VscTextarea';
