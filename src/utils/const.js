export const DeviceTypes = {
  DESKTOP: `desktop`,
  ADAPTIVE: `adaptive`
}

export const ButtonPalettes = {
  FILLED: `FILLED`,
  BORDERED: `BORDERED`,
  TEXT: `TEXT`,
  TEXT_BOLD: `TEXT_BOLD`
}

export const ButtonHeights = {
  REGULAR: `REGULAR`,
  LARGE: `LARGE`,
  SMALL: `SMALL`,
  CONTENT: `CONTENT`
}

export const HeadingTypes = {
  H1: `h1`,
  H2: `h2`,
  H3: `h3`
}

export const monthsLocale = [
  `Січень`,
  `Лютий`,
  `Березень`,
  `Квітень`,
  `Травень`,
  `Червень`,
  `Липень`,
  `Серпень`,
  `Вересень`,
  `Жовтень`,
  `Листопад`,
  `Грудень`
]

export const monthsLocaleShort = [
  `Січ`,
  `Лют`,
  `Бер`,
  `Квіт`,
  `Трав`,
  `Черв`,
  `Лип`,
  `Серп`,
  `Вер`,
  `Жовт`,
  `Лист`,
  `Груд`
]

export const DetailedFilterTypes = {
  LIST: `LIST`,
  INPUT: `INPUT`,
  RANGE: `RANGE`,
  ROUTE: `ROUTE`,
  ROUTE_FROM: `ROUTE_FROM`,
  ROUTE_TO: `ROUTE_TO`,
}

export const TABLE_ROW_HEIGHT_MEDIUM = 70

export const TableCellTypes = {
  AMOUNT: {
    values: [`amount`],
    type: `amount`
  },
  DATE: {
    values: [`date`, `dueTo`],
    type: `date`
  },
  LINK: {
    values: [`owner`],
    type: `link`
  },
  STATUS: {
    values: [`status`],
    type: `status`
  },
  PRIORITY: {
    values: [`priority`],
    type: `priority`
  },
  TEXT: {
    values: [`comment`, `description`],
    type: `text`
  },
  CONFIRMATION: {
    values: ['isConfirmed'],
    type: 'confirmation'
  },
  EDIT_BUTTON: {
    values: [`isEditButton`],
    type: 'editButton'
  },
  DELETE_BUTTON: {
    values: [`isDeleteButton`],
    type: 'deleteButton'
  },
}

export const PaymentStatuses = {
  PAID: {
    origin: `paid`,
    ua: `сплачено`
  },
  PENDING: {
    origin: `pending`,
    ua: `не сплачено`
  },
  DEBT: {
    origin: `debt`,
    ua: `борг`
  },
  OVERDUE: {
    origin: `overdue`,
    ua: `прострочено`
  },
}

export const ApplicationStatuses = {
  OPENED: {
    origin: `opened`,
    ua: `Відкрите`
  },
  IN_PROGRESS: {
    origin: `in_progress`,
    ua: `в процесі`
  },
  OVERDUE: {
    origin: `overdue`,
    ua: `Просрочене`
  },
  DONE: {
    origin: `done`,
    ua: `Виконане`
  }
}

export const ApplicationPriorities = {
  LOW: {
    origin: `low`,
    ua: `Низький`
  },
  REGULAR: {
    origin: `regular`,
    ua: `Нормальний`
  },
  HIGH: {
    origin: `high`,
    ua: `Високий`
  },
  URGENT: {
    origin: `urgent`,
    ua: `Терміново`
  },
}
