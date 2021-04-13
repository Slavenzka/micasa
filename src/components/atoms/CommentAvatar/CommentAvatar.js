import React from 'react'
import css from './CommentAvatar.module.scss'
import classnames from 'classnames'

const CommentAvatar = ({
  className,
  image,
  label = 'User avatar'
}) => {
  return (
    <img
      className={classnames(css.avatar, className)}
      src={image}
      alt={label}
    />
  )
}

export default CommentAvatar
