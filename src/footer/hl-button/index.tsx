import React, { FC, HTMLAttributes, ReactNode } from "react";
import styles from './index.module.less'
import classnames from 'classnames'
export const HLButton: FC<{ children: ReactNode } & HTMLAttributes<HTMLButtonElement>> = (props) => {
	const { className, children, ...rest} = props
	return <button className={classnames(styles.hl_button, className)} {...rest}>{children}</button>;
};
