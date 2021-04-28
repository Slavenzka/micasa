import React from 'react'
import css from './ServiceCard.module.scss'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import IconClock from 'assets/icons/IconClock'

const ServiceCard = ({
  className,
  data
}) => {
  const {
    heading,
    descriptor,
    schedule,
    renderIcon
  } = data

  return (
    <DashboardCard
      tag={ `li` }
      heading={heading}
      className={css.wrapper}
    >
      <span className={css.descriptor}>
        { descriptor }
      </span>
      <span className={css.schedule}>
        <IconClock className={css.icon} />
        { schedule }
      </span>
      {renderIcon &&
        renderIcon(css.iconImage)
      }
    </DashboardCard>
  )
}

export default ServiceCard
