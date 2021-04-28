import React from 'react'
import css from './Users.module.scss'
import Section from 'components/templates/Section/Section'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import { usersData } from 'Pages/Users/_assets/data'
import Table from 'components/organisms/Table/Table'
import { usersColumns } from 'Pages/Users/_assets/columns'
import CreateEntityButton from 'components/organisms/CreateEntityButton/CreateEntityButton'

const Users = () => {
  const namePrefix = `create-user`

  const formDescription = {
    fullName: {
      element: 'input',
      label: 'ПIБ',
      name: `${namePrefix}-fullName`,
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
    role: {
      element: 'select',
      label: 'Роль користувача',
      name: `${namePrefix}-role`,
      placeholder: '',
      options: [],
      validation: {
        required: true,
      }
    },
    email: {
      element: 'input',
      label: 'Email',
      name: `${namePrefix}-email`,
      placeholder: '',
      validation: {
        required: true,
      }
    },
  }

  const handleClickEdit = id => {
    console.log(`Edit user#${id}`)
  }

  const handleClickDelete = id => {
    console.log(`Delete user#${id}`)
  }

  const data = usersData

  return (
    <Section>
      <PageControlsTemplate
        heading={ `Користувачі` }
        isHeadingVisible
        renderHeadingNeighbor={className => (
          <CreateEntityButton
            className={className}
            label={ `+ Додати користувача` }
            formDescription={formDescription}
          />
        )}
      />
      <Table
        columns={usersColumns}
        columnsClass={css.columns}
        filteredData={data}
        handleClickEdit={handleClickEdit}
        handleClickDelete={handleClickDelete}
      />
    </Section>
  )
}

export default Users
