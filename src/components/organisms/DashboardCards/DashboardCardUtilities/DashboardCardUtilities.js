import React from 'react'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import ChartPie from 'components/atoms/ChartPie/ChartPie'

const DashboardCardUtilities = ({data, className}) => {
  return (
    <DashboardCard
      className={className}
      heading={ `<span>Оплата коммунальних послуг</span><span>лютий'21</span>` }
    >
      <ChartPie
        data={data}
      />
    </DashboardCard>
  )
}

export default DashboardCardUtilities
