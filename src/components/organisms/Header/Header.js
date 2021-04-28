import React from 'react'
import css from './Header.module.scss'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
import IconUser from 'assets/icons/IconUser'
import Logo from 'components/atoms/Logo/Logo'
import Link from 'components/atoms/Link/Link'
import { USER_PROFILE } from 'Pages/Routes'

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
      <Link
        to={USER_PROFILE}
        className={css.button}
      >
        { role }
        <IconUser className={css.icon} />
      </Link>
    </header>
  )
}

export default withRouter(Header)
