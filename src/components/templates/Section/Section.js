import React from 'react'
import css from './Section.module.scss'
import classnames from 'classnames'

const Section = ({className, children}) => {
  return (
    <section className={classnames(css.wrapper, className)}>
      { children }
    </section>
  )
}

export default Section
