import React, { FC, useMemo } from "react";

export enum VolumeValue {
	High,
	Middle,
	Low,
	Mute,
}

export const VolumeIcon: FC<{ value: VolumeValue }> = ({ value }) => {
	const colors = useMemo(() => {
		switch (value) {
			case VolumeValue.High:
				return ["currentColor", "currentColor"];
			case VolumeValue.Middle:
				return ["currentColor", "lightGray"];
			default:
			case VolumeValue.Low:
				return ["lightGray", "lightGray"];
		}
	}, [value]);
	return (
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17403" width="16" height="16">
			<path
				d="M91.2384 285.3376v457.5232H303.104l310.3744 195.5328V91.4944l-304.64 193.8432z m460.8-81.92v623.6672l-231.2192-145.664H152.6784V346.7776h174.08zM687.0016 355.6352l-43.4176 43.4176a164.608 164.608 0 0 1 0 232.704l43.4176 43.4688a225.9456 225.9456 0 0 0 0-319.5904z"
				fill="currentColor"
				p-id="17404"
			></path>
			<path
				d="M754.4832 288.1536l-43.4176 43.4176a259.9936 259.9936 0 0 1 0 367.6672l43.4176 43.4688a321.3824 321.3824 0 0 0 0-454.5536z"
				fill={colors[0]}
				p-id="17405"
			></path>
			<path
				d="M782.6944 259.9424a361.3184 361.3184 0 0 1 0 510.976l43.4688 43.4176a422.8096 422.8096 0 0 0 0-597.8624z"
				fill={colors[1]}
				p-id="17406"
			></path>
		</svg>
	);
};
