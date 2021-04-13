import React from 'react'
import css from './SiteGrid.module.scss'
import classnames from 'classnames'

const SiteGrid = ({children, className}) => {
  return (
    <div className={classnames(css.wrapper, className)}>
      { children }
    </div>
  )
}

export default SiteGrid
