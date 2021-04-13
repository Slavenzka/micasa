import React from 'react'
import css from 'components/templates/DashboardCard/DashboardCard.module.scss'
import classnames from 'classnames'
import Heading from 'components/atoms/Heading/Heading'

const DashboardCard = ({
  className,
  annex,
  tag = 'div',
  heading,
  children,
}) => {
  const TagName = tag

  return (
    <TagName
      className={classnames(css.wrapper, className)}
    >
      <div
        className={classnames(css.content, {
          [css.contentAnnex]: !!annex
        })}
      >
        {heading &&
          <Heading
            className={css.heading}
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
