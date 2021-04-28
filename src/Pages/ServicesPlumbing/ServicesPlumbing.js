import React, { useState } from 'react'
import css from './ServicesPlumbing.module.scss'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import { SERVICES } from 'Pages/Routes'
import Tabs from 'components/molecules/Tabs/Tabs'
import Filters from 'components/organisms/Filters/Filters'
import {
  servicePlumbingListData,
  servicePlumbingStaffData
} from 'Pages/ServicesPlumbing/_assets/data'
import InputSearch from 'components/atoms/InputSearch/InputSearch'
import Table from 'components/organisms/Table/Table'
import useActualPageData from 'hooks/useActualPageData'
import {
  servicesPlumbingListColumns,
  servicesPlumbingStaffColumns
} from './_assets/columns'
import Section from 'components/templates/Section/Section'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'

const ServicesPlumbing = () => {
  const dataList = servicePlumbingListData
  const dataStaff = servicePlumbingStaffData

  const tabsDescription = [
    {
      label: 'Перелік послуг і їх вартість',
      values: 'list',
      data: dataList,
      columns: servicesPlumbingListColumns,
      handleClickEdit: id => {
        console.log(`Edit service: ${id}`)
      },
      handleClickDelete: id => {
        console.log(`Delete service: ${id}`)
      },
    },
    {
      label: 'Майстри',
      values: 'staff',
      data: dataStaff,
      columns: servicesPlumbingStaffColumns,
      handleClickEdit: id => {
        console.log(`Edit specialist: ${id}`)
      },
      handleClickDelete: id => {
        console.log(`Delete specialist: ${id}`)
      },
    },
  ]
  const [activeTab, setActiveTab] = useState(tabsDescription[0])

  const filteredData = useActualPageData() || activeTab.data

  const renderAddEngineerButton = className => (
    <Button
      className={className}
      onClick={() => {}}
      palette={ButtonPalettes.TEXT_BOLD}
      height={ButtonHeights.CONTENT}
    >
      + Додати майстра
    </Button>
  )

  return (
    <Section>
      <PageControlsTemplate
        backlinkURL={SERVICES}
        heading={ `Сантехнік` }
        isHeadingVisible
        renderHeadingNeighbor={renderAddEngineerButton}
      >
        <Filters
          defaultData={activeTab.data}
        >
          {() => (
            <>
              <Tabs
                className={css.tabs}
                list={tabsDescription}
                handleClickTab={setActiveTab}
                activeTab={activeTab}
              />
              <InputSearch className={css.search} />
            </>
          )}
        </Filters>
      </PageControlsTemplate>
      <Table
        columns={activeTab.columns}
        columnsClass={css.columns}
        filteredData={filteredData}
        handleClickEdit={activeTab.handleClickEdit}
        handleClickDelete={activeTab.handleClickDelete}
      />
    </Section>
  )
}

export default ServicesPlumbing
