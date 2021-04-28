export const applicationsSort = {
  defaultLabel: `Сортувати`,
  list: [
    {
      label: `Від більшої сумми до меньшої`,
      sortData (a, b) {
        return b.amount - a.amount
      }
    },
    {
      label: `Від меньшої сумми до більшої`,
      sortData (a, b) {
        return a.amount - b.amount
      }
    },
    {
      label: `Спочатку старіші`,
      sortData (a, b) {
        return b.date - a.date
      }
    },
    {
      label: `Спочатку новіші`,
      sortData (a, b) {
        return a.date - b.date
      }
    },
  ]
}
