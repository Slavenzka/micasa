import React, { useState, useEffect } from 'react'
import css from './Payments.module.scss'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import Link from 'components/atoms/Link/Link'
import Filters from 'components/organisms/Filters/Filters'
import { paymentsFilter } from 'Pages/Payments/_assets/filter'
import { paymentsData } from 'Pages/Payments/_assets/data'
import useActualPageData from 'hooks/useActualPageData'
import Table from 'components/organisms/Table/Table'
import { paymentsColumns } from 'Pages/Payments/_assets/columns'
import Tabs from 'components/molecules/Tabs/Tabs'
import SortTrigger from 'components/molecules/SortTrigger/SortTrigger'
import { paymentsSort } from 'Pages/Payments/_assets/sort'
import InputSearch from 'components/atoms/InputSearch/InputSearch'
import { adaptPayments } from 'utils/adapters'
import DateRangePicker from 'components/organisms/DateRangePicker/DateRangePicker'
import CalendarPresets from 'components/molecules/CalendarPresets/CalendarPresets'
import Section from 'components/templates/Section/Section'

const Payments = () => {
  const [data, setData] = useState(null)

  function renderHeaderLink (className) {
    return (
      <Link
        className={className}
        to={ `#` }
        isStrong
      >
        Сплачені платежі
      </Link>
    )
  }

  useEffect(() => {
    setData(adaptPayments(paymentsData))
  }, [])


  const filteredData = useActualPageData()
  const processedFilteredData = filteredData ? adaptPayments(filteredData) : null

  return (
    <Section>
      <PageControlsTemplate
        heading={ `Дані по платежах` }
        renderHeadingNeighbor={renderHeaderLink}
      >
        <Filters
          defaultData={data}
          filter={paymentsFilter}
        >
          {({
              primary,
              activePrimary,
              handleClickPrimary
          }) => (
            <>
              {primary &&
                <Tabs
                  list={primary.list}
                  activeTab={activePrimary}
                  handleClickTab={handleClickPrimary}
                />
              }
              <DateRangePicker
                className={css.datePicker}
                renderAdditionalBlock={(calendarState, updateCalendarState) => (
                  <CalendarPresets
                    state={calendarState}
                    updateState={updateCalendarState}
                  />
                )}
              />
              <SortTrigger
                className={css.sort}
                defaultLabel={paymentsSort.defaultLabel}
                list={paymentsSort.list}
                data={processedFilteredData}
              />
              <InputSearch
                className={css.search}
              />
            </>
          )}
        </Filters>
      </PageControlsTemplate>
      <Table
        columns={paymentsColumns}
        columnsClass={css.columns}
        filteredData={processedFilteredData}
        // handleClickRow={handleClickRow}
      />
    </Section>
  )
}

export default Payments
