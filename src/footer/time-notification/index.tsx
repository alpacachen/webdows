import { format } from "date-fns";
import React, { useRef } from "react";
import { useBearStore } from "../../state";
import { HLButton } from "../hl-button";
import { Slider } from "../slider";
import { SlideDirection, SliderRef } from "../slider/type";
import { Calendar } from "./calendar";
import Notification from "./notification.svg?react";

export const TimeAndNotification = () => {
    const date = useBearStore(s => s.date)
    const ref = useRef<SliderRef>(null);
    return (
        <>
            <Slider ref={ref}>
                <Calendar />
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
