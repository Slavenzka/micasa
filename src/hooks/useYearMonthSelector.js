import React, { useEffect } from 'react'
import css from 'styles/yearMonthSelector.module.scss'
import { getYearOptions } from 'utils'
import DropdownList from 'components/atoms/DropdownList/DropdownList'

const useYearMonthSelector = ({
  localization,
  calendarState,
  updateCalendarState,
}) => {
  const actualYear = new Date().getFullYear()
  const fromMonth = new Date(actualYear - 3, calendarState?.from ? calendarState.from.getMonth() : new Date().getMonth())
  const toMonth = new Date(actualYear, 11)

  const monthOptions = localization.months

  // const yearOptions = [];
  // for (let i = fromMonth.getFullYear() - 1; i <= toMonth.getFullYear(); i += 1) {
  //   years.push(i);
  // }

  const yearOptions = getYearOptions(fromMonth.getFullYear(), toMonth.getFullYear() - fromMonth.getFullYear() + 1)

  const handleYearMonthChange = month => {
    console.log(month)
    updateCalendarState(prevState => {
      return {
        ...prevState,
        month,
      }
    })
  }

  const getSelectedMonth = date => localization.months[date.getMonth()]
  const getSelectedYear = date => date.getFullYear()

  const handleChange = function handleChange(date, value) {
    const updatedObject = {
      year: date.getFullYear(),
      month: localization.months[date.getMonth()],
      ...value
    }
    const { year, month } = updatedObject
    handleYearMonthChange(new Date(year, localization.months.findIndex(item => item === month)));
  }

  return date => (
    <div className={'DayPicker-Caption'}>
      <div className={css.selectWrapper}>
        <DropdownList
          className={css.dropdown}
          label={getSelectedMonth(date)}
          list={monthOptions}
          onChange={month => handleChange(date, {
            month
          })}
        />
        <DropdownList
          className={css.dropdown}
          label={getSelectedYear(date)}
          list={yearOptions}
          onChange={year => handleChange(date, {
            year
          })}
          isLargerFont
        />
      </div>
    </div>
  )

}

export default useYearMonthSelector
