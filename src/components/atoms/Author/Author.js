import React from 'react'
import css from './Author.module.scss'
import classnames from 'classnames'

const Author = ({className, children}) => {
  return children
    ? (
      <span className={classnames(css.author, className)}>
        { children }
      </span>
    )
    : null
}

export default Author
