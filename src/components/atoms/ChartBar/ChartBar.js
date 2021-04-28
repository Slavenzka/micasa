import React, { useCallback, useState } from 'react'
import css from './ChartBar.module.scss'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import { BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const ChartBar = ({
    className,
    data,
    renderTooltip,
    yAxisLabel,
    xAxisTickFormatter,
    legend,
    options,
    children,
  }) => {
  const [tooltip, setTooltip] = useState(false)
  const [gridRef, setGridRef] = useState(null)
  const fontSize = useSelector(store => store.elastic.curFontSize)
  const [toolTipRef, setTooltipRef] = useState(null)

  const {width, height, barWidth, isYAxis, xAxisShift} = options

  const handleMouseMove = useCallback(evt => {
    const index = evt?.activeTooltipIndex

    if (evt && !Number.isNaN(+index) && toolTipRef && gridRef) {
      const points = gridRef.props.data

      setTooltip(() => {
        return {
          data: evt,
          tooltipStyle: {
            top: gridRef.props.xAxis.y - points[index].height - toolTipRef.getBoundingClientRect().height - 7 * fontSize / 10,
            left: points[index].tooltipPosition.x - toolTipRef.getBoundingClientRect().width / 2 - barWidth * fontSize / 10 / 4
          }
        }
      })
    }
  }, [fontSize, toolTipRef, gridRef, barWidth])

  const getTooltipProps = () => ({
    className: css.tooltip,
    isVisible: !!tooltip && toolTipRef,
    setRef: setTooltipRef,
    fontSize,
    ...tooltip
  })

  return (
    <div className={classnames(css.wrapper, className)}>
      <BarChart
        width={width * fontSize / 10}
        height={height * fontSize / 10}
        data={data}
        margin={{top: 50, right: 15, left: -35}}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTooltip(prevState => ({
          ...prevState,
          isVisible: false
        }))}
      >
        <CartesianGrid strokeDasharray='3 3' vertical={false} />
        <XAxis
          domain={[`dataMin - ${xAxisShift}`, 'dataMax']}
          type={`number`}
          dataKey='date'
          tickFormatter={xAxisTickFormatter}
          tickLine={false}
        />
        <YAxis
          domain={[0, 'dataMax + 10']}
          axisLine={isYAxis}
          label={yAxisLabel}
          tickFormatter={value => value === 0 ? '' : value}
          tickLine={false}
        />
        { children({barWidth, chartRef: setGridRef, fontSize}) }
        { legend }
      </BarChart>
      { renderTooltip(getTooltipProps()) }
    </div>
  )
}

export default ChartBar
