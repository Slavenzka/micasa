export const paymentsFilter = {
  date: {
    fieldName: 'date',
  },
  primary: {
    field: `status`,
    list: [
      {
        label: 'Всi',
        values: [],
        isDefault: true,
      },
      {
        label: 'Борг',
        values: ['DEBT'],
      },
      {
        label: 'Не сплачені',
        values: ['PENDING'],
      },
    ]
  }
}
