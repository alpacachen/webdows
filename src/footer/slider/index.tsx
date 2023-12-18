import React, {
    Ref,
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { SliderProps, SliderRef } from "./type";
import {
    FooterBarHeight,
    PanelBackground,
    SliderZIndex,
} from "../../constance";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { useClickAway } from "react-use";
const _Slider = (props: SliderProps, ref: Ref<SliderRef>) => {
    const { children } = props;
    const [showMessage, setShowMessage] = useState(false);
    useImperativeHandle(ref, () => ({
        open: () => {
            setShowMessage(true);
        },
    }));
    const nodeRef = useRef<HTMLDivElement>(null);
    useClickAway(nodeRef, () => {
        setShowMessage(false);
    });
    if (showMessage) {
        return (
            <>
                {createPortal(
                    <div
                        ref={nodeRef}
                        style={{
                            zIndex: SliderZIndex,
                            background: PanelBackground,
                            bottom: FooterBarHeight + 8,
                        }}
                        className={classNames("rounded-2 absolute right-2")}
                    >
                        {children}
                    </div>,
                    document.body
                )}
            </>
        );
    } else {
        return <></>;
    }
};

export const Slider = forwardRef(_Slider);
