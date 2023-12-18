import React, { useMemo, useRef } from "react";
import { HLButton } from "../hl-button";
import { VolumeIcon } from "./icon";
import { VolumeValue } from "./type";
import { Slider } from "../slider";
import { SliderRef } from "../slider/type";
import { VolumeRange } from "./range";
import { useBearStore } from "../../state";
export const Volume = () => {
    const ref = useRef<SliderRef>(null);
    const volume = useBearStore((s) => s.volume);
    const setVolume = useBearStore((s) => s.setVolume);
    const volumeIconValue = useMemo(() => {
        if (volume === 0) return VolumeValue.Mute;
        if (volume < 30) return VolumeValue.Low;
        if (volume < 70) return VolumeValue.Middle;
        return VolumeValue.High;
    }, [volume]);
    return (
        <>
            <Slider ref={ref}>
                <div className="w-260px p-4">
                    <VolumeRange
                        value={volume}
                        onChange={setVolume}
                    ></VolumeRange>
                </div>
            </Slider>
            <HLButton
                onClick={() => {
                    ref.current?.open();
                }}
            >
                <div className="flex h-24px items-center">
                    <VolumeIcon value={volumeIconValue} />
                </div>
            </HLButton>
        </>
    );
};
