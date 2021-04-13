import React from 'react'
import css from './Sidebar.module.scss'
import classnames from 'classnames'
import SidebarNavigation from 'components/molecules/SidebarNavigation/SidebarNavigation'
import IconLogout from 'assets/icons/IconLogout'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'

const Sidebar = ({className, style}) => {
  return (
    <aside
      className={classnames(css.wrapper, className)}
      style={{...style}}
    >
      <SidebarNavigation />
      <Button
        onClick={() => {}}
        className={css.button}
        palette={ButtonPalettes.TEXT}
        height={ButtonHeights.CONTENT}
      >
        <IconLogout className={css.icon} />
        Вихiд
      </Button>
    </aside>
  )
}

export default Sidebar
