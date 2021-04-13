import React from 'react'
import css from './SidebarItem.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const SidebarItem = ({
  label,
  url,
  tag = 'li',
  icon,
}) => {
  const TagName = tag

  return (
    <TagName
      className={classnames(css.wrapper)}
    >
      <Link
        className={css.link}
        to={url}
      >
        <span className={css.icon}>
          { icon || <span className={css.iconDummy} /> }
        </span>
        <span className={css.label}>
          { label }
        </span>
      </Link>
    </TagName>
  )
}

export default SidebarItem
