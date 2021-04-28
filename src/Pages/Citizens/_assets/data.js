import { PaymentStatuses } from 'utils/const'

export const citizensData = [
  {
    id: 1,
    lastName: `Гуменюк`,
    firstName: `Володимир`,
    middleName: `Володимирович`,
    address: `ЖК Смарагдовий, вул.Ген. Шаповалова, 2, кв.7`,
    phone: `(097) 980 20 30`,
    status: PaymentStatuses.PAID.origin,
    statusProcessed: PaymentStatuses.PAID.ua
  },
  {
    id: 2,
    lastName: `Гуменюк`,
    firstName: `Олександра`,
    middleName: `Олександрович`,
    address: `ЖК Смарагдовий, вул.Ген. Шаповалова, 2, кв.7`,
    phone: `(097) 980 20 30`,
    status: PaymentStatuses.PENDING.origin,
    statusProcessed: PaymentStatuses.PENDING.ua,
  },
  {
    id: 3,
    lastName: `Грінченко`,
    firstName: `Роман`,
    middleName: `Романович`,
    address: `ЖК Смарагдовий, вул.Ген. Шаповалова, 2, кв.7`,
    phone: `(097) 980 20 30`,
    status: PaymentStatuses.PAID.origin,
    statusProcessed: PaymentStatuses.PAID.ua
  },
  {
    id: 4,
    lastName: `Гаврилюк`,
    firstName: `Оксана`,
    middleName: `Олегівна`,
    address: `ЖК Смарагдовий, вул.Ген. Шаповалова, 2, кв.7`,
    phone: `(097) 980 20 30`,
    status: PaymentStatuses.PAID.origin,
    statusProcessed: PaymentStatuses.PAID.ua
  },
  {
    id: 5,
    lastName: `Діденко`,
    firstName: `Валерій`,
    middleName: `Валерійович`,
    address: `ЖК Смарагдовий, вул.Ген. Шаповалова, 2, кв.7`,
    phone: `(097) 980 20 30`,
    status: PaymentStatuses.PAID.origin,
    statusProcessed: PaymentStatuses.PAID.ua
  },
  {
    id: 6,
    lastName: `Довбуш`,
    firstName: `Денис`,
    middleName: `Денисович`,
    address: `ЖК Смарагдовий, вул.Ген. Шаповалова, 2, кв.7`,
    phone: `(097) 980 20 30`,
    status: PaymentStatuses.PAID.origin,
    statusProcessed: PaymentStatuses.PAID.ua
  },
]
