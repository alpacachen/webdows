import React from "react";

export interface SliderProps {
    children: React.ReactNode
}
export interface SliderRef {
    open: (direction: SlideDirection) => void
}

export enum SlideDirection {
    bottomToTop = 'bottomToTop',
    rightToLeft = 'rightToLeft'
}