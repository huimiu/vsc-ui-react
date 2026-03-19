import { SplitButton, type SplitButtonProps } from '@fluentui/react-components';
import clsx from 'clsx';
import { forwardRef } from 'react';

import buttonStyles from './button.module.scss';

const splitAppearanceClassMap: Partial<
  Record<NonNullable<SplitButtonProps['appearance']>, string>
> = {
  primary: buttonStyles.vscodePrimarySplit,
  secondary: buttonStyles.vscodeSecondarySplit,
  outline: buttonStyles.vscodeOutlineSplit,
  subtle: buttonStyles.vscodeSubtleSplit,
  transparent: buttonStyles.vscodeTransparentSplit,
};

const splitSizeClassMap: Record<NonNullable<VscSplitButtonSize>, string> = {
  small: buttonStyles.vscodeSmallSplit,
  medium: '',
  large: '',
  compact: buttonStyles.vscodeCompactSplit,
};

type VscSplitButtonSize = SplitButtonProps['size'] | 'compact';

export type VscSplitButtonProps = Omit<SplitButtonProps, 'size'> & {
  size?: VscSplitButtonSize;
};

export const VscSplitButton = forwardRef<
  HTMLButtonElement,
  VscSplitButtonProps
>(({ appearance, size, icon, className, children, ...rest }, ref) => {
  const isCompact = size === 'compact';
  const fluentSize = isCompact ? undefined : size;

  const mergedClassName = clsx(
    buttonStyles.vscBase,
    splitAppearanceClassMap[appearance ?? 'secondary'],
    size && splitSizeClassMap[size],
    icon && !children && buttonStyles.vscodeIconOnlySplit,
    className,
  );

  return (
    <SplitButton
      ref={ref}
      appearance={appearance}
      size={fluentSize}
      icon={icon}
      className={mergedClassName}
      {...(rest as SplitButtonProps)}
    >
      {children}
    </SplitButton>
  );
});

VscSplitButton.displayName = 'VscSplitButton';
