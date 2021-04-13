import React, { useState, useRef, useCallback } from 'react'
import css from './ChartLine.module.scss'
import { LineChart, CartesianGrid, Line, XAxis, YAxis } from 'recharts'
import { useSelector } from 'react-redux'
import { getDateComponents } from 'utils'
import LineChartTooltip from 'components/templates/ChartTooltipTemplate/ChartTooltipTemplate'

const ChartLine = ({data}) => {
  const [tooltip, setTooltip] = useState(false)
  const fontSize = useSelector(store => store.elastic.curFontSize)
  const chartRef = useRef(null)
  const toolTipRef = useRef(null)
  const TOOLTIP_WIDTH_REM = 10

  const renderLabel = ({x, y, stroke, value}) => {
    return (
      <text
        x={x}
        y={y}
        dy={-10}
        fill={stroke}
        fontSize={10}
        textAnchor={'middle'}
        className={css.labelChart}
      >
        { value }
      </text>
    )
  }

  const getDateTick = timestamp => {
    const {month, year} = getDateComponents(new Date(timestamp))
    const trimmedYear = `${year}`.slice(2)

    return `${month}.${trimmedYear}`
  }

  const handleMouseMove = useCallback(evt => {
    const points = chartRef.current.props.points
    const index = evt?.activeTooltipIndex

    if (evt && !Number.isNaN(+index) && toolTipRef.current) {
      const tooltipWidth = toolTipRef.current ? toolTipRef.current.getBoundingClientRect().width : 0
      const tooltipHeight = toolTipRef.current ? toolTipRef.current.getBoundingClientRect().height : 0
      console.log(tooltipWidth)

      setTooltip(() => {
        return {
          amount: evt.activePayload[0]?.value,
          timestamp: evt.activeLabel,
          tooltipStyle: {
            top: points[index].y - tooltipHeight * 1.15,
            left: points[index].x - 0.9 * fontSize * TOOLTIP_WIDTH_REM / 2
          }
        }
      })
    }
  }, [])

  return (
    <div className={css.wrapper}>
      <LineChart
        width={500 * fontSize / 10}
        height={170 * fontSize / 10}
        data={data}
        margin={{top: 50, right: 15, left: -35}}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTooltip(null)}
      >
        <CartesianGrid strokeDasharray='3 3' vertical={false} />
        <XAxis
          domain={[`dataMin - ${31 * 24 * 60 * 60 * 1000}`, 'dataMax']}
          type={`number`}
          dataKey='date'
          tickFormatter={value => getDateTick(value)}
        />
        <YAxis
          domain={[0, 'dataMax + 10']}
          tickLine={false}
          axisLine={false}
          label={() => <text className={css.labelAxis} y={10}>Тисяч грн</text>}
          tickFormatter={value => value === 0 ? '' : value}
        />
        <Line
          label={renderLabel}
          dot={false}
          type='monotone'
          dataKey='value'
          stroke='rgb(52, 125, 114)'
          strokeWidth={3}
          isAnimationActive={false}
          ref={chartRef}
        />
      </LineChart>
      <LineChartTooltip
        isVisible={!!tooltip && toolTipRef.current}
        setRef={toolTipRef}
        tooltipStyle={{
          width: `${TOOLTIP_WIDTH_REM}rem`
        }}
        {...tooltip}
      />
    </div>
  )
}

export default ChartLine
