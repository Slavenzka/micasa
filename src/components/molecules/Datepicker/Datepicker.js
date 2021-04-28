import React, { useCallback, useEffect, useRef, useState } from 'react'
import css from './Datepicker.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
// datepicker stuff
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { useDispatch } from 'react-redux'
import useYearMonthSelector from 'hooks/useYearMonthSelector'
import { monthsLocale } from 'utils/const'

const Datepicker = ({
  className,
  contentClassName,
  defaultDate,
  onDateSelect = () => {},
  selectedRange,
  isSingleDaySelection = true,
  isRangeStyle,
  isRangeEndStyle,
  isCalendarAlwaysOpen,
  isSelectedOnDayClick,
  externalState,
  children,
  ...extraProps
}) => {
  const localization = {
    locale: 'ua',
    weekdaysShort: [
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб',
      'Нд'
    ],
    months: monthsLocale,
  }

  const initialData = {
    from: defaultDate,
    to: null,
    enteredTo: null,
    selected: {
      from: defaultDate,
      to: null,
      enteredTo: null
    },
    month: null,
  }

  const dispatch = useDispatch()
  const [calendarState, updateCalendarState] = useState(initialData)
  const [isCalendarOpen, setCalendarOpen] = useState(isCalendarAlwaysOpen)
  const calendarWrapperRef = useRef(null)
  const buttonApplyRef = useRef(null)

  const isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }

  const handleDayClick = day => {
    const { from, to } = calendarState

    if (!isSingleDaySelection && from && to && day >= from && day <= to) {
      const date = defaultDate || null
      updateCalendarState(prevState => ({
        ...prevState,
        from: date,
        to: date,
        enteredTo: date
      }))
      return
    }

    if (isSingleDaySelection) {
      !isSelectedOnDayClick && updateCalendarState(prevState => ({
        ...prevState,
        from: day,
        to: day,
        enteredTo: null
      }))

      if (isSelectedOnDayClick) {
        updateCalendarState(prevState => ({
          ...prevState,
          from: day,
          to: day,
          enteredTo: null,
          selected: {
            from: day,
            to: day,
            enteredTo: null
          }
        }))
        handleCloseCalendar()
      }
    } else if (isSelectingFirstDay(from, to, day)) {
      updateCalendarState(prevState => ({
        ...prevState,
        from: day,
        to: null,
        enteredTo: null
      }))
    } else {
      updateCalendarState(prevState => ({
        ...prevState,
        from: from,
        to: day,
        enteredTo: day
      }))
    }
  }

  const handleClickApply = () => {
    updateCalendarState(prevState => ({
      ...prevState,
      selected: {
        from: prevState.from,
        to: prevState.to,
        enteredTo: prevState.enteredTo
      }
    }))
  }

  const handleResetClick = useCallback(() => {
    updateCalendarState({
        from: defaultDate,
        to: null,
        enteredTo: null,
        selected: {
          from: defaultDate,
          to: null,
          enteredTo: null,
        }
    })
  }, [defaultDate])

  const handleCloseCalendar = useCallback(() => {
    !isCalendarAlwaysOpen && setCalendarOpen(false)
  }, [isCalendarAlwaysOpen])

  const handleToggleCalendar = () => {
    !isCalendarAlwaysOpen && setCalendarOpen(state => !state)
  }

  const yearMonthSelector = useYearMonthSelector({
    localization,
    calendarState,
    updateCalendarState,
  })

  useEffect(() => {
    if (isSingleDaySelection && !calendarState.from && defaultDate) {
      const date = defaultDate
      updateCalendarState(prevState => ({
        ...prevState,
        from: date,
        to: date,
        enteredTo: null
      }))
    }

    if (isSingleDaySelection && isSelectedOnDayClick && calendarState.from) {
      onDateSelect(calendarState.from)
    }
  }, [dispatch, isSingleDaySelection, isSelectedOnDayClick, defaultDate, calendarState.from, onDateSelect])

  useEffect(() => {
    // handleResetClick()
    if (externalState) {
      updateCalendarState(externalState)
    }
  }, [externalState, handleResetClick])

  const handleClickOutside = useCallback(evt => {
    if (calendarWrapperRef.current === evt.target) {
      updateCalendarState(prevState => ({
        ...prevState,
        from: prevState.selected.from,
        to: prevState.selected.to,
        enteredTo: prevState.selected.enteredTo
      }))
      handleCloseCalendar()
    }
  }, [handleCloseCalendar])

  useEffect(() => {
    !isCalendarAlwaysOpen && document.addEventListener('click', handleClickOutside)

    return () => {
      !isCalendarAlwaysOpen && document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside, isCalendarAlwaysOpen])

  const { from, enteredTo } = calendarState
  const modifiers = {
    start: from,
    end: enteredTo,
    highlighted: {from: selectedRange?.from, to: selectedRange?.to},
    firstSelected: !isRangeEndStyle && !selectedRange.to && selectedRange.from,
    lastSelected: selectedRange?.to,
  }
  const disabledDays = { before: selectedRange?.from }
  const selectedDays = [from, { from, to: enteredTo }]

  return (
    <div className={classnames(css.wrapper, className)}>
      {isCalendarOpen && !isCalendarAlwaysOpen &&
        <div className={css.background} ref={calendarWrapperRef} />
      }
      { children && children({
        data: calendarState,
        onClick: handleToggleCalendar,
      })}
      {isCalendarOpen &&
        <div
          className={classnames(css.content, contentClassName, {
            [css.contentRange]: isRangeStyle
          })}
        >
          <DayPicker
            className={classnames(css.datepicker, {
              [css.datepickerEnd]: isRangeEndStyle,
            })}
            numberOfMonths={1}
            selectedDays={selectedDays}
            disabledDays={disabledDays}
            modifiers={modifiers}
            onDayClick={handleDayClick}
            locale={localization.locale}
            weekdaysShort={localization.weekdaysShort}
            month={calendarState.month}
            firstDayOfWeek={0}
            captionElement={({ date }) => yearMonthSelector(date) }
            navbarElement={() => null}
            {...extraProps}
          />
          {!isSelectedOnDayClick &&
            <div className={css.controls}>
              <button
                className={classnames(css.btnControl, css.btnControlApply)}
                onClick={() => {
                  handleClickApply()
                  onDateSelect(calendarState)
                  handleCloseCalendar()
                }}
                ref={buttonApplyRef}
              >
                Apply
              </button>
              <button
                className={classnames(css.btnControl, css.btnControlReset)}
                onClick={() => {
                  handleResetClick()
                  handleCloseCalendar()
                }}
              >
                Cancel
              </button>
            </div>
          }
        </div>
      }
    </div>
  )
}

Datepicker.propTypes = {
  className: PropTypes.string
}

export default React.memo(Datepicker)
