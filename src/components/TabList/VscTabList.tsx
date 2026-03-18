import {
  TabList,
  type TabListProps,
  Tab,
  type TabProps,
} from '@fluentui/react-components';
import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './tablist.module.scss';

export type VscTabListProps = TabListProps;

const sizeClassMap: Record<NonNullable<TabListProps['size']>, string> = {
  small: styles.vscSmall,
  medium: '',
  large: '',
};

export const VscTabList = forwardRef<HTMLDivElement, VscTabListProps>(
  ({ className, size = 'medium', ...rest }, ref) => {
    return (
      <TabList
        ref={ref}
        className={clsx(
          styles.vscTabList,
          sizeClassMap[size ?? 'medium'],
          className,
        )}
        size={size}
        {...rest}
      />
    );
  },
);

VscTabList.displayName = 'VscTabList';

export type VscTabProps = TabProps;

export const VscTab = forwardRef<HTMLButtonElement, VscTabProps>(
  ({ className, ...rest }, ref) => {
    return (
      <Tab ref={ref} className={clsx(styles.vscTab, className)} {...rest} />
    );
  },
);

VscTab.displayName = 'VscTab';
