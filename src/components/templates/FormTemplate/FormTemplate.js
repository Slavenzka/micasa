import React from 'react'
import css from './FormTemplate.module.scss'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import useRenderFormItems from 'hooks/useRenderFormItems'
import Heading from 'components/atoms/Heading/Heading'
import { ButtonPalettes, HeadingTypes } from 'utils/const'
import Button from 'components/atoms/Button/Button'
import { useDispatch } from 'react-redux'
import { toggleModal } from 'store/actions'

const FormTemplate = ({
  className,
  classNameAux,
  classNameControls,
  heading,
  list,
  listAux,
  buttonCancelLabel = `Відмінити`,
  buttonSubmitLabel = `Додати`,
  submitFormHandler,
  areControlsRequired = true,
  areControlsIfDirty = false
}) => {
  const dispatch = useDispatch()
  const {control, errors, handleSubmit, reset, formState} = useForm()
  const {isDirty} = formState
  const areControlsVisible = areControlsRequired ||
    (areControlsIfDirty && isDirty)

  const formItems = useRenderFormItems({
    list,
    control,
    errors,
  })

  const formItemsAux = useRenderFormItems({
    list: listAux,
    control,
    errors,
  })

  function handleClickCancel () {
    const defaultState = list.reduce((total, {name, defaultValue}) => {
      total[name] = defaultValue
      return total
    }, {})
    const defaultStateAux = listAux
      ? listAux.reduce((total, {name, defaultValue}) => {
        total[name] = defaultValue
        return total
      }, {})
      : {}
    reset({
      ...defaultState,
      ...defaultStateAux,
    })
    dispatch(toggleModal(null))
  }

  return (
    <form onSubmit={handleSubmit(submitFormHandler)}>
      <div className={className}>
        {heading &&
          <Heading
            className={css.heading}
            type={HeadingTypes.H1}
            tagName={ `h3` }
          >
            {heading}
          </Heading>
        }
        { formItems }
        {listAux &&
          <div className={classNameAux}>
            { formItemsAux }
          </div>
        }
        {areControlsVisible &&
          <div className={classnames(css.controls, classNameControls)}>
            <Button
              className={css.button}
              palette={ButtonPalettes.BORDERED}
              onClick={handleClickCancel}
            >
              {buttonCancelLabel}
            </Button>
            <Button
              className={css.button}
              type={ `submit` }
            >
              {buttonSubmitLabel}
            </Button>
          </div>
        }
      </div>
    </form>
  )
}

export default FormTemplate
