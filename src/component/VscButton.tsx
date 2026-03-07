import React, { forwardRef } from 'react';
import { Button, type ButtonProps } from '@fluentui/react-components';
import buttonStyles from '../styles/button.module.scss';

const appearanceClassMap: Partial<
  Record<NonNullable<ButtonProps['appearance']>, string>
> = {
  primary: buttonStyles.vscodePrimary,
  secondary: buttonStyles.vscodeSecondary,
  outline: buttonStyles.vscodeOutline,
  subtle: buttonStyles.vscodeSubtle,
  transparent: buttonStyles.vscodeTransparent,
};

const sizeClassMap: Partial<Record<NonNullable<ButtonProps['size']>, string>> =
  {
    small: buttonStyles.vscodeSmall,
    large: buttonStyles.vscodeLarge,
  };

export type VscButtonProps = ButtonProps & {
  compact?: boolean;
};

export const VscButton = forwardRef<HTMLButtonElement, VscButtonProps>(
  ({ appearance, size, compact, icon, className, children, ...rest }, ref) => {
    if (compact && size) {
      console.warn(
        'VscButton: "compact" and "size" are mutually exclusive. "compact" takes precedence.',
      );
    }

    const classes: string[] = [];
    const appearanceClass = appearanceClassMap[appearance ?? 'secondary'];

    if (appearanceClass) {
      classes.push(appearanceClass);
    }

    if (compact) {
      classes.push(buttonStyles.vscodeCompact);
    } else if (size) {
      const sizeClass = sizeClassMap[size];
      if (sizeClass) classes.push(sizeClass);
    }

    if (icon && !children) {
      classes.push(buttonStyles.vscodeIconOnly);
    }

    if (className) {
      classes.push(className);
    }

    return (
      <Button
        ref={ref}
        appearance={appearance}
        size={size}
        icon={icon}
        className={classes.join(' ')}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);

VscButton.displayName = 'VscButton';
