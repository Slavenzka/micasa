import React, { useEffect, useMemo, useState } from 'react'
import css from './Citizens.module.scss'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import useActualPageData from 'hooks/useActualPageData'
import { citizensData } from 'Pages/Citizens/_assets/data'
import Table from 'components/organisms/Table/Table'
import Section from 'components/templates/Section/Section'
import { citizensColumns } from 'Pages/Citizens/_assets/columns'
import Filters from 'components/organisms/Filters/Filters'
import InputSearch from 'components/atoms/InputSearch/InputSearch'
import FilterSelect from 'components/molecules/FilterSelect/FilterSelect'
import { PaymentStatuses } from 'utils/const'
import { citizensFilter } from 'Pages/Citizens/_assets/filter'
import { CITIZEN_DETAILS } from 'Pages/Routes'
import CreateEntityButton from 'components/organisms/CreateEntityButton/CreateEntityButton'

const Citizens = ({history}) => {
  const namePrefix = `create-citizen`

  const formDescription = {
    lastName: {
      element: 'input',
      label: 'Прізвище',
      name: `${namePrefix}-lastName`,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    firstName: {
      element: 'input',
      label: 'Ім’я',
      name: `${namePrefix}-firstName`,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    middleName: {
      element: 'input',
      label: 'По батькові',
      name: `${namePrefix}-middleName`,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    phone: {
      element: 'input',
      label: 'Телефоны',
      name: `${namePrefix}-phone`,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    type: {
      element: 'select',
      label: 'Вулиця',
      name: `${namePrefix}-street`,
      placeholder: '',
      options: [],
      validation: {
        required: true,
      }
    },
  }

  const formDescriptionAux = {
    building: {
      element: 'select',
      label: 'Будинок',
      name: `${namePrefix}-building`,
      placeholder: '',
      options: [],
      validation: {
        required: true,
      }
    },
    entrance: {
      element: 'input',
      label: 'Підїзд',
      name: `${namePrefix}-entrance`,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    apartment: {
      element: 'input',
      label: 'Квартира',
      name: `${namePrefix}-appartment`,
      placeholder: '',
      validation: {
        required: true,
      }
    },
  }

  const [data, setData] = useState(null)

  function handleClickRow (target, id) {
    history.push({
      pathname: `${CITIZEN_DETAILS}/${id}`
    })
  }

  const selectOptions = useMemo(() => {
    const uniqueItems = citizensData
      .reduce((total, item) => {
        total.add(item.status)
        return total
      }, new Set())

    const options = [...uniqueItems]
      .map(item => ({
        label: PaymentStatuses[item.toUpperCase()].ua,
        value: item
      }))

    options.push({
      label: 'усе',
      value: null
    })

    return options
  }, [citizensData])

  const filteredData = useActualPageData()
  const processedFilteredData = filteredData || null

  useEffect(() => {
    setData(citizensData)
  }, [])

  return (
    <Section>
      <PageControlsTemplate
        heading={ `Дані по платежах` }
        renderHeadingNeighbor={className => (
          <CreateEntityButton
            className={className}
            classNameAux={css.formAux}
            formDescription={formDescription}
            formDescriptionAux={formDescriptionAux}
            handleSubmitForm={data => {
              console.log(data)
            }}
            label={ `+ Додати мешканця` }
          />
        )}
      >
        <Filters
          defaultData={data}
          filter={citizensFilter}
        >
          {() => (
            <>
              <FilterSelect
                options={selectOptions}
              />
              <InputSearch
                className={css.search}
              />
            </>
          )}
        </Filters>
      </PageControlsTemplate>
      <Table
        columns={citizensColumns}
        columnsClass={css.columns}
        filteredData={processedFilteredData}
        handleClickRow={handleClickRow}
      />
    </Section>
  )
}

export default Citizens
