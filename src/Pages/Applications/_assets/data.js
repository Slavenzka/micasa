import { ApplicationPriorities, ApplicationStatuses } from 'utils/const'

export const applicationsData = [
  {
    date: new Date(2021, 2, 5).getTime(),
    id: `1016`,
    dueTo: new Date(2021, 2, 25).getTime(),
    engineerName: `Електрик І. Б.`,
    comment: `Встановлення відеодомофону`,
    priority: ApplicationPriorities.REGULAR,
    status: ApplicationStatuses.OPENED,
    isConfirmed: false
  },
  {
    date: new Date(2021, 2, 5).getTime(),
    id: `1015`,
    dueTo: new Date(2021, 2, 10).getTime(),
    engineerName: `Сантехнік В. Б.`,
    comment: `Розводка електропроводки`,
    priority: ApplicationPriorities.HIGH,
    status: ApplicationStatuses.IN_PROGRESS,
    isConfirmed: false
  },
  {
    date: new Date(2021, 2, 5).getTime(),
    id: `1014`,
    dueTo: new Date(2021, 2, 10).getTime(),
    engineerName: `Електрик Є. М.`,
    comment: `Ремонт розетки`,
    priority: ApplicationPriorities.HIGH,
    status: ApplicationStatuses.IN_PROGRESS,
    isConfirmed: false
  },
  {
    date: new Date(2021, 2, 5).getTime(),
    id: `1013`,
    dueTo: new Date(2021, 2, 6).getTime(),
    engineerName: `Сантехнік Л. Н.`,
    comment: `Утечка труб! Хелп`,
    priority: ApplicationPriorities.URGENT,
    status: ApplicationStatuses.DONE,
    isConfirmed: true
  },
  {
    date: new Date(2021, 2, 5).getTime(),
    id: `1013`,
    dueTo: new Date(2021, 2, 14).getTime(),
    engineerName: `Сантехнік Т.Г.`,
    comment: `Встановлення лічильника гарячої води`,
    priority: ApplicationPriorities.HIGH,
    status: ApplicationStatuses.IN_PROGRESS,
    isConfirmed: false
  },
  {
    date: new Date(2021, 2, 5).getTime(),
    id: `1013`,
    dueTo: new Date(2021, 2, 24).getTime(),
    engineerName: `Сантехнік О. М.`,
    comment: `Заміна батарей опалення`,
    priority: ApplicationPriorities.REGULAR,
    status: ApplicationStatuses.OPENED,
    isConfirmed: false
  },
  {
    date: new Date(2021, 2, 5).getTime(),
    id: `1013`,
    dueTo: new Date(2021, 2, 24).getTime(),
    engineerName: `Сантехнік О. O.`,
    comment: `Установка бойлера`,
    priority: ApplicationPriorities.REGULAR,
    status: ApplicationStatuses.OVERDUE,
    isConfirmed: false
  },
  {
    date: new Date(2021, 2, 3).getTime(),
    id: `1013`,
    dueTo: new Date(2021, 2, 23).getTime(),
    engineerName: `Сантехнік І. В.`,
    comment: `Встановлення відеодомофону`,
    priority: ApplicationPriorities.LOW,
    status: ApplicationStatuses.DONE,
    isConfirmed: true
  },
]
