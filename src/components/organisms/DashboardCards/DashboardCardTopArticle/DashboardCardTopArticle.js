import React from 'react'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import ArticlePreview from 'components/molecules/ArticlePreview/ArticlePreview'

const DashboardCardTopArticle = ({data, className}) => {
  return (
    <DashboardCard
      heading={ `Найпопулярніший допис` }
      className={className}
    >
      <ArticlePreview
        data={data}
      />
    </DashboardCard>
  )
}

export default DashboardCardTopArticle
