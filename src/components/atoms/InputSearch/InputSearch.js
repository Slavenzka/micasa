import React, {useEffect, useState} from 'react'
import css from './InputSearch.module.scss'
import classnames from 'classnames'
import Input from 'components/atoms/Input/Input'
import useDebounce from 'hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { setManualFilter } from 'store/actions/filtration'

const InputSearch = ({
  className,
  placeholder = `Пошук в даних...`
}) => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value)
  const dispatch = useDispatch()

  const handleSearch = evt => {
    setValue(evt.target.value)
  }

  useEffect(() => {
    dispatch(setManualFilter(debouncedValue))
  }, [debouncedValue])


  return (
    <Input
      value={value}
      onChange={handleSearch}
      className={classnames(css.search, className)}
      placeholder={placeholder}
      isSearchStyle
    />

  )
}

export default InputSearch
