import React, { useMemo } from 'react'
import css from './FilterSelect.module.scss'
import classnames from 'classnames'
import SelectDropdown from 'components/atoms/SelectDropdown/SelectDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { setPrimaryFilterValue } from 'store/actions'

const FilterSelect = ({className, options}) => {
  const dispatch = useDispatch()

  const activePrimary = useSelector(store => store.filter.activePrimary)

  const selectedOption = useMemo(() => {
    return options.find(item => {
      if (!activePrimary || (Array.isArray(activePrimary.values) && activePrimary.values.length === 0)) {
        return !item.value
      }

      return activePrimary.values.indexOf(item.value.toUpperCase()) >= 0
    })
  }, [activePrimary])

  const handleChange = evt => {
    dispatch(setPrimaryFilterValue({
      ...activePrimary,
      values: evt.value ? [evt.value.toUpperCase()] : []
    }))
  }

  return (
    <SelectDropdown
      className={classnames(css.select, className)}
      options={options}
      value={selectedOption}
      onChange={handleChange}
    />
  )
}

export default FilterSelect
