import React from 'react'
import css from './TableCell.module.scss'
import classnames from 'classnames'
import {
  ApplicationPriorities, ButtonHeights, ButtonPalettes,
  monthsLocaleShort,
  PaymentStatuses,
  TableCellTypes
} from 'utils/const'
import { Link } from 'react-router-dom'
import { getDateComponents } from 'utils'
import PriorityItem from 'components/atoms/PriorityItem/PriorityItem'
import IconConfirmed from 'assets/icons/IconConfirmed'
import Button from 'components/atoms/Button/Button'
import IconEdit from 'assets/icons/IconEdit'
import IconDelete from 'assets/icons/IconDelete'

const TableCell = ({
  cellData,
  cellType,
  rowData,
  isHovered,
  isRowClickable,
  handleClickEdit,
  handleClickDelete,
}) => {
  const getCellType = dataKey => Object.keys(TableCellTypes).reduce((total, item) => {
    if (!total && TableCellTypes[item].values.findIndex(el => el.toUpperCase() === dataKey.toUpperCase()) >= 0) {
      total = TableCellTypes[item].type
    }
    return total
  }, null)

  const type = getCellType(cellType)

  if (type === TableCellTypes.AMOUNT.type) {
    const status = rowData?.status

    return (
      <div
        className={classnames(css.cell, {
          [css.cellHovered]: isHovered && isRowClickable,
          [css.amountDebt]: status === PaymentStatuses.DEBT.origin
        })}
      >
        { (+cellData).toLocaleString('ru') }
      </div>
    )
  }

  if (type === TableCellTypes.STATUS.type) {
    return (
      <div
        className={classnames(css.cell, css.cellStatus, {
          [css.cellHovered]: isHovered && isRowClickable,
        })}
      >
        { cellData.ua || '' }
      </div>
    )
  }

  if (type === TableCellTypes.PRIORITY.type) {
    const isUrgent = cellData.origin === ApplicationPriorities.URGENT.origin
    const isHigh = cellData.origin === ApplicationPriorities.HIGH.origin

    const content = isUrgent || isHigh
      ? (
        <PriorityItem
          isUrgent={isUrgent}
        >
          { ApplicationPriorities[cellData.origin.toUpperCase()]?.ua || '' }
        </PriorityItem>
      )
      : ApplicationPriorities[cellData.origin.toUpperCase()]?.ua || ''

    return (
      <div
        className={classnames(css.cell, {
          [css.cellPriorityUrgent]: isUrgent,
        })}
      >
        { content }
      </div>
    )
  }
  if (type === TableCellTypes.CONFIRMATION.type) {
    return (
      <div
        className={css.cell}
      >
        { cellData ? <IconConfirmed className={css.iconConfirmed} /> : '' }
      </div>
    )
  }

  if (type === TableCellTypes.DATE.type) {
    const {year, month, day} = getDateComponents(new Date(cellData))
    const yearTrimmed = `${year}`.slice(2)

    return (
      <div
        className={classnames(css.cell, {
          [css.cellHovered]: isHovered && isRowClickable,
        })}
      >
        { `${day} ${monthsLocaleShort[month - 1]} ${yearTrimmed}` }
      </div>
    )
  }

  if (type === TableCellTypes.LINK.type) {
    return (
      <div
        className={classnames(css.cell, {
          [css.cellHovered]: isHovered && isRowClickable,
        })}
      >
        <Link
          className={css.link}
          to={ `/citizens/${rowData.index}` }
        >
          { cellData }
        </Link>
      </div>
    )
  }

  if (type === TableCellTypes.EDIT_BUTTON.type) {
    return (
      <div
        className={css.cell}
      >
        <Button
          className={css.buttonEdit}
          onClick={() => handleClickEdit(rowData.id)}
          palette={ButtonPalettes.TEXT}
          height={ButtonHeights.CONTENT}
        >
          Edit service
          <IconEdit className={css.icon} />
        </Button>
      </div>
    )
  }

  if (type === TableCellTypes.DELETE_BUTTON.type) {
    return (
      <div
        className={css.cell}
      >
        <Button
          className={css.buttonEdit}
          onClick={() => handleClickDelete(rowData.id)}
          palette={ButtonPalettes.TEXT}
          height={ButtonHeights.CONTENT}
        >
          Remove service
          <IconDelete className={css.icon} />
        </Button>
      </div>
    )
  }

  const getCellData = data => {
    if (cellData === null || cellData === undefined) return null

    if (`${cellData}`.toUpperCase() === 'NONE') {
      return '-'
    }

    if (Array.isArray(cellData)) {
      return cellData.reduce((total, item, index) => {
        total += index !== cellData.length - 1
          ? `${item}<br />`
          : `${item}`
        return total
      }, ``)
    }

    return data
  }

  return (
    <div
      className={classnames(css.cell, {
        [css.cellHovered]: isHovered && isRowClickable,
        [css.cellText]: type === TableCellTypes.TEXT.type
      })}
      dangerouslySetInnerHTML={{ __html: getCellData(cellData) }}
    />
  )
}

export default TableCell
