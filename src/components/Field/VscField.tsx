import { Field, type FieldProps } from '@fluentui/react-components';
import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './field.module.scss';

export type VscFieldProps = FieldProps;

export const VscField = forwardRef<HTMLDivElement, VscFieldProps>(
  ({ className, ...rest }, ref) => {
    return (
      <Field ref={ref} className={clsx(styles.vscBase, className)} {...rest} />
    );
  },
);

VscField.displayName = 'VscField';
