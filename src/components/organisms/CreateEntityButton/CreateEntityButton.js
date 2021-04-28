import React from 'react'
import css from './CreateEntityButton.module.scss'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { toggleModal } from 'store/actions'
import FormTemplate from 'components/templates/FormTemplate/FormTemplate'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'

const CreateEntityButton = ({
  className,
  classNameAux,
  handleSubmitForm,
  formDescription,
  formDescriptionAux,
  label,
}) => {
  const dispatch = useDispatch()

  const handleClickButton = () => {
    dispatch(toggleModal((
      <FormTemplate
        className={css.form}
        classNameAux={classNameAux}
        heading={ `Додати мешканця` }
        list={Object.values(formDescription)}
        listAux={formDescriptionAux ? Object.values(formDescriptionAux) : null}
        submitFormHandler={handleSubmitForm}
      />
    )))
  }

  return (
    <Button
      className={classnames(css.button, className)}
      onClick={handleClickButton}
      palette={ButtonPalettes.TEXT}
      height={ButtonHeights.CONTENT}
    >
      { label }
    </Button>
  )
}

export default CreateEntityButton
