import {
  TabList,
  type TabListProps,
  Tab,
  type TabProps,
} from '@fluentui/react-components';
import { forwardRef } from 'react';

import { useVscTabListStyles, useVscTabStyles } from './useTabListStyles';

export type VscTabListProps = TabListProps;

export const VscTabList = forwardRef<HTMLDivElement, VscTabListProps>(
  ({ className, size = 'medium', ...rest }, ref) => {
    const mergedClass = useVscTabListStyles({ size, className });

    return <TabList ref={ref} className={mergedClass} size={size} {...rest} />;
  },
);

VscTabList.displayName = 'VscTabList';

export type VscTabProps = TabProps;

export const VscTab = forwardRef<HTMLButtonElement, VscTabProps>(
  ({ className, ...rest }, ref) => {
    const mergedClass = useVscTabStyles(className);

    return <Tab ref={ref} className={mergedClass} {...rest} />;
  },
);

VscTab.displayName = 'VscTab';
