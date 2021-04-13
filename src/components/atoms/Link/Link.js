import React from 'react'
import css from './Link.module.scss'
import classnames from 'classnames'
import { Link as LinkRouter } from 'react-router-dom'

const Link = ({
  className,
  url = `#`,
  children,
  ...extraProps
}) => {
  const isHTTP = url && typeof url === `string` && url.toLowerCase().includes(`http`)

  const config = {
    TagName: LinkRouter,
    props: {
      to: url,
      ...extraProps
    }
  }

  if (isHTTP) {
    config.TagName = 'a'
    config.props = {
      href: url,
      rel: `noopener noreferrer`,
      ...extraProps
    }
  }

  const {TagName, props} = config

  return (
    <TagName
      className={classnames(css.link, className)}
      {...props}
    >
      { children }
    </TagName>
  )
}

export default Link
