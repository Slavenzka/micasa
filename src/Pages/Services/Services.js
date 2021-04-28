import React from 'react'
import css from './Services.module.scss'
import classnames from 'classnames'
import { getServicesData } from 'Pages/Services/_assets/data'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'
import ServiceCard from 'components/organisms/ServiceCard/ServiceCard'
import ServiceGrid from 'components/templates/ServiceGrid/ServiceGrid'
import { Link } from 'react-router-dom'

const Services = () => {
  const data = getServicesData()

  const renderCreateServiceButton = className => {
    return (
      <Button
        className={classnames(css.button, className)}
        onClick={() => {}}
        palette={ButtonPalettes.TEXT}
        height={ButtonHeights.CONTENT}
      >
        + Додати сервіс
      </Button>
    )
  }

  const cards = data.map(({url, ...item}, index) => (
    <Link
      className={css.link}
      to={url}
      key={index}
    >
      <ServiceCard
        data={item}
      />
    </Link>
  ))

  return (
    <section className={css.wrapper}>
      <PageControlsTemplate
        heading={ `Список послуг` }
        renderHeadingNeighbor={renderCreateServiceButton}
      />
      <ServiceGrid className={css.content} tag={ `ul` }>
        { cards }
      </ServiceGrid>
    </section>
  )
}

export default Services
