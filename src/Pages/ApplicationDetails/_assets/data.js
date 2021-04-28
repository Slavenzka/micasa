import { ApplicationPriorities } from 'utils/const'

export const applicationsDetailsData = {
  date: new Date(2021, 2, 5).getTime(),
  id: `1016`,
  dueTo: new Date(2021, 2, 25).getTime(),
  engineerName: `Електрик І. Б.`,
  applicant: `Гуменюк І.Б.`,
  phone: `097 980 80 70`,
  address: `Ген.Шаповалова, 2, кв.71`,
  comment: `Встановлення відеодомофону`,
  priority: ApplicationPriorities.REGULAR.ua,
}
