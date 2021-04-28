import React, { useEffect, useMemo, useState } from 'react'
import css from './Applications.module.scss'
import Link from 'components/atoms/Link/Link'
import { applicationsData } from 'Pages/Applications/_assets/data'
import useActualPageData from 'hooks/useActualPageData'
import Section from 'components/templates/Section/Section'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import Filters from 'components/organisms/Filters/Filters'
import { paymentsFilter } from 'Pages/Payments/_assets/filter'
import FilterSelect from 'components/molecules/FilterSelect/FilterSelect'
import { ApplicationPriorities } from 'utils/const'
import DateRangePicker from 'components/organisms/DateRangePicker/DateRangePicker'
import CalendarPresets from 'components/molecules/CalendarPresets/CalendarPresets'
import SortTrigger from 'components/molecules/SortTrigger/SortTrigger'
import InputSearch from 'components/atoms/InputSearch/InputSearch'
import Table from 'components/organisms/Table/Table'
import { applicationsSort } from 'Pages/Applications/_assets/sort'
import { applicationsColumns } from 'Pages/Applications/_assets/columns'
import Paginator from 'components/atoms/Paginator/Paginator'
import { APPLICATION_DETAILS } from 'Pages/Routes'

const Applications = ({history}) => {
  const [data, setData] = useState(null)

  function handleClickRow (target, id) {
    history.push({
      pathname: `${APPLICATION_DETAILS}/${id}`
    })
  }

  const selectOptions = useMemo(() => {
    const uniqueItems = applicationsData
      .reduce((total, item) => {
        total.add(item.priority)
        return total
      }, new Set())

    const options = [...uniqueItems]
      .map(item => ({
        label: ApplicationPriorities[item.origin.toUpperCase()].ua,
        value: item
      }))

    options.push({
      label: 'усе',
      value: null
    })

    return options
  }, [applicationsData])

  function renderHeaderLink (className) {
    return (
      <Link
        className={className}
        to={ `#` }
        isStrong
      >
        + Додати зверннення
      </Link>
    )
  }

  useEffect(() => {
    setData(applicationsData)
  }, [])

  const filteredData = useActualPageData()
  const processedFilteredData = filteredData ?? null

  return (
    <Section>
      <PageControlsTemplate
        heading={ `Дані за зверненнями` }
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
                <FilterSelect
                  options={selectOptions}
                />
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
                  defaultLabel={applicationsSort.defaultLabel}
                  list={applicationsSort.list}
                  data={processedFilteredData}
                />
                <InputSearch
                  className={css.search}
                />
              </>
            )
          }
        </Filters>
      </PageControlsTemplate>
      <div>
        <Table
          columns={applicationsColumns}
          columnsClass={css.columns}
          filteredData={processedFilteredData}
          handleClickRow={handleClickRow}
        />
        <Paginator
          totalPages={8}
        />
      </div>
    </Section>
  )
}

export default Applications
