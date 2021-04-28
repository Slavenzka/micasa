import React, { useCallback } from 'react'
import css from './CitizenDetails.module.scss'
import { citizenDetailsData } from 'Pages/CitizenDetails/_assets/data'
import PageControlsTemplate from 'components/templates/PageControlsTemplate/PageControlsTemplate'
import CitizenDetailsTemplate
  from 'components/templates/CitizenDetailsTemplate/CitizenDetailsTemplate'
import CitizenDetailsGeneralCard
  from 'components/organisms/citizenDetailsCards/CitizenDetailsGeneralCard/CitizenDetailsGeneralCard'
import CitizenDetailsDataCard
  from 'components/organisms/citizenDetailsCards/CitizenDetailsDataCard/CitizenDetailsDataCard'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'
import { CITIZENS } from 'Pages/Routes'

const CitizenDetails = () => {
  const data = citizenDetailsData
  const {
    card,
    transactions,
    applications,
    debts,
  } = data

  const renderShowMoreTransactionsButton = useCallback(() => {
    return (
      <Button
        className={css.buttonTransactions}
        onClick={() => {}}
        palette={ButtonPalettes.TEXT}
        height={ButtonHeights.CONTENT}
      >
        Показати більше транзакцій
      </Button>
    )
  }, [])

  const renderSendReminderButton = useCallback(() => {
    return (
      <Button
        className={css.buttonReminder}
        onClick={() => {}}
        height={ButtonHeights.REGULAR}
      >
        Відправити нагадування
      </Button>
    )
  }, [])

  return (
    <section>
      <PageControlsTemplate
        heading={ `Відомості про ${card.name}` }
        backlinkURL={CITIZENS}
      />
      <CitizenDetailsTemplate>
        <CitizenDetailsGeneralCard
          className={css.general}
          data={card}
        />
        <CitizenDetailsDataCard
          className={css.transactions}
          heading={ `Транзакції` }
          list={transactions}
          extraBlock={renderShowMoreTransactionsButton()}
        />
        <CitizenDetailsDataCard
          className={css.applications}
          heading={ `Звернення` }
          list={applications}
        />
        <CitizenDetailsDataCard
          className={css.debts}
          heading={ `Звернення` }
          list={debts}
          extraBlock={renderSendReminderButton()}
        />
      </CitizenDetailsTemplate>
    </section>
  )
}

export default CitizenDetails
