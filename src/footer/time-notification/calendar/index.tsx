import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import React from "react";
import { useBearStore } from "../../../state";
import { Solar} from 'lunar-typescript';
const Divider = () => <div className="h-1px bg-gray opacity-20"></div>;
export const Calendar = () => {
    const date = useBearStore(s => s.date)
    const solar = Solar.fromDate(date)
    return (
        <div className="w-300px bg-light rounded-2 mb-4 slide-shadow overflow-hidden">
            <div className="p-4 text-14">
                <p>{format(date, "MM月dd日, EE", { locale: zhCN })}</p>
                <p>{`${solar.getLunar().getMonthInChinese()}月${solar.getLunar().getDayInChinese()}`}</p>
            </div>
            <Divider />
            <div className="p-4"></div>
        </div>
    );
};
