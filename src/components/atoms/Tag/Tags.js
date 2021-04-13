import React from 'react'
import css from './Tags.module.scss'
import classnames from 'classnames'

const Tags = ({className, children}) => {
  if (!children) return null

  if (children && Array.isArray(children)) return (
    <ul className={classnames(css.list, className)}>
      { children.map((item, index) => (
        <li className={css.item} key={index}>
          { `#${item.toLowerCase()}` }
        </li>
      )) }
    </ul>
  )


  return children
    ? (
      <span className={classnames(css.item, className)}>
        { `#${children.toLowerCase()}` }
      </span>
    )
    : null
}

export default Tags
