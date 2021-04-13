import React from 'react'
import css from './SidebarNavigation.module.scss'
import { SIDEBAR_LIST } from 'Pages/Routes'
import SidebarItem from 'components/atoms/SidebarItem/SidebarItem'

const SidebarNavigation  = ({className}) => {
  const list = SIDEBAR_LIST.map((item, index) => (
    <React.Fragment key={index}>
      <SidebarItem
        {...item}
      />
    </React.Fragment>
  ))

  return (
    <nav className={className}>
      <ul className={css.list}>
        { list }
      </ul>
    </nav>

  )
}

export default SidebarNavigation
