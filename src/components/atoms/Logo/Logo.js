import React from 'react'
import css from './Logo.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import IconLogo from 'assets/icons/IconLogo'

const Logo = ({
  className,
  url
}) => {
  return url
    ? (
      <Link
        className={classnames(css.logo, className)}
        to={url}
      >
        <IconLogo className={css.icon} />
      </Link>
    )
    : (
      <span className={classnames(css.logo, className)}>
        <IconLogo className={css.icon} />
      </span>
    )
}

export default Logo
