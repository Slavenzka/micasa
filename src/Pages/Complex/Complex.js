import React, { useState } from 'react'
import css from './Complex.module.scss'
import Section from 'components/templates/Section/Section'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import { buildingsData, infoData } from 'Pages/Complex/_assets/data'
import Tabs from 'components/molecules/Tabs/Tabs'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'
import Table from 'components/organisms/Table/Table'
import { columnsBuildings, columnsInfo } from 'Pages/Complex/_assets/columns'

const Complex = () => {
  const tabsDescription = [
    {
      label: 'Будинки',
      values: 'buildings',
      data: buildingsData,
      columns: columnsBuildings,
      columnsClass: css.columnsBuildings
    },
    {
      label: 'Інформація',
      values: 'info',
      data: infoData,
      columns: columnsInfo,
      columnsClass: css.columnsInfo
    },
  ]

  const [activeTab, setActiveTab] = useState(tabsDescription[0])

  return (
    <Section>
      <PageControlsTemplate
        heading={ `ЖК Смарагдовий` }
        isHeadingVisible
      >
        <div className={css.wrapper}>
          <Tabs
            list={tabsDescription}
            activeTab={activeTab}
            handleClickTab={setActiveTab}
          />
          <Button
            palette={ButtonPalettes.TEXT_BOLD}
            height={ButtonHeights.CONTENT}
            onClick={() => {}}
          >
            + Додати будинок
          </Button>
        </div>
      </PageControlsTemplate>
      <Table
        columns={activeTab.columns}
        columnsClass={activeTab.columnsClass}
        filteredData={activeTab.data}
        handleClickEdit={id => {
          console.log('Edit')
        }}
        rowSize={ `auto` }
      />
    </Section>
  )
}

export default Complex
