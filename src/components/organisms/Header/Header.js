import React from 'react'
import css from './Header.module.scss'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
import IconUser from 'assets/icons/IconUser'
import Logo from 'components/atoms/Logo/Logo'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'

const Header = ({
  className,
  style = {},
}) => {
  const role = 'Операцiонiст'

  return (
    <header
      className={classnames(css.wrapper, className)}
      style={{...style}}
    >
      <Logo />
      <Button
        onClick={() => {}}
        className={css.button}
        palette={ButtonPalettes.TEXT}
        height={ButtonHeights.CONTENT}
      >
        { role }
        <IconUser className={css.icon} />
      </Button>
    </header>
  )
}

export default withRouter(Header)
