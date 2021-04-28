import { getDateComponents } from 'utils/index'
import { monthsLocaleShort, PaymentStatuses } from 'utils/const'

export const adaptPayments = data => data.map(({
  date,
  status,
  ...item
}) => {
  const {year, month, day} = getDateComponents(new Date(date))
  const yearTrimmed = `${year}`.slice(2)

  return {
    ...item,
    date,
    status,
    dateProcessed: `${day} ${monthsLocaleShort[month - 1]} ${yearTrimmed}`,
    statusProcessed: PaymentStatuses[status.toUpperCase()]?.ua || ''
  }
})
