import React from 'react'
import css from './Tabs.module.scss'
import classnames from 'classnames'
import TabItem from 'components/atoms/TabItem/TabItem'

const Tabs = ({
  className,
  list,
  handleClickTab,
  activeTab
}) => {
  if (!list || !Array.isArray(list) || list.length === 0 || !activeTab) return null

  const items = list.map((item, index) => {
    const {values, label} = item

    return (
      <TabItem
        handleClickTab={() => handleClickTab(item)}
        isActive={values === activeTab.values}
        key={index}
      >
        { label }
      </TabItem>
    )
  })

  return (
    <ul
      className={classnames(css.list, className)}
    >
      { items }
    </ul>
  )
}

export default Tabs
