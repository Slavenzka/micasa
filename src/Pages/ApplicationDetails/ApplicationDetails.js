import React from 'react'
import css from './ApplicationDetails.module.scss'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import { APPLICATIONS } from 'Pages/Routes'
import { applicationsDetailsData } from 'Pages/ApplicationDetails/_assets/data'
import FormTemplate from 'components/templates/FormTemplate/FormTemplate'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'

const ApplicationDetails = () => {
  const data = applicationsDetailsData
  const namePrefix = `edit-application`

  const formDescription = {
    createdAt: {
      element: 'input',
      label: 'Дата створення',
      name: `${namePrefix}-create-date`,
      value: data.date,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    dueTo: {
      element: 'input',
      label: 'Виконати до',
      name: `${namePrefix}-due-date`,
      value: data.dueTo,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    engineer: {
      className: css.engineer,
      element: 'input',
      label: 'Майстер',
      name: `${namePrefix}-engineer`,
      value: data.engineerName,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    priority: {
      element: 'input',
      label: 'Пріоритет',
      name: `${namePrefix}-priority`,
      value: data.priority,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    applicant: {
      className: css.applicant,
      element: 'input',
      label: 'Заявник',
      name: `${namePrefix}-applicant`,
      value: data.applicant,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    phone: {
      element: 'input',
      label: 'Телефон',
      name: `${namePrefix}-phone`,
      value: data.phone,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    address: {
      element: 'input',
      label: 'Адреса',
      name: `${namePrefix}-address`,
      value: data.address,
      placeholder: '',
      validation: {
        required: true,
      }
    },
    comment: {
      className: css.comment,
      element: 'input',
      name: `${namePrefix}-comment`,
      value: data.comment,
      placeholder: '',
      validation: {
        required: true,
      }
    },
  }

  const submitForm = data => {
    console.log(data)
  }

  return (
    <section>
      <PageControlsTemplate
        heading={ `Відомості про` }
        backlinkURL={APPLICATIONS}
      />
      <DashboardCard
        className={css.wrapper}
        heading={ `Звернення  №${data.id}` }
      >
        <FormTemplate
          className={css.form}
          classNameControls={css.formControls}
          list={Object.values(formDescription)}
          buttonCancelLabel={ `Закрити заявку` }
          buttonSubmitLabel={ `Взяти в роботу` }
          submitFormHandler={submitForm}
        />
      </DashboardCard>
    </section>
  )
}

export default ApplicationDetails
