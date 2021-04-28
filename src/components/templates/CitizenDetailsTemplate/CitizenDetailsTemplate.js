import React from 'react'
import css from './CitizenDetailsTemplate.module.scss'

const CitizenDetailsTemplate = ({children}) => {
  return (
    <div className={css.wrapper}>
      {children}
    </div>
  )
}

export default CitizenDetailsTemplate
