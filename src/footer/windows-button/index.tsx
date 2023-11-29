import React from "react";
import { HLButton } from "../hl-button";
import icon from "./windows.jpg";
export const WindowsButton = () => {
	return (
		<HLButton>
			<div className="flex">
				<img width={24} height={24} src={icon} />
			</div>
		</HLButton>
	);
};
