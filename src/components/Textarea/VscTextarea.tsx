import { Textarea, type TextareaProps } from '@fluentui/react-components';
import clsx from 'clsx';
import { forwardRef } from 'react';

import type { VscValidationState } from '../../types';
import styles from './textarea.module.scss';

export type VscTextareaProps = TextareaProps & {
  /** Applies VS Code validation border color. */
  validationState?: VscValidationState;
};

const validationClassMap: Record<VscValidationState, string> = {
  error: styles.vscError,
  warning: styles.vscWarning,
  info: styles.vscInfo,
};

export const VscTextarea = forwardRef<HTMLTextAreaElement, VscTextareaProps>(
  ({ validationState, size, className, disabled, readOnly, ...rest }, ref) => {
    const mergedClass = clsx(
      styles.vscBase,
      size === 'small' && styles.vscSmall,
      validationState && validationClassMap[validationState],
      disabled && styles.vscDisabled,
      readOnly && !disabled && styles.vscReadonly,
      className,
    );

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
