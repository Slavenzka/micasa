import React from 'react'
import css from './CitizenDetailsGeneralCard.module.scss'
import classnames from 'classnames'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'

const CitizenDetailsGeneralCard = ({className, data}) => {
  const keysLocale = {
    name: `Власник`,
    address: `Адреса`,
    account: `Номер р/р`,
    phone: `Телефон`,
    email: `Email`
  }

  const tableRows = Object.entries(data).map(([key, value], index) => (
    <tr className={css.row} key={index}>
      <td className={css.key}>
        { keysLocale[key] }
      </td>
      <td className={css.value}>
        { value }
      </td>
    </tr>
  ))



  return (
    <DashboardCard
      className={classnames(css.wrapper, className)}
      heading={ `Картка мешканця` }
      classNameHeading={css.heading}
    >
      <table className={css.table}>
        <tbody>
          { tableRows }
        </tbody>
      </table>
    </DashboardCard>
  )
}

export default CitizenDetailsGeneralCard
