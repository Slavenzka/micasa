import React, { useState } from 'react'
import css from './Input.module.scss'
import classnames from 'classnames'
import IconSearch from 'assets/icons/IconSearch'

const Input = ({
  className,
  label,
  name,
  placeholder = 'Enter your value',
  isDisabled,
  children,
  isSearchStyle,
  isAuthStyle,
  isModalStyle,
  isCash,
  isError,
  register,
  renderAuxBlock,
  formRef,
  ...props
}) => {
  const [inputRef, setInputRef] = useState(null)
  const [isInputDisabled, updateDisabledState] = useState(isDisabled)

  return (
    <div className={classnames(css.wrapper, className, {
      [css.wrapperCash]: isCash
    })}>
      { children }
      {isSearchStyle &&
        <IconSearch className={css.icon} />
      }
      {label &&
        <label
          className={css.label}
          htmlFor={name}
        >
          { label }
        </label>
      }
      <input
        className={classnames(css.input, {
          [css.inputError]: isError,
          [css.inputDisabled]: isInputDisabled,
          [css.inputCash]: isCash,
          [css.inputSearch]: isSearchStyle,
          [css.inputAuth]: isAuthStyle,
          [css.inputModal]: isModalStyle,
        })}
        id={name}
        name={name}
        placeholder={placeholder}
        type='text'
        ref={node => {
          register && register(node)
          formRef && formRef(node)
          setInputRef(node)
        }}
        {...props}
      />
      {renderAuxBlock && renderAuxBlock(inputRef, updateDisabledState)}
    </div>
  )
}

export default Input
