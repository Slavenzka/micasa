import React from 'react'
import css from './Home.module.scss'
import DashboardGrid from 'components/templates/DashboardGrid/DashboardGrid'
import {
  articleData,
  commentsData,
  dataDebts,
  dataRequests,
  pieData, popularData
} from 'Pages/Home/_assets/dataChartsMock'
import DashboardCardDebts from 'components/organisms/DashboardCards/DashboardCardDebts/DashboardCardDebts'
import DashboardCardRequests from 'components/organisms/DashboardCards/DashboardCardRequests/DashboardCardRequests'
import DashboardCardUtilities
  from 'components/organisms/DashboardCards/DashboardCardUtilities/DashboardCardUtilities'
import DashboardCardTopArticle
  from 'components/organisms/DashboardCards/DashboardCardTopArticle/DashboardCardTopArticle'
import DashboardCardComment from 'components/organisms/DashboardCards/DashboardCardComment/DashboardCardComment'
import DashboardCardPopular from 'components/organisms/DashboardCards/DashboardCardPopular/DashboardCardPopular'

const Home = () => {
  return (
    <DashboardGrid>
      <DashboardCardUtilities
        className={css.payments}
        data={pieData}
      />
      <DashboardCardDebts
        data={dataDebts}
      />
      <DashboardCardRequests
        className={css.debts}
        data={dataRequests}
      />
      <DashboardCardTopArticle
        className={css.article}
        data={articleData}
      />
      <DashboardCardComment
        data={commentsData}
      />
      <DashboardCardPopular
        className={css.popular}
        data={popularData}
      />
    </DashboardGrid>
  )
}

export default Home
