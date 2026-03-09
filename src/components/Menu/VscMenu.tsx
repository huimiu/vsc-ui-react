import {
  MenuPopover,
  type MenuPopoverProps,
  MenuList,
  type MenuListProps,
  MenuItem,
  type MenuItemProps,
  MenuItemCheckbox,
  type MenuItemCheckboxProps,
  MenuItemRadio,
  type MenuItemRadioProps,
  MenuDivider,
  type MenuDividerProps,
  MenuGroup,
  type MenuGroupProps,
  MenuGroupHeader,
  type MenuGroupHeaderProps,
} from '@fluentui/react-components';
import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './menu.module.scss';

/* -------------------------------------------------------------------------- */
/*  MenuPopover                                                               */
/* -------------------------------------------------------------------------- */

export type VscMenuPopoverProps = MenuPopoverProps;

export const VscMenuPopover = forwardRef<HTMLDivElement, VscMenuPopoverProps>(
  ({ className, ...rest }, ref) => (
    <MenuPopover
      ref={ref}
      className={clsx(styles.vscMenuPopover, className)}
      {...rest}
    />
  ),
);
VscMenuPopover.displayName = 'VscMenuPopover';

/* -------------------------------------------------------------------------- */
/*  MenuList                                                                  */
/* -------------------------------------------------------------------------- */

export type VscMenuListProps = MenuListProps;

export const VscMenuList = forwardRef<HTMLDivElement, VscMenuListProps>(
  ({ className, ...rest }, ref) => (
    <MenuList
      ref={ref}
      className={clsx(styles.vscMenuList, className)}
      {...rest}
    />
  ),
);
VscMenuList.displayName = 'VscMenuList';

/* -------------------------------------------------------------------------- */
/*  MenuItem                                                                  */
/* -------------------------------------------------------------------------- */

export interface VscMenuItemProps extends MenuItemProps {
  /** Accent styling – higher-contrast foreground colour. */
  accent?: boolean;
  /** Reserve left gutter space (aligns with checkbox / radio items). */
  indented?: boolean;
}

export const VscMenuItem = forwardRef<HTMLDivElement, VscMenuItemProps>(
  ({ accent, indented, className, disabled, ...rest }, ref) => (
    <MenuItem
      ref={ref}
      disabled={disabled}
      className={clsx(
        styles.vscMenuItem,
        accent && styles.vscMenuItemAccent,
        indented && styles.vscMenuItemIndented,
        disabled && styles.vscMenuItemDisabled,
        className,
      )}
      {...rest}
    />
  ),
);
VscMenuItem.displayName = 'VscMenuItem';

/* -------------------------------------------------------------------------- */
/*  MenuItemCheckbox                                                          */
/* -------------------------------------------------------------------------- */

export type VscMenuItemCheckboxProps = MenuItemCheckboxProps;

export const VscMenuItemCheckbox = forwardRef<
  HTMLDivElement,
  VscMenuItemCheckboxProps
>(({ className, disabled, ...rest }, ref) => (
  <MenuItemCheckbox
    ref={ref}
    disabled={disabled}
    className={clsx(
      styles.vscMenuItemCheckbox,
      disabled && styles.vscMenuItemDisabled,
      className,
    )}
    {...rest}
  />
));
VscMenuItemCheckbox.displayName = 'VscMenuItemCheckbox';

/* -------------------------------------------------------------------------- */
/*  MenuItemRadio                                                             */
/* -------------------------------------------------------------------------- */

export type VscMenuItemRadioProps = MenuItemRadioProps;

export const VscMenuItemRadio = forwardRef<
  HTMLDivElement,
  VscMenuItemRadioProps
>(({ className, disabled, ...rest }, ref) => (
  <MenuItemRadio
    ref={ref}
    disabled={disabled}
    className={clsx(
      styles.vscMenuItemRadio,
      disabled && styles.vscMenuItemDisabled,
      className,
    )}
    {...rest}
  />
));
VscMenuItemRadio.displayName = 'VscMenuItemRadio';

/* -------------------------------------------------------------------------- */
/*  MenuDivider                                                               */
/* -------------------------------------------------------------------------- */

export type VscMenuDividerProps = MenuDividerProps;

export const VscMenuDivider = forwardRef<HTMLDivElement, VscMenuDividerProps>(
  ({ className, ...rest }, ref) => (
    <MenuDivider
      ref={ref}
      className={clsx(styles.vscMenuDivider, className)}
      {...rest}
    />
  ),
);
VscMenuDivider.displayName = 'VscMenuDivider';

/* -------------------------------------------------------------------------- */
/*  MenuGroup                                                                 */
/* -------------------------------------------------------------------------- */

export type VscMenuGroupProps = MenuGroupProps;

export const VscMenuGroup = forwardRef<HTMLDivElement, VscMenuGroupProps>(
  ({ className, ...rest }, ref) => (
    <MenuGroup
      ref={ref}
      className={clsx(styles.vscMenuGroup, className)}
      {...rest}
    />
  ),
);
VscMenuGroup.displayName = 'VscMenuGroup';

/* -------------------------------------------------------------------------- */
/*  MenuGroupHeader                                                           */
/* -------------------------------------------------------------------------- */

export type VscMenuGroupHeaderProps = MenuGroupHeaderProps;

export const VscMenuGroupHeader = forwardRef<
  HTMLDivElement,
  VscMenuGroupHeaderProps
>(({ className, ...rest }, ref) => (
  <MenuGroupHeader
    ref={ref}
    className={clsx(styles.vscMenuGroupHeader, className)}
    {...rest}
  />
));
VscMenuGroupHeader.displayName = 'VscMenuGroupHeader';
