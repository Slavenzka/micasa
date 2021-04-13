import React from 'react'
import css from './ChartTooltipTemplate.module.scss'
import classnames from 'classnames'

const ChartTooltipTemplate = ({
  className,
  tooltipStyle,
  setRef,
  isVisible,
  children
}) => {
  return (
    <div
      className={classnames(css.wrapper, className, {
        [css.wrapperVisible]: isVisible && children
      })}
      style={{...tooltipStyle}}
      ref={setRef}
    >
      { children }
    </div>
  )
}

export default ChartTooltipTemplate
