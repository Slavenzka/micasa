import React, { useEffect, useState, useRef } from 'react'
import css from './SortTrigger.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'
import IconSort from 'assets/icons/IconSort'
import { useDispatch } from 'react-redux'
import { sortData } from 'store/actions'

const SortTrigger = ({
  className,
  defaultLabel,
  list,
  data,
}) => {
  const [isOpen, setOpenStatus] = useState(false)
  const [label, setLabel] = useState(defaultLabel)
  const dispatch = useDispatch()
  const componentRef = useRef(false)
  const isSorting = useRef(false)

  const handleClickVisibility = () => setOpenStatus(prevState => !prevState)

  const handleClickSort = (sortLabel, sortFunction) => {
    isSorting.current = true
    setOpenStatus(false)
    setLabel(sortLabel)
    dispatch(sortData(sortFunction))
  }

  const handleClickOutside = evt => {
    if (!componentRef.current.contains(evt.target)) {
      setOpenStatus(false)
    }
  }

  useEffect(() => {
    if (componentRef.current) {
      document.addEventListener('click', handleClickOutside)

      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [])


  useEffect(() => {
    if (isSorting.current) {
      isSorting.current = false
    } else {
      setLabel(defaultLabel)
    }
  }, [data, defaultLabel])


  const renderDropdown = () => {
    return (
      <ul
        className={classnames(css.list, {
          [css.listVisible]: isOpen
        })}
      >
        { list.map(({label, sortData}, index) => (
          <li className={css.item} key={index}>
            <Button
              className={css.buttonSort}
              onClick={() => handleClickSort(label, sortData)}
              palette={ButtonPalettes.TEXT}
              height={ButtonHeights.CONTENT}
              type={ `button` }
            >
              { label }
            </Button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={classnames(css.wrapper, className)} ref={componentRef}>
      <Button
        className={css.button}
        onClick={handleClickVisibility}
        height={ButtonHeights.CONTENT}
        palette={ButtonPalettes.TEXT}
      >
        <IconSort className={css.icon} />
        { label }
      </Button>
      { renderDropdown() }
    </div>
  )
}

export default SortTrigger
