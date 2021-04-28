import { setFilteredData } from 'store/actions/filtration'

export function sortData (sortFunction) {
  return (dispatch, getState) => {
    const filteredData = getState().filter.filteredData.slice()

    const sortedData = filteredData.sort(sortFunction)

    dispatch(setFilteredData(sortedData))
  }
}
