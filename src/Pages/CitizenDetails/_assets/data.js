import { ApplicationStatuses } from 'utils/const'

export const citizenDetailsData = {
  card: {
    name: `Гуменюк Віталій Борисович`,
    address: `ЖК Смарагдовий, м. Київ, вул.Генерала Шаповалова, 2, кв.71`,
    account: `3179570840498749`,
    phone: `(097) 980 20 30`,
    email: `humeniukv@gmail.com`
  },
  transactions: [
    {
      number: `0199-9338494`,
      paymentPeriod: `лютий 2021`,
      status: `не сплачено`,
      amount: `1500`
    },
    {
      number: `0939-7939300`,
      paymentPeriod: `січень 2021`,
      status: `сплачено`,
      amount: `900`
    },
    {
      number: `0939-7939300`,
      paymentPeriod: `січень 2021`,
      status: `сплачено`,
      amount: `900`
    },
    {
      number: `0884-4747747`,
      paymentPeriod: `грудень 2020`,
      status: `сплачено`,
      amount: `2400`
    },
    {
      number: `0744-8849993`,
      paymentPeriod: `листопад 2020`,
      status: `сплачено`,
      amount: `4500`
    },
    {
      number: `0711-8584994`,
      paymentPeriod: `жовтень 2020`,
      status: `сплачено`,
      amount: `4380`
    },
    {
      number: `0684-7478484`,
      paymentPeriod: `вересень 2020`,
      status: `сплачено`,
      amount: `3500`
    },
  ],
  applications: [
    {
      date: `02.03.2021`,
      number: `1013450`,
      status: ApplicationStatuses.OVERDUE.ua
    },
    {
      date: `28.01.2021`,
      number: `1013080`,
      status: ApplicationStatuses.DONE.ua
    },
  ],
  debts: [
    {
      number: `0199-9338494`,
      paymentPeriod: `грудень 2020`,
      amount: `-4057`
    },
    {
      number: `0939-7939300`,
      paymentPeriod: `листопад 2020`,
      amount: `-3985`
    },
  ]
}
