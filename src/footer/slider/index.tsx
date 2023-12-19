import React, {
    Ref,
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { SlideDirection, SliderProps, SliderRef } from "./type";
import { FooterBarHeight, SliderZIndex } from "../../constance";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { useClickAway } from "react-use";
import styles from "./index.module.less";

const _Slider = (props: SliderProps, ref: Ref<SliderRef>) => {
    const { children } = props;
    const [showMessage, setShowMessage] = useState(false);
    const [direction, setDirection] = useState(SlideDirection.bottomToTop);
    useImperativeHandle(ref, () => ({
        open: (dir: SlideDirection) => {
            setDirection(dir);
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
                            maxHeight: `calc(100vh - ${FooterBarHeight})`,
                            zIndex: SliderZIndex,
                            bottom: FooterBarHeight,
                        }}
                        className={classNames(
                            "absolute right-4",
                            styles[direction]
                        )}
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
