import React, { useState } from 'react'
import Section from 'components/templates/Section/Section'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import Button from 'components/atoms/Button/Button'
import classnames from 'classnames'
import css from 'Pages/ServicesPlumbing/ServicesPlumbing.module.scss'
import { ButtonHeights, ButtonPalettes } from 'utils/const'
import { blogDraftData, blogPostsData, blogVotesData } from 'Pages/Blog/_assets/data'
import Tabs from 'components/molecules/Tabs/Tabs'
import Filters from 'components/organisms/Filters/Filters'

const Blog = () => {
  const tabsDescription = [
    {
      label: 'Дописи',
      values: 'posts',
      data: blogPostsData,
    },
    {
      label: 'Опитування',
      values: 'votes',
      data: blogVotesData,
    },
    {
      label: 'Чернетки',
      values: 'drafts',
      data: blogDraftData,
    },
  ]

  const [activeTab, setActiveTab] = useState(tabsDescription[0])

  const renderAddPostButton = className => (
    <Button
      className={classnames(css.buttonAdd, className)}
      onClick={() => {}}
      palette={ButtonPalettes.TEXT_BOLD}
      height={ButtonHeights.CONTENT}
    >
      + Створити допис
    </Button>
  )

  return (
    <Section>
      <PageControlsTemplate
        heading={ `Блог` }
        isHeadingVisible
        renderHeadingNeighbor={renderAddPostButton}
      >
        <Filters
          defaultData={activeTab.data}
        >
          {() => (
            <>
              <Tabs
                list={tabsDescription}
                activeTab={activeTab}
                handleClickTab={setActiveTab}
              />
            </>
          )}
        </Filters>
      </PageControlsTemplate>
    </Section>
  )
}

export default Blog
