import React from 'react'
import css from './CitizenDetailsDataCard.module.scss'
import classnames from 'classnames'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import { ApplicationStatuses } from 'utils/const'

const CitizenDetailsDataCard = ({className, heading, list, extraBlock}) => {
  const tableRows = list.map((row, index) => (
    <tr className={css.row} key={index}>
      {Object.keys(row).map((key, index) => {
        const isWarning = (key === `status` && row[key] === ApplicationStatuses.OVERDUE.ua) ||
          (key === 'amount' && row[key] < 0)

        const value = Number.isNaN(+row[key])
          ? row[key]
          : (+row[key]).toLocaleString('ru')

        return (
          <td
            className={classnames(css.cell, {
              [css.cellWarning]: isWarning
            })}
            key={index}
          >
            { value }
          </td>
        )
      })}
    </tr>
  ))

  return (
    <DashboardCard
      heading={heading}
      className={classnames(css.wrapper, className)}
    >
      <table className={css.table}>
        <tbody>
        { tableRows }
        </tbody>
      </table>
      { extraBlock }
    </DashboardCard>
  )
}

export default CitizenDetailsDataCard
