import React from 'react'
import css from './UserProfile.module.scss'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import { userProfileData } from 'Pages/UserProfile/_assets/data'
import FormTemplate from 'components/templates/FormTemplate/FormTemplate'
import IconPencil from 'assets/icons/IconPencil'
import { useDispatch } from 'react-redux'
import { toggleModal } from 'store/actions'
import ModalMessage from 'components/molecules/ModalMessage/ModalMessage'

const UserProfile = () => {
  const dispatch = useDispatch()

  const renderEditPhoneButton = (inputRef, updateInputDisabledState) => (
    <button
      className={css.buttonEditPhone}
      onClick={() => {
        updateInputDisabledState(false)
        inputRef && inputRef.focus()

        inputRef && inputRef.addEventListener('blur', () => {
          updateInputDisabledState(true)
        })
      }}
      type={ `button` }
    >
      Редагувати телефон
      <IconPencil className={css.iconEdit} />
    </button>
  )

  const renderEditPasswordButton = () => {
    const heading = `Ви дійсно бажаєте змінити пароль?`
    const description = `Посилання для зміни паролю буде надіслано на вашу електронну адресу`

    return (
      <button
        onClick={() => {
          dispatch(toggleModal((
            <ModalMessage
              heading={heading}
              description={description}
            />
          ), {
            className: css.modal,
            'aria-labelledby': heading ?? `Unnamed modal`,
            'aria-describedby': description ?? `No description applied to modal`
          }))
        }}
        className={css.buttonEditPassword}
        type={`button`}
      >
        Змінити пароль?
      </button>
    )
  }

  const namePrefix = `user-profile`
  const data = userProfileData

  const formDescription = {
    fullName: {
      element: 'input',
      label: 'ПIБ',
      name: `${namePrefix}-lastName`,
      defaultValue: data?.name,
      placeholder: '',
      validation: {
        required: true,
      },
      isDisabled: true,
      className: css.input,
    },
    phone: {
      element: 'input',
      label: 'Телефон',
      name: `${namePrefix}-phone`,
      defaultValue: data?.phone,
      placeholder: '',
      validation: {
        required: true,
      },
      isDisabled: true,
      renderAuxBlock: renderEditPhoneButton,
      className: css.input,
    },
    email: {
      element: 'input',
      label: 'Email',
      name: `${namePrefix}-email`,
      defaultValue: data?.email,
      placeholder: '',
      validation: {
        required: true,
      },
      isDisabled: true,
      className: css.input,
    },
    password: {
      element: 'input',
      label: 'Пароль',
      name: `${namePrefix}-password`,
      defaultValue: data?.password,
      type: `password`,
      renderAuxBlock: renderEditPasswordButton,
      placeholder: '',
      validation: {
        required: true,
      },
      isDisabled: true,
      className: css.input,
    },
    role: {
      element: 'input',
      label: 'Роль в системі',
      name: `${namePrefix}-role`,
      defaultValue: data?.role,
      placeholder: '',
      isDisabled: true,
      validation: {
        required: true,
      }
    },
  }

  const submitForm = data => {
    console.log(data)
  }


  return (
    <DashboardCard
      className={css.wrapper}
      heading={ `Мій профіль` }
    >
      <FormTemplate
        className={css.form}
        classNameControls={css.controls}
        list={Object.values(formDescription)}
        submitFormHandler={submitForm}
        areControlsRequired={false}
        areControlsIfDirty
      />
    </DashboardCard>
  )
}

export default UserProfile
