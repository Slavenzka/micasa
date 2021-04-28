import React, { useState, useEffect, useRef } from 'react'
import css from './CalendarPresets.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'

const CalendarPresets = ({
  className,
  state,
  updateState,
}) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const isSettingCustomInterval = useRef(false)

  const list = [
    {
      id: `one month`,
      label: `Останній міс.`,
      handleClick () {
        setDateInterval(1, this.id)
      }
    },
    {
      id: `two months`,
      label: `Останніх 3 міс.`,
      handleClick () {
        setDateInterval(3, this.id)
      }
    },
    {
      id: `six months`,
      label: `Останніх 6 міс.`,
      handleClick () {
        setDateInterval(6, this.id)
      }
    },
    {
      id: `one year`,
      label: `Останній рік`,
      handleClick () {
        setDateInterval(12, this.id)
      }
    },
  ]

  function setDateInterval (monthsToShiftBack, id) {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDay()
    const start = new Date(year, month - monthsToShiftBack, day)
    const end = new Date(year, month, day)

    setSelectedItem(id)
    isSettingCustomInterval.current = true

    updateState({
      from: {
        from: start,
        to: null,
        enteredTo: null,
        selected: {
          from: start,
          to: null,
          enteredTo: null,
        }
      },
      to: {
        from: end,
        to: null,
        enteredTo: null,
        selected: {
          from: end,
          to: null,
          enteredTo: null,
        }
      }
    })
  }

  useEffect(() => {
    if (!isSettingCustomInterval.current) {
      setSelectedItem(null)
    }

    isSettingCustomInterval.current = false
  }, [state])


  return (
    <ul className={classnames(css.list, className)}>
      {list.map(({label, handleClick, id}, index) => (
        <li className={css.item} key={index}>
          <Button
            className={classnames(css.button, {
              [css.buttonActive]: selectedItem === id
            })}
            onClick={() => list[index].handleClick()}
            palette={ButtonPalettes.TEXT}
            height={ButtonHeights.CONTENT}
          >
            { label }
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default CalendarPresets
