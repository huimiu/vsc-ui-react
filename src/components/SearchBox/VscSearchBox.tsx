import { SearchBox, type SearchBoxProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import { useSearchBoxStyles } from './useSearchBoxStyles';

export interface VscSearchBoxProps extends SearchBoxProps {}

export const VscSearchBox = forwardRef<HTMLInputElement, VscSearchBoxProps>(
  ({ size = 'small', disabled, className, ...rest }, ref) => {
    const mergedClass = useSearchBoxStyles({ size, disabled, className });

    return (
      <SearchBox
        ref={ref}
        size={size}
        disabled={disabled}
        className={mergedClass}
        {...rest}
      />
    );
  },
);

VscSearchBox.displayName = 'VscSearchBox';
