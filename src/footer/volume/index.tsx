import React from "react";
import { HLButton } from "../hl-button";
import { VolumeIcon, VolumeValue } from "./icon";
export const Volume = () => {
	return (
		<HLButton>
			<div className="flex h-24px items-center">
				<VolumeIcon value={VolumeValue.Low} />
			</div>
		</HLButton>
	);
};
