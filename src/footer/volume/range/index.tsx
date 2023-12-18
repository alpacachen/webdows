import React, { FC, useCallback, useRef } from "react";
import { useBearStore } from "../../../state";

const useMousePointDownMove = () => {
    const setVolume = useBearStore((s) => s.setVolume);
    const setVolumeAbsolute = useBearStore((s) => s.setVolumeAbsolute);
    const [isMouseDown, setIsMouseDown] = React.useState(false);
    const parentRef = useRef<HTMLDivElement>(null);
    const onMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (isMouseDown) {
                const width = parentRef.current?.clientWidth ?? 0;
                setVolume((e.movementX / width) * 100);
            }
        },
        [isMouseDown, setVolume]
    );

    const click = useCallback((e: React.MouseEvent) => {
        const left =
            e.clientX -
            (parentRef.current?.getBoundingClientRect?.()?.left ?? 0);
        const width = parentRef.current?.clientWidth ?? 0;
        setVolumeAbsolute((left / width) * 100);
    }, []);

    return [setIsMouseDown, onMouseMove, parentRef, click] as const;
};

export const VolumeRange = () => {
    const volume = useBearStore((s) => s.volume);

    const [setIsMouseDown, onMouseMove, parentRef, click] =
        useMousePointDownMove();

    return (
        <div
            onMouseMove={onMouseMove}
            ref={parentRef}
            onMouseUp={() => setIsMouseDown(false)}
            onMouseLeave={() => setIsMouseDown(false)}
            className="h-8 relative flex w-full items-center"
        >
            <div className="h-1 w-full rounded flex overflow-hidden">
                <div
                    onClick={click}
                    style={{ width: `${volume}%` }}
                    className="bg-deep"
                ></div>
                <div onClick={click} className="bg-gray flex-1"></div>
            </div>
            <div
                onMouseDown={() => setIsMouseDown(true)}
                style={{ left: `${volume}%` }}
                className="-translate-x-50% absolute rounded-full h-3 w-3 bg-white cursor-pointer bg-deep b-3px b-style-solid box-border border-color-white transition-border hover:b-2px"
            ></div>
        </div>
    );
};
