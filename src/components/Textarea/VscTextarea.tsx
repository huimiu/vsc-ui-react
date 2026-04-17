import { Textarea, type TextareaProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import type { VscValidationState } from '../../types';
import { useTextareaStyles } from './useTextareaStyles';

export type VscTextareaProps = TextareaProps & {
  /** Applies VS Code validation border color. */
  validationState?: VscValidationState;
};

export const VscTextarea = forwardRef<HTMLTextAreaElement, VscTextareaProps>(
  ({ validationState, size, className, disabled, readOnly, ...rest }, ref) => {
    const mergedClass = useTextareaStyles({
      size,
      validationState,
      disabled,
      readOnly,
      className,
    });

    return (
      <Textarea
        ref={ref}
        size={size}
        disabled={disabled}
        readOnly={readOnly}
        className={mergedClass}
        {...rest}
      />
    );
  },
);

VscTextarea.displayName = 'VscTextarea';
