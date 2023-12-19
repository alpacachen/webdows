import React from "react";
import { useCallback, useRef, useState } from "react";
import { useBearStore } from "../../../state";
import { useEvent } from "react-use";

const useMousePointDownMove = () => {
    const setVolume = useBearStore((s) => s.setVolume);
    const setVolumeAbsolute = useBearStore((s) => s.setVolumeAbsolute);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const parentRef = useRef<HTMLDivElement>(null);

    const click = useCallback(
        (e: React.MouseEvent) => {
            const left =
                e.clientX -
                (parentRef.current?.getBoundingClientRect?.()?.left ?? 0);
            const width = parentRef.current?.clientWidth ?? 0;
            setVolumeAbsolute((left / width) * 100);
        },
        [setVolumeAbsolute]
    );
    const buttonRef = useRef<HTMLDivElement>(null);
    useEvent("mousedown", (e: React.MouseEvent) => {
        if (e.target == buttonRef.current) {
            setIsMouseDown(true);
        }
    });
    useEvent("mouseup", () => {
        setIsMouseDown(false);
    });
    useEvent("mousemove", (e: React.MouseEvent) => {
        if (isMouseDown) {
            const width = parentRef.current?.clientWidth ?? 0;
            setVolume((e.movementX / width) * 100);
        }
    });

    return [buttonRef, parentRef, click] as const;
};

export const VolumeRange = () => {
    const volume = useBearStore((s) => s.volume);

    const [buttonRef, parentRef, click] = useMousePointDownMove();

    return (
        <div ref={parentRef} className="h-8 relative flex w-full items-center">
            <div className="h-1 w-full rounded flex overflow-hidden">
                <div
                    onClick={click}
                    style={{ width: `${volume}%` }}
                    className="bg-deep"
                ></div>
                <div onClick={click} className="bg-gray flex-1"></div>
            </div>
            <div
                ref={buttonRef}
                style={{ left: `${volume}%` }}
                className="-translate-x-50% absolute rounded-full h-3 w-3 bg-white cursor-pointer bg-deep b-3px b-style-solid box-border border-color-white transition-border hover:b-2px"
            ></div>
        </div>
    );
};
