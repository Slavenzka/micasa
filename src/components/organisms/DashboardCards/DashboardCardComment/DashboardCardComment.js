import React from 'react'
import css from 'components/organisms/DashboardCards/DashboardCardComment/DashboardCardComment.module.scss'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import Comment from 'components/molecules/Comment/Comment'

const DashboardCardComment = ({data, className}) => {
  if (!data) return null

  const renderComments = data.map((item, index) => (
    <Comment
      data={item}
      key={index}
      tag={ `li` }
      style={{
        paddingLeft: `${index * 9}rem`
      }}
    />
  ))

  return (
    <DashboardCard
      heading={ `Найпопулярніший коментар` }
      className={className}
    >
      <ul className={css.list}>
        { renderComments }
      </ul>
    </DashboardCard>
  )
}

export default DashboardCardComment
