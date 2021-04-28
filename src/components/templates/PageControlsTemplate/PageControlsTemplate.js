import React from 'react'
import css from './PageControlsTemplate.module.scss'
import classnames from 'classnames'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'utils/const'
import { Link } from 'react-router-dom'
import IconArrowSidebar from 'assets/icons/IconArrowSidebar'

const PageControlsTemplate = ({
  className,
  heading,
  isHeadingVisible,
  renderHeadingNeighbor,
  children,
  backlinkURL,
}) => {
  return (
    <div className={classnames(css.wrapper, className)}>
      <div className={css.top}>
        {backlinkURL &&
          <Link
            to={backlinkURL}
            className={css.backlink}
          >
            <IconArrowSidebar className={css.icon} />
            повернутись
          </Link>
        }
        <Heading
          className={classnames(css.heading, { [`visuallyHidden`]: !isHeadingVisible })}
          type={HeadingTypes.H1}
        >
          { heading }
        </Heading>
        { renderHeadingNeighbor && renderHeadingNeighbor(css.link) }
      </div>
      <React.Fragment>
        { children }
      </React.Fragment>
    </div>
  )
}
export default PageControlsTemplate
