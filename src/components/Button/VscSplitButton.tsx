import { SplitButton, type SplitButtonProps } from '@fluentui/react-components';
import { forwardRef } from 'react';

import { useSplitButtonStylesHook } from './useSplitButtonStyles';

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

  const mergedClassName = useSplitButtonStylesHook({
    appearance: appearance as VscSplitButtonProps['appearance'],
    size,
    iconOnly: !!icon && !children,
    className,
  });

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
