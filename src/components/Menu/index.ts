export {
  VscMenuPopover,
  type VscMenuPopoverProps,
  VscMenuList,
  type VscMenuListProps,
  VscMenuItem,
  type VscMenuItemProps,
  VscMenuItemCheckbox,
  type VscMenuItemCheckboxProps,
  VscMenuItemRadio,
  type VscMenuItemRadioProps,
  VscMenuDivider,
  type VscMenuDividerProps,
  VscMenuGroup,
  type VscMenuGroupProps,
  VscMenuGroupHeader,
  type VscMenuGroupHeaderProps,
} from './VscMenu';

// Re-export logic-only Fluent components that don't need styling wrappers
export { Menu, MenuTrigger, MenuSplitGroup } from '@fluentui/react-components';
export type {
  MenuProps,
  MenuTriggerProps,
  MenuSplitGroupProps,
} from '@fluentui/react-components';
