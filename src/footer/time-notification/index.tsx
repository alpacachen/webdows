import { format } from "date-fns";
import React, { useState } from "react";
import { useInterval } from "react-use";
import { HLButton } from "../hl-button";
import Notification from "./notification.svg?react";

export const TimeAndNotification = () => {
	const [date, setDate] = useState(new Date());
	useInterval(() => {
		setDate(new Date());
	}, 1000 * 10);
	return (
		<HLButton className='py-1'>
			<div className="flex items-center">
				<div className='text-right mr-2'>
                    <p>{format(date, 'HH:mm')}</p>
                    <p>{format(date, 'yyy/MM/dd')}</p>
                </div>
				<Notification width={14} height={24} />
			</div>
		</HLButton>
	);
};
