import React from 'react'
import css from './DashboardGrid.module.scss'
import classnames from 'classnames'

const DashboardGrid = ({
  className,
  children
}) => {
  return (
    <div className={classnames(css.wrapper, className)}>
      { children }
    </div>
  )
}

export default DashboardGrid
