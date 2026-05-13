import { Button, type ButtonProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import { useButtonStylesHook, type VscButtonSize } from './useButtonStyles';

type ButtonAppearance =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'subtle'
  | 'transparent';

export type VscButtonProps = Pick<
  ButtonProps,
  'icon' | 'iconPosition' | 'shape' | 'disabled' | 'disabledFocusable'
> & {
  /** Visual style of the button. */
  appearance?: ButtonAppearance;
  /** Size variant. */
  size?: VscButtonSize;
  /** Button content. */
  children?: React.ReactNode;
  /** Additional CSS class name. */
  className?: string;
  /** Click handler. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Accessible label for icon-only buttons. */
  'aria-label'?: string;
};

export const VscButton = forwardRef<HTMLButtonElement, VscButtonProps>(
  ({ appearance, size, icon, className, children, ...rest }, ref) => {
    const isCompact = size === 'compact';
    const fluentSize = isCompact ? undefined : size;

    const mergedClassName = useButtonStylesHook({
      appearance,
      size,
      iconOnly: !!icon && !children,
      className,
    });

    return (
      <Button
        ref={ref}
        appearance={appearance}
        size={fluentSize}
        icon={icon}
        className={mergedClassName}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);

VscButton.displayName = 'VscButton';
