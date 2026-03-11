import { Input, type InputProps } from '@fluentui/react-components';
import clsx from 'clsx';
import { forwardRef, type ReactNode } from 'react';

import type { VscValidationState } from '../../types';
import styles from './input.module.scss';

export type VscInputProps = InputProps & {
  /** Applies VS Code validation border color. */
  validationState?: VscValidationState;
  /** Applies search-style icon coloring for contentBefore / contentAfter. */
  withIcon?: boolean;
  /** Message rendered in a coloured box below the input. Requires validationState. */
  validationMessage?: ReactNode;
};

const sizeClassMap: Record<NonNullable<InputProps['size']>, string> = {
  small: styles.vscSmall,
  medium: '',
  large: styles.vscLarge,
};

const validationClassMap: Record<VscValidationState, string> = {
  error: styles.vscError,
  warning: styles.vscWarning,
  info: styles.vscInfo,
};

const validationMsgClassMap: Record<VscValidationState, string> = {
  error: styles.vscValidationError,
  warning: styles.vscValidationWarning,
  info: styles.vscValidationInfo,
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
    const mergedClass = clsx(
      styles.vscBase,
      size && sizeClassMap[size],
      validationState && validationClassMap[validationState],
      withIcon && styles.vscWithIcon,
      disabled && styles.vscDisabled,
      readOnly && !disabled && styles.vscReadonly,
      className,
    );

    const input = (
      <Input
        ref={ref}
        size={size}
        disabled={disabled}
        readOnly={readOnly}
        className={mergedClass}
        {...rest}
      />
    );

    if (validationState && validationMessage) {
      return (
        <div className={styles.vscInputWrapper}>
          {input}
          <div className={validationMsgClassMap[validationState]}>
            {validationMessage}
          </div>
        </div>
      );
    }

    return input;
  },
);

VscInput.displayName = 'VscInput';
