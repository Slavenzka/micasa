import React from 'react'
import css from './Text.module.scss'
import classnames from 'classnames'

const Text = ({className, children}) => {
  return children
    ? (
      <p className={classnames(css.wrapper, className)} dangerouslySetInnerHTML={{ __html: children }} />
    )
    : null
}

export default Text
