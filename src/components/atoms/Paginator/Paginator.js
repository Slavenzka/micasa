import React, { useState, useMemo } from 'react'
import css from './Paginator.module.scss'
import classnames from 'classnames'
import Button from 'components/atoms/Button/Button'
import { ButtonHeights, ButtonPalettes } from 'utils/const'
import IconForward from 'assets/icons/IconForward'

const Paginator = ({
  className,
  actualPage = 1,
  totalPages,
  handleClickPage,
}) => {
  const [activePage, setActivePage] = useState(actualPage)

  const handleClickButton = pageNumber => {
    setActivePage(pageNumber)
    handleClickPage && handleClickPage(pageNumber)
  }

  const items = useMemo(() => {
    const pages = new Array(totalPages)
      .fill('')
      .map((_, index) => (
        <li className={css.item} key={`Page#${index}`}>
          <Button
            className={classnames(css.button, {
              [css.buttonActive]: index + 1 === activePage
            })}
            palette={ButtonPalettes.TEXT}
            height={ButtonHeights.CONTENT}
            onClick={() => handleClickButton(index + 1)}
          >
            { index + 1 }
          </Button>
        </li>
      ))

    const blankItem = index => (
      <li className={css.item} key={`dots#${index}`}>
        ...
      </li>
    )

    if (activePage <= 4 && totalPages >= 6) {
      const [item1, item2, item3, item4] = pages

      return [
        item1,
        item2,
        item3,
        item4,
        blankItem(5),
        pages[pages.length - 1]
      ]
    }

    if (activePage > 4 && totalPages >= 6 && activePage < pages.length - 1) {
      const firstPage = pages[0]
      const item1 = pages[activePage - 4]
      const item2 = pages[activePage - 3]
      const item3 = pages[activePage - 2]
      const item4 = pages[activePage - 1]

      return [
        firstPage,
        blankItem(2),
        item1,
        item2,
        item3,
        item4,
        blankItem(5),
        pages[pages.length - 1]
      ]
    }

    if (activePage >= totalPages - 3 && totalPages >= 6) {
      const firstPage = pages[0]
      const item1 = pages[totalPages - 4]
      const item2 = pages[totalPages - 3]
      const item3 = pages[totalPages - 2]
      const item4 = pages[totalPages - 1]

      return [
        firstPage,
        blankItem(1),
        item1,
        item2,
        item3,
        item4,
      ]
    }

    return pages
  }, [activePage])

  const handleClickPrev = () => {
    setActivePage(prevState => --prevState)
  }

  const handleClickNext = () => {
    setActivePage(prevState => {
      return ++prevState
    })
  }

  return (
    <div className={css.wrapper}>
      <Button
        className={classnames(css.control, css.controlBack, {
          [css.controlDisabled]: activePage === 1
        })}
        onClick={handleClickPrev}
        palette={ButtonPalettes.TEXT}
        height={ButtonHeights.CONTENT}
      >
        <IconForward className={css.icon} />
      </Button>
      <ul className={classnames(css.list, className)}>
        { items }
      </ul>
      <div className={css.forward}>
        <Button
          className={classnames(css.control, css.controlForward, {
            [css.controlDisabled]: activePage === totalPages
          })}
          onClick={handleClickNext}
          palette={ButtonPalettes.TEXT}
          height={ButtonHeights.CONTENT}
        >
          <IconForward className={css.icon} />
        </Button>
        <Button
          className={classnames(css.control, css.controlLast, {
            [css.controlDisabled]: activePage === totalPages
          })}
          onClick={() => setActivePage(totalPages)}
          palette={ButtonPalettes.TEXT}
          height={ButtonHeights.CONTENT}
        >
          <IconForward className={classnames(css.icon, css.iconLast)} />
          <IconForward className={classnames(css.icon, css.iconLast)} />
        </Button>
      </div>
    </div>
  )
}

export default Paginator
