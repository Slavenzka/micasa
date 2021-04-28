import React, { useState, useCallback, useRef, useEffect } from 'react'
import css from './DateRangePicker.module.scss'
import classnames from 'classnames'
import { getDateComponents } from 'utils'
import IconCalendarSimplified from 'assets/icons/IconCalendarSimplified'
import { ButtonHeights, ButtonPalettes } from 'utils/const'
import { useDispatch } from 'react-redux'
import { setDateFilterValue } from 'store/actions/filtration'
import Datepicker from 'components/molecules/Datepicker/Datepicker'
import Button from 'components/atoms/Button/Button'

const DateRangePicker = ({
  className,
  renderAdditionalBlock,
  isDisabled,
}) => {
  const INITIAL_STATE = {
    from: null,
    to: null,
    selected: {
      from: null,
      to: null,
    }
  }

  const [range, setRange] = useState(INITIAL_STATE)
  const [isOpen, setOpenStatus] = useState(false)
  const [externalCalendarState, setExternalCalendarState] = useState(null)
  const bgRef = useRef(null)
  const dispatch = useDispatch()

  const handleClickCancel = () => {
    setExternalCalendarState({
      from: {
        from: null,
        to: null,
        enteredTo: null,
        selected: {
          from: null,
          to: null,
          enteredTo: null,
        }
      },
      to: {
        from: null,
        to: null,
        enteredTo: null,
        selected: {
          from: null,
          to: null,
          enteredTo: null,
        }
      },
    })
    setRange(INITIAL_STATE)

    dispatch(setDateFilterValue({
      from: INITIAL_STATE.from,
      to: INITIAL_STATE.to
    }))

    setOpenStatus(false)
  }

  const handleClickOutside = () => {
    setOpenStatus(false)
  }

  const handleClickApply = () => {
    setRange(prevState => {
      return {
        ...prevState,
        selected: {
          from: prevState.from,
          to: prevState.to
        }
      }
    })

    setOpenStatus(false)
  }

  const renderDateRange = (from, to) => {
    if (!from && !to) return `Фільтрувати по датах`

    if (from && !to) {
      const { year: yearFrom, month: monthFrom, day: dayFrom } = getDateComponents(new Date(from))

      return `From ${dayFrom}.${monthFrom}.${yearFrom}`
    }

    if (!from && to) {
      const { year: yearTo, month: monthTo, day: dayTo } = getDateComponents(new Date(to))

      return `To ${dayTo}.${monthTo}.${yearTo}`
    }

    if (from && to) {
      const { year: yearFrom, month: monthFrom, day: dayFrom } = getDateComponents(new Date(from))
      const { year: yearTo, month: monthTo, day: dayTo } = getDateComponents(new Date(to))

      return `${dayFrom}.${monthFrom}.${yearFrom} - ${dayTo}.${monthTo}.${yearTo}`
    }

  }

  const handleSelectStartDate = useCallback(data => {
    setRange(prevState => {
      return {
        ...prevState,
        from: data
      }
    })
  }, [])

  const handleSelectEndDate = useCallback(data => {
    setRange(prevState => {
      return {
        ...prevState,
        to: data
      }
    })
  }, [])

  useEffect(() => {
    const backgroundNode = bgRef.current

    if (backgroundNode && isOpen) {
      backgroundNode.addEventListener('click', handleClickOutside)
    }

    return () => {
      if (backgroundNode) {
        backgroundNode.removeEventListener('click', handleClickOutside)
      }
    }
  }, [isOpen])

  useEffect(() => {
    dispatch(setDateFilterValue({
      from: range.selected.from,
      to: range.selected.to
    }))
  }, [range.selected, dispatch])

  return (
    <>
      {isOpen &&
        <div className={css.background} ref={bgRef} />
      }
      <div className={classnames(css.wrapper, className)}>
        <button
          className={classnames(css.trigger, {
            [css.triggerDisabled]: isDisabled
          })}
          onClick={() => setOpenStatus(!isOpen)}
          type='button'
        >
          <IconCalendarSimplified className={css.icon} />
          { renderDateRange(range?.selected?.from, range?.selected?.to) }
        </button>
        <div
          className={classnames(css.datepickerWrapper, {
            [css.datepickerWrapperOpened]: isOpen
          })}
        >
          {renderAdditionalBlock &&
            <div className={css.additionalBlock}>
              { renderAdditionalBlock(range, setExternalCalendarState) }
            </div>
          }
          <Datepicker
            className={css.dateWrapper}
            contentClassName={css.date}
            onDateSelect={handleSelectStartDate}
            selectedRange={range}
            externalState={externalCalendarState?.from}
            isCalendarAlwaysOpen
            isSelectedOnDayClick
            isRangeStyle
          />
          <Datepicker
            className={css.dateWrapper}
            contentClassName={css.date}
            onDateSelect={handleSelectEndDate}
            selectedRange={range}
            externalState={externalCalendarState?.to}
            isCalendarAlwaysOpen
            isSelectedOnDayClick
            isRangeStyle
            isRangeEndStyle
          />
          <div className={css.controls}>
            <Button
              className={classnames(css.button, css.buttonCancel)}
              palette={ButtonPalettes.TEXT}
              height={ButtonHeights.SMALL}
              onClick={handleClickCancel}
            >
              Відмінити
            </Button>
            <Button
              className={css.button}
              height={ButtonHeights.SMALL}
              onClick={handleClickApply}
            >
              Застосувати
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DateRangePicker
