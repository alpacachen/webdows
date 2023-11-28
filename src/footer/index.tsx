import React, { useState } from "react";
import styles from './index.module.less'
import { format } from 'date-fns'
import { useInterval } from 'react-use'

const Start = () => {
    return <div></div>
}

const RightPanel = () => {
    const [time, setTime] = useState(format(new Date(), 'HH:mm'))
    useInterval(() => {
        setTime(format(new Date(), 'HH:mm'))
    }, 1000 * 10)
    return <div className={styles.right}>
        {time}
    </div>
}

export const Footer = () => {
    return <div className={styles.footer}>
        <Start />
        <RightPanel />
    </div>
}