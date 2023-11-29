import React from "react";
import styles from "./index.module.less";
import { WindowsButton } from "./windows-button";
import { RightPanel } from "./right-panel";

const LeftPanel = () => {
	return <div></div>;
};

const CenterPanel = () => {
	return (
		<div className="flex items-center">
			<WindowsButton />
		</div>
	);
};

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<LeftPanel />
			<CenterPanel />
			<RightPanel />
		</div>
	);
};
