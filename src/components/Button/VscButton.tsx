import React, { forwardRef } from 'react';
import { Button, type ButtonProps } from '@fluentui/react-components';
import clsx from 'clsx';
import buttonStyles from './button.module.scss';

const appearanceClassMap: Partial<
  Record<NonNullable<ButtonProps['appearance']>, string>
> = {
  primary: buttonStyles.vscodePrimary,
  secondary: buttonStyles.vscodeSecondary,
  outline: buttonStyles.vscodeOutline,
  subtle: buttonStyles.vscodeSubtle,
  transparent: buttonStyles.vscodeTransparent,
};

const sizeClassMap: Record<NonNullable<VscButtonSize>, string> = {
  small: buttonStyles.vscodeSmall,
  medium: '',
  large: buttonStyles.vscodeLarge,
  compact: buttonStyles.vscodeCompact,
};

type VscButtonSize = ButtonProps['size'] | 'compact';

export type VscButtonProps = Omit<ButtonProps, 'size'> & {
  size?: VscButtonSize;
};

export const VscButton = forwardRef<HTMLButtonElement, VscButtonProps>(
  ({ appearance, size, icon, className, children, ...rest }, ref) => {
    const isCompact = size === 'compact';
    const fluentSize = isCompact ? undefined : size;

    const mergedClassName = clsx(
      buttonStyles.vscButtonBase,
      appearanceClassMap[appearance ?? 'secondary'],
      size && sizeClassMap[size],
      icon && !children && buttonStyles.vscodeIconOnly,
      className,
    );

    return (
      <Button
        ref={ref}
        appearance={appearance}
        size={fluentSize}
        icon={icon}
        className={mergedClassName}
        {...(rest as ButtonProps)}
      >
        {children}
      </Button>
    );
  },
);

VscButton.displayName = 'VscButton';
