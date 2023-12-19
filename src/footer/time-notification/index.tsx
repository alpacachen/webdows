import { format } from "date-fns";
import React, { useRef, useState } from "react";
import { useInterval } from "react-use";
import { HLButton } from "../hl-button";
import { Slider } from "../slider";
import { SlideDirection, SliderRef } from "../slider/type";
import Notification from "./notification.svg?react";

export const TimeAndNotification = () => {
    const [date, setDate] = useState(new Date());
    useInterval(() => {
        setDate(new Date());
    }, 1000 * 10);
    const ref = useRef<SliderRef>(null);
    return (
        <>
            <Slider ref={ref}>
                <div className="w-260px p-4 bg-light rounded-2 mb-4 slide-shadow">11</div>
                <div className="w-260px p-4 bg-light rounded-2 mb-4 slide-shadow">22</div>
            </Slider>
            <HLButton
                onClick={() => ref.current?.open(SlideDirection.rightToLeft)}
                className="py-1"
            >
                <div className="flex items-center">
                    <div className="text-right mr-2">
                        <p>{format(date, "HH:mm")}</p>
                        <p>{format(date, "yyy/MM/dd")}</p>
                    </div>
                    <Notification width={14} height={24} />
                </div>
            </HLButton>
        </>
    );
};
