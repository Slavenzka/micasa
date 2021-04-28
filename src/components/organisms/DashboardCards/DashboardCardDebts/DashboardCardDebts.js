import React from 'react'
import css from 'components/organisms/DashboardCards/DashboardCardDebts/DashboardCardDebts.module.scss'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import ChartBar from 'components/atoms/ChartBar/ChartBar'
import Link from 'components/atoms/Link/Link'
import ChartTooltipTemplate from 'components/templates/ChartTooltipTemplate/ChartTooltipTemplate'
import { monthsLocale } from 'utils/const'
import AxisLabel from 'components/atoms/AxisLabel/AxisLabel'
import { getDateComponents } from 'utils'
import { Bar } from 'recharts'

const DashboardCardDebts = ({data, className}) => {
  const renderTooltipContent = data => {

    const amount = data?.activePayload[0]?.value
    const timestamp = data?.activeLabel
    const date = new Date(timestamp)
    const month = monthsLocale[date.getMonth()]
    const year = `${date.getFullYear()}`.slice(2)

    return (
      <>
        <span>{ `${month}'${year}` }</span>
        <span>{ `${amount} тис \u{20B4}` }</span>
      </>
    )
  }

  const getDateTick = timestamp => {
    const {month, year} = getDateComponents(new Date(timestamp))
    const trimmedYear = `${year}`.slice(2)

    return `${month}.${trimmedYear}`
  }

  return (
    <DashboardCard
      heading={ `Заборгованості по комунальним послугам` }
      className={className}
    >
      <ChartBar
        data={data}
        options={{
          width: 500,
          height: 170,
          barWidth: 16,
          isYAxis: false,
          xAxisShift: (data[data.length - 1].date - data[0].date) * 0.1
        }}
        yAxisLabel={<AxisLabel label={ `Тисяч грн` } />}
        xAxisTickFormatter={getDateTick}
        renderTooltip={({data, ...props}) => (
          <ChartTooltipTemplate
            {...props}
          >
            { renderTooltipContent(data) }
          </ChartTooltipTemplate>
        )}
      >
        {({barWidth, chartRef, fontSize}) => (
          <Bar
            dataKey="value"
            barSize={barWidth * fontSize / 10}
            fill="rgb(95, 164, 153)"
            ref={chartRef}
          />
        )}
      </ChartBar>
      <Link className={css.link}>
        Перейти до заборгованостей
      </Link>
    </DashboardCard>
  )
}

export default DashboardCardDebts
