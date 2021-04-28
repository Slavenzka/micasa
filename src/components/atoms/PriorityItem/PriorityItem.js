import React from 'react'
import css from './PriorityItem.module.scss'
import classnames from 'classnames'

const PriorityItem = ({
  className,
  isUrgent,
  children,
}) => {
  return (
    <span className={classnames(css.priority, {
      [css.priorityUrgent]: isUrgent,
    })}>
      { children }
    </span>
  )
}

export default PriorityItem
