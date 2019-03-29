import React from 'react'
import styles from './DelayedFade.module.scss'

interface IDelayedFadeProps {
  panLeft?: boolean
  panRight?: boolean
  panUp?: boolean
  panDown?: boolean
  children?: React.ReactNode
}

export const DelayedFade = (props: IDelayedFadeProps) => <div className={classNameForProps(props)}>{props.children}</div>

const classNameForProps = ({ panLeft, panRight, panUp, panDown }: IDelayedFadeProps): string => {
  if (panLeft) {
    return styles.delayedFadeInPanLeft
  } else if (panRight) {
    return styles.delayedFadeInPanRight
  } else if (panUp) {
    return styles.delayedFadeInPanUp
  } else if (panDown) {
    return styles.delayedFadeInPanDown
  } else {
    return styles.delayedFadeIn
  }
}
