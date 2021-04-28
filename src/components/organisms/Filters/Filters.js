import React from 'react'
import css from './Filters.module.scss'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setPrimaryFilterValue } from 'store/actions'
import useFilterData from 'hooks/useFilterData'
import { act } from 'react-dom/test-utils'

const Filters = ({
  className,
  filter = {},
  defaultData,
  children
}) => {
  const activePrimary = useSelector(store => store.filter.activePrimary)
  const dispatch = useDispatch()

  const handleClickPrimary = evt => dispatch(setPrimaryFilterValue(evt))

  const {primary} = filter

  useFilterData(defaultData, filter)

  return (
    <div className={classnames(css.wrapper, className)}>
      { children && children({primary, activePrimary, handleClickPrimary}) }
    </div>
  )
}

export default Filters
