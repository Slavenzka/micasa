import React from 'react'
import css from './DashboardCardPopular.module.scss'
import classnames from 'classnames'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import ArticlePreview from 'components/molecules/ArticlePreview/ArticlePreview'

const DashboardCardPopular = ({data, className}) => {
  const renderPreviews = () => data.map((item, index) => (
    <ArticlePreview data={item} key={index} tag={ `li` } />
  ))

  return (
    <DashboardCard
      heading={ `Найпопулярніше за тиждень` }
      className={classnames(css.wrapper, className)}
    >
      <ul className={css.list}>
        { renderPreviews() }
      </ul>
    </DashboardCard>
  )
}

export default DashboardCardPopular
