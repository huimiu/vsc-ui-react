import { Textarea, type TextareaProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import type { VscInputValidationState } from '../../types';
import { useTextareaStyles } from './useTextareaStyles';

export type VscTextareaResize = 'none' | 'horizontal' | 'vertical' | 'both';

export type VscTextareaProps = TextareaProps & {
  /** Applies VS Code validation border color. */
  validationState?: VscInputValidationState;
  /**
   * Controls the resize behavior of the textarea.
   * Shows a native resize grip in the bottom-right corner.
   * @default 'none'
   */
  resize?: VscTextareaResize;
};

export const VscTextarea = forwardRef<HTMLTextAreaElement, VscTextareaProps>(
  ({ validationState, resize, className, disabled, readOnly, ...rest }, ref) => {
    const mergedClass = useTextareaStyles({
      validationState,
      resize,
      disabled,
      readOnly,
      className,
    });

    return (
      <Textarea
        ref={ref}
        resize={resize}
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
