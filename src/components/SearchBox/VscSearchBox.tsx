import { SearchBox, type SearchBoxProps } from '@fluentui/react-components';
import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './searchbox.module.scss';

export interface VscSearchBoxProps extends SearchBoxProps {
  /**
   * Visual size variant.
   * - `"small"` — 24 px (default, compact search bar)
   * - `"medium"` — 26 px (standard input height)
   * - `"large"` — 28 px (dialog / quick-input)
   *
   * @default "small"
   */
  size?: 'small' | 'medium' | 'large';
  /** Render in read-only mode (transparent background, no border). */
  readOnly?: boolean;
}

const sizeClassMap: Record<string, string | undefined> = {
  small: undefined, // default – no extra class
  medium: styles.vscMedium,
  large: styles.vscLarge,
};

export const VscSearchBox = forwardRef<HTMLInputElement, VscSearchBoxProps>(
  ({ size = 'small', readOnly, disabled, className, ...rest }, ref) => {
    return (
      <SearchBox
        ref={ref}
        disabled={disabled}
        className={clsx(
          styles.vscBase,
          sizeClassMap[size],
          disabled && styles.vscDisabled,
          readOnly && styles.vscReadonly,
          className,
        )}
        {...rest}
      />
    );
  },
);

VscSearchBox.displayName = 'VscSearchBox';
