import React from 'react'
import css from './Heading.module.scss'
import classnames from 'classnames'
import { HeadingTypes } from 'utils/const'
import PropTypes from 'prop-types'

const Heading = ({
  className,
  type = HeadingTypes.H2,
  tagName = 'h2',
  children
}) => {
  const TagName = tagName

  return (
    <TagName
      className={classnames(css.heading, className, {
        [css.h2]: type === HeadingTypes.H2,
        [css.h3]: type === HeadingTypes.H3,
      })}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

Heading.propTypes = {
  /*
  * External css class
  */
  className: PropTypes.string,
  /*
  * Heading style presets
  */
  type: PropTypes.oneOf([HeadingTypes.H2, HeadingTypes.H3]),
  /*
   * TagName property to manage tag independently from style presets
   */
  tagName: PropTypes.string,
  /*
  * Component contents
  */
  children: PropTypes.node
}

export default Heading
