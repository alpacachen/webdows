import React from "react";
import { TimeAndNotification } from "../time-notification";
import { Volume } from "../volume";
export const RightPanel = () => {
	return (
		<div className="flex items-center">
			<Volume />
			<TimeAndNotification />
		</div>
	);
};
