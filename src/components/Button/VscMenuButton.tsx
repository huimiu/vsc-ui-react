import { MenuButton, type MenuButtonProps } from '@fluentui/react-components';
import clsx from 'clsx';
import { forwardRef } from 'react';

import buttonStyles from './button.module.scss';

const menuAppearanceClassMap: Partial<
  Record<NonNullable<MenuButtonProps['appearance']>, string>
> = {
  primary: buttonStyles.vscodePrimaryMenu,
  secondary: buttonStyles.vscodeSecondaryMenu,
  outline: buttonStyles.vscodeOutlineMenu,
  subtle: buttonStyles.vscodeSubtleMenu,
  transparent: buttonStyles.vscodeTransparentMenu,
};

const menuSizeClassMap: Record<NonNullable<VscMenuButtonSize>, string> = {
  small: buttonStyles.vscodeSmallMenu,
  medium: '',
  large: '',
  compact: buttonStyles.vscodeCompactMenu,
};

type VscMenuButtonSize = MenuButtonProps['size'] | 'compact';

export type VscMenuButtonProps = Omit<MenuButtonProps, 'size'> & {
  size?: VscMenuButtonSize;
};

export const VscMenuButton = forwardRef<HTMLButtonElement, VscMenuButtonProps>(
  ({ appearance, size, icon, className, children, ...rest }, ref) => {
    const isCompact = size === 'compact';
    const fluentSize = isCompact ? undefined : size;

    const mergedClassName = clsx(
      buttonStyles.vscBase,
      menuAppearanceClassMap[appearance ?? 'secondary'],
      size && menuSizeClassMap[size],
      icon && !children && buttonStyles.vscodeIconOnlyMenu,
      className,
    );

    return (
      <MenuButton
        ref={ref}
        appearance={appearance}
        size={fluentSize}
        icon={icon}
        className={mergedClassName}
        {...(rest as MenuButtonProps)}
      >
        {children}
      </MenuButton>
    );
  },
);

VscMenuButton.displayName = 'VscMenuButton';
