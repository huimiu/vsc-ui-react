import { SearchBox, type SearchBoxProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import { useSearchBoxStyles } from './useSearchBoxStyles';

export interface VscSearchBoxProps extends SearchBoxProps {
  /** Render in read-only mode (transparent background, no border). */
  readOnly?: boolean;
}

export const VscSearchBox = forwardRef<HTMLInputElement, VscSearchBoxProps>(
  ({ size = 'small', readOnly, disabled, className, ...rest }, ref) => {
    const mergedClass = useSearchBoxStyles({ size, readOnly, disabled, className });

    return (
      <SearchBox
        ref={ref}
        disabled={disabled}
        className={mergedClass}
        {...rest}
      />
    );
  },
);

VscSearchBox.displayName = 'VscSearchBox';
