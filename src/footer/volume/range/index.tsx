import React, { FC, useCallback } from "react";

const useMousePointDownMove = (onChange: (movementX: number) => void) => {
    const [isMouseDown, setIsMouseDown] = React.useState(false);
    const onMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (isMouseDown) {
                const width = 260;
                onChange((e.movementX / width) * 100);
            }
        },
        [isMouseDown, onChange]
    );

    return [setIsMouseDown, onMouseMove] as const;
};

export const VolumeRange: FC<{
    value: number;
    onChange: (movementX: number) => void;
}> = (props) => {
    const { onChange, value } = props;
    const [setIsMouseDown, onMouseMove] = useMousePointDownMove(onChange);

    return (
        <div
            onMouseMove={onMouseMove}
            onMouseUp={() => setIsMouseDown(false)}
            className="h-8 relative flex w-full items-center"
        >
            <div className="h-1 w-full rounded flex overflow-hidden">
                <div style={{ width: `${value}%` }} className="bg-deep"></div>
                <div className="bg-gray flex-1"></div>
            </div>
            <div
                onMouseDown={() => setIsMouseDown(true)}
                style={{ left: `${value}%` }}
                className="-translate-x-50% absolute rounded-full h-3 w-3 bg-white cursor-pointer bg-deep b-3px b-style-solid box-border border-color-white transition-border hover:b-2px"
            ></div>
        </div>
    );
};
