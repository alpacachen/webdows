import React, { FC, ReactNode } from "react";
import styles from './index.module.less'
import classnames from 'classnames'
export const HLButton: FC<{ children: ReactNode; className?:string }> = (props) => {
	return <button className={classnames(styles.hl_button, props.className)}>{props.children}</button>;
};
