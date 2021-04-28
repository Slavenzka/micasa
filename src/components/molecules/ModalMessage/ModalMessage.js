import React from 'react'
import css from './ModalMessage.module.scss'
import classnames from 'classnames'
import DashboardCard from 'components/templates/DashboardCard/DashboardCard'
import Heading from 'components/atoms/Heading/Heading'
import { ButtonHeights, ButtonPalettes, HeadingTypes } from 'utils/const'
import Button from 'components/atoms/Button/Button'
import { useDispatch } from 'react-redux'
import { toggleModal } from 'store/actions'

const ModalMessage = ({
  className,
  heading,
  description,
  isCancelButtonRequired = true,
  cancelButtonLabel = `Відмінити`,
  cancelButtonHandler = () => {},
  isSubmitButtonRequired = true,
  submitButtonLabel = `Підтвердити`,
  submitButtonHandler = () => {}
}) => {
  const dispatch = useDispatch()

  function handleClickCancel () {
    dispatch(toggleModal(null))
  }

  return (
    <div
      className={classnames(css.wrapper, className)}
    >
      {heading &&
        <Heading
          className={css.heading}
          type={HeadingTypes.H1}
          tagName={ `h3` }
        >
          {heading}
        </Heading>
      }
      {description &&
        <p className={css.description}>
          { description }
        </p>
      }
      <div className={css.controls}>
        {isCancelButtonRequired &&
          <Button
            onClick={() => {
              cancelButtonHandler()
              handleClickCancel()
            }}
            className={css.button}
            palette={ButtonPalettes.BORDERED}
            height={ButtonHeights.LARGE}
          >
            { cancelButtonLabel }
          </Button>
        }
        {isSubmitButtonRequired &&
          <Button
            onClick={submitButtonHandler}
            className={css.button}
            height={ButtonHeights.LARGE}
          >
            { submitButtonLabel }
          </Button>
        }
      </div>
    </div>
  )
}

export default ModalMessage
