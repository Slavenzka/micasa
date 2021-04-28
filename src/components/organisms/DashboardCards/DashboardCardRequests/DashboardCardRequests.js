import React from 'react'
import css from 'components/organisms/DashboardCards/DashboardCardRequests/DashboardCardRequests.module.scss'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import ChartBar from 'components/atoms/ChartBar/ChartBar'
import ChartTooltipTemplate from 'components/templates/ChartTooltipTemplate/ChartTooltipTemplate'
import AxisLabel from 'components/atoms/AxisLabel/AxisLabel'
import { Bar, Legend } from 'recharts'
import { getDateComponents } from 'utils'
import Heading from 'components/atoms/Heading/Heading'

const DashboardCardRequests = ({data, className}) => {
  const chartOptions = {
    width: 350,
    height: 170,
    barWidth: 8,
    isYAxis: true,
    xAxisShift: (data[data.length - 1].date - data[0].date) * 0.1
  }

  function renderTooltip ({data, tooltipStyle = {}, fontSize, ...props}) {
    return (
      <ChartTooltipTemplate
        tooltipStyle={{
          ...tooltipStyle,
          left: tooltipStyle.left ? tooltipStyle.left + 5 * fontSize / 10 : 0,
          width: 'auto'
        }}
        {...props}
      >
        { renderTooltipContent(data) }
      </ChartTooltipTemplate>
    )
  }

  function renderTooltipContent (data = {}) {
    const {activePayload = []} = data

    return (
      <ul className={css.list}>
        {activePayload.map(({fill, value}, index) => (
          <li className={css.item} key={index}>
            <svg className={css.circle} viewBox={ `0 0 120 120` }>
              <circle cx={60} cy={60} r={60} fill={fill} />
            </svg>
            <span>{ value }</span>
          </li>
        ))}
      </ul>
    )
  }

  function renderCounter () {
    return (
      <div className={css.counter}>
        <Heading>
          Відкритих заявок
        </Heading>
        <span className={css.value}>
          16
        </span>
      </div>
    )
  }

  function getDateTick (timestamp) {
    const {day, month} = getDateComponents(new Date(timestamp))

    return `${day}.${month}`
  }

  const formatLegend = value => value === 'total'
    ? 'всього заявок'
    : 'закритi'

  return (
    <DashboardCard
      heading={ `Заявки на виклик майстрів` }
      className={className}
      annex={renderCounter()}
    >
      <ChartBar
        data={data}
        legend={(
          <Legend
            verticalAlign={ `bottom` }
            iconSize={16}
            formatter={formatLegend}
            wrapperStyle={{ bottom: '-2rem' }}
          />
        )}
        options={chartOptions}
        yAxisLabel={<AxisLabel label={ `Кількість` } />}
        xAxisTickFormatter={getDateTick}
        renderTooltip={renderTooltip}
        className={css.chart}
      >
        {({barWidth, chartRef, fontSize}) => new Array(2).fill('').map((_, index) => (
          <Bar
            dataKey={index === 0 ? `total` : `done`}
            barSize={barWidth * fontSize / 10}
            fill={index === 0 ? `rgb(95, 164, 153)` : `rgb(255, 136, 102)`}
            legendType={ `circle` }
            ref={index === 0 ? chartRef : null}
            key={index}
          />
        ))}
      </ChartBar>
    </DashboardCard>
  )
}

export default DashboardCardRequests
