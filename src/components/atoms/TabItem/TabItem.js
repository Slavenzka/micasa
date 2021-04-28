import React from 'react'
import css from './TabItem.module.scss'
import classnames from 'classnames'

const TabItem = ({
  className,
  isActive,
  handleClickTab,
  tag = 'li',
  children,
}) => {
  const TagName = tag

  return (
    <TagName className={classnames(css.item, className)}>
      <button
        onClick={handleClickTab}
        className={classnames(css.trigger, {
          [css.triggerActive]: isActive
        })}
      >
        { children }
      </button>
    </TagName>
  )
}

export default TabItem
