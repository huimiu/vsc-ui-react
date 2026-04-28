import { MenuButton, type MenuButtonProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import { useMenuButtonStylesHook } from './useMenuButtonStyles';

type VscMenuButtonSize = MenuButtonProps['size'] | 'compact';

export type VscMenuButtonProps = Omit<MenuButtonProps, 'size'> & {
  size?: VscMenuButtonSize;
};

export const VscMenuButton = forwardRef<HTMLButtonElement, VscMenuButtonProps>(
  ({ appearance, size, icon, className, children, ...rest }, ref) => {
    const isCompact = size === 'compact';
    const fluentSize = isCompact ? undefined : size;

    const mergedClassName = useMenuButtonStylesHook({
      appearance: appearance as VscMenuButtonProps['appearance'],
      size,
      iconOnly: !!icon && !children,
      className,
    });

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
