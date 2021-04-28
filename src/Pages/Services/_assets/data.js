import React from 'react'
import IconCleaning from 'assets/icons/IconCleaning'
import IconPlumbing from 'assets/icons/IconPlumbing'
import IconElectrician from 'assets/icons/IconElectrician'
import IconEngineer from 'assets/icons/IconEngineer'
import IconPass from 'assets/icons/IconPass'
import { SERVICES_PLUMBING } from 'Pages/Routes'

export const getServicesData = () => [
  {
    url: `/cleaning`,
    heading: `Клінінг`,
    descriptor: `Перелік послуг і їх вартість `,
    schedule: `10:00 - 20:00`,
    renderIcon: className => (
      <IconCleaning
        className={className}
        externalStyle={{
          right: `4.1rem`,
          bottom: `3.6rem`,
          width: `12.4rem`
        }}
      />
    )
  },
  {
    url: SERVICES_PLUMBING,
    heading: `Сантехнік`,
    descriptor: `Перелік послуг і їх вартість `,
    schedule: `09:00 - 20:00`,
    renderIcon: className => (
      <IconPlumbing
        className={className}
        externalStyle={{
          right: `2.6rem`,
          bottom: `3.7rem`,
          width: `11.3rem`
        }}
      />
    )
  },
  {
    url: `/electrician`,
    heading: `Електрик`,
    descriptor: `Перелік послуг і їх вартість `,
    schedule: `09:00 - 20:00`,
    renderIcon: className => (
      <IconElectrician
        className={className}
        externalStyle={{
          right: `1.3rem`,
          bottom: `2.3rem`,
          width: `10.6rem`
        }}
      />
    )
  },
  {
    url: `/engineer`,
    heading: `Домашній майстер`,
    descriptor: `Перелік послуг і їх вартість `,
    schedule: `09:00 - 20:00`,
    renderIcon: className => (
      <IconEngineer
        className={className}
        externalStyle={{
          right: `2.6rem`,
          bottom: `2.5rem`,
          width: `13.9rem`
        }}
      />
    )
  },
  {
    url: `/pass`,
    heading: `Перепустки`,
    descriptor: `Перелік послуг і їх вартість `,
    schedule: `00:00 - 24:00`,
    renderIcon: className => (
      <IconPass
        className={className}
        externalStyle={{
          right: `2.6rem`,
          bottom: `2.8rem`,
          width: `14.4rem`
        }}
      />
    )
  },
]
