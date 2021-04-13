import React from 'react'
import css from './AxisLabel.module.scss'

const AxisLabel = ({label, dy = 10}) => {
  return (
    <text className={css.labelAxis} y={dy}>
      { label }
    </text>
  )
}

export default AxisLabel
