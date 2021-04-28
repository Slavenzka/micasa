import React from 'react'
import css from './DashboardCard.module.scss'
import classnames from 'classnames'
import Heading from 'components/atoms/Heading/Heading'

const   DashboardCard = ({
  className,
  classNameHeading,
  annex,
  tag = 'div',
  heading,
  children,
  ...extraProps
}) => {
  const TagName = tag

  return (
    <TagName
      className={classnames(css.wrapper, className)}
      {...extraProps}
    >
      <div
        className={classnames(css.content, {
          [css.contentAnnex]: !!annex
        })}
      >
        {heading &&
          <Heading
            className={classnames(css.heading, classNameHeading)}
          >
            { heading }
          </Heading>
        }
        { children }
      </div>
      {annex &&
        <div className={css.annex}>
          { annex }
        </div>
      }
    </TagName>
  )
}

export default DashboardCard
