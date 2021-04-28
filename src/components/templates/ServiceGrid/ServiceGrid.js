import React from 'react'
import css from  './ServiceGrid.module.scss'
import classnames from 'classnames'

const ServiceGrid = ({
  className,
  tag = 'div',
  children,
}) => {
  const TagName = tag

  return (
    <TagName className={classnames(css.wrapper, className)}>
      { children }
    </TagName>
  )
}

export default ServiceGrid
