import React from 'react'
import css from './ChartPie.module.scss'
import classnames from 'classnames'
import { PieChart, Pie, Cell, Legend, Label } from 'recharts'
import { useSelector } from 'react-redux'

const ChartPie = ({data}) => {
  const fontSize = useSelector(store => store.elastic.curFontSize)

  if (!data || !Array.isArray(data) || data.length === 0) return

  const getTotal = () => data.reduce((total, item) => {
    total += item.value
    return total
  }, 0)

  const total = [{ name: 'Total', value: getTotal() }]

  const renderLabel = ({payload}) => {
    const {value, name} = payload
    const isPayed = name === 'сплачено'

    return (
      <text
        x={ `${isPayed ? 27 : 72}%` }
        y={isPayed ? '10%' : '86%'}
        className={classnames(css.label, {
          [css.labelLight]: !isPayed
        })}
        textAnchor={isPayed ? 'end' : 'start'}
      >
        {`${value.toLocaleString('ru')} \u{20B4}`}
      </text>
    )
  }

  return (
    <div className={css.wrapper}>
        <PieChart width={400 * fontSize / 10} height={330 * fontSize / 10}>
          <Pie
            data={total}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={75 * fontSize / 10}
            fill="rgb(52, 125, 114)"
            legendType={ `none` }
            paddingAngle={0}
          >
            <Label value={total[0].value} position={'center'} formatter={value => `${value.toLocaleString('ru')} \u{20B4}`} />
          </Pie>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={113 * fontSize / 10} outerRadius={135 * fontSize / 10}
            fill="#82ca9d"
            legendType={ `square` }
            label={renderLabel}
          >
            {data.map((entry, index) => (
              <React.Fragment key={`cell-${index}`}>
                <Cell name={entry.name} fill={index === 0 ? 'rgb(52, 125, 114)' : 'rgba(228, 238, 243)'} />
                {/*<Label value={entry} position={'outside'} className={css.label} content={props => renderLabel} />*/}
              </React.Fragment>
            ))}
          </Pie>
          <Legend verticalAlign={'bottom'} iconSize={20} wrapperStyle={{ fontSize: '1.6rem', fontFamily: 'Roboto' }} />
        </PieChart>
    </div>
  )
}

export default ChartPie
