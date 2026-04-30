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
import { forwardRef } from 'react';

import {
  useVscMenuPopoverStyles,
  useVscMenuListStyles,
  useVscMenuItemStyles,
  useVscMenuItemCheckboxStyles,
  useVscMenuItemRadioStyles,
  useVscMenuDividerStyles,
  useVscMenuGroupStyles,
  useVscMenuGroupHeaderStyles,
} from './useMenuStyles';

/* -------------------------------------------------------------------------- */
/*  MenuPopover                                                               */
/* -------------------------------------------------------------------------- */

export type VscMenuPopoverProps = MenuPopoverProps;

export const VscMenuPopover = forwardRef<HTMLDivElement, VscMenuPopoverProps>(
  ({ className, ...rest }, ref) => {
    const mergedClass = useVscMenuPopoverStyles(className);
    return <MenuPopover ref={ref} className={mergedClass} {...rest} />;
  },
);
VscMenuPopover.displayName = 'VscMenuPopover';

/* -------------------------------------------------------------------------- */
/*  MenuList                                                                  */
/* -------------------------------------------------------------------------- */

export type VscMenuListProps = MenuListProps;

export const VscMenuList = forwardRef<HTMLDivElement, VscMenuListProps>(
  ({ className, ...rest }, ref) => {
    const mergedClass = useVscMenuListStyles(className);
    return <MenuList ref={ref} className={mergedClass} {...rest} />;
  },
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
  ({ accent, indented, className, disabled, ...rest }, ref) => {
    const mergedClass = useVscMenuItemStyles({
      accent,
      indented,
      disabled,
      className,
    });
    return (
      <MenuItem
        ref={ref}
        disabled={disabled}
        className={mergedClass}
        {...rest}
      />
    );
  },
);
VscMenuItem.displayName = 'VscMenuItem';

/* -------------------------------------------------------------------------- */
/*  MenuItemCheckbox                                                          */
/* -------------------------------------------------------------------------- */

export type VscMenuItemCheckboxProps = MenuItemCheckboxProps;

export const VscMenuItemCheckbox = forwardRef<
  HTMLDivElement,
  VscMenuItemCheckboxProps
>(({ className, disabled, ...rest }, ref) => {
  const mergedClass = useVscMenuItemCheckboxStyles({ disabled, className });
  return (
    <MenuItemCheckbox
      ref={ref}
      disabled={disabled}
      className={mergedClass}
      {...rest}
    />
  );
});
VscMenuItemCheckbox.displayName = 'VscMenuItemCheckbox';

/* -------------------------------------------------------------------------- */
/*  MenuItemRadio                                                             */
/* -------------------------------------------------------------------------- */

export type VscMenuItemRadioProps = MenuItemRadioProps;

export const VscMenuItemRadio = forwardRef<
  HTMLDivElement,
  VscMenuItemRadioProps
>(({ className, disabled, ...rest }, ref) => {
  const mergedClass = useVscMenuItemRadioStyles({ disabled, className });
  return (
    <MenuItemRadio
      ref={ref}
      disabled={disabled}
      className={mergedClass}
      {...rest}
    />
  );
});
VscMenuItemRadio.displayName = 'VscMenuItemRadio';

/* -------------------------------------------------------------------------- */
/*  MenuDivider                                                               */
/* -------------------------------------------------------------------------- */

export type VscMenuDividerProps = MenuDividerProps;

export const VscMenuDivider = forwardRef<HTMLDivElement, VscMenuDividerProps>(
  ({ className, ...rest }, ref) => {
    const mergedClass = useVscMenuDividerStyles(className);
    return <MenuDivider ref={ref} className={mergedClass} {...rest} />;
  },
);
VscMenuDivider.displayName = 'VscMenuDivider';

/* -------------------------------------------------------------------------- */
/*  MenuGroup                                                                 */
/* -------------------------------------------------------------------------- */

export type VscMenuGroupProps = MenuGroupProps;

export const VscMenuGroup = forwardRef<HTMLDivElement, VscMenuGroupProps>(
  ({ className, ...rest }, ref) => {
    const mergedClass = useVscMenuGroupStyles(className);
    return <MenuGroup ref={ref} className={mergedClass} {...rest} />;
  },
);
VscMenuGroup.displayName = 'VscMenuGroup';

/* -------------------------------------------------------------------------- */
/*  MenuGroupHeader                                                           */
/* -------------------------------------------------------------------------- */

export type VscMenuGroupHeaderProps = MenuGroupHeaderProps;

export const VscMenuGroupHeader = forwardRef<
  HTMLDivElement,
  VscMenuGroupHeaderProps
>(({ className, ...rest }, ref) => {
  const mergedClass = useVscMenuGroupHeaderStyles(className);
  return <MenuGroupHeader ref={ref} className={mergedClass} {...rest} />;
});
VscMenuGroupHeader.displayName = 'VscMenuGroupHeader';
